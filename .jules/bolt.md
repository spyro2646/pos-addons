## 2024-06-21 - GitHub Actions Version Upgrade for CI Speed

**Learning:** Upgrading GitHub Actions (`actions/cache`, `actions/upload-artifact`,
`actions/download-artifact`) from v1 to v4 brings massive CI performance improvements
due to an updated backend architecture and zstd compression. **Action:** Always upgrade
these specific core actions to v4 when aiming to speed up CI pipelines in workflows.
