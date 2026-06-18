## 2026-06-18 - Upgrade GitHub Actions cache and artifacts to v4

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` from v1 to v4 provides a significant CI execution
performance improvement due to a modernized backend and zstd compression. **Action:**
Always use v4 for these actions. Be aware that v4 is stricter:
`actions/upload-artifact@v4` requires `if-no-files-found: ignore` to prevent failures
when files are absent, and `actions/download-artifact@v4` fails strictly if artifacts
are missing, necessitating `continue-on-error: true` on the step level when artifacts
are conditionally uploaded.
