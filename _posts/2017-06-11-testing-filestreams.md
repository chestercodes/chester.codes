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

I've been adding unit test coverage to a project which uses a streaming approach to write potentially big files. 
With such projects it's tempting to rely on integration tests for the convenience of not having to mock out the file system. 
I prefer the speed and control of unit tests which use a mocking framework like [Moq](https://github.com/moq/moq) combined with the [System.IO.Abstractions](https://github.com/tathamoddie/System.IO.Abstractions) library to mock out the file system calls.

I ran into a problem when trying to test what had been written to a file stream and developed a trick that I've not seen documented anywhere else.

### Testing file streams ###

To open a file for reading or writing one can use the `File.Open` method to create a stream and the `StreamWriter` class to write to this stream.

``` csharp
// fs is an IFileSystem from System.IO.Abstractions
using(var fileStream = fs.File.Open("some-file-path.txt", 
    FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
using(var writer = new StreamWriter(fileStream))
{
    writer.Write("something");
}
```

To test this we can setup a mock to pass in a stream to capture the information written to the file. We can use the .Net `MemoryStream` class to store the information and the `StreamReader` to read the result.

``` csharp
var mockFileSystem = new Mock<IFileSystem>();
var fs = mockFileSystem.Object;
var memoryStream = new MemoryStream();
mockFileSystem.Setup(f => f.File.Open("some-file-path.txt", It.IsAny<FileMode>(), 
        It.IsAny<FileAccess>(), It.IsAny<FileShare>()))
    .Returns(memoryStream);

// Write to file
using(var fileStream = fs.File.Open("some-file-path.txt", FileMode.OpenOrCreate, 
        FileAccess.ReadWrite, FileShare.None))
using(var writer = new StreamWriter(fileStream))
{
    writer.Write("something");
}
var result = new StreamReader(stream).ReadToEnd();

Assert.That(result, Is.EqualTo("something"));
```

### The problem ###

Running this code, we get the error `System.ArgumentException: 'Stream was not readable.'`.
The problem is that the `memoryStream` is being disposed of at the end of the `using` statement which is before we can read from it.

To solve this problem I created a class called `CopyingMemoryStream` which derives from the `MemoryStream` class. This class then overrides the `Write` method and copies the bytes being written into a `StringBuilder` using a `byte[]` to `char[]` conversion function.

``` csharp
public class CopyingMemoryStream : MemoryStream
{
    private readonly Func<byte[], char[]> _convertToChars;
    private readonly StringBuilder _sb = new StringBuilder();
    public CopyingMemoryStream(Func<byte[], char[]> convertToChars = null)
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

With this class we can now assert against the `Written` property and the test passes:

``` csharp
var mockFileSystem = new Mock<IFileSystem>();
var fs = mockFileSystem.Object;
var stream = new CopyingMemoryStream();
mockFileSystem.Setup(f => f.File.Open("some-file-path.txt", 
        It.IsAny<FileMode>(), It.IsAny<FileAccess>(), It.IsAny<FileShare>()))
    .Returns(stream);

// Write to file
using (var fileStream = fs.File.Open("some-file-path.txt", 
        FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
using (var writer = new StreamWriter(fileStream))
{
    writer.Write("something");
}
var result = stream.Written;

Assert.That(result, Is.EqualTo("something"));
```



I think this is a nice solution to the problem described and it has helped me in my testing.