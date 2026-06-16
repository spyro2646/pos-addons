## 2024-06-16 - GitHub Actions Artifact Performance

**Learning:** Upgrading `actions/upload-artifact` and `actions/download-artifact` from
v1 to v4 yields significant CI execution performance improvements due to a modernized
backend and zstd compression. However, the v4 `actions/upload-artifact` action strictly
fails if the target path is missing, and `actions/download-artifact` fails if the
artifact is missing, whereas v1 was more permissive. **Action:** When migrating artifact
actions to v4 to improve CI performance in environments where artifacts are
conditionally generated, explicitly add `if-no-files-found: ignore` to
`actions/upload-artifact` and `continue-on-error: true` to the step running
`actions/download-artifact` to prevent pipeline failures.

## 2024-06-16 - Node.js Deprecations and Docker Compose v2

**Learning:** Old GitHub actions (`actions/checkout@v2`, `actions/setup-python@v4`) rely
on deprecated Node.js versions which trigger warnings and eventually fail the build.
Additionally, on modern GitHub Actions runners, the standalone `docker-compose` command
is unavailable (exit code 127), and strict lowercase project names are enforced when
using `docker compose` (Docker Compose V2). **Action:** When modernizing CI, bump
`actions/checkout` to `v4` and `actions/setup-python` to `v5`. Replace `docker-compose`
with `docker compose`, ensure project names are lowercase (e.g., `dinar` instead of
`DINAR`), and update hardcoded container names to the v2 hyphen format (`dinar-odoo-1`).
Use `|| true` with commands like `pull` and `up --no-start` to tolerate missing images
dynamically.
