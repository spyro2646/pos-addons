## 2024-04-28 - GitHub Actions Runner Default Tools

**Learning:** Standard utilities like `jq` are pre-installed on standard GitHub-hosted
runners (e.g., `ubuntu-latest`). **Action:** Remove redundant `apt-get install` commands
for standard utilities from workflows to immediately save ~10-30 seconds of CI pipeline
execution time.

## 2024-04-28 - GitHub Actions Runner Deprecations

**Learning:** GitHub Actions using Node.js 12 and 16, specifically
`actions/checkout@v2`, `actions/cache@v1`, and
`actions/upload-artifact@v1`/`actions/download-artifact@v1` are failing workflow
executions due to deprecation. **Action:** Always verify and upgrade all legacy GitHub
actions in workflow files (`.github/workflows/*.yml`) to their modern `v4` or `v5`
equivalents to ensure continuous pipeline operation and prevent hard CI failures.

## 2024-04-28 - Docker Compose v2 Migration in GitHub Actions

**Learning:** Modern GitHub Actions runners (like `ubuntu-latest`/`ubuntu-24.04`) do not
come with the legacy `docker-compose` (v1) command pre-installed, leading to "command
not found" errors in workflows. **Action:** Always migrate legacy `docker-compose`
commands to the `docker compose` (v2) syntax. When doing so, remember that Docker
Compose v2 enforces strict validation for project names (`-p`), requiring them to be
lowercase alphanumeric (e.g., `dinar` instead of `DINAR`).
