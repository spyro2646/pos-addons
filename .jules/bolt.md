## 2026-06-18 - Upgrade GitHub Actions cache and artifacts to v4

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` from v1 to v4 provides a significant CI execution
performance improvement due to a modernized backend and zstd compression. **Action:**
Always use v4 for these actions. Be aware that v4 is stricter:
`actions/upload-artifact@v4` requires `if-no-files-found: ignore` to prevent failures
when files are absent, and `actions/download-artifact@v4` fails strictly if artifacts
are missing, necessitating `continue-on-error: true` on the step level when artifacts
are conditionally uploaded.

## 2026-06-18 - Upgrade docker-compose to docker compose v2

**Learning:** In modern GitHub Actions runners, the standalone `docker-compose` command
may be unavailable and result in a 'command not found' (exit code 127) error.
**Action:** Always use the Docker Compose V2 plugin syntax (`docker compose`) instead.
Update scripts appropriately, including tolerating missing remote images using
`--pull missing || true` and updating hyphens in default container names.
