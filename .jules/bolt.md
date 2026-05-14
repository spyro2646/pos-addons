## 2024-05-24 - CI Optimization: Remove pre-installed tool installations

**Learning:** Common tools like `jq` are pre-installed on GitHub Actions `ubuntu-latest`
runners. Re-installing them via `apt-get` adds unnecessary network and execution
overhead. **Action:** Prior to adding package manager install steps in CI workflows,
verify if the tool is already provided by the runner environment to optimize pipeline
execution time.
