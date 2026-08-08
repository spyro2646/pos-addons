## 2024-05-24 - Upgrading GitHub Actions for Performance

**Learning:** Upgrading GitHub Actions to v4 significantly improves performance by
utilizing the Node 20 architecture and faster artifact/cache uploading mechanisms, but
it requires caution as `actions/setup-python@v5` drops EOL Python 3.7 support (requiring
a fallback to v4) and `actions/upload-artifact@v4` strictly fails if target directories
don't exist. **Action:** Always upgrade actions to v4 for Node 20 performance, but
verify Python version compatibility and ensure directories exist before uploading
artifacts.
