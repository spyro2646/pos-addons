## 2024-05-14 - GitHub Actions Performance Optimization

**Learning:** Upgrading `actions/checkout` and `actions/cache` to v4 in GitHub Actions
workflows leverages the faster Node 20 architecture and more efficient caching
mechanisms, which is a valid performance optimization, especially in repositories
primarily composed of CI/CD configurations. **Action:** When working on GitHub Actions
configurations, check for older versions of standard actions like `actions/checkout`,
`actions/cache`, `actions/upload-artifact`, etc. Upgrading to the latest major version
(e.g., v4) usually utilizes a newer Node runtime (Node 20 vs Node 16 or 12) resulting in
measurable performance boosts.

## 2024-05-14 - Docker Compose V2 Migration in CI

**Learning:** Modern GitHub Action runners (like ubuntu-24.04) have removed
`docker-compose` (v1) in favor of the docker CLI plugin `docker compose` (v2). When
migrating, project names passed to `-p` must be strictly lowercase (e.g., `-p DINAR` to
`-p dinar`). Additionally, `docker compose up` in v2 will attempt to pull missing images
by default, which can cause failures if ignoring pull errors. **Action:** When fixing
"docker-compose: command not found" in CI workflows, change it to `docker compose`,
ensure project names (`-p`) are lowercase, and if `--ignore-pull-failures` is used on
the pull step, append `--pull never` to the subsequent `up` command to prevent it from
failing.
