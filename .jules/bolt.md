## 2024-05-06 - Avoid installing pre-installed CI tools

**Learning:** Standard tools like `jq` are already pre-installed on GitHub Actions
`ubuntu-latest` runners. Manually installing them via `apt-get` is a performance
anti-pattern that unnecessarily increases CI execution time. **Action:** Verify if a
tool is pre-installed on the runner environment before adding explicit installation
steps.
