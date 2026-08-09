## 2024-08-09 - Upgrading download-artifact to v4 requires explicit directory creation

**Learning:** Unlike v1, `actions/download-artifact@v4` fails strictly if the target
directory doesn't exist and the artifact is missing, even when using
`continue-on-error: true`. It will not create the directory for you in this bypass
scenario. **Action:** When migrating `download-artifact` from v1 to v4 in workflows
where the artifact might be absent, explicitly insert a `run: mkdir -p <dir>` step
before the download action to ensure downstream checks for the directory don't fail
unexpectedly.
