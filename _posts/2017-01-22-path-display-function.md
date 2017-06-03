---
layout: post
title: PSFOM January - path display function
excerpt: A function to either display or find value in PATH environment variable
issue: 14
tags: 
- psfom
- powershell
---

I often want to check what values are included in the PATH env variable and Powershell provides easy access to this information with `$env:Path`. 

The semi-colon joined string is tricky to read and can be easily split using `$env:Path.Split(';')` for a line seperated list.

With a long PATH variable this can be hard to check for a value, so having a way of filtering them is useful.

The function i've made is below and allows the easy display of the variable by running `path` and filtering and display by passing a value into the function like `path go`.

``` powershell
function path($filterBy){
    $res = $env:Path.Split(';')
    if([string]::IsNullOrWhiteSpace($filterBy) -eq $false){
        $res | Select-String -SimpleMatch $filterBy
    } else {
        $res
    }
}
```

To use this function it's easiest to add it to a [powershell profile](http://cburbidge.github.io/powershell-profile/).