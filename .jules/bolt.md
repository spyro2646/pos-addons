## 2025-02-18 - CI Optimization: Remove Redundant pre-installed tools

**Learning:** Common CLI utilities like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` environments. Running `sudo apt-get install jq` unnecessarily wastes
network bandwidth and execution time on every workflow run. **Action:** When auditing or
optimizing GitHub Actions workflows, proactively identify and remove manual
installations of standard tools (e.g., `jq`, `curl`, `git`) that are already part of the
GitHub-hosted runner image specifications.
