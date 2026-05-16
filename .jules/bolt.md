## 2024-05-16 - Avoid installing pre-installed tools in GitHub Actions

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. Manually installing them via `apt-get install` is an
anti-pattern that unnecessarily increases CI execution time. **Action:** Before
installing tools in CI workflows, verify if they are already pre-installed in the runner
environment to optimize execution time.
