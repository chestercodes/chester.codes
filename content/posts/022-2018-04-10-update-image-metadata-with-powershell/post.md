---
layout: post
title: Updating image metadata with powershell  
excerpt: Using powershell to update the 'Date taken' property of images
issue: 22
tags: 
- powershell
- image
- exif
- scripting
slug: "update-image-metadata-with-powershell"
date: "2018-04-10"
category: Tech
---


My parents have a corpus of old photos sitting on the family pc and this weekend I set myself the task of uploading these to google photos.

Google photos tends to organise the photos in chronological order by taking the information from the image EXIF metadata or the file created/last modified date.
There are tens of thousands of photos with some coming from older cameras which didn't set the 'Date taken' or have misleading file metadata.

The files were in folders which adhered to a naming convention with a date in the form yyyy.MM.dd at the start. I wrote a powershell script to parse this date and update the `Date taken` of any images if it was blank. 

Reading and writing of the image metadata can be done with the `System.Drawing.Imaging.Metafile` class and googling led me to the [ExifDateTime repository](https://github.com/ChrisWarwick/ExifDateTime) which wrapped this class in useful powershell CmdLets. The module worked well for reading of the `Date taken` property but the `Update-ExifDateTime` only offered the ability to increase the value by a `TimeSpan` value. 

After consulting [stack overflow](https://stackoverflow.com/a/25162782/4854368) I rewrote the function for my specific purpose and have forked the original repository and [added the function there](https://github.com/CBurbidge/ExifDateTime). Maybe this will save someone a bit of time in the future.