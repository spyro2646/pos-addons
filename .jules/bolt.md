## 2024-05-24 - Pre-installed Tools on GitHub Runners
**Learning:** Ubuntu GitHub Actions runners already have many common tools pre-installed (like `jq`). Installing them via `apt-get` is an unnecessary step that slows down the CI pipeline.
**Action:** Always check if a common tool is pre-installed on the runner before adding a step to install it.
