## 2024-04-28 - GitHub Actions Runner Default Tools
**Learning:** Standard utilities like `jq` are pre-installed on standard GitHub-hosted runners (e.g., `ubuntu-latest`).
**Action:** Remove redundant `apt-get install` commands for standard utilities from workflows to immediately save ~10-30 seconds of CI pipeline execution time.
## 2024-04-28 - GitHub Actions Runner Deprecations
**Learning:** GitHub Actions using Node.js 12 and 16, specifically `actions/checkout@v2`, `actions/cache@v1`, and `actions/upload-artifact@v1`/`actions/download-artifact@v1` are failing workflow executions due to deprecation.
**Action:** Always verify and upgrade all legacy GitHub actions in workflow files (`.github/workflows/*.yml`) to their modern `v4` or `v5` equivalents to ensure continuous pipeline operation and prevent hard CI failures.
