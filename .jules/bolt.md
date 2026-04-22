## 2024-05-24 - CI Optimization: Remove `sudo apt-get install jq`

**Learning:** `jq` is already pre-installed on GitHub Actions `ubuntu-latest` runners.
Running `sudo apt-get install jq` is redundant and wastes execution time during CI
workflows. **Action:** Remove `sudo apt-get install jq` steps from GitHub Actions
workflow files to optimize CI speed.
