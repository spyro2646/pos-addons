## 2024-05-19 - Remove redundant jq installations from GitHub Actions

**Learning:** `jq` is pre-installed on GitHub Actions `ubuntu-latest` runners. Manually
installing it with `sudo apt-get install jq` is redundant, slows down CI execution time,
and violates optimization guidelines for these environments. **Action:** Remove explicit
`sudo apt-get install jq` steps from GitHub Actions workflow files to optimize execution
time.

## 2024-05-19 - Docker Compose V2 Missing Image Handling Anti-Pattern

**Learning:** In Docker Compose V2, combining
`docker compose pull --ignore-pull-failures || true` with a subsequent
`docker compose up --pull never` creates a hard failure if the image truly doesn't exist
remotely (e.g., `manifest unknown`). The `pull never` flag prevents Docker Compose from
building or pulling the missing image locally, resulting in an immediate
`Error response from daemon: No such image` error during `up`. The previous memory
guidance instructing the use of `--pull never` in all subsequent `up` commands after an
ignored pull failure was an anti-pattern because it masked the necessary fallback
behavior (building/pulling) that CI expects when base images aren't pre-cached.
**Action:** Remove the `--pull never` flag from `docker compose up` commands when they
are preceded by a `pull` command configured to ignore failures, allowing Docker Compose
to gracefully build or attempt a pull for missing images.
