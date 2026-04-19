## 2024-04-19 - Standard tools in CI

**Learning:** Common tools like `jq` are pre-installed on GitHub Actions runners (e.g.,
ubuntu-latest). **Action:** Avoid manual `apt-get install jq` (or similar standard
tools) in workflow files, as it adds unnecessary time to CI execution.
