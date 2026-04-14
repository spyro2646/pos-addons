## 2024-04-14 - Remove redundant jq installation

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. Manually installing them using `apt-get` slows down CI pipeline
times unnecessarily. **Action:** When creating or reviewing GitHub Actions workflows,
omit explicit installation steps for tools that are already included in the default
runner image environments.
