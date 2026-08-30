## 2024-03-24 - Upgrading GitHub Actions

**Learning:** In repositories primarily composed of CI/CD configurations, upgrading core
GitHub Actions (e.g., checkout, cache, upload-artifact) to modern versions (like v4)
constitutes a valid performance optimization, as it leverages the faster Node 20
architecture and more efficient caching mechanisms. **Action:** Apply this optimization
to CI/CD workflows, ensuring to check for necessary structural changes when upgrading
`upload-artifact` to v4 as it restricts merging files from multiple matrix jobs.
