# Day 36 — Kubernetes Networking, Services & Ingress

## Project Overview

Configured Kubernetes networking and NGINX Ingress to expose a containerised Node.js application running on Minikube.

## Technologies

- Kubernetes
- Minikube
- NGINX Ingress Controller
- Docker
- Node.js
- Ubuntu Linux

## Objectives

- Understand Kubernetes networking and Service types.
- Test internal Pod-to-Service communication.
- Configure the NGINX Ingress Controller.
- Implement hostname-based HTTP routing.
- Verify application connectivity.

## Implementation

### 1. Kubernetes Service Discovery

Created a temporary BusyBox Pod to investigate Kubernetes DNS and internal application connectivity.

### 2. NGINX Ingress Controller

Enabled the Minikube Ingress addon and verified the controller deployment.

### 3. Ingress Configuration

Created an Ingress resource routing requests from `devops.local` to the existing `devops-day30-service` on port 80.

### 4. Local Hostname Resolution

Configured the Ubuntu hosts file to resolve `devops.local` to the Minikube IP address.

### 5. Testing

Verified successful HTTP connectivity using:

```bash
curl -i http://devops.local/health
```

The application returned a successful HTTP response.

## Results

- Kubernetes Service networking verified.
- NGINX Ingress configured successfully.
- Hostname-based routing operational.
- Node.js application accessible through `devops.local`.
- Existing application replicas remained healthy.

## Key Lessons

- ClusterIP Services enable internal application communication.
- Kubernetes DNS provides service discovery.
- Ingress supports HTTP routing based on hostnames and paths.
- Ingress controllers implement the routing rules defined in Ingress resources.
- Networking verification is essential when troubleshooting Kubernetes applications.

## Conclusion

This project improved my practical understanding of Kubernetes networking, service discovery and application exposure through NGINX Ingress.
