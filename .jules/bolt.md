## 2024-08-17 - GitHub Actions and Docker Compose Migration

**Learning:** Legacy GitHub Action versions (v1, v2) use older Node.js versions which
are deprecated and slower. Upgrading to modern versions (v4/v5) uses Node 20
architecture and faster caching mechanisms. Similarly, modern CI environments often lack
Docker Compose v1 (`docker-compose`). Migrating to `docker compose` v2 requires renaming
strict project names (e.g., `DINAR` to `dinar`) and managing `--ignore-pull-failures` to
gracefully handle missing remote images while avoiding redundant pull attempts with
`--pull never`. **Action:** When mitigating missing commands on newer CI runners, do not
inject hacky wrappers. Instead, cleanly migrate to modern equivalents (`docker compose`)
while carefully adapting options like `--pull` and strict naming rules. Simultaneously,
proactively upgrade core actions (checkout, cache, setup-python, artifact) to avoid
deprecated Node environments while minding specific limitations like `setup-python@v5`
dropping Python 3.7.
