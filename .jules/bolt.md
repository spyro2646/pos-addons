## 2024-06-16 - Docker Compose v2 Migration

**Learning:** Upgrading `docker-compose` to Docker Compose V2 plugin `docker compose` is
necessary in modern GitHub Actions environments. V2 enforces stricter project name
validation (must be lowercase) and changes the default container naming convention
(hyphens instead of underscores). We also need to tolerate missing remote images without
breaking CI scripts by explicitly appending `|| true` to the `docker compose up`
command. **Action:** When updating Docker commands, always replace `docker-compose` with
`docker compose`, use lowercase project names, append `|| true` to `docker compose up`
commands, and update container name references to use hyphens instead of underscores.
