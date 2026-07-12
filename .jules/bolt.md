## 2025-02-24 - Upgrading deprecated GitHub Actions dependencies

**Learning:** Upgrading deprecated workflow actions, like `actions/setup-python@v1` to
`v4`, `actions/checkout@v2` to `v4` and `actions/download-artifact@v1` to `v4`, enables
workflows to use Node 20, improving execution speed and preventing pipeline hard
failures due to legacy dependency restrictions in GitHub Action environments.
**Action:** When working on GitHub CI optimizations, proactively update to newer
versions (e.g. `v4`) and handle behavior changes such as `download-artifact@v4`
strictness about missing files by pairing it with `continue-on-error: true` and adding
custom bash directory checks.

## 2025-02-24 - Upgrading deprecated GitHub actions/cache

**Learning:** Node 20 deprecation will fail actions utilizing `actions/cache: v1`. We
must update workflows to `actions/cache@v4` to prevent CI hard-failure and keep Node 20
environments healthy. **Action:** When working on GitHub CI optimizations, also ensure
`actions/cache` is modernized alongside `actions/checkout` and `actions/setup-python`.

## 2025-02-24 - Docker Compose V2 Project Naming

**Learning:** Docker Compose V2 changes the default container naming convention, using
hyphens instead of underscores and converting project names to lowercase. Using
uppercase project names like `-p DINAR` will cause a failure:
`invalid project name "DINAR": must consist only of lowercase alphanumeric characters...`.
We must adapt hardcoded commands to lowercased values (e.g. `-p dinar`). **Action:**
When migrating from `docker-compose` to `docker compose`, also ensure you adapt project
names supplied to the `-p` parameter to only lowercase characters. Additionally, don't
blindly swallow errors using `|| true` on pulling and bringing up container operations
if the dependent code inherently relies on the container being present, as it will just
shift the failure to downstream jobs.

**Note:** The previous removal of `|| true` on missing image pulling created a
regression since `manifest unknown` will fail the CI if we don't handle it gracefully.
