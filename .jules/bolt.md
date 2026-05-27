## 2024-05-27 - [Upgrading legacy GitHub Actions to v4]

**Learning:** Legacy GitHub Actions (like actions/cache@v1, actions/upload-artifact@v1,
actions/download-artifact@v1) use deprecated Node.js versions which can cause workflow
failures or deprecation warnings, and lack performance enhancements like zstd
compression found in v4. **Action:** Always upgrade actions/cache,
actions/upload-artifact, and actions/download-artifact from v1/v2 to v4 to improve CI
performance and avoid Node deprecation failures. When conditional logic is involved with
artifacts, use `continue-on-error: true` for the download step if the artifact may not
exist.

## 2024-05-27 - [Removing redundant apt-get install jq]

**Learning:** Standard tools like `jq` are pre-installed on modern GitHub Actions
`ubuntu-latest` runners. Manually installing them wastes CI time. **Action:** Remove
manual `apt-get install jq` steps to optimize CI execution time.
