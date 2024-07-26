---
layout: post
title: Homelab kubernetes setup 2
issue: 41
tags:
- kubernetes
- k3s
- k3d
- devops
slug: "homelab-simpler-k8s-setup"
date: "2024-07-27"
description: A description of my simplified homelab setup
category: Tech
---

I decided to rewrite my homelab to offload some of the compute and storage and simplify the deployment and monitoring.

For more information on my previous homelab setup visit my other blog posts on the [homelab setup](https://chester.codes/homelab-k8s-setup) and an [automated deployment process](https://chester.codes/changing-code-with-argo) with the Argo projects.

## Setup

I want a fairly simple setup to self host a couple of small websites/services.

I need at least two environments staging and production, each with a postgres server for application databases. Each environment needs a sink for logs and monitoring, for which I will use the very cool aspire dashboard.

Development will be done on my local machine and then merged into the main branch, which will offer the change to deploy to staging.
Once deployed to staging the migrations and integration tests will run and if successful will offer to promote to production.

github actions will be used to build and store the images, with git tags storing information on the available version. git tag creation will trigger other parts of the build including the update of environment versions.

## Deployment process

### New app version to staging

Once code is pushed to `main` it will build and push the images in a github action. If the build process is successful it will push the images with a timestamped tag e.g. `v20240304010203` and a git tag with the same name.
The pushing of a tag that starts with `v` will trigger an Argo Workflow which will offer to update the staging environment version of the app to the new version.

When the app version file for the staging environment is updated, eventually ArgoCD will sync and trigger the update process.


The ArgoCD sync process deploys the new app version to staging in a few steps:

- Runs A PreSync hook to run database migrations on the apps database
- If successful, updates the app deployment
- If successful, run the integration tests as a PostSync hook
- If successful, run a task to tag the git repo at the current commit with the tag `env-staging`.

### New app version to production

When the `env-staging` trigger is pushed, it triggers an Argo workflow to offer to deploy the app to production. It does this by copying the staging versions to the production file and waiting for the Argo to do the same process as above with the exception of running smoke tests instead of integration ones.

Once the process above has finished the `env-production` tag is pushed and the app has finished deployment.

## Code repos

The homelab code is available on my github.
The main repo hosts all of the cluster apps, including postgresql database and there is a repo which hosts the deployed example app.

To run this you will need to setup a few cloudflare tunnels with the following urls

- `github-laptop.your.tld` - a tunnel for github webhooks to trigger Argo Workflows
- `ping-production-laptop.your.tld` - a tunnel for the outside world to reach the production app
- `ping-staging-laptop.your.tld` - a tunnel for the outside world to reach the staging app

Once these are setup, you can update the secrets files in the steps folders of both repos and run the steps scripts to setup the cluster.

Links can be seen from the dashboard at `dashboard.local` once the `/etc/hosts` file has been updated to divert that url and the rest of the urls in the dashy config to 127.0.0.1.

## Conclusion

I had a great time simplifying the original version of my homelab. For more info please see the following git repos:

- [hl2-ping](https://github.com/chestercodes/hl2-ping)
- [hl2](https://github.com/chestercodes/hl2)
