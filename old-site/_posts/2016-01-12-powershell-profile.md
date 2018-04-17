---
layout: post
title: Powershell profile
excerpt: Details of my new super duper powershell profile
issue: 8
tags: 
- powershell
- profile
---


A sort of new years resolution of mine is to use more powershell and command line in general. 

I've spent a bit of time customising a powershell profile. My requirements are that my profile needs to be:

- easy to install, automatic with little to nothing to change.
- easily editable.
- available at home and at work but easily customisable to each environment.
- have files sync between work and home through dropbox to stay up to date.
- have as little as possible in $profile files, instead link to other files from these. This is in an effort to make sure nothing is forgotten on a machine accidentally.


The end product can be found on my GitHub profile in [this repository](https://github.com/CBurbidge/PowershellProfile). In this post i'll explain a few of the ideas in it. This post will go out of date as my profile changes.

## Installation ##

Powershell is used to 'install' the profile. The installation is the process of adding lines to the $profile file which link to the ProfileShared.ps1 file and also the relevant environment file (either ProfileWork.ps1 or ProfileHome.ps1). 

The command `powershell -file .\AddFilesToProfile.ps1` should be enough to install it, if it doesn't work then try running it again. The AddFilesToProfile.ps1 script does the following things

- Finds out where it is running and figures out which of the two environment files to use by looking at the computer name from the environment.
- Creates a new profile file if it doesn't already exist and timestamp archives it, if it already exists.
- Adds references to the ProfileShared.ps1 and the environment machine file using the `. file.ps1` command to import the files.
- Adds a command to edit the files in powershell_ise 
- `cd`'s to the $startingDir variable, this variable is set in the environment file.

This script is able to be run as many times as wanted with the only side effect being a newly backed-up file in the same directory as the $profile file.

## ProfileShared.ps1 ##

The ProfileShared.ps1 file contains the logic that is shared between Work and Home.
This file contains most of the profile code, this doesn't contain bits that are specific to environments like useful places and urls.

### $profileList ###
The idea behind profileList is to provide myself with a list of all of the commands, aliases etc in my profile  and a brief description of what they do by just writing `list`.
It does this by saving a hashtable of the commands and their description to the variable $profileList. This is then added to above each command using the function ListAddCommand.
This list can include things from the shared profile and also the environment specific files, so it might not be the same as viewed from each environment.

### $profilePlaces ###
I want my profile to be able to quickly access files and folders via simple commands. I have created the $profilePlaces variable which stores file paths or folder locations and can be used in functions. 

The `goto` command uses the $profilePlaces variable and calls explorer.exe with the place as the argument. I do this with some of the frequently used visual studio projects at work and home for example.
Similarly the `go` command changes directory to the place or the directory that contains the place. 

### $profileUrls ###
I want my profile to have quick access to commonly used web pages, for this I have created the $profileUrls variable which can be added to on all of the profile files. I have also created a function which opens chrome if presented with an argument that has a value in the $profileUrls hashmap. Using this function going to my GitHub profile is as easy as calling `c gh`.

The only other things of note in my profile are the 'com' function which I have written about [here](http://cburbidge.github.io/git-commit-powershell-function/) and an alias for `git status` which is shortened to `gs`.

## Profile(Work|Home).ps1 ##
The environment specific files are used to add to the $profileUrls, $profilePlaces and $profileList variables to customise for that environment. They can also contain functions etc which don't make sense being on the other environment files.

## Conclusion ##
That is my current powershell $profile, it will almost certainly change a lot when I think of new cool things to do with it. 

Hope it helps. 
