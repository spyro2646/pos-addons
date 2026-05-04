## 2024-05-18 - CI Failures from Deprecated Node and Docker Compose v1

**Learning:** Modern GitHub Actions runners (`ubuntu-24.04`) do not support
`docker-compose` (v1) and will throw an exit 127 "command not found" error.
Additionally, GitHub Actions that rely on Node 20 are being deprecated, causing warnings
and failures. **Action:** Always use the v2 syntax `docker compose` with lowercase
project names (e.g., `-p dinar`). To resolve Node 20 deprecation issues, define a global
`env:` block with `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`.
