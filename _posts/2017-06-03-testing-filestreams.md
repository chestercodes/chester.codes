---
layout: post
title: Testing file stream writing
excerpt: Using C#, streams and tricks to test file writing without hitting the disk.
issue: 18
tags: 
- c-sharp
- testing
- file-system
- streams
---

I've been trying to add unit test coverage to a project which makes heavy use of the file system, and uses a streaming approach to write potentially big files.

With such projects, it's tempting to rely on integration tests for the convenience of not having to mock out the file system. 

I prefer the speed and control of using a unit test with a mocking framework like Moq combined with the Nuget library System.IO.Abstractions to mock out the file system calls.

I found a problem when trying to test what had been written to file streams which i've not seen documented anywhere else and I thought i'd explain.

### Testing file streams ###

To open a file for reading or writing one can use the `File.Open` method and the `StreamWriter` to write to this stream.

``` csharp
    // fs is an IFileSystem from System.IO.Abstractions
    using(var fileStream = fs.File.Open("some-file-path.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
    using(var writer = new StreamWriter(fileStream))
    {
        writer.Write("something");
    }

```

To test this we can setup a `Moq` mock to pass in a stream to be written to. We can use the .Net `MemoryStream` class to store the values being written to the file and read the result with the `StreamReader` class:

``` csharp

    var mockFileSystem = new Mock<IFileSystem>();
    var fs = mockFileSystem.Object;
    var memoryStream = new MemoryStream();
    mockFileSystem.Setup(f => f.File.Open("some-file-path.txt", It.IsAny<FileMode>(), It.IsAny<FileAccess>(), It.IsAny<FileShare>()))
        .Returns(memoryStream);
    
    // Write to file
    using(var fileStream = fs.File.Open("some-file-path.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
    using(var writer = new StreamWriter(fileStream))
    {
        writer.Write("something");
    }
    var result = new StreamReader(stream).ReadToEnd();
    
    Assert.That(result, Is.EqualTo("something"));

```

### The problem ###

Running the above code we get the error `System.ArgumentException: 'Stream was not readable.'`.
The problem is that we want to use use the `using` statement for simplicity and guarenteed file closing, but using the statement disposes the `memoryStream` and we can't read from it.

To solve this problem I used the following trick. I created a class called `CopyingMemoryStream` which derives from the `MemoryStream` class. This class then overrides the `Write` method and copies the `byte`s being written into a StringBuilder and this can produce a string to assert against.

``` csharp

    public class CopyingMemoryStream : MemoryStream
    {
        private readonly Func<byte[], char[]> _convertToChars;
        private readonly StringBuilder _sb = new StringBuilder();
        public CopyingMemoryStream(Func<byte[], char[]> convertToChars)
        {
            _convertToChars = convertToChars ?? (b => Encoding.UTF8.GetChars(b));
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            _sb.Append(_convertToChars(buffer.Take(count).ToArray()));
            base.Write(buffer, offset, count);
        }

        public string Written => _sb.ToString();
    }

```

Using this new class instead of the MemoryStream, the test becomes:

``` csharp

    var mockFileSystem = new Mock<IFileSystem>();
    var fs = mockFileSystem.Object;
    var stream = new CopyingMemoryStream(null);
    mockFileSystem.Setup(f => f.File.Open("some-file-path.txt", It.IsAny<FileMode>(), It.IsAny<FileAccess>(), It.IsAny<FileShare>()))
        .Returns(stream);

    // Write to file
    using (var fileStream = fs.File.Open("some-file-path.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
    using (var writer = new StreamWriter(fileStream))
    {
        writer.Write("something");
    }
    var result = stream.Written;

    Assert.That(result, Is.EqualTo("something"));
```

This doesn't have the problem of the stream closing and can safely be used in unit tests.