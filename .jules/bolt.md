## 2026-05-28 - [Upgrade GitHub Actions to v4 for CI performance]

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. **Action:** Always verify if older versions of GitHub actions are used, and
upgrade to v4 when performing performance optimization.
