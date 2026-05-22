## 2024-05-22 - Avoid manual apt-get for pre-installed CI tools

**Learning:** Tools like `jq` are pre-installed on GitHub Actions `ubuntu-latest`
runners. Running manual `apt-get install` for these tools adds unnecessary overhead and
slows down the CI pipeline. **Action:** Before adding `apt-get install` steps in GitHub
Actions workflows, verify if the tool is already included in the runner environment to
optimize execution time.
