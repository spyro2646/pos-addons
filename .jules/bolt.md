## 2024-06-14 - CI Performance: Upgrade GitHub Actions

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` to v4 provides significant CI execution performance
improvement due to a modernized backend and zstd compression. However,
`actions/upload-artifact@v4` and `actions/download-artifact@v4` are stricter about
missing files, requiring `if-no-files-found: ignore` for upload and
`continue-on-error: true` for conditionally downloaded artifacts. **Action:** Upgrade
older GitHub Actions to v4 for performance benefits, but strictly manage missing
artifacts by using appropriate configurations (`if-no-files-found: ignore` and
`continue-on-error: true`).
