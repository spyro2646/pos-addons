## 2024-08-12 - Upgrading actions/checkout@v2 to v4 as a performance boost

**Learning:** In repositories primarily composed of CI/CD configurations, upgrading core
GitHub Actions (e.g., checkout, cache, upload-artifact) to modern versions (like v4)
constitutes a valid performance optimization, as it leverages the faster Node 20
architecture and more efficient caching mechanisms. **Action:** Identify deprecated
GitHub actions in workflows and upgrade them to `v4` to speed up CI runs. Make sure to
consider artifact version incompatibilities or changes to required directory creation or
syntax.
