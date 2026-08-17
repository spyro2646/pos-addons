## 2024-08-17 - Optimize GitHub Actions Versions

**Learning:** Legacy GitHub Action versions (v1, v2) use older Node.js versions which
are deprecated and slower. Upgrading to modern versions (v4/v5) uses Node 20
architecture and faster caching mechanisms, providing a performance optimization in
repositories primarily composed of CI/CD configurations. However, care must be taken
with version upgrades: `actions/setup-python@v5` drops support for Python 3.7, and
`actions/upload-artifact@v4` strictly fails on missing directories unless
`if-no-files-found: ignore` is set. **Action:** When working on GitHub Actions
configurations, always ensure core actions like checkout, cache, and artifact
uploading/downloading are updated to their latest compatible versions for optimal
performance, while validating specific node/python version requirements.
