## 2024-05-08 - Optimize jq Installation

**Learning:** Standard tools like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` runners. **Action:** Avoid manual `apt-get install` steps for these
common tools to optimize CI execution time and reduce network requests.

## 2024-05-08 - Upgrade GitHub Actions Versions

**Learning:** CI pipelines can hard fail due to deprecated versions of GitHub Actions
like cache@v1 and upload-artifact@v1 blocking execution. **Action:** Proactively upgrade
all standard GitHub Actions (checkout, cache, artifact, setup-python) to their modern
v4/v5 versions to ensure workflow stability.

## 2024-05-08 - Docker Compose v2 Migration and Node 24 Opt-in

**Learning:** GitHub Actions modern runners dropped support for docker-compose (v1).
Additionally, v2 forces lowercase project names (-p dinar) and hyphens in default
container names (dinar-odoo-1). Separately, Node.js 20 actions are deprecated.
**Action:** Upgrade commands to docker compose, strictly enforce lowercase project
names, update container reference names, and globally opt-in to Node 24 using the
FORCE_JAVASCRIPT_ACTIONS_TO_NODE24 environment variable to fix CI pipeline hard
failures.

## 2024-05-08 - Docker Compose v2 Pull Behavior

**Learning:** Docker Compose v2 defaults to pulling missing images on up commands,
throwing 'manifest unknown' if they don't exist. **Action:** Use 'docker compose pull
--ignore-pull-failures || true' and explicitly add '--pull never' to all subsequent 'up'
commands (like '--no-start' and '--abort-on-container-exit') to prevent hard failures
for missing base images that are built later.
