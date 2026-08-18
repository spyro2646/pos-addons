## 2024-05-24 - Upgrading GitHub Actions for Performance

**Learning:** Upgrading core GitHub Actions (e.g., checkout, cache, upload-artifact) to
modern versions (like v4) constitutes a valid performance optimization, as it leverages
the faster Node 20 architecture and more efficient caching mechanisms. Also
`actions/setup-python@v5` does not support python 3.7.x, so it must be left as v4.
**Action:** Always verify python versions and ensure older actions are thoroughly
updated to eliminate warnings and use the modern Node 20 environment.
