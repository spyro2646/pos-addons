## 2025-06-26 - Upgrading GitHub Actions strictly to address performance

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. **Action:** When working on GitHub Actions performance improvements, prefer
upgrading `actions/cache`, `actions/upload-artifact`, and `actions/download-artifact` to
v4 to benefit from the performance gains. Ensure backward compatibility or adjust the
parameters (like `if-no-files-found: ignore` and explicit checking
`DEPS_MODULES=$(cat new-deps/modules.txt || true)`) when required.
