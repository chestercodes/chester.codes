---
layout: post
title: Ephemeral environments and canary deployment with the Argo projects
issue: 40
tags:
- kubernetes
- k3s
- k3d
- argo-cd
- argo-workflows
- argo-events
- devops
slug: "changing-code-with-argo"
date: "2023-02-23"
description: A description of a way to implement code changes with ephemeral environments and canary deployments using the argo projects
category: Tech
---

It is important to have a deployment pipeline that can test changes in a staging environment before deploying them to production.
This helps to prevent major problems from arising and minimizes the risk of downtime and system failures.
With kubernetes it is feasible to incorporate the creation and then deletion of an environment specifically for the purpose of testing a new change.
Another method of avoiding downtime for services is to use canary deployments to gradually deploy changes and while testing for failures.

This blog post describes a method of using the Argo Projects to implement a deployment pipeline that creates ephemeral environments to test changes before destroying them and rolls out services with canary deployments.

## method

The app to be changed is a small web service with a `/ping` route that returns the value `pong` as text:

![pong_response_simple](images/pong_response_simple.png)

The change to be made is to change this output to a complex value `{ 'value': 'pong' }`

![git_push](images/git_push.png)


![github_app_change](images/github_app_change.png)

When the commit is pushed to GitHub, a webhook is triggered that is picked up by an Argo Events source which then triggers an Argo Workflow to build the app:

![ci_task_started](images/ci_task_started.png)

This workflow first decides a timestamped version for the change and then builds two images, one for the app and one for the code that the pipeline uses:

![ci_building_image](images/ci_building_image.png)

The logs from the `version` task show the change version `v202301211170844`:

![ci_show_version_logs](images/ci_show_version_logs.png)

The logs show the app being built:

![ci_building_image_logs](images/ci_building_image_logs.png)

The CI stage builds an image for the app (`apps/homelabping:v202301211170844`) and an image for the code that the pipeline to use (`pipeline/homelabping:v202301211170844`).
The pipeline image contains any code for database migrations and functional tests.

![ci_finished_tasks](images/ci_finished_tasks.png)

With the images built and pushed, the workflow triggers another workflow to start the deployment to a staging environment:

![staging_started](images/staging_started.png)

Each staging environment is spun up for a particular change of an app, in this case the app is the `homelabping` for the version `v202301211170844`.
The first action is to create the new environment, this is done by creating a manifest file in a git repository to be picked up by ArgoCD.

![staging_pushed_manifest](images/staging_pushed_manifest.png)

The `push-new-manifest-file` task clones the apps repo and creates a new file with the versions to be deployed at the path `apps/staging/manifests/v202301211170844.json`.
ArgoCD searches for files in the pattern `apps/staging/manifests/*.json` and will then detect the new manifest file and create a new staging environment.

As well as the application being changed there are others to be deployed in the staging environment for the automated tests.
The new manifest is a copy of the current production manifest file but with the new versions for the `homelabping` app. 
In addition to the `v202301211170844` build of the app, the git hash of the changed repo is used as a version for the deployment of the helm chart that generates the kubernetes manifests.

![github_added_staging_json](images/github_added_staging_json.png)

When the file has been pushed to github the pipeline runs the `submit-to-workflow-reporter` task which sets up a workflow-reporter API to expect a REST API call to indicate whether each project in the new staging environment has successfully deployed, or failed. The pipeline then enters a `wait-completion` task until the workflow-reporter tells it to carry on, or fail the pipeline.

![staging_pipeline_waiting](images/staging_pipeline_waiting.png)

After about a minute or so (or manual triggering) ArgoCD will pickup the new staging file and create the new environment from the application versions. Below shows an app-of-apps called `v202301211170844-apps` which deploys the other applications with the versions from the `apps/staging/manifests/v202301211170844.json` file:

![argocd_staging_app_of_apps](images/argocd_staging_app_of_apps.png)

One of the other apps to be deployed is a postgres database: 

![argocd_staging_cluster](images/argocd_staging_cluster.png)

When this has successfully deployed (i.e. ArgoCDs `sync` has finished) jobs run to firstly setup the database users and then call to the `workflow-reporter` api to report a successful deploy for the `homelabmaindbcluster` app.

![argocd_sync_ok_logs](images/argocd_sync_ok_logs.png)

When all of the apps have reported successful deployments the pipeline resumes and runs the migrations and then the functional tests located in the `pipeline/homelabping:v202301211170844` image.

![staging_resumed_deploy](images/staging_resumed_deploy.png)

If the tests pass we can be sure that the change to the homelabping app hasn't caused any regressions in functionality and the last task of the pipeline is to trigger another workflow to deploy to production.

![staging_finished_and_triggered_prod](images/staging_finished_and_triggered_prod.png)

![prod_started](images/prod_started.png)

With the deployment to production started, the pipeline updates the production manifest to the new `homelabping` versions and removes the previous staging environment (this probably should be done at the end of the staging pipeline really):

![prod_pushed_manifest](images/prod_pushed_manifest.png)

![github_removed_staging_file_and_updated_prod](images/github_removed_staging_file_and_updated_prod.png)

The pipeline tells the workflow reporter about the apps being deployed and pauses at the `wait-completion` step:

![prod_waiting](images/prod_waiting.png)

With the production manifest changed in the git repo, ArgoCD starts a canary deployment of `homelabping` using Argo Rollouts. First a replica set of the new version is created:

![rollout_new_started](images/rollout_new_started.png)

Then the rollout is paused while an Argo Rollout analysisrun is created and setup from the `maintain-success-rate` analysistemplate. The template contains information on how to test whether the canary deployment is to be considered a success, in this case by querying prometheus for metrics:

![rollout_analysis_started](images/rollout_analysis_started.png)

The analysisrun deployment shows information on the state of the measurements:

![rollout_measurements](images/rollout_measurements.png)

While the canary progresses along the stages of release, the likelihood of requests being directed at the new change increases and we can see the new response:

![pong_response_complex](images/pong_response_complex.png)

When the rollout is complete all of the traffic is directed to the pods with the new app version and the successful sync job runs to tell the workflow-reporter to tell the pipeline to resume:

![rollout_complete_sync_success](images/rollout_complete_sync_success.png)

The migrations and tests run and the pipeline completes.

![prod_resumed](images/prod_resumed.png)

![all_complete](images/all_complete.png)

As the `apps/staging/manifests/v202301211170844.json` file was deleted the `v202301211170844` environment tears itself down leaving no trace.

![argocd_staging_deleted](images/argocd_staging_deleted.png)


## conclusion

This post has demonstrated a novel way of using the Argo projects to deploy code changes safely with ephemeral environments and canary deployments.

In practice this approach might be a bit overkill and prone to transient errors, but it's interesting to think of the possibilities that kubernetes allows for creating short lived environments.

All of the code for this post is on my github, spread out over a few repos:

- [homelab-apps](https://github.com/chestercodes/homelab-apps) - repo containing pipeline code and deployed manifests and versions
- [homelab-ping](https://github.com/chestercodes/homelab-ping) - repo that contains the homelabping app
- [homelab-maindb](https://github.com/chestercodes/homelab-maindb) - repo that contains code for deploying a postgres database
- [homelab-cluster](https://github.com/chestercodes/homelab-cluster) - main apps used in the cluster for monitoring etc
