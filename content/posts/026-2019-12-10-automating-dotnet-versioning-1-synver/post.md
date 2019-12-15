---
layout: post
title: Automating .net library versioning - Syntactic Versioning.
excerpt: A 
issue: 26
tags: 
- versioning
- syntactic-versioning
slug: "automating-dotnet-library-versioning-1-synver"
date: "2019/12/10"
category: Tech
---

> This is an entry for the [F# Advent Calendar 2019](https://sergeytihon.com/tag/fsadvent). It is the first in a three part series exploring a way of automating .net library versioning. This post doesn't contain any F#, but describes a library written in F# which was the product of a blog post from the FsAdvent 2016.

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch:

- **Major** - a change of expected behaviour or a non-backwards compatible change in the API.
- **Minor** - a backwards compatible change that adds functionality to a library. 
- **Patch** - a backwards compatible change that fixes a bug or other small change.

An article from the [FsAdvent 2016](https://sergeytihon.com/2016/10/23/f-advent-calendar-in-english-2016/) describes a [method of detecting api version magnitude changes](http://blog.stermon.com/articles/2016/12/01/semantic-versioning-dotnet-libs-and-nuget-pkgs) and this has been turned into a [nuget library](https://github.com/fsprojects/SyntacticVersioning) and dotnet tool.

## Syntactic Versioning

Syntactic Versioning is a nuget library that can determine the public API differences between `.dll` files.
It is aware of the API surface change aspects of semantic versioning and can determine the magnitude of the difference between two libraries, as well as the new version number if given the old. 

If a library `MyProject` has the following class `MyClass` with method `MyMethod` in it:

``` csharp
public class MyClass 
{
    public void MyMethod(string stringArg)
    {
    }
}
```

If `MyClass` then has another method `MyMethod2` added to it:

``` csharp
public class MyClass 
{
    public void MyMethod(string stringArg)
    {
    }
    
    public void MyMethod2(bool boolArg)
    {
    }
}
```

Syntactic versioning can be used on the before/after built `.dll` files and will detect this to be a `Minor` magnitude change. Whereas, if `MyMethod` changes the type of arg to be a `bool`:

``` csharp
public class MyClass 
{
    public void MyMethod(bool boolArg)
    {
    }
}
```

Syntactic versioning will detect this to be a `Major` magnitude change.

## synver

Syntactic Versioning comes packaged as a `dotnet tool` called `synver`, and can easily be installed with the command:

``` bash
dotnet tool install -g synver
```

The tool has the following usage:

``` bash
USAGE: synver.exe [--help] [--surface-of <path>] [--decompile] [--output <path>] [--diff <source> <target>]
                  [--bump <version> <source> <target>] [--magnitude <source> <target>]

OPTIONS:

    --surface-of <path>   Get the public api surface of the .net binary as lson
    --decompile           Decompile instead of using reflection
    --output <path>       Send output to file
    --diff <source> <target>
                          Get the difference between two .net binaries
    --bump <version> <source> <target>
                          Get the next version based on the difference between two .net binaries
    --magnitude <source> <target>
                          Get the magnitude of the difference between two .net binaries
    --help                display this list of options.
```

This tool has four main commands, `surface-of`, `diff`, `bump` and `magnitude`.

The `--surface-of` command takes a path of a dll and produces the API in an intruiging format called [LSON (Lisp inspired serialisation)](https://github.com/fsprojects/LSON):

```
synver --surface-of path/to/some.dll
```

`MyClass` appears as so:

``` clojure
(namespaces ((
    namespace "MyProject" 
    types ((
        EnumValue typ (typ "MyProject.MyClass") netType "Class" members ((
            Method (typ (typ "MyProject.MyClass") instance "Instance" name "MyMethod" 
                result (typ "System.Void") 
                params ((typ (typ "System.String") name "stringArg"))
            )
        ) (
                Constructor (typ (typ "MyProject.MyClass") params ()))
        ) sumtype "False" baseTyp (typ "System.Object")))))
)
```

In this we can roughly see the the class `MyClass` in the project `MyProject` which has the instance member `MyMethod` that takes in a `string` and returns `void` and a default constructor.

The `--diff` command takes two dll paths and produces the difference in the API in human readable format:

```
synver --diff path/to/first.dll path/to/second.dll
```

When applied to the breaking change described above this displays:

``` 

* MyProject.MyClass

    + (Instance of MyProject.MyClass).MyMethod :
            boolArg:System.Boolean
            -> System.Void

    - (Instance of MyProject.MyClass).MyMethod :
            stringArg:System.String
            -> System.Void
```

This shows, in a `git diff` style syntax, the difference in the .dll files before and after the breaking change.

The `--magnitude` command takes two dll paths and returns either `Major` or `Minor` depending on the change.

```
synver --magnitude path/to/first.dll path/to/second.dll

Major 
```

The `--bump` command takes the current version number, two dll paths and returns the new version number, according to the syntax change.

```
synver --bump 1.2.3 path/to/first.dll path/to/second.dll

2.0.0
```

## Library API as text

The commands can take paths to `.dll` files as arguments, but it can be tricky to get a previous version of the `.dll` file to be used with the tool. Luckily Syntactic Versioning can also use text files to determine differences. 

The `--surface-of` and `--diff` commands can also output their results to a file using the `--output` argument. 

To write the lson representation of the built `MyProject.dll` to the file `MyProject.lson`, `synver` can be called with:

```
synver --surface-of path/to/MyProject.dll --output MyProject.lson
```

With this file in stored in source control, the `bump` command provides an easy way to find the new version according to the library API change and Semantic versioning rules.

```
synver --bump 1.2.3 MyProject.lson ./bin/Debug/MyProject.dll

2.0.0
```

The `diff` command provides a way to document changes in the library API once the new version is known:

```
synver --diff MyProject.lson ./bin/Debug/MyProject.dll --output 1.2.3-2.0.0.txt
```

The [next post in this series](/automating-dotnet-library-versioning-2-process) describes a way to use the `synver` tool to fully automate the versioning process.
