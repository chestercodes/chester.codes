---
layout: post
title: Npm package - I
excerpt: A festive game of spot the difference.
issue: 19
tags: 
- npm
- javascript
- package
---

My latest side project has led to me finding an interesting npm package named `I`. 

The package promises _Just import it and all your problems will go away!_  and the linked code on [github](https://github.com/brittanica/I/blob/master/index.js) seems innocent enough:

![Code on github](/images/npm_I_github.png)

But viewed in [RunKit](https://npm.runkit.com/I/index.js) the code yields a more sinister intention. 

![Code on RunKit](/images/npm_I_runkit.png)

On import this package tries to spin up a process and run the command `rm -rf / `. Luckily on most systems this will be saved by the trusty `no-preserve-root` failsafe. 

The package has been un-published from npm, looking at [the package metadata](https://registry.npmjs.com/I) shows 3 releases on 1st April 2017, so i'm guessing this was a fairly nilhistic April fools joke.

This shows the need for care when choosing and using third party modules from npm or other package repositories.