## 2024-08-09 - Upgrading download-artifact to v4 requires explicit directory creation

**Learning:** Unlike v1, `actions/download-artifact@v4` fails strictly if the target
directory doesn't exist and the artifact is missing, even when using
`continue-on-error: true`. It will not create the directory for you in this bypass
scenario. **Action:** When migrating `download-artifact` from v1 to v4 in workflows
where the artifact might be absent, explicitly insert a `run: mkdir -p <dir>` step
before the download action to ensure downstream checks for the directory don't fail
unexpectedly.

## 2024-08-09 - docker-compose command not found on ubuntu-24.04

**Learning:** Newer GitHub Actions runner images (like `ubuntu-24.04`) have removed
Docker Compose v1 (`docker-compose`), causing exit code 127. Migrating to Docker Compose
v2 (`docker compose`) requires updating both the command and validating project names
(e.g., `-p DINAR` becomes `-p dinar` to meet V2's strict validation rules). Downstream
references to containers (like `dinar_odoo_1`) must also switch to the V2 hyphenated
default (`dinar-odoo-1`). **Action:** When workflows fail with
`docker-compose: command not found`, migrate the syntax to `docker compose`, ensure
project names are lowercase alphanumeric/hyphens, and update container name string
matches in downstream scripts to use hyphenation.

## 2024-08-09 - docker compose pull fails strictly if image doesn't exist

**Learning:** If a remote image doesn't exist yet, `docker compose pull` fails and
causes the pipeline to crash with "manifest unknown" error. **Action:** When workflows
conditionally build/push or optionally run images, append `--ignore-pull-failures` to
the pull step to bypass the error and allow the workflow to continue instead of
`|| true` which causes downstream commands to silently fail or behave unpredictably.
