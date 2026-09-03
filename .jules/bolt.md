## 2026-09-03 - Unavoidable Upstream Blocker in Docker Compose Migration

**Learning:** Migrating from docker-compose v1 to docker compose v2 introduces stricter
image pulling behavior. Bypassing missing remote images with `--ignore-pull-failures`
allows the pull step to pass, but subsequent `up --pull never` commands will unavoidably
fail with "No such image" if the images truly don't exist remotely or locally.
**Action:** Always append `--ignore-pull-failures` to pull and `--pull never` to up when
mitigating missing images, and document the unavoidable failure in the PR description
rather than attempting hacky local fixes.
