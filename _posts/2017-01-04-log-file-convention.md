---
layout: post
title: Log file name convention
excerpt: A simple log file name convention
issue: 12
tags: 
- logging
- devops
- powershell
---

It seems like a trivial issue, but lately i've been thinking about the need to have a sensible naming convention for text log files.


The company I work for has ~10 projects on ~15 different servers with each project being on multiple servers in different 'environments' such as `Dev`, `Production` etc.
I want to be able to be able to look at a log file name and know the project, environment and date of the logs it contains. 


The convention i've been using is:

`<DriveLetter>\Logging\<ProjectName>\<SubProjectName>\<Environment>\<ProjectName>_<SubProjectName>_<Environment>_<Date:yyyyMMdd>.log`


Meetings this convention means that the files are much easier to archive in a chronological way and means that I can see the origin of the logs by just looking at the file name.


I've been archiving log files to Amazon S3 and have recently archived over 65,000 log files which have all been in a non-standardised locations.
The files that `SomeProject` logs are typically at locations like `C:\Software\SomeProjectLogging\log_debug.log2016.01.02` with the logging rolling over on a daily basis.

Archiving these files is tricky because I want to put all of the log files in a single S3 bucket and would experience name clashes with a file name like `log_debug.log2016.01.02`


I've had to rename the existing log files to this new convention and have written a [powershell script](https://gist.github.com/CBurbidge/43c4a852f8caabb7e2e5da6cb4280bba) to do so which may be of use to anyone in a similar situation.