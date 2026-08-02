## 2024-05-24 - Upgrading CI dependencies in workflow-only repos

**Learning:** In repositories with no traditional application code (only CI/CD
configurations), upgrading core CI dependencies like `actions/cache` to modern versions
(e.g., v4) acts as a valid performance optimization by improving execution speed and
avoiding deprecated runtime overheads. **Action:** Identify and upgrade outdated GitHub
Actions with appropriate inline comments explaining the performance benefits when
operating in CI/CD-heavy codebases.

## 2024-05-24 - CI Artifact Failure Fix

**Learning:** The workflow was automatically failing because
`actions/upload-artifact@v1` and `actions/download-artifact@v1` are explicitly
deprecated and rejected by GitHub Actions runner infrastructure. **Action:** Upgrading
both upload and download artifact actions to `v4` avoids the automatic block and
provides performance improvements.
