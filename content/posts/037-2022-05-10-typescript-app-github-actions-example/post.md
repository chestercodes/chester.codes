---
layout: post
title: Full-stack typescript example AWS serverless app with github actions pipeline
issue: 38
tags:
- typescript
- cdk
- github-actions
- pipeline
- devops
- aws
slug: "typescript-example-app-aws-gh-actions"
date: "2022-05-10"
description: An example full stack serverless typescript node and single page application and pipeline. It uses AWS Cloudfront, API Gateway, Lambda, S3, DynamoDb, Route 53 and is implemented with AWS CDK. The pipeline has multiple stages and continuously deploys as a green/blue pattern.
category: Tech
---

Typescript is a hell of a drug.

I've recently finished writing a Typescript serverless app using AWS services with a CD pipeline built on Github Actions.
Most of the pipeline runs in docker containers and so it can be run locally if needed and could be switched from github actions fairly easily.
A lot of the automation is written in Javascript with the great `zx` [tool](https://github.com/google/zx).

The app consists of two repositories, one for [the pipeline](https://github.com/chestercodes/guitar-app-pipeline) and one for [the app code](https://github.com/chestercodes/guitar-app).

## Pipeline repo

The pipeline repository contains code that creates an S3 bucket to store the artifacts and state. This bucket triggers a lambda function that invokes the github actions workflows for the environments.

The pipeline bucket contains the following types of files:

- Artifacts - zip files that contain the deployable forms of projects. CDK will deploy the app from these files.
- Manifests - json files contain information about which artifact versions to deploy.
- Deployments - json files that contain information relating deployments that have been made to environments. Each of these are a specific colour (green or blue) and used to run automated tests.
- deployedColour.txt - a file that stores the current deployed colour for an environment.

The repo contains the code that triggers the deployment and automated tests for the environment.

### Process

The app repo will save artifacts and a manifest file to the bucket, triggering the deployment to `stage`.

The deployment will start and if successful will trigger automated tests to run on the stage environment. If these tests are successful the deployment will report it to the lambda and this may trigger the same process on the non-live colour for `prod`.


## App repo

The app repo contains the code for:

- `deploy` artifact that contains the CDK code to deploy app
- `tests` artifact that contains playwright tests to be run on environments
- `api` artifact that contains the back end code
- `site` artifact that contains the front end code.

The `deploy` and `tests` artifacts contain zx script files that are executed by the pipeline code.

The app repo builds the artifacts then publishes the artifacts and creates a manifest file which may trigger the start of the pipeline, depending on the branch.

## Pipeline required behaviours

manifests from the `main` branch are auto deployed to `stage` and then to the non-live colour on `prod` if there are no failures.

manifest files are promoted from environment to environment and deploy the same exact artifact files at each stage.

the pipeline repo can also have non-prod environments for testing development changes. these environments will create their own bucket and not deploy to the `prod` environments.


## Conclusion

There are a few things that could be better about this setup. It is advisable to use a different AWS account for each environment. There are examples of how to do this with the CDK V2 in the AWS docs.

It also might be easier to use AWS Code(Build|Deploy) for a pipeline, but I thought it would be fun to try and implement one in Github Actions.

I had a lot of fun creating this example app and will use it as a base for future projects. Please feel free to do the same, information on how to do so is on the github repositories.