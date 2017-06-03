---
layout: post
title: Powershell Error Handling
excerpt: Methods of detection and handling of errors in powershell
issue: 11
tags: 
- powershell
- error-handling
- patterns
---

I've been working a bit too hard lately having extra-curricular powershell fun. 


The nature of powershell, the fact that basically everything that it does is a side-effect means that one has to be really careful with error handling.
The variety of programs which powershell interacts with means that knowing decent error handling patterns is essential. 

Here are a few patterns which i've been using.

## Try - Catch ##

This method is the most similar to other programming languages and so might be the most relatable for people new to powershell. 

As with normal Try - Catch the pattern is to wrap dangerous code in a try block and then handle the error in the catch block. 

``` powershell
Try {
     someExecutable someArgument   
}
Catch {
    $ErrorMessage = $_.Exception.Message
    Write-Error $ErrorMessage
    # Some clean up code
}
```

The advantages of this method are:

- it is widely known dues to proliferation in other programming languages
- Try blocks can be as long as required and therefore span multiple dangerous lines of code

The disadvantages of this method are:

- it only works on [terminating errors](https://msdn.microsoft.com/en-us/library/dd878319(v=vs.85).aspx) and most errors you are likely to come across are non terminating. This can be changed by setting the `-ErrorAction` of the command being used to `Stop`.


## $LASTEXITCODE ##

A lot of powershell calls are calling external program executables. Once these have finished they return with an exit code.
powershell stores the last exit code at any one time as the `$LASTEXITCODE` variable. This can be interrogated to find out whether the last command was successful.

Exit codes vary from program to program, but in general a code of anything other than 0 indicates that the program failed.

``` powershell
#run external program
someExecutable someArgument

if(-not($LASTEXITCODE -eq 0)){
    # program was not sucessful
    Write-Error "Failed"
    exit 1
} 
```

The advantages of this method are that it works well with externally written programs.
The disadvantages are that it is not very elegent and also it requires a detailed knowledge of the external programs exit codes.


## $Error ##

The last powershell concept to know about for error handling is the `$Error` variable.
This is a collection variable which is added to when an error happens during execution.

I have found this useful with some external programs which will show behaviour of erroring but will return an exit code of 0, indicating that no error occurred.

Because the `$Error` variable is a collection it can be cleared of items. The pattern I use is to call `$Error.Clear()` before a dangerous program call and then check for items in the collection immediately afterward. 

``` powershell
$Error.Clear()
someExecutable someArgument
if($Error.Length -ne 0){
    # there is an error
    Write-Host $Error[0].Message
    exit 1
}
```

The advantages of this are that is will work with programs which might not return the correct exit code.
The main disadvantage is that it seems a bit hack-y.


These are the main patterns I've been using to implement error handling in my latest powershell work.

