## 2026-08-31 - GitHub Actions Workflow Optimization for Node 20

**Learning:** In repositories primarily composed of CI/CD configurations, upgrading core
GitHub Actions (e.g., checkout, cache) to modern versions (like v4) constitutes a valid
performance optimization. This is because modern actions leverage the faster Node 20
architecture and employ more efficient caching mechanisms compared to older versions
that run on deprecated Node.js versions (like Node 12 or 16). **Action:** Always verify
action compatibility when upgrading to v4.
