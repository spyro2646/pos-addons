## 2024-05-18 - Standard tools pre-installed on GitHub Actions runners

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. **Action:** Avoid manual `apt-get install` steps for these
common tools to optimize CI execution time.

## 2024-05-18 - CI Failures from Deprecated Actions and Docker Compose v1

**Learning:** Modern GitHub Actions runners (`ubuntu-latest`/24.04) enforce Node.js 24
and drop support for legacy `docker-compose` (v1), causing broken CI pipelines.
**Action:** Migrate to `docker compose` (v2), use hyphenated container names (`-1`
instead of `_1`), lowercase project names, and add
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` to adopt Node 24 for older actions.
