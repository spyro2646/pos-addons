## 2024-05-30 - Upgrade legacy actions in workflows

**Learning:** Legacy v1 actions (`actions/cache@v1`, `actions/upload-artifact@v1`,
`actions/download-artifact@v1`) are deprecated and run on old node versions (like node
12). Upgrading these to v4 improves CI performance significantly by using node 20 and
modern backends, specifically zstd compression for caches and artifacts. **Action:**
When finding v1 actions, update them to v4 to boost CI speed. For
`download-artifact@v4`, we need `continue-on-error: true` since the action fails
strictly if the artifact isn't found and this repo conditionally populates it.
