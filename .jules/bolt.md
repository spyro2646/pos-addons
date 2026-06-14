## 2024-06-14 - CI Performance: Upgrade GitHub Actions

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` to v4 provides significant CI execution performance
improvement due to a modernized backend and zstd compression. However,
`actions/upload-artifact@v4` and `actions/download-artifact@v4` are stricter about
missing files, requiring `if-no-files-found: ignore` for upload and
`continue-on-error: true` for conditionally downloaded artifacts. **Action:** Upgrade
older GitHub Actions to v4 for performance benefits, but strictly manage missing
artifacts by using appropriate configurations (`if-no-files-found: ignore` and
`continue-on-error: true`).

## 2024-06-14 - CI Performance: Docker Compose v2 Migration and Node.js Warnings

**Learning:** In modern GitHub Actions runners, the standalone `docker-compose` command
is unavailable (exit code 127). It must be updated to the v2 syntax: `docker compose`.
Additionally, v2 strictly enforces lowercase project names (e.g., `-p dinar` instead of
`-p DINAR`). Furthermore, to prevent Node 20 deprecation warnings from legacy actions
like `checkout@v2`, the environment variable `FORCE_JAVASCRIPT_ACTIONS_TO_NODE20=true`
must be set. Finally, `docker compose pull || true` and
`docker compose up --no-start || true` are required when tolerating entirely missing
remote images, as the standalone commands will otherwise exit non-zero. **Action:**
Always use `docker compose` with lowercase project names in CI workflows. Set Node 24
env vars for older actions, and append `|| true` to pull/up commands when expecting
missing images.
