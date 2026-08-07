## 2024-08-07 - Fix Docker Compose v2 Container Name

**Learning:** When migrating from Docker Compose v1 to v2, default container names
change from using underscores (e.g., `dinar_odoo_1`) to hyphens (e.g., `dinar-odoo-1`).
Downstream scripts referencing explicit v1 container names will fail if not updated.
**Action:** Replace explicit v1 container names (like `dinar_odoo_1`) with their v2
hyphenated syntax (`dinar-odoo-1`) in workflows.

**Learning:** In GitHub Actions when fetching dependencies from an artifact (like
`modules.txt`) and `actions/download-artifact` doesn't find it,
`cat new-deps/modules.txt || true` still prints 'No such file or directory' to stderr.
This stderr breaks jobs that strictly rely on `set -e` or parsing outputs without
`2>/dev/null`. **Action:** Use `2>/dev/null` when cat-ing potentially missing artifact
files to prevent failing tests.
