---
layout: post
title: Git flow committing powershell function
excerpt: A powershell function to make committing a little bit easier
issue: 7
tags: 
- git flow
- git
- powershell
---


A sort of new years resolution of mine is to use more powershell and command line in general. For this purpose I've been trying to supe up my powershell profile in unnecessary but fun ways. 

My work uses GitHub for source control hosting and JIRA for workflow. 
One of the things I like a little bit too much about this is the way that they sync up if you use the JIRA item number.

To make this easier, I've made a powershell function that:

- Takes a message argument
- Finds the branch name that is being worked on
- extracts the JIRA item number by convention defined regex.
- commits the message as so, JiraItem:Message
- (e.g. PROJ-123:Added code to do stuff)
- if it isn't a git flow function then it asks for user input and proceeds if it is 'y'

The function is:

``` powershell
function com
{
    param([string]$message)

    $jiraItemRegex = "^feature\/[A-Za-z]+(\-|_)\d+"
    $currentBranch = git rev-parse --abbrev-ref HEAD
    
    if($currentBranch -match $jiraItemRegex)
    {
        $jiraItem = $Matches[0].Replace("feature/", "")

        git commit -m "$jiraItem`: $message"
    }
    else
    {
        "JIRA item matching didn't work."
        $yesOrSomethingElse = Read-Host -Prompt "Enter 'y' to commit to branch '$currentbranch'. Anything else will abort"
        if($yesOrSomethingElse.ToLower() -eq "y")
        {
            git commit -m "$message"
        }
    }
}
```

Add this to your powershell profile and then call `com "Some commit message"` to use.

I'll soon be blogging about my powershell profile setup but I thought that this deserved a post of it's own.

[p.s. Follow this to make a powershell profile.](http://www.howtogeek.com/50236/customizing-your-powershell-profile/)
