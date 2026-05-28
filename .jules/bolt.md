## 2026-05-28 - [Upgrade GitHub Actions to v4]

**Learning:** Upgrading GitHub Actions such as `actions/cache`,
`actions/upload-artifact`, and `actions/download-artifact` from v1/v2 to v4 provides a
significant CI execution performance improvement due to a modernized backend and zstd
compression. **Action:** Always verify if older versions of GitHub actions are used, and
upgrade to v4 when performing performance optimization.

## 2026-05-28 - [Migrate legacy docker-compose to docker compose]

**Learning:** Modern GitHub Actions runners (such as ubuntu-latest/ubuntu-24.04) do not
support the legacy `docker-compose` (v1) command. Workflows must use the
`docker compose` (v2) syntax to avoid 'command not found' errors. Additionally, Docker
Compose v2 enforces strict validation for project names (via the `-p` flag), requiring
lowercase alphanumeric characters, hyphens, and underscores (e.g., `-p dinar` instead of
`-p DINAR`), and generates container names using hyphens instead of underscores by
default (e.g., `dinar-odoo-1` instead of `dinar_odoo_1`). **Action:** When migrating to
Docker Compose v2 or updating project names, actively explore existing container
references and update them to match the v2 naming conventions.

## 2026-05-28 - [Opt into Node.js 24 for GitHub Actions]

**Learning:** To opt into Node.js 24 and suppress deprecation warnings for actions still
running on Node.js 20 in GitHub workflows, set the
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` environment variable at the top level `env:`
block. **Action:** Always verify if older versions of Node.js are used, and opt into
Node.js 24 to avoid warnings and prepare for future deprecations.
