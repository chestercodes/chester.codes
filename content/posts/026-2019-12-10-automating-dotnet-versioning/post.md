---
layout: post
title: Automating .net library versioning.
excerpt: A 
issue: 26
tags: 
- dotnet
- versioning
- syntactic-versioning
slug: "automating-dotnet-versioning"
date: "2019/12/10"
category: Tech
---

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch. 
A major change is a change of expected behaviour or a non-backwards compatible change in the API.
A minor change is a backwards compatible change that adds functionality to a library. 
A patch change is a backwards compatible change that fixes a bug or other small change.

Library changes can be described in git commit messages using a method called [convention commits](https://www.conventionalcommits.org/en). Major version changes are described with commit messages that start with `BREAKING CHANGE`, Minor changes start with `feat` and Patch changes are described with other names such as `fix` or `chore`. Conventional commits provides an easy way to add automation to the versioning process. It is possible to write code [which automates the versioning and documentation](https://github.com/conventional-changelog/standard-version). 

Writing versioning into commit messages is ultimately a manual process, it's left to the developer to be aware of the changes in behaviour and API surface. It's impossible to detect the versioning level of changes in behaviour of code in an automated way, but there are ways to check the changes in API surfaces. 
An interesting article describes a [method of detecting api version magnitude changes](http://blog.stermon.com/articles/2016/12/01/semantic-versioning-dotnet-libs-and-nuget-pkgs) and this has been turned into a [nuget library](https://github.com/fsprojects/SyntacticVersioning) and dotnet tool.

Using a combination of conventional commits and the `synver` dotnet tool it's possible to fully automate nuget library versioning. 

## Syntactic Versioning