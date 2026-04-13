## 2024-04-13 - Avoid redundant apt-get installs in CI

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions runner images
(e.g., `ubuntu-latest`). Installing them manually with `sudo apt-get install` wastes
valuable CI execution time. **Action:** Before running an `apt-get install` step in a CI
workflow, check if the package is already included in the standard runner image
environments to avoid redundant installation and speed up the CI pipeline.

## 2024-04-13 - Node.js 12 and 16 Deprecation causes CI Failure

**Learning:** GitHub Actions automatically fails workflow steps that use deprecated
actions based on older Node.js versions (e.g., Node 12 or Node 16). **Action:** Always
maintain and use the latest versions of standard GitHub actions (`checkout@v4`,
`cache@v4`, `setup-python@v5`, `upload-artifact@v4`) to avoid abrupt CI failures and
maintain fast workflow provisioning.

## 2024-04-13 - docker-compose v1 not available on ubuntu-24.04

**Learning:** The legacy `docker-compose` v1 command has been completely removed from
modern runner environments like `ubuntu-24.04`, resulting in a "command not found" error
with exit code 127. **Action:** Always use the modern `docker compose` (v2) syntax. Be
aware that v2 strictly enforces lowercase characters for project names (via the `-p`
flag), so `docker-compose -p DINAR` must become `docker compose -p dinar`.
