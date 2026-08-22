## 2024-06-25 - Upgrading Node 20 GitHub Actions

**Learning:** Upgrading GitHub Actions like `actions/checkout@v2` -> `v4` and
`actions/cache@v1` -> `v4` is a valid performance optimization in CI-heavy repositories
because it takes advantage of the newer, faster Node architecture and newer cache
mechanisms. I must also upgrade `actions/upload-artifact@v1` and
`actions/download-artifact@v1` to `v4` together, adding `mkdir -p` where needed to avoid
v4 failure modes on missing target directories, and ensuring proper workflow
configurations for empty paths if necessary. I must NOT assume properties that aren't
verified on disk. **Action:** Upgrade core actions (checkout, cache, setup-python to a
compatible version, upload/download artifacts to v4 with structural fixes). Add comments
above every modification!
