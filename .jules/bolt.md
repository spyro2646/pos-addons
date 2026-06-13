## 2024-06-13 - [Performance] Upgraded Github actions caching and artifacts

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. Action versions should be kept up to date for efficiency and reliability in
GitHub workflows. **Action:** Always verify if any GitHub workflows are using deprecated
or outdated actions and proactively upgrade to the newest stable versions to leverage
better caching algorithms and workflow execution times.

## 2024-06-13 - [Performance/CI] Fixed Docker Compose and Action Deprecations

**Learning:** In modern GitHub Action runners, the standalone `docker-compose` command
may be unavailable resulting in a 'command not found' (exit code 127). The Docker
Compose V2 plugin syntax (`docker compose`) must be used instead. Additionally, Docker
Compose v2 strictly enforces project name validation (must be lowercase). Finally, older
GitHub Actions like `actions/checkout@v2` running on Node 20 are being deprecated; they
should be upgraded to v4 to prevent failures. **Action:** Always use `docker compose`
instead of `docker-compose`, ensure project names (`-p`) are lowercase, and proactively
upgrade deprecated `actions/checkout` and `actions/setup-python` versions.
