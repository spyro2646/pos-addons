## 2024-04-23 - Remove redundant apt-get install for jq in CI

**Learning:** Common tools like `jq` are pre-installed on GitHub Actions `ubuntu-latest`
runners. Running `sudo apt-get install jq` is redundant. **Action:** Avoid manual
`apt-get install` steps for pre-installed tools on GitHub Actions runners to optimize CI
execution time by avoiding slow package manager updates and downloads.
