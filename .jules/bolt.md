## 2024-05-25 - ⚡ Bolt: Upgrade GitHub Actions to v4
**Learning:** Obsolete GitHub actions versions (like cache@v1 and upload-artifact@v1) cause automatic failures in CI, and their modern v4 equivalents offer substantial performance optimizations (zstd compression and streaming data).
**Action:** Always proactively audit and upgrade GitHub action versions to modern versions in CI/CD oriented repositories.
