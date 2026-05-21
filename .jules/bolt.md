## 2026-05-21 - Avoid duplicate apt-get installations in CI

**Learning:** CI workflows often have duplicate and unnecessary manual tool
installations (like `sudo apt-get install jq`), which increases execution time and masks
the fact that standard tools are pre-installed on GitHub Actions runners. **Action:**
Actively scan CI YAML files for duplicate `apt-get` installations of tools that are
either pre-installed or redundant, and remove them.
