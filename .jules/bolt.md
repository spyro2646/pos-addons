## 2024-05-24 - CI Optimization: Remove pre-installed tool installations

**Learning:** Common tools like `jq` are pre-installed on GitHub Actions `ubuntu-latest`
runners. Re-installing them via `apt-get` adds unnecessary network and execution
overhead. **Action:** Prior to adding package manager install steps in CI workflows,
verify if the tool is already provided by the runner environment to optimize pipeline
execution time.

## 2024-05-24 - CI Fix: Upgrade deprecated GitHub Actions

**Learning:** Using old, deprecated versions of GitHub Actions (like `actions/cache@v1`
or `actions/upload-artifact@v1`) causes hard failures in modern CI runners (like
ubuntu-24.04). **Action:** Always maintain and proactively upgrade GitHub Actions
dependencies (e.g., to `v4` or `v5`) to ensure pipeline reliability and avoid sudden
deprecation breakages.
