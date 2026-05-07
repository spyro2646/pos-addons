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
