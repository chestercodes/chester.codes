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

When writing versioning into commit messages is it's left to the developer to be aware of the changes in behaviour and API surface. It's impossible to detect the magnitude of changes in behaviour of code in an automated way, but there are ways to check the changes in API surfaces. 

An interesting article describes a [method of detecting api version magnitude changes](http://blog.stermon.com/articles/2016/12/01/semantic-versioning-dotnet-libs-and-nuget-pkgs) and this has been turned into a [nuget library](https://github.com/fsprojects/SyntacticVersioning) and dotnet tool.

# Syntactic Versioning

Syntactic Versioning is a nuget library that can determine the public API differences between `.dll` files.
It is aware of the API surface change aspects of semantic versioning and can determine the magnitude of the difference between two libraries, as well as the new version number if given the old. 

If a library `MyProject` has the following class `MyClass` with method `MyMethod` in it:

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

Syntactic versioning can be used on the before/after built `.dll` files and will detect this to be a `Minor` magnitude change. Whereas, if `MyMethod` changes the type of arg to be a `bool`:

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

The `--surface-of` and `--diff` commands can also output their results to a file using the `--output` argument:

```
synver --surface-of path/to/some.dll --output current-api.lson

synver --diff path/to/first.dll path/to/second.dll --output api-diff.txt
```

This can make documenting changes in apis very simple.


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

### API as LSON

The commands can take paths to .dll files as arguments, but it can be tricky to get a previous version of the .dll file to be used with the tool. Luckily `synver` can also use .lson text files to determine differences. 

This is useful because it means that we can store the current API in a `MyProject.lson` file in the repository. This file can be compared against to find syntactic version differences and updated when the next version of the library is published.


# Automating library workflow.

The versioning changes of libraries need to take into account the behavioural and syntactic (public API) changes. 
Behavioural changes can be described by commit messages using `conventional commits` and syntactic changes in `dotnet` libraries can be derived with the `synver` tool. Combining these methods we can automate nuget library versioning. 


We need to store the last published library version and public API to be able to determine the next version number.
The version can be stored as a `git tag` and the public API can be stored in a text file in the repository using the `--surface-of` command above. These will be updated during the build process.

