## 2024-05-08 - Optimize jq Installation

**Learning:** Standard tools like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` runners. **Action:** Avoid manual `apt-get install` steps for these
common tools to optimize CI execution time and reduce network requests.
