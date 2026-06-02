## 2026-06-02 - CI Action Version Update

**Learning:** Upgrading `actions/cache`, `actions/upload-artifact`, and
`actions/download-artifact` from v1 to v4 is a significant performance optimization for
CI execution because v4 utilizes a modernized backend with zstd compression and a newer
Node runtime. However, when upgrading artifact actions to v4, you must configure
error-handling parameters (`if-no-files-found: ignore` for upload, and
`continue-on-error: true` for download) if the artifacts might be conditionally skipped
or missing, as v4 enforces strict failure by default. **Action:** When performing
performance upgrades of CI workflow actions, actively investigate any change in default
error-handling behavior (like missing artifacts triggering hard failures in v4) to
prevent breaking CI workflows.
