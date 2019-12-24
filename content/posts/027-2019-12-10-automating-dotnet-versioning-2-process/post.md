---
layout: post
title: Automating .net library versioning - Process
excerpt: A 
issue: 27
tags: 
- dotnet
- versioning
slug: "automating-dotnet-library-versioning-2-process"
date: "2019/12/11"
category: Tech
---

> This is the second post in a series on a method of automating .net library versioning. The [first post described the synver dotnet tool](/automating-dotnet-library-versioning-synver) which can be used to find the magnitude of library API changes according to the semantic versioning rules. 

[Semantic versioning](https://semver.org/) is a popular method for versioning software libaries. 
It describes three different types of change that can happen in libaries, Major, Minor and Patch. To decide the type of a change in the library, from one version to the next, one needs to take into account behaviour and API changes.

Unlike public API changes, It's impossible to detect and verify the magnitude of changes in behaviour of code in an automated way, the responsibility of documenting behaviour changes is left to the developer. 

## Conventional commits

Library changes can be described alongside the code, using a method called [conventional commits](https://www.conventionalcommits.org/en). The commit message describes the magnitude of the changes using certain message prefixes. 

- `BREAKING CHANGE` is used in the messages of commits that contain `Major` level changes. 
- `feat` is used to denote `Minor` level changes.  
- `fix` or `chore` are used to denote `Patch` level changes.  

Using this convention it is possible to derive the next version number and generate documentation from the [commit messages since the last version](https://github.com/conventional-changelog/standard-version). 

An example of conventional commits can be seen in the following git log for a fictitious DSL parser:

```
d7dfb26 fix: Merge conflicts.
c00e854 BREAKING CHANGE: Removed key words for new client.  # c3c552a -> c00e854 = v2.0.0
51fb925 chore: Tweaked build script
88732bd feat: Added new key word                            # c3c552a -> 88732bd = v1.1.0
c61a4b3 chore: Tidied code up                               # c3c552a -> c61a4b3 = v1.0.1
0918831 fix: Fixed bug with parser
c3c552a (tag: v1.0.0) Changes for v1.0.0                    # c3c552a = v1.0.0
```

In this example we can see the version v1.0.0 is tagged at the commit `c3c552a`. If it was decided to introduce a new version at the commit `c61a4b3` it would create version `v1.0.1` as the commits between the two are prefixed with `fix` and `chore` and this introduces a `Patch` level change. 
If the new version was made at `88732bd` then the commit history between `c3c552a -> 88732bd` includes `feat` which calls for a `Minor` change and produces `v1.1.0`. If the version were to be introduced at `c00e854` the version would include a `Major` change commit and therefore be `v2.0.0`

## Automated workflow.

Behavioural changes can be described in commit messages using conventional commits and API (syntactic) changes can be derived with the `synver` tool. Combining these methods we can automate nuget library versioning. 


We need to store the last published library version and public API to be able to determine the next version number.
The version can be stored on the commit as a git tag and the public API can be stored in a text file `MyProject.lson` in the repository using `synver`'s `--surface-of` command. These will be updated in the repo when the package is published during the build process.

From a developer's perspective the workflow should be:

- Develop library changes.
- Push to `master` (or other publishing branch)
- CI process builds and publishes package with new version number
- Developer consumes package

For this to work the CI process needs to:

- If no commits since last tag, do nothing (to stop infinite loops from git push at end of process)
- Code is built, tests are run, all OK
- Previous version is retrieved from tags
- Run a script to determine the new version from the `MyProject.lson` file and commit messages since last tag
- Package is built with new version number
- `MyProject.lson` file is updated from built `MyProject.dll`
- Changes to `MyProject.lson` are committed with version documentation
- Commit tagged with version and pushed to `master`
- Package is published to nuget feed

The version determining script in the CI process needs to:

- Determine behaviour changes magnitude according to conventional commits
- Determine API changes magnitude derived from `MyProject.lson` in repo and built `MyProject.dll`
- Biggest magnitude from the two above becomes the version type change where `Major > Minor > Patch`
- New version number is calculated from magnitude plus current version number


## Implementation

The above steps can be implemented as part of a CI process using scripts that are located in the library repository. An example of this can be seen in the [AutoSemVerLib](https://github.com/chestercodes/AutoSemVerLib) github repository. The library contains the following powershell scripts:

- `versioning/AutoSemVer.ps1` - Contains generic functions to call `synver` and calculate version magnitude differences. Can be treated like a re-usable module. The script is configured with environment variables:
- - `TAG_VERSION_REGEX` - Regex that defines version format in git tags.
- - `BUILT_NAME_REL` - Path of the `.dll` file when built.
- - `CURRENT_API_NAME` - Path of the lson representation of the API file in the repository.
- `BuildVersioning.ps1` - Contains functions that are specific to the build, source control and publishing technologies. In this case .net core, GitHub and GitHub packages. It also contains code about the documentation produced by the automated process. The script is configured with environment variables that define the git and github config.
- `BuildAndPublish.ps1` - High level script which runs the build, pack and publish. This script imports the `BuildVersioning.ps1` script, which imports the `AutoSemVer.ps1` script and uses the functions.


The `BuildAndPublish.ps1` script shows the process at a high level:

``` powershell
. "./BuildVersioning.ps1"

if((NeedToRun) -eq $false){
    Write-Host "Dont need to run script"
    exit 0
}

$projFile = "src/MyProject.csproj"

dotnet build $projFile -c Release 

$nextVersion = Bump

dotnet pack $projFile -c Release /p:Version=$nextVersion -o out

WriteApiFileAndPush

$packagePath = ls -Path ./out -Filter "*.nupkg" | sort LastWriteTime `
                | select -last 1 | select -ExpandProperty FullName
PushToFeed $packagePath
```

The script imports `BuildVersioning.ps1` and the `NeedToRun` function returns `$false` if there are no commits since the last tag. If the library builds then the `Bump` function returns the next version, derived from the `MyProject.dll` and `MyProject.lson` files. The package is created in the `out` directory from the version, the documentation is created and the `MyProject.lson` file updated in a commit that is pushed to the repository. The built nuget package is finally pushed.

A CI technology is required to be the execution platform and a package feed is required to host the package. The [next post describes the steps and code needed to achieve this](/automating-dotnet-library-versioning-3-github) with [Github Actions](https://github.com/features/actions) and the [GitHub Package Registry](https://github.com/features/packages).