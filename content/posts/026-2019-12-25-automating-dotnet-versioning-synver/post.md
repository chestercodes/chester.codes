---
layout: post
title: Automating .net library versioning - Syntactic Versioning.
excerpt: A 
issue: 26
tags: 
- versioning
- syntactic-versioning
slug: "automating-dotnet-library-versioning-synver"
date: "2019/12/25"
category: Tech
---

> This is an entry for the [F# Advent Calendar 2019](https://sergeytihon.com/tag/fsadvent). It is the first in a three part series exploring a way of automating .net library versioning. This post describes a library written in F# which was the product of a blog post from the FsAdvent 2016.

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch:

- **Major** - a change of expected behaviour or a non-backwards compatible change in the API.
- **Minor** - a backwards compatible change that adds functionality to a library. 
- **Patch** - a backwards compatible change that fixes a bug or other small change.

An article from the [FsAdvent 2016](https://sergeytihon.com/2016/10/23/f-advent-calendar-in-english-2016/) describes a [method of detecting api version magnitude changes](http://blog.stermon.com/articles/2016/12/01/semantic-versioning-dotnet-libs-and-nuget-pkgs) and this has been turned into a nuget package called [Syntactic Versioning](https://github.com/fsprojects/SyntacticVersioning) and a dotnet tool called `synver`.

## Syntactic Versioning

Syntactic Versioning is a library that can determine the public API differences between `.dll` files and is designed to be used on different builds of a .NET library. 
It is aware of the API surface change aspects of semantic versioning and can determine the version magnitude of the difference between built libraries and derive the new version number if given the old. 

### MyProject

If a library `MyProject` has the following class `MyClass` with method `MyMethod` in it:

``` csharp
namespace MyProject
{
    public class MyClass 
    {
        public void MyMethod(string stringArg)
        {
        }
    }
}
```

Syntactic Versioning uses reflection or a decompiler to turn the public classes and methods of `MyProject` into a text representation and creates an F# `Set<Tuple<string, string>>` of the API. The above code is represented by a Set containing the following tuples:

``` fsharp
("MyProject",         "MyProject (Namespace)")
("MyProject.MyClass", "(Instance of MyProject.MyClass).MyMethod : stringArg:System.String -> System.Void")
("MyProject.MyClass", "MyProject.MyClass (.NET type: Class and base: System.Object)")
("MyProject.MyClass", "new MyProject.MyClass : System.Void -> MyProject.MyClass")
```

We can see the text representations of the `namespace`, `MyMethod`, `class` and default constructor respectively. 

Syntactic Versioning uses source and target representations of the API and then can derive the magnitude change using the following rules:

- **Major** - if any tuples in the source set are not present in the target set, this is breaking the APIs backwards compatability and therefore a Major change
- **Minor** - if any new tuples are present in the target set then this is extending functionality and is a Minor change
- **Patch** - if the sets are the same then this is a Patch change

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

Syntactic versioning can be used on the source/target built `.dll` files and will detect a new tuple, not present in the source set:

``` fsharp
("MyProject.MyClass", "(Instance of MyProject.MyClass).MyMethod2 : boolArg:System.Boolean -> System.Void")
```

This is therefore a `Minor` magnitude change. Whereas, if `MyMethod` changes the type of arg to be a `bool`:

``` csharp
public class MyClass 
{
    public void MyMethod(bool boolArg)
    {
    }
}
```

The tuple:

``` fsharp
("MyProject.MyClass", "(Instance of MyProject.MyClass).MyMethod : stringArg:System.String -> System.Void")
```
is replaced by:
``` fsharp
("MyProject.MyClass", "(Instance of MyProject.MyClass).MyMethod : boolArg:System.Boolean -> System.Void")
```

Syntactic versioning will detect the lack of the first tuple in the target set and return a `Major` magnitude change.

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

This tool has four main commands, `--surface-of`, `--diff`, `--bump` and `--magnitude`.

### --surface-of

The `--surface-of` command takes a path and serialises the API into a format called [LSON (Lisp inspired serialisation)](https://github.com/fsprojects/LSON):

```
synver --surface-of path/to/some.dll
```

[MyProject](#myproject) is represented in (manually formatted) LSON as:

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

Here we can see the class `MyClass` in the project `MyProject` which has the instance member `MyMethod` that takes in a `string` and returns `void` and a default constructor.

### --diff

The `--diff` command takes source and target paths and returns the difference in the API in a readable format:

```
synver --diff path/to/source.dll path/to/target.dll
```

When applied to the breaking change in `MyClass` described above this displays:

``` java

* MyProject.MyClass

    + (Instance of MyProject.MyClass).MyMethod :
            boolArg:System.Boolean
            -> System.Void

    - (Instance of MyProject.MyClass).MyMethod :
            stringArg:System.String
            -> System.Void
```

This shows the breaking change in `MyClass` of the `MyMethod(string stringArg)` being replaced by the `MyMethod(bool boolArg)`.

### --magnitude and --bump

The `--magnitude` command takes source and target paths and returns the magnitude of the version change.

```
synver --magnitude path/to/source.dll path/to/target.dll

Major 
```

The `--bump` command takes the current version number, source and target paths and returns the new version number, according to the syntax change.

```
synver --bump 1.2.3 path/to/source.dll path/to/target.dll

2.0.0
```

## Library API as text

The commands can take paths to `.dll` files as arguments, but it can be tricky to get a previous version of a library `.dll`. Luckily Syntactic Versioning can also use text files produced by the `--surface-of` command to determine differences. 

The `--surface-of` and `--diff` commands can output their results to a file using the `--output` argument. 
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

The [next post in this series](/automating-dotnet-library-versioning-the-process) describes a way to use the `synver` tool to fully automate the versioning process.
