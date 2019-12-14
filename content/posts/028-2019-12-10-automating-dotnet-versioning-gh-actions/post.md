---
layout: post
title: Automating .net library versioning - Implmentation
excerpt: A 
issue: 28
tags: 
- dotnet
- versioning
slug: "automating-dotnet-library-versioning-gh-actions"
date: "2019/12/10"
category: Tech
---

> This is the second post in a series on a method of automating .net library versioning. The [first post described the synver dotnet tool](/automating-dotnet-library-versioning-synver) which can be used to find the magnitude of library API changes according to the semantic versioning rules. This post is best understood with familiarity of the previous.

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch. To decide the type of a change in the library, from one version to the next, one needs to take into account behaviour and API changes.

## Conventional commits

Library changes can be described, along side the code, using a method called [convention commits](https://www.conventionalcommits.org/en). The commit describes the magnitude of the changes in the message by using certain message prefixes. 

- `BREAKING CHANGE` is used in the messages of commits that contain `Major` level changes. 
- `feat` is used to denote `Minor` level changes.  
- `fix` or `chore` are used to denote `Patch` level changes.  

Conventional commits provides an easy way to add automation to the versioning process. It is possible to write utilities that look at the commit messages from the last version to the current commit and [derive the next version number and generate documentation](https://github.com/conventional-changelog/standard-version). 

Unlike public API changes, It's impossible to detect and verify the magnitude of changes in behaviour of code in an automated way, the responsibility of documenting behaviour changes is left to the developer.


## Automated workflow.

Behavioural changes can be described in commit messages using conventional commits and syntactic changes can be derived with the `synver` tool. Combining these methods we can automate nuget library versioning. 


We need to store the last published library version and public API to be able to determine the next version number.
The version can be stored as a `git tag` and the public API can be stored in a text file in the repository using `synver`'s `--surface-of` command. These will be updated during the last part of the build process.

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
- Package is published to nuget feed

The version determining script in the CI process needs to:

- Determine behaviour changes magnitude according to conventional commits
- Determine API changes magnitude derived from `MyProject.lson` in repo and built `MyProject.dll`
- Biggest magnitude from the two above becomes the version type change
- New version number is calculated from magnitude plus current version number


Conventional commits and the `synver` tool give us the tools we need to create the workflow described above. A CI technology is required to be the execution platform. The [next post describes the steps and code needed to achieve this](/automating-dotnet-library-versioning-gh-actions) in the new Github service [github actions](https://github.com/features/actions).