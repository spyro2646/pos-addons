## \$(date +%Y-%m-%d) - CI Environment Discovery

**Learning:** GitHub Actions `ubuntu-latest` runners have many common utilities (like
`jq`) pre-installed. Attempting to `apt-get install` these tools manually is not only
redundant but wastes valuable CI execution time downloading and processing package
metadata. **Action:** Always check the pre-installed software list for GitHub Actions
runners before adding package installation steps to workflows. Remove explicit
installation steps for tools like `jq` to speed up the CI pipeline.
