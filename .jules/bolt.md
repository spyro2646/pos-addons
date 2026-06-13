## 2024-06-13 - [Performance] Upgraded Github actions caching and artifacts

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. Action versions should be kept up to date for efficiency and reliability in
GitHub workflows. **Action:** Always verify if any GitHub workflows are using deprecated
or outdated actions and proactively upgrade to the newest stable versions to leverage
better caching algorithms and workflow execution times.

## 2024-06-13 - [Performance/CI] Fixed Docker Compose and Action Deprecations

**Learning:** In modern GitHub Action runners, the standalone `docker-compose` command
may be unavailable resulting in a 'command not found' (exit code 127). The Docker
Compose V2 plugin syntax (`docker compose`) must be used instead. Additionally, Docker
Compose v2 strictly enforces project name validation (must be lowercase). Finally, older
GitHub Actions like `actions/checkout@v2` running on Node 20 are being deprecated; they
should be upgraded to v4 to prevent failures. **Action:** Always use `docker compose`
instead of `docker-compose`, ensure project names (`-p`) are lowercase, and proactively
upgrade deprecated `actions/checkout` and `actions/setup-python` versions.

## 2024-06-13 - [Performance/CI] Fixed Docker Compose V2 migration regressions

**Learning:** When migrating to Docker Compose v2, `docker compose up` attempts to pull
by default and will fail with `manifest unknown` if the remote manifest is missing.
While `--pull missing` skips pulling existing images, it still exits non-zero if the
image is entirely absent remotely. To safely tolerate missing remote images without
breaking CI scripts, explicitly append `|| true` to the `docker compose up` command.
Additionally, Docker Compose V2 changes the default container naming convention, using
hyphens instead of underscores (e.g., `dinar-odoo-1` instead of `dinar_odoo_1`).
**Action:** When migrating to v2, explicitly handle missing image scenarios (`|| true`)
to avoid CI breakage, and ensure hardcoded container names are updated to match the
hyphenated naming scheme.

## 2024-06-13 - [Performance/CI] Optimizing Artifact Handling for Speed and Reliability

**Learning:** The `actions/download-artifact@v4` action is strict and returns an error
(Unable to download artifact(s): Artifact not found) if requested artifacts don't exist.
Setting `continue-on-error: true` only suppresses the workflow failure but still causes
the step itself to technically fail with exit code 1, polluting logs. For optimal
workflow performance, conditionally gate the execution of the download action using `if`
conditions when artifacts are known to be conditionally generated (e.g.
`if: env.ARTIFACT == 'yes'`). **Action:** Always wrap `download-artifact@v4` and
`upload-artifact@v4` steps in explicit `if` checks based on environment flags to prevent
unnecessary execution and noisy step failures for dynamically populated artifacts.

**Update:** To correctly handle conditionally generated artifacts between jobs using
`upload-artifact@v4` and `download-artifact@v4`, using `if-no-files-found: ignore` is
sufficient for the upload. For the download step in downstream jobs, since environment
variables (`$GITHUB_ENV`) do not persist across jobs, attempting to gate the download
action with `if: env.ARTIFACT == 'yes'` will incorrectly skip the step. Instead, allow
the `download-artifact` step to run with `continue-on-error: true` and then
conditionally evaluate the presence of the files dynamically in a bash step within that
job to reconstruct the environment flag (e.g.
`if [ ! -f new-deps/modules.txt ]; then echo "ARTIFACT=empty" >> $GITHUB_ENV; fi`).
