## 2024-06-11 - Docker Compose Pull Failure

**Learning:** `docker compose pull --ignore-pull-failures || true` works to bypass the
non-zero exit code of the pull step. However, the subsequent command
`docker compose up --no-start --pull missing` will STILL attempt to pull missing images,
and if the remote manifest genuinely does not exist, it will STILL fail with
`manifest unknown` and exit non-zero. **Action:** We must also append `|| true` to the
`docker compose up --no-start --pull missing` command inside the dynamic
`how-to-run-locally.sh` script, or remove `--pull missing` and let it build. Actually,
`docker compose up --no-start` doesn't build unless `--build` is passed. Given the
previous fix, let's append `|| true` to the `up` command inside `how-to-run-locally.sh`
as well, or just `sed` out the pull completely if that's what's failing. No, if it's
`up`, we just need to append `|| true` to it in the patch.
