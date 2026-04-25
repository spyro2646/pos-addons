## 2024-06-25 - Redundant `jq` installs in GitHub Actions
**Learning:** GitHub Actions `ubuntu-latest` runners come with common tools like `jq` pre-installed. Using `apt-get install` for these tools adds unnecessary overhead and slows down CI execution times.
**Action:** Always verify if a tool is pre-installed on the target runner environment before explicitly installing it in CI workflows to avoid redundant operations and save execution time.
