## 2024-05-23 - Upgrading GitHub Actions for Performance

**Learning:** Deprecated Node.js 12/16 based GitHub Actions (like checkout@v2 and
cache@v1) take longer to execute and are subject to deprecation warnings and potential
failures. Upgrading to Node 20 based actions (v4) improves workflow performance.
**Action:** Proactively upgrade core GitHub Actions to v4.
