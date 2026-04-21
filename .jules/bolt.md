## 2024-05-15 - Remove redundant package installations in CI

**Learning:** Tools like `jq` are pre-installed on standard GitHub Actions runner images
(e.g., `ubuntu-latest`). Explicitly running `sudo apt-get install jq` in workflow steps
adds unnecessary execution time and creates redundant logic. **Action:** Before adding
steps to manually install common tools via `apt-get` or similar package managers in CI,
check the pre-installed tools list for the runner image. If the tool is available
out-of-the-box, rely on it directly to optimize workflow performance.
