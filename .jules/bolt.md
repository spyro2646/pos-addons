## 2024-08-11 - GitHub Actions Upgrade

**Learning:** Upgrading `actions/download-artifact` to v4 introduces stricter
validation, and requires handling missing directories properly if bypassed with
`continue-on-error: true`. **Action:** When upgrading actions to v4, always evaluate
implications on expected directories downstream, and ensure scripts check for both
directory and file existence.
## 2024-08-11 - Docker Compose v2 Migration
**Learning:** Newer Ubuntu runners in GitHub Actions (like ubuntu-24.04) no longer bundle Docker Compose v1 (`docker-compose`). This causes CI failures with exit code 127.
**Action:** Always migrate explicit `docker-compose` commands to `docker compose` in CI workflows for compatibility with newer runner images, and remember to convert project names to valid syntax (lowercase only).
