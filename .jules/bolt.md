## 2024-05-24 - CI Action Update Learnings

**Learning:** Upgrading GitHub actions such as actions/cache, actions/upload-artifact,
and actions/download-artifact to v4 requires handling backwards incompatibility such as
v4 upload-artifact failing by default on empty artifacts, and download-artifact failing
on not found artifacts. **Action:** When migrating download-artifact to v4 for optional
artifacts, apply the `continue-on-error: true` at the step level, not inside the `with:`
block. When migrating upload-artifact to v4 for optionally empty artifacts, add
`if-no-files-found: ignore` to the `with:` block.
