## 2024-05-05 - Avoid manual installation of pre-installed CI tools

**Learning:** Standard tools like jq are pre-installed on GitHub Actions ubuntu-latest
runners. **Action:** Avoid manual apt-get install steps for these common tools to
optimize CI execution time.
