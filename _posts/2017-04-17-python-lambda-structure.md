---
layout: post
title: Project structure for python AWS Lambda functions
excerpt: Example of a project structure for python AWS Lambda functions
issue: 17
tags: 
- aws-lambda
- python
---

I've been making a few AWS Lambda functions at work lately, they are very useful at small automation tasks and also gluing different services together.

One of the downsides of lambdas is their tight coupling to AWS, this can be a problem when trying to run the code locally.
I want a way to structure the project such that it can be easily stepped through when developing. 

For a function called SomeLambda, this is the project structure i've been using. It consists of 3 files, `index.py`, `RunLocal.py` and `SomeLambda.py`. 

### SomeLambda.py ###

This file has the logic of the lambda, it exposes a `handler_impl` function which is called with the `event`, `context` and any required dependencies.

``` python
import something
 
def handler_impl(event, context, dependency, osEnv):
    print("Great lambda code")
```

### RunLocal.py ###

This file can be called to run the code locally. Having this file has the advantages: 

- Can debug through code on local machine.
- Can document the shape(s) of `event` object the function is going to be called with. 
- Can monkey-punch dependencies to allow for inversion of control and safety when running locally.

``` python
from SomeLambda import *
 
event={'StackId': "SomeId"}
context={}
 
class FakeDependency(object):
    def some_faked_method(self, arg1, arg2):
        return {'SomeProp': "1234"}

envVar = {'SomeEnvVarKey': "SomeEnvVarValue"}

def handler(event, context):
    return handler_impl(event, context, FakeDependency(), envVar)
```


### index.py ###

This file contains the main `handler` method which is called when the lambda runs on AWS. It is where all of the real dependencies are instantiated.

I also append the git commit hash into a commented line on the end of the file. This is to know which version is installed when looking at the function in the AWS Lambda console. 

``` python
import real_dependency
import os
from SomeLambda import *
 
def handler(event, context):
    return handler_impl(event, context, real_dependency.create(), os.environ)

# SomeLambda - 1b0fa5e0eb21ed6d0c92878ac915efb936985e82
```


### Why so complex? ###

It seems extreme to separate the `index.py` and `SomeLambda.py`. They could be combined with this file being imported into `RunLocal.py` to run it locally. 

I have chosen this method because it stops the possibility of people editing the code in the AWS Lambda console window. 
Any changes in the console window are not under proper version control and will not be part of a CD pipeline. 
Lambda does have it's own idea of versioning, but we want to have any code written in the same form as the rest of our code.


### Conclusion ###

I've had a lot of success in deploying and running lambdas in this format and I hope it helps other people to do this and make AWS Lambda a first class citizen in their development workflow.