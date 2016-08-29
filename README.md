# Blog #

This is my blog which is a fork of the Jekyll Now Project

---
layout: post
title: PSLog
excerpt: Powershell logging functions
tags: 
- powershell
- monitoring
- structured-logging
- logging
---

I've been writing a lot of powershell lately, learning a lot and generally loving it.
I've also been configuring servers and applications to use a logging aggregator service and have been learning about structured logging and the goodness therin.

One of the scripts i've written is to compress and archive log files to S3, which has ended up being a bit of a beast.
Any code deployed to servers needs to have appropriate logging and powershell scripts can be a bit silent. 

I've written a small powershell script with functions to provide basic text file based, JSON formatted logging. 
The idea and API are heavily inspired by the great C# library Serilog, with a few simplifications and differences. 
There are 3 main functions  `Log-Info`, `Log-Warning` and `Log-Error`, each of which takes a string $message argument and an optional $props hashmap argument of properties to serialise.
