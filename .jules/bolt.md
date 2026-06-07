## 2024-05-24 - Upgrading GitHub Actions for Performance and Compatibility

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides
significant CI execution performance improvement due to modernized backends and zstd
compression. However, `actions/upload-artifact@v4` is stricter than v1 and fails by
default if the specified path does not exist, and `actions/download-artifact@v4` fails
strictly if the specified artifact does not exist. Also, `actions/cache@v1` and `v2` are
deprecated by GitHub and will cause failures. When migrating to Docker Compose v2,
`docker compose pull` strictly errors and exits non-zero (`manifest unknown`) if an
exact image digest manifest doesn't exist remotely. While `--ignore-pull-failures` is
the preferred flag, it does not prevent the fatal error for completely missing
manifests. Regardless, do not append `|| true` or use `continue-on-error` to mask these
failures. **Action:** When migrating `upload-artifact` to v4 in workflows where
artifacts are conditionally populated, set `if-no-files-found: ignore` to prevent
pipeline failures. When migrating `download-artifact` to v4 for conditionally uploaded
artifacts, set `continue-on-error: true` on the step. Use Prettier to format markdown
files. Avoid appending `|| true` to `docker compose up` or `docker inspect` commands to
mask errors related to missing images or containers. Masking these errors is an
anti-pattern; CI workflows are designed to handle missing images appropriately (e.g., by
building missing layers) and should be allowed to fail or proceed naturally based on the
actual state.
