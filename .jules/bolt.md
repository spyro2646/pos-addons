## 2024-06-25 - Redundant `jq` installs in GitHub Actions

**Learning:** GitHub Actions `ubuntu-latest` runners come with common tools like `jq`
pre-installed. Using `apt-get install` for these tools adds unnecessary overhead and
slows down CI execution times. **Action:** Always verify if a tool is pre-installed on
the target runner environment before explicitly installing it in CI workflows to avoid
redundant operations and save execution time.

## 2024-06-25 - Docker Compose v2 migration and Node.js deprecations

**Learning:** Modern GitHub Action runners (like `ubuntu-24.04`) block deprecated v1/v2
actions and no longer support the legacy `docker-compose` v1 command. Furthermore,
Node.js 20 is being deprecated, necessitating an opt-in to Node.js 24 using the
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` environment variable. **Action:** Always use modern
action versions (`v4`/`v5`), use the `docker compose` v2 syntax, ensure project names
are lowercase (e.g. `-p dinar`), and handle Node deprecation warnings by setting the
appropriate environment variables.
