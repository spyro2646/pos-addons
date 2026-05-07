## 2025-02-18 - CI Optimization: Remove Redundant pre-installed tools

**Learning:** Common CLI utilities like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` environments. Running `sudo apt-get install jq` unnecessarily wastes
network bandwidth and execution time on every workflow run. **Action:** When auditing or
optimizing GitHub Actions workflows, proactively identify and remove manual
installations of standard tools (e.g., `jq`, `curl`, `git`) that are already part of the
GitHub-hosted runner image specifications.

## 2025-02-18 - CI Optimization: Action Version Bumps for Compatibility

**Learning:** GitHub Actions environments evolve rapidly, and deprecating older actions
(like `actions/cache@v1` and `actions/upload-artifact@v1` relying on EOL Node.js
versions) can cause sudden hard failures in CI workflows, as seen with the recent
disabling of v1/v2 artifact and cache actions. **Action:** When CI fails due to action
deprecations, proactively bump all core GitHub Actions (`checkout`, `setup-python`,
`cache`, `upload-artifact`, `download-artifact`) to their latest stable major versions
(e.g., `v4` or `v5`) across all workflow files simultaneously to prevent rolling
failures.

## 2025-02-18 - CI Optimization: Docker Compose v2 Migration and Node.js Opt-in

**Learning:** Modern GitHub Actions Ubuntu environments (e.g., `ubuntu-24.04`) have
dropped support for the legacy `docker-compose` (v1) Python command. Workflows must
migrate to the native `docker compose` (v2) Go plugin to avoid `command not found` exit
code 127 errors. Furthermore, modernizing GitHub Actions may trigger Node.js 20
deprecation warnings, which require an explicit opt-in to Node 24 via workflow
environment variables. **Action:** When auditing legacy GitHub Actions workflows,
proactively replace `docker-compose` commands with `docker compose` (taking care to
exclude filenames like `docker-compose.yml`) and insert the
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` environment variable at the workflow root to
prevent immediate breakage and future-proof the runner environment.
