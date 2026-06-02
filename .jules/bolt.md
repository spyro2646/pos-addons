## 2026-06-02 - CI Action Version Update

**Learning:** Upgrading `actions/cache`, `actions/upload-artifact`, and
`actions/download-artifact` from v1 to v4 is a significant performance optimization for
CI execution because v4 utilizes a modernized backend with zstd compression and a newer
Node runtime. However, when upgrading artifact actions to v4, you must configure
error-handling parameters (`if-no-files-found: ignore` for upload, and
`continue-on-error: true` for download) if the artifacts might be conditionally skipped
or missing, as v4 enforces strict failure by default. **Action:** When performing
performance upgrades of CI workflow actions, actively investigate any change in default
error-handling behavior (like missing artifacts triggering hard failures in v4) to
prevent breaking CI workflows.

## 2026-06-02 - Docker Compose v2 Migration in CI

**Learning:** Modern GitHub Actions runners (ubuntu-latest) have deprecated the legacy
`docker-compose` v1 binary in favor of the `docker compose` v2 plugin. Migrating
requires updating project names to lowercase (`-p DINAR` to `-p dinar`), updating script
container references to use hyphens instead of underscores (`dinar_odoo_1` to
`dinar-odoo-1`), and handling stricter pull behavior by appending
`--ignore-pull-failures` to prevent pipeline failures on missing manifest errors that
were previously ignored. **Action:** When updating CI scripts running on modern
infrastructure, proactively transition all container management commands to
`docker compose` v2 syntax and perform a thorough validation of dependent script
arguments (like `docker inspect` targets) to prevent silent failures.

## 2026-06-02 - GitHub Actions Checkout shallow fetch failure

**Learning:** `actions/checkout@v2` defaults to `fetch-depth: 1` (a shallow clone). When
performing operations that require repository history or comparing against a base branch
(like `git diff FETCH_HEAD..HEAD` during pre-commit checks), the shallow clone will fail
to fetch the necessary commits, resulting in CI failures. **Action:** When configuring
CI pipelines that require git history analysis or cross-branch diffing, explicitly
configure `actions/checkout` with `fetch-depth: 0` to pull the complete history and
ensure git comparison operations succeed.
