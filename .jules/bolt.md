## 2024-05-18 - CI Failures from Deprecated Node and Docker Compose v1

**Learning:** Modern GitHub Actions runners (`ubuntu-24.04`) do not support
`docker-compose` (v1) and will throw an exit 127 "command not found" error.
Additionally, GitHub Actions that rely on Node 20 are being deprecated, causing warnings
and failures. **Action:** Always use the v2 syntax `docker compose` with lowercase
project names (e.g., `-p dinar`). To resolve Node 20 deprecation issues, define a global
`env:` block with `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`.

## 2024-05-18 - Docker Compose v2 Pull Error Handling in CI

**Learning:** In Docker Compose v2, if `docker compose pull` fails (e.g., "manifest
unknown"), `--ignore-pull-failures` still throws a non-zero exit code. Even if that
failure is suppressed using `|| true`, subsequent `docker compose up` commands that rely
on the missing image will attempt to pull it again by default, resulting in a new exit 1
failure. **Action:** In CI pipelines where pull failures are intentionally ignored to
allow fallback logic (like building missing layers), explicitly append `--pull never` to
all subsequent `docker compose up` commands to prevent them from attempting the failing
pull a second time.
