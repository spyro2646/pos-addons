## 2024-05-23 - Docker Compose and GitHub Actions v4 Upgrades

**Learning:** Upgrading GitHub Actions like download-artifact to v4 introduces strict
directory and existence checks, which requires explicitly ignoring missing files or
creating target directories. Upgrading to Docker Compose v2 strictly enforces lowercase
hyphenated project and container naming conventions. **Action:** When migrating
download-artifact to v4 with continue-on-error, manually create the target directory.
When migrating docker compose, verify project names are lowercase and update dependent
scripts expecting legacy underscore container names.
