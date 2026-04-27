## 2024-06-25 - Avoid installing pre-installed tools in GitHub Actions
**Learning:** Common tools like `jq` are pre-installed on `ubuntu-latest` runners. Running `sudo apt-get install jq` unnecessarily consumes CI execution time (network requests, apt updates, install process).
**Action:** Always check if a tool is natively available on the runner before manually installing it via `apt-get` to optimize workflow performance.
