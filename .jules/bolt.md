## 2024-05-14 - GitHub Actions Node 20 Upgrades

**Learning:** Upgrading GitHub Actions (like checkout, cache, and artifacts) to modern
versions (v4) constitutes a valid performance optimization as it leverages the faster
Node 20 architecture and more efficient caching mechanisms. However, strict
architectural changes in v4, such as `actions/download-artifact@v4` failing if the
target directory doesn't exist, require structural workflow refactoring (e.g., adding
explicit `mkdir -p` steps) to avoid CI regressions. **Action:** Always pair action
version bumps with a review of updated constraints (like strict directory requirements
in v4) and add explicit directory creation steps before downloading artifacts when
migrating from v1 to v4.
