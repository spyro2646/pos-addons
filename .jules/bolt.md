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

## 2024-05-24 - CI Fix: Migrate to Docker Compose v2 & Node.js 24 Actions

**Learning:** Modern GitHub runner images (like `ubuntu-24.04`) do not ship with the
legacy `docker-compose` (v1) binary, causing `exit code 127` errors. Additionally,
actions running on Node.js 20 will soon throw deprecation warnings. **Action:** Always
use the v2 syntax `docker compose` (with a space) in CI scripts. Remember to update
project names to lowercase (e.g., `-p dinar`) and container name references from
underscores to hyphens (e.g., `dinar-odoo-1`). In v2, use
`--ignore-pull-failures || true` for pulls and `--pull never` for subsequent `up`
commands. To suppress Node.js 20 deprecation warnings and opt into the Node.js 24
runtime, set the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` environment variable at the
top level of workflow files.
