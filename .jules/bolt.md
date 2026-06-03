## 2026-06-03 - GitHub Actions Artifact Conditonality

**Learning:** When upgrading `actions/upload-artifact` and `actions/download-artifact`
from v1/v2 to v4 in DINAR workflows where artifacts (`new-deps`) might conditionally be
empty/missing, the pipeline will strictly fail by default. **Action:** Always explicitly
set `if-no-files-found: ignore` on the upload step's `with:` block and
`continue-on-error: true` on the download step when migrating to v4.
