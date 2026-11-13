# Kubernetes Deployment Incident Report

**Project:** Day 32 — DevOps Winter Arc  
**Environment:** Local Minikube Kubernetes cluster  
**Application:** devops-day30-app  
**Incident Type:** Container image retrieval failure  
**Severity:** Controlled training exercise

## 1. Incident Summary

During a controlled Kubernetes deployment exercise, I intentionally updated the application to reference a nonexistent container image.

The new application Pod could not retrieve the image, preventing the rollout from completing.

## 2. Root Cause

The Deployment referenced an invalid image tag:

`ghcr.io/dbayode/kubernetes-cicd-minikube:broken-v3`

The container image was unavailable in the registry.

## 3. Investigation

I investigated the issue using Kubernetes commands to inspect Pod status, deployment events and rollout progress.

The investigation identified an image pull failure.

## 4. Resolution

I restored the previous working Kubernetes Deployment revision using:

```bash
kubectl rollout undo deployment/devops-day30-app
```

I then verified the rollout status, available replicas and application health.

## 5. Impact

This was an intentional failure simulation in a local development environment.

The failed release did not complete. The existing healthy application replicas were retained during the experiment.

## 6. Preventive Measures

- Validate container image references before deployment.
- Use immutable version or commit-SHA tags.
- Maintain application readiness probes.
- Configure rolling-update availability settings.
- Monitor deployment rollout status.
- Maintain documented rollback procedures.

## 7. Lessons Learned

The exercise demonstrated the importance of deployment monitoring, reliable image management and having a tested recovery procedure.

It also reinforced the value of using Kubernetes events and rollout history when troubleshooting deployment failures.
