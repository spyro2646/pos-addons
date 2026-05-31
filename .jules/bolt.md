## 2024-05-31 - Upgrade Legacy GitHub Actions to v4 for Faster Execution and Better Caching

**Learning:** Legacy GitHub Actions (like actions/cache@v1, actions/upload-artifact@v1,
actions/download-artifact@v1) use an outdated Node.js execution environment and legacy
caching backends, resulting in slower execution times, deprecation warnings, and
potential failures. Upgrading to v4 versions leverages modern Node.js and zstd
compression. **Action:** Always upgrade core setup, caching, and artifact actions to v4
for improved CI pipeline performance, but add `continue-on-error: true` for
`actions/download-artifact@v4` if the artifact upload is conditionally executed, as v4
strictly fails on missing artifacts.

## 2024-05-31 - Upgrade Legacy GitHub Actions to prevent Deprecation CI Failures

**Learning:** Node.js 20 is being deprecated on runner environments starting with
`ubuntu-24.04`, meaning legacy versions of actions like `actions/checkout@v2` and
`actions/cache@v1` will strictly fail or exhibit breaking behavior. Furthermore,
`docker-compose` v1 has been removed from `ubuntu-24.04` images entirely. **Action:**
When fixing CI pipeline failures related to node/runner deprecation, actively find and
upgrade all legacy core actions (`actions/checkout`, `actions/cache`,
`actions/setup-python`, `actions/upload-artifact`, `actions/download-artifact`) to v4.
Additionally, actively scan for and update all legacy `docker-compose` commands to
`docker compose` (with `-p dinar` instead of uppercase `-p DINAR`), to ensure the
pipeline natively supports the modern v2 plugin syntax.
