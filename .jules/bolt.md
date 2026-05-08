## 2024-05-08 - Optimize jq Installation

**Learning:** Standard tools like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` runners. **Action:** Avoid manual `apt-get install` steps for these
common tools to optimize CI execution time and reduce network requests.

## 2024-05-08 - Upgrade GitHub Actions Versions

**Learning:** CI pipelines can hard fail due to deprecated versions of GitHub Actions
like cache@v1 and upload-artifact@v1 blocking execution. **Action:** Proactively upgrade
all standard GitHub Actions (checkout, cache, artifact, setup-python) to their modern
v4/v5 versions to ensure workflow stability.
