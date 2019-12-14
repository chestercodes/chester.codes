---
layout: post
title: Automating .net library versioning - Automating versioning
excerpt: A 
issue: 27
tags: 
- dotnet
- versioning
slug: "automating-dotnet-library-versioning-process"
date: "2019/12/10"
category: Tech
---



Library version changes can be described, along side the code, using a method called [convention commits](https://www.conventionalcommits.org/en). The commit describes the magnitude of the changes in the message by using certain message prefixes. 
Major version changes are described with commit messages that start with `BREAKING CHANGE`, Minor changes start with `feat` and Patch changes are described with other names such as `fix` or `chore`. Conventional commits provides an easy way to add automation to the versioning process. It is possible to write code [which automates the versioning and documentation](https://github.com/conventional-changelog/standard-version). 

When writing versioning into commit messages is it's left to the developer to be aware of the changes in behaviour and API surface. It's impossible to detect the magnitude of changes in behaviour of code in an automated way, but there are ways to check the changes in API surfaces. 


# Automating library workflow.

The versioning changes of libraries need to take into account the behavioural and syntactic (public API) changes. 
Behavioural changes can be described by commit messages using `conventional commits` and syntactic changes in `dotnet` libraries can be derived with the `synver` tool. Combining these methods we can automate nuget library versioning. 


We need to store the last published library version and public API to be able to determine the next version number.
The version can be stored as a `git tag` and the public API can be stored in a text file in the repository using the `--surface-of` command above. These will be updated during the last part of the build process.

From a developers perspective the workflow should be:

- Develop library changes.
- Push to `master` (or other publishing branch)
- CI process builds and publishes package with new version number
- Developer consumes package


For this to work the CI process needs to:

- If no commits since last tag, do nothing (to stop infinite loops from git push at end of process)
- Code is built, tests are run, all OK
- Previous version is retrieved from tags
- Run a script to determine the new version from the `MyProject.lson` file and commits since last tag
- Package is built with new version number
- `MyProject.lson` file is updated from `MyProject.dll`
- Changes to `MyProject.lson` are committed with version
- Commit tagged with version and pushed to `master`
- Packge is published to `nuget` feed

The version determining script in the CI process needs to:

- Determine behaviour changes magnitude according to `conventional commits`
- Determine API changes magnitude derived from `MyProject.lson` in repo and built `MyProject.dll`
- Biggest magnitude from the two above becomes the version type change
- New version number is calculated from magnitude plus current version number


Conventional commits and the `synver` tool give us the tools we need to create the workflow described above. 

The [next post describes the steps and code needed to achieve this](/automating-dotnet-library-versioning2) in the new [github actions](https://github.com/features/actions).