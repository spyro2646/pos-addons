
## 2024-05-01 - Avoid Manual Installation of Pre-installed Tools in GitHub Actions
**Learning:** Tools like `jq` are pre-installed on standard GitHub Actions runners like `ubuntu-latest`. Manually running `apt-get install jq` unnecessarily consumes CI execution time by invoking the package manager for a tool that is already present in the environment.
**Action:** When creating or modifying CI workflows, prioritize using tools inherently available on the runner instead of adding explicit `apt-get install` commands. This reduces pipeline duration without sacrificing reliability.
