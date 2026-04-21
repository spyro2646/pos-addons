## 2024-05-15 - Remove redundant package installations in CI

**Learning:** Tools like `jq` are pre-installed on standard GitHub Actions runner images
(e.g., `ubuntu-latest`). Explicitly running `sudo apt-get install jq` in workflow steps
adds unnecessary execution time and creates redundant logic. **Action:** Before adding
steps to manually install common tools via `apt-get` or similar package managers in CI,
check the pre-installed tools list for the runner image. If the tool is available
out-of-the-box, rely on it directly to optimize workflow performance.

## 2024-05-15 - Update Deprecated GitHub Actions Versions

**Learning:** Legacy GitHub Actions versions (such as `actions/upload-artifact@v1`,
`actions/cache@v1`, `actions/checkout@v2`, and older `actions/setup-python`) are
deprecated and will cause CI checks to fail due to runner deprecations and blocked v1/v2
artifact actions. **Action:** Always verify that workflows are using modern, supported
versions of GitHub Actions (e.g., `actions/checkout@v4`, `actions/cache@v4`,
`actions/upload-artifact@v4`, `actions/setup-python@v5`) to prevent hard CI failures and
ensure workflow reliability.
