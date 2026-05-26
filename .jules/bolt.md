## 2026-05-26 - Optimize CI run time by removing unnecessary jq installation

**Learning:** Common utilities like `jq` are already pre-installed on the
`ubuntu-latest` runners in GitHub Actions. Manually installing them using
`sudo apt-get install jq` adds unnecessary execution time (and network dependency) to
the CI workflow without any benefit. **Action:** Always check if a commonly used tool is
pre-installed on standard runner images before adding explicit installation steps.
Remove redundant installations to speed up CI runs.
