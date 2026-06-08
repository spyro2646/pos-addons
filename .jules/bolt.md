## 2024-05-24 - CI Action Update Learnings

**Learning:** Upgrading GitHub actions such as actions/cache, actions/upload-artifact,
and actions/download-artifact to v4 requires handling backwards incompatibility such as
v4 upload-artifact failing by default on empty artifacts, and download-artifact failing
on not found artifacts. **Action:** When migrating download-artifact to v4 for optional
artifacts, apply the `continue-on-error: true` at the step level, not inside the `with:`
block. When migrating upload-artifact to v4 for optionally empty artifacts, add
`if-no-files-found: ignore` to the `with:` block.

## 2024-05-24 - Docker Compose v2 Pull Strictness

**Learning:** When migrating to Docker Compose v2, `docker compose up` inherently
attempts to pull images by default and will fail with a fatal `manifest unknown` error
if remote images do not exist, which breaks workflows expecting missing images to build
locally or tolerate absence. **Action:** When workflows expect to pull missing remote
images optionally and not fail entirely when missing, explicitly append `--pull missing`
to the `docker compose up` commands.
