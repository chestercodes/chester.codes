---
layout: post
title: PSFOM April - local nuget cache deleting function
excerpt: A function to delete the local nuget caches
issue: 16
tags: 
- psfom
- powershell
- nuget
slug: "nuke-get"
date: "2017-04-09"
category: Tech
---


I've been writing a few nuget packages lately, to try and promote best practices in build and deployment code.

Nuget caches packages in multiple places on your local machine, this can lead to a lot of confusion if a stale package is used instead of a proper one built by the CI server. 

I've found myself deleting my nuget caches regularly and have written a simple function which i've found useful:

``` powershell

function nuke-get(){
    $caches = nuget locals all -list
    foreach ($cache in $caches){
        $cacheSplit = $cache.Split(":")
        $cacheName = $cacheSplit[0]
        $cachePath = $cache.Replace("$cacheName`: ", "")
        Write-Host "Deleting cache '$cacheName' at '$cachePath'"
        if(Test-Path $cachePath){
            Remove-Item -path "$cachePath\*" -Recurse
        } else {
            Write-Host "Nothing at path"
        }
        
        Write-Host "Done"
    }
}

```

This function requires for the `nuget` executable to be on your PATH. To use this function it's easiest to add it to a [powershell profile](http://cburbidge.github.io/powershell-profile/).