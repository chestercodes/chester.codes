---
layout: post
title: Project dependency analysis with F# and Neo4J
excerpt: A 
issue: 30
tags: 
- dotnet
- neo4j
- fsharp
slug: "project-dependency-analysis-with-fsharp-and-neofourj"
date: "2020/01/10"
category: Tech
---

It's common for software companies to have many deployed services that communicate with each other and connect to databases over the network. Each service can consist of one or more code projects that can reference other projects and code libraries. Code projects can be written in different programming languages running on a common runtime.

In the .Net landscape projects can be written in C#, VB.Net and F# and run on one of two runtimes, either .Net Framework (`netframework`) or dotnet core (`netcore`). Projects can reference two types of libraries, .Net Framework (`netXXX`) or .Net Standard (`netstandardXX`) which can be packaged via `Nuget` or as a part of the runtime.

I participated in a company hackathon just before christmas with the intention of exploring the relationships between the ~50 deployed services, code projects and databases in the platform. The projects are written in either C# or VB.Net and run on either `netframework` or `netcore`. The projects reference external nuget libraries that can be built for either `netstandardXX` or `netXXX`. 

Dependent relationships can be modelled nicely by a graph data structure, with the projects, databases and libraries being the nodes with defined relationships joining them.

![ProjectDependencies](ProjectDependencies.jpg)


### Project and library info

The project, library nodes and `REFERENCES` relationships can be derived from the code project files (.csproj, .vbproj, fsproj). These are xml files containing information on the project references and the libraries used in the project. 

Project files take slightly different forms depending on whether they are `netframework` or `netcore` but they contain three types of xml elementsThe references between projects are described by the  `ProjectReference` elements. The library references are described by `Reference` for `netframework` and `PackageReference` for `netcore`.
  
An example of the relevant nodes of a `netframework` project file `SomeProject.csproj` can be seen below:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
    <!-- Nuget library reference -->
    <Reference Include="Newtonsoft.Json, Version=12.0.0.0, Culture=neutral, PublicKeyToken=30ad4fe6b2a6aeed, processorArchitecture=MSIL">
      <HintPath>..\packages\Newtonsoft.Json.12.0.2\lib\net45\Newtonsoft.Json.dll</HintPath>
    </Reference>
    
    <!-- Runtime library reference -->
    <Reference Include="System.Net.Http" />
  </ItemGroup>
  
  <ItemGroup>
    <!-- Project reference to other code project -->
    <ProjectReference Include="..\Other.Project\Other.Project.csproj">
      <Project>{560411b0-4899-48d8-9dd1-662874c17f73}</Project>
      <Name>Other.Project</Name>
    </ProjectReference>
  </ItemGroup>
</Project>
```

From this file we can derive the following nodes and relationships:

![ProjectsAndLibraries](ProjectsAndLibraries.jpg)


### Project and database relationships

The project, database and `CAN_TALK_TO` relationships can be derived from the configuration files in the project file directories. 
If there are certain files in the directory, such as Web.config, appSettings.json, then the project can be defined as a deployed project. 

Each deployed project's configuration can be parsed for information on how to connect to other defined projects and databases. The lines of each config file will be matched against regular expressions to determine whether it can connect to the database or project. These regex to database and project mappings can be defined in a json file:

``` js
{
  "databases": {
    ";Database=MainDatabase;": "MainDatabase"
  },
  "projects": {
    "auth\\.platform\\.com:123": "C:\\allRepos\\auth-service\\src\\AuthService\\AuthService.csproj"
  }
}
```

The appSettings.json file below matches both of the `MainDatabase` and `AuthService` regexs above:

``` js
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=SomeServer;Database=MainDatabase;Trusted_Connection=True;MultipleActiveResultSets=true"
    },
  "AuthServiceUrl": "auth.platform.com:123"
}
```

The config file produces the following relationships:

![ProjectsAndDatabases](ProjectsAndDatabases.jpg)


### Modeling project data

The ProjectAnalyser console application is going to parse the project and config files into nodes and relationships. 

To perform this task it is useful to define the domain. The project nodes can be modelled with:

``` fsharp
type ProjectType = NotKnown | NetFramework | NetCore
type CodeProject = CodeProject of name:string * ProjectType

type DeployedProject = DeployedProject of string

type ProjectNode = 
  | Code     of CodeProject
  | Deployed of DeployedProject
```

The type `CodeProject` wraps a tuple of a `string` labelled `name` and a `ProjectType` which can be either `NetFramework`, `NetCore` or `NotKnown` at that point in the application. The `DeployedProject` type wraps a name and the `ProjectNode` can be one of either project types.

The Libraries can be modelled with:

``` fsharp
type NugetPackageType = Unknown | Framework | Standard
type NugetLib =         NugetLib of name:string * version:string * NugetPackageType

type RuntimeLib = RuntimeLib of string

type LibraryNode =
  | Nuget of NugetLib
  | Runtime of RuntimeLib
```

A `NugetLib` contains `name` and `version` strings and a `NugetPackageType` which can be `Framework` (`netXXX`), `Standard` (`netstandardXX`) or `Unknown`. A `LibraryNode` can either be a `NugetLib` or a `RuntimeLib`, which wraps a string of the library name.

The last node type is a `DatabaseNode` which wraps a string of the database name:

``` fsharp
type DatabaseNode = DatabaseNode of string
```

The nodes can be either a `Project`, `Library` or `Database` and can be described by the union:

``` fsharp
type Node = 
  | Project  of ProjectNode
  | Library  of LibraryNode
  | Database of DatabaseNode
```

There are two main types of relationships between the nodes, `REFERENCES` and `CAN_TALK_TO`. The possible start and end nodes types for each relationship are:

  Relationship |   Start node       |  End node
  --------     |   ---------        |   --------
  REFERENCES   |  CodeProject       |  LibraryNode
  REFERENCES   |  CodeProject       |  CodeProject
  CAN_TALK_TO  |  DeployedProject   |  DatabaseNode
  CAN_TALK_TO  |  DeployedProject   |  DeployedProject

These can be modelled into the `Relationship` union:

``` fsharp
type Relationship =
  | ProjectReferencesLibrary         of CodeProject     * LibraryNode
  | ProjectReferencesProject         of CodeProject     * CodeProject
  | DeployedProjectCanTalkToOther    of DeployedProject * DeployedProject
  | DeployedProjectCanTalkToDatabase of DeployedProject * DatabaseNode
```

Each case contains a tuple of the correct types for the potential start and end nodes.

