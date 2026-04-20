## 2024-04-20 - Avoid unnecessary apt-get install for pre-installed tools

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. Running `sudo apt-get install jq` manually is redundant and
adds unnecessary execution time to the CI workflow. **Action:** Avoid adding manual
`apt-get install` steps for common tools on GitHub Actions runners to optimize CI
execution time.
