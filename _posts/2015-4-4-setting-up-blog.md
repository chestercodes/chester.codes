---
layout: post
title: Blog, blog and away!
excerpt: Setting up my blog.
issue: 2
tags: 
- blog
- jekyll
- jekyll-now
---

I'm a coder, that's what I am. That's what I do and I do it fairly well.

As a coder, it's my responsibility to have a blog about my experiences as a coder. 

Once a blog is setup then I can also use it to express my opinions on things, because we all know that the internet needs more opinions.

### How to get a blog? ###

I wanted an option that would be free, that would be fairly easy and fun to set up. I also need a platform that can display code snippets, ideally with syntax highlighting for the languages I might want to write about.

I read a lot of articles and blogs which are hosted on the same sort of platforms. GeeksWithBlogs seems like a good solution, it's free, widely used and is good for people to discover your writing. The disadvantages that I see are that there didn't seem like an easy way to use markdown on it and I like markdown.

Some googlin' led me to [Jekyll](http://jekyllrb.com/) and more specifically [Jekyll Now](http://www.jekyllnow.com/). Jekyll is a static site generator that converts markdown into HTML that can easily be hosted on GitHub and Jekyll Now is a skeleton project for a blog using Jekyll. I like the fact that it can be hosted very close to my GitHub account as these are likely to overlap at some point.

As a .Net programmer with no prior exposure to the ruby world, I didn't know what to expect but I thought i'd give it a go, monkey see, monkey analyse, monkey do style.

### No place to Hyde ###

With Jekyll chosen, I wanted a way to customise the experience to my liking, this includes changing the styling and if needed, the layout. In Jekyll changing the styling is as easy as changing the SASS files provided, changing the layout requires a bit of ruby knowledge, but it can be done to good effect. To be honest, i'm pretty happy with the layout as it is.

Trying to run a local version was a bit of a challenge. I tried to install ruby and devkit on my windows machine, but got far too many errors to carry on with it. I'm sure it can be done, but I don't really want to waste my weekend any more than I have to, to get it up and running. I could have booted up a linux VM, but I've got my old macbook pro that I don't use enough and I figure I can get some use out of it this way.

Running Jekyll locally on a mac is crazy easy, a case of running `gem install github-pages` and `jekyll serve` in terminal. This runs an instance at `localhost:4000` which can be browsed to.

The blog runs and I am amazed. Changing the `_config.yml` gives options to add all sorts of accounts of social networks and other settings such as my name and tag line with just one line changes. The bit that blew me away though was the addition of a Disqus account to the blog. It was as easy as signing up to the service and adding the 'short name' to the config file! Magic.

All set up I try and write my first blog and come across a slight problem.

### Paying for my syn(tax)s ###

Writing C# code in markdown gives a div of highlighted code with syntax highlighting that isn't quite right. Classes are marked as names where they shouldn't be and other such errors. I'm amazed that it works as well as it does though and i'm certainly not complaining. The colours are also out of whack for C# compared to visual studio's defaults, but these are almost to be expected as they were no doubt set for Ruby in Jekyll Now. I might change the SASS to be more C# like and write a post with the changed SASS.

### Overall ###

i'm greatly impressed with Jekyll Now and excited to be starting this blog with it. 