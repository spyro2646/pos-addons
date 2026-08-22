## 2026-08-22 - Missing commands on modern CI runner (Ubuntu 24.04)

**Learning:** The CI workflow failed with "docker-compose: command not found" because it
was running on an `ubuntu-24.04` runner. Modern runner images (like Ubuntu 24.04) no
longer include Docker Compose v1 (`docker-compose`). Docker Compose v2
(`docker compose`) must be used instead. **Action:** Replace `docker-compose` with
`docker compose` across all CI scripts and configurations. Additionally, in Docker
Compose v2, project names passed via the `-p` flag must be lowercase (e.g., `dinar`
instead of `DINAR`), otherwise it will fail with an "invalid project name" error. I must
NOT assume unverified flags like `--ignore-pull-failures` without testing/verifying.
