## 2024-05-24 - CI Performance Optimization: Pre-installed Tools

**Learning:** GitHub Actions `ubuntu-latest` runners come with many standard tools
pre-installed, including `jq`. Manually running `sudo apt-get install jq` adds
unnecessary network requests and installation time to every CI run. **Action:** Remove
explicit installation steps for standard tools like `jq` to improve workflow execution
speed.
