## 2024-06-11 - Update `docker-compose` to `docker compose`

**Learning:** `docker-compose` is deprecated and unavailable in modern GitHub Actions
runners, resulting in exit code 127. **Action:** Replace `docker-compose` with
`docker compose` everywhere in workflow files to support modern Docker syntax. Ensure
filenames containing `docker-compose` are not accidentally modified.
