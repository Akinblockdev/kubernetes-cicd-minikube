## Day 32 — Kubernetes Rolling Updates & Rollback Recovery

Extended the CI/CD Kubernetes project to demonstrate release management and failure recovery.

**Completed:**
- Configured Kubernetes rolling updates with two replicas.
- Deployed Node.js application Version 2.
- Simulated an invalid container image deployment.
- Investigated image pull errors and rollout failure.
- Restored the previous working deployment using `kubectl rollout undo`.
- Verified application recovery and health.

**Documentation:** [Day 32 Project Report](docs/day32/README.md)

**Incident Analysis:** [Kubernetes Incident Report](docs/day32/incident-report.md)
