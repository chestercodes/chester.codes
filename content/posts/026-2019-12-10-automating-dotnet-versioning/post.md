---
layout: post
title: Automating .net library versioning.
excerpt: A 
issue: 26
tags: 
- dotnet
- versioning
- syntactic-versioning
slug: "automating-dotnet-library-versioning"
date: "2019/12/10"
category: Tech
---

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch. 
A major change is a change of expected behaviour or a non-backwards compatible change in the API.
A minor change is a backwards compatible change that adds functionality to a library. 
A patch change is a backwards compatible change that fixes a bug or other small change.

Library version changes can be described, along side the code, using a method called [convention commits](https://www.conventionalcommits.org/en). The commit describes the magnitude of the changes in the message by using certain message prefixes. 
Major version changes are described with commit messages that start with `BREAKING CHANGE`, Minor changes start with `feat` and Patch changes are described with other names such as `fix` or `chore`. Conventional commits provides an easy way to add automation to the versioning process. It is possible to write code [which automates the versioning and documentation](https://github.com/conventional-changelog/standard-version). 

Writing versioning into commit messages is ultimately a manual process, it's left to the developer to be aware of the changes in behaviour and API surface. It's impossible to detect the magnitude of changes in behaviour of code in an automated way, but there are ways to check the changes in API surfaces. 
An interesting article describes a [method of detecting api version magnitude changes](http://blog.stermon.com/articles/2016/12/01/semantic-versioning-dotnet-libs-and-nuget-pkgs) and this has been turned into a [nuget library](https://github.com/fsprojects/SyntacticVersioning) and dotnet tool.

## Syntactic Versioning

Syntactic Versioning is a nuget library that can determine and inspect the public API differences between `nuget` libraries.
It is aware of the API surface change aspects of semantic versioning and can determine the magnitude of the difference between two libraries, as well as the new version number if given the old. 

If a library has the following class `MyClass` with method `MyMethod` in it:

``` cs
public class MyClass 
{
    public void MyMethod(string stringArg)
    {
    }
}
```

If `MyClass` then has another method `MyMethod2` added to it:

``` cs
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

Syntactic versioning will detect this to be a `Minor` magnitude change. Whereas, if `MyMethod` changes the type of arg to be a `bool`:

``` cs
public class MyClass 
{
    public void MyMethod(bool boolArg)
    {
    }
}
```

Syntactic versioning will detect this to be a `Major` magnitude change.

### synver

Syntactic Versioning comes packaged as a `dotnet tool` called `synver` with the following usage:

```
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

```
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

In this we can roughly see the the class `MyClass` in the project `MyProject` which has the member `MyMethod` and a default constructor.

The `--diff` command takes two dll paths and produces the difference in the API in human readable format:

```
synver --diff path/to/first.dll path/to/second.dll
```

