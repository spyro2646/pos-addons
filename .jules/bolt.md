## 2024-06-23 - Upgrade GitHub Actions for CI Performance

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` from v1 to v4 yields significant CI execution speedups
due to modern architecture and zstd compression while resolving severe Node.js version
deprecation penalties. **Action:** Always proactively bump such generic actions when
performing repository maintenance to avoid pipeline slowdowns.
