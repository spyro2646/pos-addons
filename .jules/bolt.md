## 2024-03-24 - Upgrading GitHub Actions

**Learning:** In repositories primarily composed of CI/CD configurations, upgrading core
GitHub Actions (e.g., checkout, cache, upload-artifact) to modern versions (like v4)
constitutes a valid performance optimization, as it leverages the faster Node 20
architecture and more efficient caching mechanisms. **Action:** Apply this optimization
to CI/CD workflows, ensuring to check for necessary structural changes when upgrading
`upload-artifact` to v4 as it restricts merging files from multiple matrix jobs.

## 2024-03-24 - Migrating Docker Compose V1 to V2

**Learning:** On newer CI runners (e.g., Ubuntu 24.04), the `docker-compose` (v1)
command is no longer pre-installed, resulting in 'command not found' (exit code 127) in
CI pipelines. **Action:** Workflows must be explicitly migrated to use the Docker
Compose v2 plugin syntax (`docker compose`) to resolve the underlying issue. Also, when
migrating from Docker Compose v1 to v2, default container naming conventions change (V1
uses underscores, V2 uses hyphens) and project names passed via the `-p` flag must
consist only of lowercase alphanumeric characters, hyphens, and underscores. Capitalized
project names valid in v1 will cause an 'invalid project name' error and must be
converted to lowercase.
