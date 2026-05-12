## 2024-05-24 - Remove Redundant jq Installations

**Learning:** Standard tools like `jq` are universally pre-installed on GitHub-hosted
`ubuntu-latest` runners. Manually installing them with `apt-get` introduces a completely
unnecessary 5-15s delay (due to network fetching and package management overhead) per
workflow job. **Action:** Always verify if a tool is pre-installed in the CI environment
(like GitHub Actions runners) before adding manual package manager steps. Removing
redundant installations is a safe, easy CI performance win.
