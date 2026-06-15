## 2024-06-16 - GitHub Actions Versions

**Learning:** Upgrading `actions/cache`, `actions/upload-artifact`, and
`actions/download-artifact` from v1 to v4 provides performance improvements via zstd
compression and modernized backends. It's also important to update `actions/checkout` to
v4 to avoid Node.js deprecation warnings and benefit from performance improvements in
fetching. **Action:** When updating GitHub Actions workflows for performance and
modernization, always upgrade `actions/cache`, `actions/upload-artifact`,
`actions/download-artifact`, and `actions/checkout` to their latest v4 versions.

## 2024-06-16 - Docker Compose v2 Migration

**Learning:** Upgrading `docker-compose` to Docker Compose V2 plugin `docker compose` is
necessary in modern GitHub Actions environments. V2 enforces stricter project name
validation (must be lowercase) and changes the default container naming convention
(hyphens instead of underscores). We also need to tolerate missing remote images without
breaking CI scripts by explicitly appending `|| true` to the `docker compose up`
command. **Action:** When updating Docker commands, always replace `docker-compose` with
`docker compose`, use lowercase project names, append `|| true` to `docker compose up`
commands, and update container name references to use hyphens instead of underscores.
