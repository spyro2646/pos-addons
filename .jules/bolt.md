## 2024-06-01 - Upgrading GitHub Actions Node dependencies

**Learning:** This repository extensively uses `actions/cache@v1`,
`actions/upload-artifact@v1`, `actions/download-artifact@v1`, and `actions/checkout@v2`.
These older actions run on legacy Node.js versions which are being deprecated and can
cause hard CI failures or slowness. Upgrading cache and artifact actions to v4 provides
a significant CI execution performance improvement due to a modernized backend and zstd
compression. **Action:** Upgrade GitHub Actions (specifically cache, upload/download
artifacts) from v1/v2 to v4 to improve CI performance.

## 2024-06-01 - Upgrading GitHub Actions checkout to v4 and docker-compose to docker compose

**Learning:** `actions/checkout@v2` runs on legacy Node.js 20 which is being deprecated
and causes CI failures. The legacy `docker-compose` command is no longer available on
modern GitHub Actions runners (`ubuntu-latest`) which causes `command not found` errors.
**Action:** Upgraded `actions/checkout` to `v4` in all workflows, set
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` as an environment variable to suppress any
lingering warnings, and replaced all instances of `docker-compose` with `docker compose`
in `DINAR-pr.yml` and `DINAR-PORT.yml` while ensuring the project name flag is lowercase
(`-p dinar`) to adhere to Compose v2 strict naming validation. Also appended `|| true`
to `docker compose pull` commands to prevent hard failures on missing images.
