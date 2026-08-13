## 2024-08-13 - Migrate GitHub Actions and Docker Compose

**Learning:** Upgrading `actions/upload-artifact` and `actions/download-artifact` to v4
requires handling directory creation and error behaviors explicitly. v4 fails if the
path is missing for upload unless `if-no-files-found: ignore` is used, and fails if
artifact doesn't exist for download. Also, downloading with v4 doesn't create the target
dir if it doesn't exist, and using `continue-on-error: true` will leave downstream steps
broken if they expect the directory. Additionally, migrating `docker-compose` to
`docker compose` requires ensuring project names are entirely lowercase (`-p DINAR` ->
`-p dinar`) and `--ignore-pull-failures` to be used for `docker compose pull` on CI
instead of `|| true`. **Action:** Use `if-no-files-found: ignore` on v4 artifact uploads
when appropriate. Use `continue-on-error: true` and an explicit `mkdir -p` before
downloading artifacts. Always lowercase project names when migrating to Docker Compose
v2. Use `--ignore-pull-failures` on `docker compose pull` to handle missing remote
images gracefully.
