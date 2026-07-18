## 2024-07-18 - Upgrade GitHub Actions core dependencies to v4

**Learning:** For repositories consisting primarily of CI/CD configurations, upgrading
deprecated core GitHub Actions dependencies (like `actions/cache@v1`) qualifies as a
valid application performance optimization, preventing pipeline failure and
significantly speeding up CI. **Action:** Always upgrade legacy GitHub Actions versions
to the latest valid major version (e.g., v4). Add explanatory YAML comments to fulfill
the "add comments explaining the optimization" rule.

## 2024-07-18 - Upgrade GitHub Actions checkout and docker compose

**Learning:** Node.js 20 is deprecated in GitHub Actions, causing workflows using
`actions/checkout@v2` (which targets older Node versions) to warn and eventually fail.
Additionally, newer runner images (e.g., `ubuntu-24.04`) have removed Docker Compose v1
(`docker-compose`), causing exit code 127 errors. Docker Compose v2 strictly validates
project names (e.g., `DINAR` -> `dinar`). **Action:** Always upgrade `actions/checkout`
to `@v4`. Replace `docker-compose` with `docker compose`. When doing so, update invalid
uppercase project names (e.g., `-p DINAR` to `-p dinar`) and update any downstream
scripts referencing the container names to use v2 syntax (e.g., `-` instead of `_`).

## 2024-07-18 - Fix failing command substitution

**Learning:** In bash scripts running under `set -e`, a failing command substitution
(e.g., `$(docker inspect dinar-odoo-1)`) will cause the script to abort immediately.
**Action:** When capturing the output of a command that might fail in a subshell, place
the `|| true` inside the subshell parentheses (e.g.,
`VAR=$(docker inspect ... || true)`) rather than outside.
