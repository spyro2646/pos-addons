## 2024-08-15 - Upgrade GitHub Actions for Performance

**Learning:** Upgrading GitHub Actions to modern versions (v4/v5) improves execution
time by leveraging faster Node.js architectures (Node 20). However,
actions/upload-artifact@v4 requires `if-no-files-found: ignore` if the folder might be
empty, and actions/download-artifact@v4 no longer automatically creates the target
directory when bypassing missing artifacts with `continue-on-error: true`. **Action:**
Always verify directory existence and create necessary folders (e.g., `mkdir -p`) before
using download-artifact v4 with `continue-on-error`, and use `if-no-files-found: ignore`
to prevent upload warnings/failures.

## 2024-08-15 - Migrate docker-compose to docker compose v2

**Learning:** `docker-compose` (v1) is missing on newer Ubuntu CI runners (like
ubuntu-24.04), causing "exit code 127" failures. **Action:** Migrate workflows to Docker
Compose v2 by replacing `docker-compose` with `docker compose`. Ensure project names are
validated (e.g., `-p dinar` instead of `-p DINAR`), and safely handle missing remote
images by adding `--ignore-pull-failures` to pull commands.

## 2024-08-15 - Migrate docker-compose container names to v2

**Learning:** When migrating from Docker Compose v1 (`docker-compose`) to v2
(`docker compose`), default container names change from using underscores (e.g.,
`project_service_1`) to hyphens (e.g., `project-service-1`). **Action:** Any downstream
scripts or commands relying on explicit V1 container names must be updated to use the V2
hyphenated syntax to avoid execution failures.
