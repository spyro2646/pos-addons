## 2024-06-01 - Upgrading GitHub Actions Node dependencies

**Learning:** This repository extensively uses `actions/cache@v1`,
`actions/upload-artifact@v1`, `actions/download-artifact@v1`, and `actions/checkout@v2`.
These older actions run on legacy Node.js versions which are being deprecated and can
cause hard CI failures or slowness. Upgrading cache and artifact actions to v4 provides
a significant CI execution performance improvement due to a modernized backend and zstd
compression. **Action:** Upgrade GitHub Actions (specifically cache, upload/download
artifacts) from v1/v2 to v4 to improve CI performance.
