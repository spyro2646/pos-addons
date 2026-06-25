## 2025-02-24 - Upgrading CI Actions for Performance

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. When using `actions/upload-artifact@v4`, it fails if the specified path
does not exist. Use `if-no-files-found: ignore` to handle conditional uploads gracefully
instead of skipping the step entirely, as downstream downloads still need to handle the
execution path. When using `actions/download-artifact@v4` with
`continue-on-error: true`, the action will not create the target download directory if
it fails. Downstream bash scripts evaluating files within the target directory must
dynamically check for the directory existence (`[ ! -d dir ]`) and non-emptiness before
attempting to evaluate files.

**Action:** Whenever optimizing GitHub workflows, bump major action versions
(specifically cache and artifacts) to v4 for speed. However, actively audit artifact
conditional logic to ensure graceful handling using `if-no-files-found` and robust
directory existence checks. In modern GitHub Actions runners, the standalone
`docker-compose` command may be unavailable and result in a 'command not found' (exit
code 127) error. Always use the Docker Compose V2 plugin syntax (`docker compose`)
instead. When updating `docker-compose` commands to `docker compose` (v2 syntax) via
automated find-and-replace, ensure that filenames referencing `docker-compose` (e.g.,
`docker-compose-DINAR-pr.yml`) are excluded from the replacement (e.g., by matching
`docker-compose ` with a trailing space) to avoid breaking file paths. Docker Compose v2
strictly enforces project name validation. Project names (e.g., used with the `-p` flag)
must consist only of lowercase alphanumeric characters, hyphens, and underscores, and
must start with a letter or number. Uppercase characters (e.g., `DINAR`) will result in
an 'invalid project name' error and must be converted to lowercase. When migrating to
Docker Compose v2, `docker compose up` attempts to pull by default and will fail with
`manifest unknown` if the remote manifest is missing. While `--pull missing` skips
pulling existing images, it still exits non-zero if the image is entirely absent
remotely. To safely tolerate missing remote images without breaking CI scripts,
explicitly append `|| true` to the `docker compose up` command (e.g.,
`docker compose up --no-start --pull missing || true`). If `docker compose up` is
modified to tolerate missing remote images using `|| true`, the container may not be
created. Consequently, subsequent commands that depend on the container's existence,
such as `docker inspect <container-name>`, will fail with 'No such object'. Append
`|| true` to these dependent commands as well (e.g.,
`docker inspect <container-name> || true`) to prevent pipeline failures. Docker Compose
V2 changes the default container naming convention, using hyphens instead of underscores
(e.g., `project-service-1` instead of `project_service_1`). Ensure any hardcoded
container names in scripts are updated accordingly when migrating from v1.
