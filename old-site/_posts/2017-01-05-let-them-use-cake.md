---
layout: post
title: Let them use CAKE
excerpt: Useful ideas for making the switch to the CAKE build system easier
issue: 13
tags: 
- c-sharp
- cake
- devops
- continuous-integration
- nuget
- build
- teamcity
---

At work we use TeamCity for a CI server. 
We've had a lot of success with it but there are a few issues with the build logic that are starting to cause problems.

-  Lack of source control  -  We are starting to add a lot of build logic which is not under our standard source control.  TeamCity has an audit feature but it would be much better to have it in git with our other code.

-  Inabiliy to run locally - The build logic is mostly in the form of build configuration templates. 
This is a problem because it means that we cannot run builds on our local machines and makes the builds [hard to replicate](https://www.thoughtworks.com/radar/techniques/programming-in-your-ci-cd-tool)

- Build logic development  - The feedback for testing new build logic is the time it takes to go via our source control system which means it is in the order of minutes rather than seconds.
The fact that there is no place to test changes, means that if the build configuration is broken then all of the builds are broken.

- Type of logic  - The build templates are good for sharing logic but they come with a learning curve and any non standard steps are most often written in powershell, which some of the team don't know.

- Unclear dependencies - There is no formal way of specifying the dependencies that the logic uses. Any involved custom logic or 3rd party tools/libraries can be a problem.

- Vendor lock-in - All of the logic being in TeamCity would be a problem if the company ever wanted to [change the product](https://aws.amazon.com/blogs/aws/aws-codebuild-fully-managed-build-service/) which we use to implement CI with. 

- Not continuous integration - Most descriptions of [continuous integration](http://www.martinfowler.com/articles/continuousIntegration.html) describe having a single script which is run at build time and does all of the work. Having the logic in build steps goes against this idea.


## Solutions not problems ##

To solve some of these problems there's [CAKE](http://cakebuild.net/). 

CAKE is a C# DSL designed with the intention of writing build scripts. It uses Roslyn to run C# code like a script and borrows many ideas from [RAKE](https://ruby.github.io/rake/) and [FAKE](http://fsharp.github.io/FAKE/)

CAKE can solve most of the problems above because a lot of the above problems have been solved for C# code.

There are other articles describing how to use CAKE, I just want to list some problems I've had and how I've overcome them.

## Problems with the solution ##

To justify the effort to switch our CI system to CAKE scripts, it is important that it at least matches the current TeamCity setup in terms of functionality.

The following are some features that TeamCity does very well, which need to remain:

- Common build configuration logic - The company has over 10 projects which share a lot of logic. The commonality is such, that between some projects, all that changes are some parameter values. Any CAKE solution needs to be able to share this amount of code.

- Build results/metrics display - TeamCity is very good at displaying information about the build. 
It can show automated test results, test code coverage and build logs.


### Common build configuration logic ###

To try and replace the build configuration template functionality we need a way of storing and versioning common CAKE code.
We also need to be able to easily add this to projects and import the common code into CAKE scripts.

Because CAKE uses Roslyn, we can import external code in .csx files using the `#load` directive in our script:

``` csharp
    #load "path/to/script.csx"
    
    // call function from script.csx
    commonFunction("some-arg");
```

We want to share functions between the projects and call them if the projects need them. An easy way of doing this is to use a NuGet package.

The nuget package will contain the following files:

- A `common.csx` - contains all of the common code. This file should be considered the 'public api' of the nuget package the versioning should be bumped when this file is changed. I choose to put this file with the other CAKE dependencies in the tools directory in it's own folder at `tools/Common/common.csx`.
- The basic CAKE files - `build.ps1`, `build.cake` and `cake.config`. build.cake will have common build steps and will call into functions in the common.csx file. These files live at the base of the repository.
- `Install.ps1` -  a powershell script to move files to the correct place.
- `git.ignore` - to ignore the files in the tools directory which aren't to be added to source control. This file is renamed in the Install.ps1 to the destination `tools/.gitignore`. 



### Build results/metrics display ###

We use NUnit to run automated tests, some projects use NUnit 2 and some use NUnit 3.
Teamcity has a built in NUnit runner which shows the results of the tests as they run. This is the benchmark to try and meet.

NUnit3 is easy to achieve this. There is a `TeamCity` flag in the [NUnit3Settings class](http://cakebuild.net/api/cake.common.tools.nunit/7bd0c6da) which can be set when called.  
For NUnit2 I don't believe that it is possible to achieve the results as the tests run. I think it is a case of importing the TestResults.xml file which the NUnit runner produces into TeamCity. This is easy to do and needs to be added as a [XML Report 'build feature'](https://confluence.jetbrains.com/display/TCD10/XML+Report+Processing). The downside is that this will happen after all of the tests have been run.

## Conclusion ##

CAKE is a great tool and above are a few methods of making the switch of having the build logic in TeamCity to CAKE scripts.

TeamCity is a top-notch build orchestration tool, but a CAKE script is a better place to store the code needed to build projects.













