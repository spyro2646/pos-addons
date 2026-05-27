## 2024-05-27 - [Upgrading legacy GitHub Actions to v4]

**Learning:** Legacy GitHub Actions (like actions/cache@v1, actions/upload-artifact@v1,
actions/download-artifact@v1) use deprecated Node.js versions which can cause workflow
failures or deprecation warnings, and lack performance enhancements like zstd
compression found in v4. **Action:** Always upgrade actions/cache,
actions/upload-artifact, and actions/download-artifact from v1/v2 to v4 to improve CI
performance and avoid Node deprecation failures. When conditional logic is involved with
artifacts, use `continue-on-error: true` for the download step if the artifact may not
exist.

## 2024-05-27 - [Removing redundant apt-get install jq]

**Learning:** Standard tools like `jq` are pre-installed on modern GitHub Actions
`ubuntu-latest` runners. Manually installing them wastes CI time. **Action:** Remove
manual `apt-get install jq` steps to optimize CI execution time.

## 2024-05-27 - [Migrating to Docker Compose v2]

**Learning:** Modern GitHub Actions Ubuntu runners (such as `ubuntu-latest` /
`ubuntu-24.04`) do not come pre-installed with the legacy `docker-compose` v1 command,
leading to `command not found` (exit code 127) errors. Also, Docker Compose v2 enforces
strict project naming (lowercase letters, hyphens, and underscores) via the `-p` flag,
and the default container naming scheme changes from underscores (`_1`) to hyphens
(`-1`). **Action:** When migrating workflows or encountering
`docker-compose: command not found`, replace `docker-compose` with `docker compose`.
Ensure project names passed via `-p` are lowercase (e.g., `-p dinar` instead of
`-p DINAR`), and update downstream container references in scripts (e.g.,
`docker inspect dinar-odoo-1` instead of `dinar_odoo_1`) to match the new naming
conventions. Be careful to exclude `-f` filenames from `sed` replacements.
