## 2024-06-11 - Dynamic scripting issue

**Learning:** `how-to-run-locally.sh` dynamically downloads the latest
`docker-compose.yml` but it fails on `docker compose pull` if the remote container is
missing. Wait! `how-to-run-locally.sh` is part of `itpp-labs/DINAR-fork` but the CI
checks out `itpp-labs/DINAR-fork@master` so we CAN patch it locally before executing!
**Action:** Append a `sed` command to patch `how-to-run-locally.sh` right after
checkout. Replace `docker compose pull` with
`docker compose pull --ignore-pull-failures || true` and `docker compose up --no-start`
with `docker compose up --no-start --pull missing`. Or, just patch `docker compose pull`
out entirely!
