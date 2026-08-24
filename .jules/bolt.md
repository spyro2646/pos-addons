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

## 2024-05-14 - CI Failure due to missing remote image (Unresolvable upstream blocker)

**Learning:** In the `Download Docker images with preinstalled modules` step, the
workflow is failing because `ghcr.io/spyro2646/dinar:pos-addons-db-17.0` does not exist
on the remote registry ("Error manifest unknown"). While migrating to `docker compose`
v2 and applying `--ignore-pull-failures` successfully allows the `pull` step to proceed,
the subsequent `up` step fails despite `--pull never` because the local machine does not
possess the image either. The workflow fundamentally requires these missing base images
to create the containers. **Action:** Acknowledge this is an unresolvable upstream
blocker that cannot be fixed by modifying the workflow syntax or Docker Compose
settings, as the required base images are simply absent. Proceed with the PR submission
detailing the successful migration to Docker Compose v2 and noting this upstream
dependency issue.
