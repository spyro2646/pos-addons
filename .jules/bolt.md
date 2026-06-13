## 2024-06-13 - [Performance] Upgraded Github actions caching and artifacts

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. Action versions should be kept up to date for efficiency and reliability in
GitHub workflows. **Action:** Always verify if any GitHub workflows are using deprecated
or outdated actions and proactively upgrade to the newest stable versions to leverage
better caching algorithms and workflow execution times.
