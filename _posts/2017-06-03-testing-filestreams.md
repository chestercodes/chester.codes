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

To open a file for reading or writing one can use the File.Open method and the `StreamWriter` to write to this stream.

``` csharp
    // fs is an IFileSystem from System.IO.Abstractions
    using(var fileStream = fs.File.Open("some-file-path.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None))
    using(var writer = new StreamWriter(fileStream))
    {
        writer.Write("something");
    }

```