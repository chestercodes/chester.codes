---
layout: post
title: Running dotnet test in docker
excerpt: Running dotnet test in docker
issue: 30
tags: 
- dotnet
- docker
- vstest
- azure
- devops
slug: "running-dotnet-test-in-docker"
date: "2020/04/05"
category: Tech
---

Modern software development practices include a continuous integration pipeline that builds and verifies the correctness of software by running automated tests. Docker can be used to run `dotnet` commands to build, test and package applications in a reliable way.

`dotnet test` can write it's output to a text file to detail each test's result, this can be useful to keep track of test metrics over time and to find tests that fail often. This post details a solution to a problem encountered when running tests in docker that I haven't seen anywhere else.

### The setup

Like most [~~C#~~](https://twitter.com/DotNetIsCSharp) dotnet developers, I use multiple projects to deal with different application concerns. The application `MyProject` will have projects for the domain and services code (`MyProject.Domain` and `MyProject.Services`) where the project reference dependencies are:

```
           --> MyProject.Services ->
MyProject /                         \
          \----------------------------> MyProject.Domain
```

The services and domain projects have their own test libraries (`MyProject.Domain.Tests` and `MyProject.Services.Tests`) that I want to run during the build. If any tests fail I want the build to fail and the results file to find out the details.


The domain library has a type to wrap a string called `Emoji` and an `emojiFrom` function that takes an `input` `string` of `:)` or `:(`  and returns an `Emoji` that wraps `😊` or `😢` or throws an `ArgumentException`.  

[It](https://www.youtube.com/watch?v=US8QG9I1XW0) makes [sense](https://twitter.com/bomret/status/1244535855416512512) to [write](https://blog.scottlogic.com/2018/06/01/magical-domain-modelling-with-fsharp.html) the [domain](https://www.youtube.com/watch?v=PLFl95c-IiU) project in [F#](https://www.youtube.com/watch?v=UXeFR5RQnjs) and the implementation can be seen:

``` fsharp
module MyProject.Domain
    
open System

type Emoji = Emoji of string

let emojiFrom input =
    if input = ":)" then
        Emoji "😊"
    elif input = ":(" then
        Emoji "😢"
    else
        raise (ArgumentException("input needs to be either :) or :("))
```

The `MyProject.Domain.Tests` project contains NUnit tests that verify the `emojiFrom` function. It's important to use F# for test projects because it allows any characters to be used as test names with double back-ticks, so it's possible to accurately describe the behaviour 😊.

``` fsharp
module MyProject.Domain.Tests

open NUnit.Framework
open MyProject.Domain

[<Test>]
let ``emojiFrom creates 😊 emoji from :)`` () =
    let expected = Emoji "😊"
    
    let result = emojiFrom ":)"
    
    let emojisAreEqual = expected = result
    Assert.IsTrue emojisAreEqual

[<Test>]
let ``emojiFrom creates 😢 emoji from :(`` () =
    let expected = Emoji "😢" 
    
    let result = emojiFrom ":("
    
    let emojisAreEqual = expected = result
    Assert.IsTrue emojisAreEqual
```

The services code contains an `EmojiAppender` service to append `Emoji` types onto strings:

``` csharp
using static MyProject.Domain;

namespace MyProject.Services
{
    public class EmojiAppender
    {
        public string AppendNTimes(string str, Emoji emoji, int n)
        {
            var returnVal = str;
            for (int i = 1; i < n; i++)
            {
                returnVal += emoji.Item;
            }

            return returnVal;
        }
    }
}
```


### Docker-ing

A basic `Dockerfile` to build and run the tests can be achieved with:

``` docker
FROM mcr.microsoft.com/dotnet/core/sdk:3.1

ARG TESTDIR=

SHELL ["pwsh", "-command"]

RUN mkdir $env:TESTDIR

WORKDIR /src

COPY . .

RUN dotnet test MyProject.Domain.Tests/MyProject.Domain.Tests.fsproj \
        --logger ('trx;LogFileName={0}/MyProject.Domain.Tests.trx' -f $env:TESTDIR)

RUN dotnet test MyProject.Services.Tests/MyProject.Services.Tests.fsproj \
        --logger ('trx;LogFileName={0}/MyProject.Services.Tests.trx' -f $env:TESTDIR)
```