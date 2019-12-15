---
layout: post
title: Automating .net library versioning - GitHub
excerpt: A 
issue: 28
tags: 
- dotnet
- versioning
slug: "automating-dotnet-library-versioning-3-github"
date: "2019/12/12"
category: Tech
---

> This is the final post in a series on a method of automating .net library versioning. The [second post describes the proposed automated process](/automating-dotnet-library-versioning-2-process). This post is best understood with familiarity of the previous ones.


GitHub have recently introduced new platforms for building and hosting software packages. GitHub Actions can be used to build code when pushed to the repository (or with other triggers) and GitHub Package Repository can be used as an artifact store for many types of software packages. 

In the process any commits pushed to the `AutoSemVerLib` repository's `master` branch will trigger a GitHub Action to run the `BuildAndPublish.ps1`. If successful this will build `MyProject` and publish it to the GitHub Package Registry.

### Creating the action

A GitHub Action is created by the inclusion of a `.yml` file in a `workflow` directory in a `.github` directory in the base of the GitHub hosted repository. This file describes the commands and execution environment required. 

Actions contain steps in a pipeline, they can be run on different operating systems and code execution runtimes. Steps can be shared in the [GitHub marketplace](https://github.com/marketplace?type=actions). Each pipeline is executed in a sandboxed container of the specified os type with [lots of pre-installed software.](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners) The process in `AutoSemVerLib` requires two executables be present, `dotnet` and `powershell`, these are present in the windows hosted runners.

A windows based pipeline `BuildAndPublish` that is triggered by the pushing of commits to the `master` branch and has a single step to checkout the code, can be defined with:

``` yaml
name: BuildAndPublish
on:
  push:
    branches:
      - master
jobs:
  build:
    runs-on: [windows-latest]
    steps:
    - uses: actions/checkout@v1
```



https://github.com/chestercodes/AutoSemVerLib/compare/v1.0.0...v1.0.1

https://github.com/chestercodes/AutoSemVerLib/compare/v1.0.1...v1.1.0

https://github.com/chestercodes/AutoSemVerLib/compare/v1.1.0...v2.0.0

