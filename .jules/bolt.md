## 2024-08-17 - Docker Compose v1 to v2 Migration

**Learning:** When migrating from Docker Compose v1 (`docker-compose`) to v2
(`docker compose`), default container names change from using underscores to hyphens,
and project names (passed via the `-p` flag) are strictly validated. They must consist
only of lowercase alphanumeric characters, hyphens, and underscores. For instance,
`DINAR` is invalid and must be changed to `dinar`. Newer GitHub Actions environments
like ubuntu-24.04 may not have `docker-compose` installed by default. **Action:** When
mitigating missing commands like `docker-compose` on newer CI runners, do not inject
hacky shell wrapper scripts. Instead, cleanly migrate the commands to their modern
equivalents (e.g., `docker compose`) and update associated syntax like project names
(e.g. from `DINAR` to `dinar`).
