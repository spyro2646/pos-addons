## 2023-10-27 - Actions Cache Speed Up

**Learning:** Legacy GitHub Actions on deprecated Node.js versions generate warnings but
also slow down the runner over time, whereas modern v4+ versions natively support faster
caching logic and don't stall the runner with compatibility overhead. Upgrading
`actions/cache` and related tools from v1/v2 to v4 provides a measurable speed boost to
CI runtime. **Action:** Always default to modern (v4+) versions of GitHub Actions when
configuring CI/CD pipelines to ensure maximum execution speed.

## 2023-10-28 - Docker Compose V2 Pull Behavior

**Learning:** Docker Compose V2 attempts to pull missing images by default when running
`docker compose up`. If the remote manifest doesn't exist, this causes an immediate
`manifest unknown` failure, interrupting tests, unlike docker-compose v1 which relied
solely on local images. **Action:** When running test commands like
`docker compose up --abort-on-container-exit` that shouldn't attempt remote image
fetching, explicitly append `--pull never` to prevent immediate failure and rely
correctly on locally downloaded/built images.
