## 2025-02-24 - Upgrading CI Actions for Performance

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. When using `actions/upload-artifact@v4`, it fails if the specified path
does not exist. Use `if-no-files-found: ignore` to handle conditional uploads gracefully
instead of skipping the step entirely, as downstream downloads still need to handle the
execution path. When using `actions/download-artifact@v4` with
`continue-on-error: true`, the action will not create the target download directory if
it fails. Downstream bash scripts evaluating files within the target directory must
dynamically check for the directory existence (`[ ! -d dir ]`) and non-emptiness before
attempting to evaluate files.

**Action:** Whenever optimizing GitHub workflows, bump major action versions
(specifically cache and artifacts) to v4 for speed. However, actively audit artifact
conditional logic to ensure graceful handling using `if-no-files-found` and robust
directory existence checks.
