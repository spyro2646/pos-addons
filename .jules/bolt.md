## 2023-10-27 - Actions Cache Speed Up
**Learning:** Legacy GitHub Actions on deprecated Node.js versions generate warnings but also slow down the runner over time, whereas modern v4+ versions natively support faster caching logic and don't stall the runner with compatibility overhead. Upgrading `actions/cache` and related tools from v1/v2 to v4 provides a measurable speed boost to CI runtime.
**Action:** Always default to modern (v4+) versions of GitHub Actions when configuring CI/CD pipelines to ensure maximum execution speed.
