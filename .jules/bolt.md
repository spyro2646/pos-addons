## 2024-06-16 - GitHub Actions Artifact Performance

**Learning:** Upgrading `actions/upload-artifact` and `actions/download-artifact` from
v1 to v4 yields significant CI execution performance improvements due to a modernized
backend and zstd compression. However, the v4 `actions/upload-artifact` action strictly
fails if the target path is missing, and `actions/download-artifact` fails if the
artifact is missing, whereas v1 was more permissive. **Action:** When migrating artifact
actions to v4 to improve CI performance in environments where artifacts are
conditionally generated, explicitly add `if-no-files-found: ignore` to
`actions/upload-artifact` and `continue-on-error: true` to the step running
`actions/download-artifact` to prevent pipeline failures.

## 2024-06-16 - Node.js Deprecations and Docker Compose v2

**Learning:** Old GitHub actions (`actions/checkout@v2`, `actions/setup-python@v4`) rely
on deprecated Node.js versions which trigger warnings and eventually fail the build.
Additionally, on modern GitHub Actions runners, the standalone `docker-compose` command
is unavailable (exit code 127), and strict lowercase project names are enforced when
using `docker compose` (Docker Compose V2). **Action:** When modernizing CI, bump
`actions/checkout` to `v4` and `actions/setup-python` to `v5`. Replace `docker-compose`
with `docker compose`, ensure project names are lowercase (e.g., `dinar` instead of
`DINAR`), and update hardcoded container names to the v2 hyphen format (`dinar-odoo-1`).
Use `|| true` with commands like `pull` and `up --no-start` to tolerate missing images
dynamically.

## 2024-06-16 - Environment variables across jobs

**Learning:** Environment variables defined in `$GITHUB_ENV` (like `ARTIFACT=empty`) do
not persist across different jobs in a GitHub Actions workflow. Therefore, gating a
download step in a downstream job using `if: env.ARTIFACT == 'yes'` when that variable
was set in an upstream job will always evaluate to false. **Action:** When conditionally
handling artifacts across jobs with `actions/download-artifact@v4`, do not gate the
download step using job-level environment variables from an upstream job. Instead, run
the download step with `continue-on-error: true` (so the pipeline proceeds even if the
artifact is missing, avoiding hard failures) and evaluate the presence of the files
dynamically in a subsequent bash step to reconstruct the necessary environment variable
(e.g., checking if `modules.txt` exists) for downstream use.

## 2024-06-16 - GitHub Actions Artifact Conditional Upload

**Learning:** `actions/upload-artifact@v4` handles empty or missing directories
differently than v1. Setting `if-no-files-found: ignore` is sufficient to prevent the
step from failing if no files are present. However, if the step is skipped entirely
using an `if:` condition (e.g. `if: env.ARTIFACT == 'yes'`), downstream jobs that depend
on `actions/download-artifact@v4` (even with `continue-on-error: true`) can encounter an
'Artifact not found' hard error that causes the overall check to fail. **Action:** When
migrating artifact actions to v4 where downstream jobs strictly rely on the artifact
download step completing successfully (even if it downloads nothing), ensure the
`upload-artifact` step always runs (e.g. `if: always()`) and rely on
`if-no-files-found: ignore` to handle the empty state gracefully, rather than skipping
the upload step entirely.

## 2024-06-16 - Environment Variables

**Learning:** In GitHub Actions workflows, environment variables set via `$GITHUB_ENV`
in a job do not persist and are not available in subsequent jobs. This is problematic
when a variable is used to gate steps dynamically (e.g., `if: env.ARTIFACT == 'yes'`).
**Action:** When working with actions like `actions/download-artifact@v4` that span
across different jobs, do not rely on `$GITHUB_ENV` variables passed from upstream jobs.
Instead, always execute the download action using `continue-on-error: true`, and then
manually check for the file's presence (e.g., via `test -f file.txt`) within the job's
context to safely control downstream conditional logic.
