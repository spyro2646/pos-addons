## 2024-05-19 - Remove redundant jq installations from GitHub Actions

**Learning:** `jq` is pre-installed on GitHub Actions `ubuntu-latest` runners. Manually
installing it with `sudo apt-get install jq` is redundant, slows down CI execution time,
and violates optimization guidelines for these environments. **Action:** Remove explicit
`sudo apt-get install jq` steps from GitHub Actions workflow files to optimize execution
time.
