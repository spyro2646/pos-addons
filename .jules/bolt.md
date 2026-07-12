## 2025-02-24 - Upgrading deprecated GitHub Actions dependencies

**Learning:** Upgrading deprecated workflow actions, like `actions/setup-python@v1` to
`v4`, `actions/checkout@v2` to `v4` and `actions/download-artifact@v1` to `v4`, enables
workflows to use Node 20, improving execution speed and preventing pipeline hard
failures due to legacy dependency restrictions in GitHub Action environments.
**Action:** When working on GitHub CI optimizations, proactively update to newer
versions (e.g. `v4`) and handle behavior changes such as `download-artifact@v4`
strictness about missing files by pairing it with `continue-on-error: true` and adding
custom bash directory checks.
