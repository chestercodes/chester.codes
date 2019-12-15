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

To push the produced package the pipeline needs to have the `nuget` executable present. This can be added with the `warrenbuckley/Setup-Nuget@v1` step from the marketplace. 

``` yaml
    - name: Setup Nuget.exe
      uses: warrenbuckley/Setup-Nuget@v1
```

The step to run the `BuildAndPublish.ps1` script needs to have environment variables set to configure the script. These are easily set with the `env` nodes:

``` yaml
    - name: Run build and publish script
      env:
       GIT_TOKEN: ${{ secrets.GIT_TOKEN }}
       TAG_VERSION_REGEX: v(?<Major>\d+).(?<Minor>\d+).(?<Patch>\d+)
       BUILT_NAME_REL: src/bin/Release/netstandard2.0/MyProject.dll
       CURRENT_API_NAME: versioning/MyProject.lson
       GH_USERNAME: chestercodes
       GH_ORG: chestercodes
       GH_REPO: AutoSemVerLib
       GH_EMAIL: chestercodesbot@example.com
       GH_NAME: chestercodes-bot                            
      run: powershell -file BuildAndPublish.ps1 -Verbose
```

The step executes the `run` node, which simply calls the powershell script. This will fail the step if there is a non-zero exit code or output is detected at STDERR.

The `${{ secrets.GIT_TOKEN }}` is a [GitHub secret](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) which is a [Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) created with permissions to be able to push to the repository and package registry. The rest of the environment variables are required to configure the behaviour of the powershell scripts to work with the github repository.

## Commits in repo

[Patch level change](https://github.com/chestercodes/AutoSemVerLib/compare/v1.0.0...v1.0.1)

[Minor level change](https://github.com/chestercodes/AutoSemVerLib/compare/v1.0.1...v1.1.0)

[Major level change](https://github.com/chestercodes/AutoSemVerLib/compare/v1.1.0...v2.0.0)

