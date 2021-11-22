---
layout: post
title: PSLog
excerpt: Powershell logging functions
issue: 10
tags: 
- powershell
- monitoring
- structured-logging
- logging
slug: "pslog"
date: "2016-12-04"
category: Tech
---


I've been writing a lot of powershell lately, learning a lot and generally loving it.
I've also been configuring servers and applications to use a logging aggregator service and have been learning about structured logging and the goodness therin.

One of the scripts i've written is to compress and archive log files to S3, which has ended up being a bit of a beast.
Any deployed code needs to have appropriate logging for operational purposes and powershell can be a bit silent. 

To solve this problem, I've written a small powershell script with functions to provide basic text file based, JSON formatted logging. 
The idea and API are heavily inspired by the great C# library Serilog, with a few simplifications. 
There are 3 main functions  `Log-Info`, `Log-Warning` and `Log-Error`, each of which takes a string $message argument and an optional $props hashmap argument of properties to serialise.

To use these functions in a script it is as easy as importing the functions using the dot notation `. .\path\to\PSLog.ps1` and setting the `$PSLogFilePath` to a path on the local hard drive.
It is possible to set a `logname` property by assigning a value to the variable `$PSLogName` which will be serialised on each log line. If this is not set then it will not be included.

The functions are then used by passing in a string value for the message and optionally a hash map of properties to serialise.

`Log-Info "Some message about the application" @{SomeNumber = 10; SomeOtherNumber = 20 }`
produces the line in the file 
`{"Timestamp":"2016-01-01T12:34:56.123456+00:00","Level":"Info","Message":"Some message about the application","SomeOtherNumber":20,"SomeNumber":10,"logname":"SomeLogName","host":"Some-Host"}`


When the script reaches 50Mb it will 'roll over', stamp the file with the date time and write to a new file with the original name.

These functions have been useful to me for gaining some insight into the powershell scripts which run on production systems and maybe they can help someone else.