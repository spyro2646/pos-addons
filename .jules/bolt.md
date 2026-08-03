## 2024-05-23 - Upgrading GitHub Actions for Performance

**Learning:** Deprecated Node.js 12/16 based GitHub Actions (like checkout@v2 and
cache@v1) take longer to execute and are subject to deprecation warnings and potential
failures. Upgrading to Node 20 based actions (v4) improves workflow performance.
**Action:** Proactively upgrade core GitHub Actions to v4.

## 2024-05-23 - Docker Compose Migration

**Learning:** Newer GitHub Actions runner images (like ubuntu-24.04) no longer include
Docker Compose v1 (`docker-compose`), causing workflows to fail with exit code 127.
Migrating workflows to Docker Compose v2 requires replacing `docker-compose` with
`docker compose`, and v2 strictly validates project names (e.g. `-p DINAR` to
`-p dinar`). Also, default container names change from using underscores to hyphens
(e.g., `dinar_odoo_1` to `dinar-odoo-1`). **Action:** Safely replaced `docker-compose`
with `docker compose`, lowercase project names, and hyphenated container names to fix
the CI.
