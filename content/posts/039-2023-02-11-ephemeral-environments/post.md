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
slug: "ephemeral-environments-with-argo"
date: "2023-02-11"
description: A description of a way to implement ephemeral environments with the argo projects and GitOps
category: Tech
---

One of the advantages of using kubernetes and a container orchestration platform is that it can be cheaap and fast to spin up services to meet demand.
Previously creating a new instance of a service would involve creating a new VM and installing any required dependencies in a timescale of minutes, with a container orchestration it can be as little time as downloading the image plus a few seconds to start the container.

It is important to have a deplyment pipeline that can test changes in a staging environment before deploying them to production.
This helps to prevent major problems from arising and minimizes the risk of downtime and system failures.
With kubernetes it is feasible to incorporate the creation and then deletion of an environment specifically for the purpose of testing a new change.

This blog post describes a method of using the Argo Projects to implement a deployment pipeline that creates ephemeral environments to test changes before destroying them.



![pong_response_simple](images/pong_response_simple.png)

![git_diff](images/git_diff.png)
![git_push](images/git_push.png)
![github_app_change](images/github_app_change.png)
![ci_task_started](images/ci_task_started.png)
![ci_building_image](images/ci_building_image.png)
![ci_show_version_logs](images/ci_show_version_logs.png)
![ci_building_image_logs](images/ci_building_image_logs.png)
![ci_finished_tasks](images/ci_finished_tasks.png)
![staging_started](images/staging_started.png)
![staging_pushed_manifest](images/staging_pushed_manifest.png)
![github_added_staging_json](images/github_added_staging_json.png)
![staging_pipeline_waiting](images/staging_pipeline_waiting.png)
![argocd_all_apps_with_staging](images/argocd_all_apps_with_staging.png)
![argocd_staging_app_of_apps](images/argocd_staging_app_of_apps.png)
![argocd_staging_cluster](images/argocd_staging_cluster.png)
![argocd_sync_ok_logs](images/argocd_sync_ok_logs.png)
![staging_resumed_deploy](images/staging_resumed_deploy.png)
![staging_finished_and_triggered_prod](images/staging_finished_and_triggered_prod.png)
![prod_started](images/prod_started.png)
![prod_pushed_manifest](images/prod_pushed_manifest.png)
![github_removed_staging_file_and_updated_prod](images/github_removed_staging_file_and_updated_prod.png)
![prod_waiting](images/prod_waiting.png)
![rollout_new_started](images/rollout_new_started.png)
![rollout_analysis_started](images/rollout_analysis_started.png)
![rollout_measurements](images/rollout_measurements.png)
![pong_response_complex](images/pong_response_complex.png)
![rollout_complete_sync_success](images/rollout_complete_sync_success.png)
![prod_resumed](images/prod_resumed.png)
![prod_complete](images/prod_complete.png)
![all_complete](images/all_complete.png)
![argocd_staging_deleted](images/argocd_staging_deleted.png)
