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
