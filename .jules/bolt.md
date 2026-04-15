## 2024-05-18 - CI Optimization: Remove redundant jq installation
**Learning:** Standard tools like `jq` are already pre-installed on GitHub Actions `ubuntu-latest` runners. Running `sudo apt-get install jq` unnecessarily wastes CI execution time (due to package index updates and installation).
**Action:** Always verify if a required tool is pre-installed on the target CI environment before adding manual installation steps to workflows.
