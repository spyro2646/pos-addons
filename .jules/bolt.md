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

## 2024-05-23 - Docker Inspect Error

**Learning:** When appending `--pull missing || true` to `docker compose up --no-start`
commands to tolerate missing remote images, if the image pull fails, the container will
not be created. Downstream commands expecting the container to exist (e.g.,
`docker inspect`) must be conditionally gated or they will fail. **Action:**
Conditionally gated `docker inspect` with an if-statement.

## 2024-05-23 - Artifact Upload/Download v4 Migration

**Learning:** In `actions/upload-artifact@v4`, if the target directory exists but
contains no files, the action will issue a warning ('No files were found with the
provided path'). To suppress this warning, configure the action with
`if-no-files-found: ignore` in the `with:` block. Furthermore, when using
`continue-on-error: true` with `actions/download-artifact@v4` to bypass missing
artifacts, the target directory will NOT be created unlike v1. Therefore, downstream
scripts must conditionally check for the directory (e.g., `[ ! -d dir ] || ...`).
**Action:** Add `if-no-files-found: ignore` to upload step, `continue-on-error: true` to
download step, and updated downstream script to check for directory existence.
