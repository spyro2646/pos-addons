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
