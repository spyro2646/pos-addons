## 2024-05-18 - [Avoid redundant apt-get installations for pre-installed tools in CI]

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. Manually installing them with `sudo apt-get install jq`
unnecessarily increases CI execution time and network requests. **Action:** When
updating or writing new CI workflows, check if standard tools are already pre-installed
on the runner environment before adding manual installation steps.
