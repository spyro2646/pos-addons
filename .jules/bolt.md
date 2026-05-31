## 2024-05-31 - Upgrade Legacy GitHub Actions to v4 for Faster Execution and Better Caching

**Learning:** Legacy GitHub Actions (like actions/cache@v1, actions/upload-artifact@v1,
actions/download-artifact@v1) use an outdated Node.js execution environment and legacy
caching backends, resulting in slower execution times, deprecation warnings, and
potential failures. Upgrading to v4 versions leverages modern Node.js and zstd
compression. **Action:** Always upgrade core setup, caching, and artifact actions to v4
for improved CI pipeline performance, but add `continue-on-error: true` for
`actions/download-artifact@v4` if the artifact upload is conditionally executed, as v4
strictly fails on missing artifacts.
