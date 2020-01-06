---
layout: post
title: Project dependency analysis with F# and neo4j
excerpt: A 
issue: 29
tags: 
- dotnet
- neo4j
slug: "project-dependency-analysis-with-fsharp-and-neo4j"
date: "2020/01/10"
category: Tech
---

It's common for software companies to have many deployed services that communicate with each other and connect to databases over the network. Each service can consist of one or more code projects that can reference other projects and code libraries. Code projects can be written in different programming languages running on a common runtime.

In the .Net landscape projects can be written in C#, VB.Net and F# and run on one of two runtimes, either `.Net framework` or `dotnet core`. Projects can reference two types of libraries, `.Net framework` or `.Net Standard` which can be packaged via `Nuget` or as a part of the runtime.

I participated in a company hackathon just before christmas with the intention of exploring the relationships between the ~50 deployed services and databases in the platform. The projects are written in either C# or VB.Net and run on either .Net Framework or `dotnet` core. The projects reference external nuget libraries that can be built for either `netstandardXX` or `net4XX`. 

Dependent relationships can be modelled nicely by a graph data structure, with the projects, databases and libraries being the nodes with defined relationships joining them.
Neo4j is a popular graph database that can be used to create and query a graph structure of the projects.

