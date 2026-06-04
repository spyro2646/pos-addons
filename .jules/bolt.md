## 2024-06-04 - Upgrade Actions for Performance

**Learning:** Legacy GitHub Actions (v1/v2) like `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` use an outdated backend.
Upgrading them to v3/v4 significantly improves CI execution time because they use a
modernized backend and zstd compression. **Action:** Always upgrade `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` to v4 in GitHub Actions
workflows to optimize execution speed. Be mindful that `actions/upload-artifact@v4` and
`actions/download-artifact@v4` are stricter, so configure `continue-on-error` or
`if-no-files-found` when needed.
