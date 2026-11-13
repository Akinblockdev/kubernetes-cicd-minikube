# Day 32/90 — Kubernetes Rolling Updates and Rollback Recovery

## Project Overview

This project demonstrates how to manage application releases and recover from failed deployments in Kubernetes.

Using an existing Node.js application deployed to Minikube, I configured a rolling-update strategy, deployed an updated application version, simulated a failed release and restored the previous working version.

## Technologies Used

- Kubernetes
- Minikube
- Docker
- GitHub Actions
- GitHub Container Registry (GHCR)
- Node.js
- Ubuntu Linux
- kubectl

## Project Objectives

1. Configure a Kubernetes rolling-update strategy.
2. Deploy Version 2 of the Node.js application.
3. Monitor application rollout and Pod health.
4. Simulate a deployment failure using an invalid container image.
5. Investigate Kubernetes deployment errors.
6. Restore the last working deployment.
7. Verify application availability after recovery.

## Deployment Configuration

The Kubernetes Deployment uses two application replicas and the following rolling-update strategy:

```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
```

This configuration allows Kubernetes to create one additional Pod during an update while maintaining the desired number of available replicas.

## Implementation

### 1. Application Update

Updated the Node.js application to Version 2 and added automated tests to verify the application version and health endpoint.

### 2. Rolling Update

Deployed the updated application and monitored Kubernetes rollout status and Pod readiness.

### 3. Failure Simulation

Introduced an invalid container image:

`ghcr.io/dbayode/kubernetes-cicd-minikube:broken-v3`

Kubernetes was unable to retrieve the image, causing the new Pod to fail during startup.

### 4. Troubleshooting

Investigated the deployment using:

```bash
kubectl get pods
kubectl describe deployment devops-day30-app
kubectl describe pod <failed-pod-name>
kubectl rollout status deployment/devops-day30-app
```

The investigation identified an image retrieval failure.

### 5. Rollback and Recovery

Restored the previous working Deployment revision:

```bash
kubectl rollout undo deployment/devops-day30-app
```

Verified recovery:

```bash
kubectl rollout status deployment/devops-day30-app
kubectl get deployments
kubectl get pods
```

Confirmed that the application returned to Version 2 and its health endpoint responded successfully.

## Results

- Rolling-update strategy configured.
- Version 2 deployed successfully.
- Invalid image deployment failure reproduced.
- Failure investigated using Kubernetes events and rollout status.
- Previous working version restored.
- Application health verified after recovery.

## Key Lessons

- Rolling updates help maintain application availability during releases.
- Readiness probes are essential for determining when new Pods can receive traffic.
- Kubernetes events provide useful information when deployments fail.
- Rollback procedures reduce recovery time after unsuccessful releases.
- Immutable image tags improve release traceability.

## Evidence

See the `screenshots/` directory and saved command outputs for deployment status, rollout history, Pod health and recovery verification.

## Conclusion

This project strengthened my practical understanding of Kubernetes release management, deployment troubleshooting and rollback recovery.

The exercise demonstrated how to investigate a failed application release and restore a previously working deployment using Kubernetes-native tools.
