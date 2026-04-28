## 2024-04-28 - GitHub Actions Runner Default Tools
**Learning:** Standard utilities like `jq` are pre-installed on standard GitHub-hosted runners (e.g., `ubuntu-latest`).
**Action:** Remove redundant `apt-get install` commands for standard utilities from workflows to immediately save ~10-30 seconds of CI pipeline execution time.
