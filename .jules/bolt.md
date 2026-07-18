## 2024-07-18 - Upgrade GitHub Actions core dependencies to v4

**Learning:** For repositories consisting primarily of CI/CD configurations, upgrading
deprecated core GitHub Actions dependencies (like `actions/cache@v1`) qualifies as a
valid application performance optimization, preventing pipeline failure and
significantly speeding up CI. **Action:** Always upgrade legacy GitHub Actions versions
to the latest valid major version (e.g., v4). Add explanatory YAML comments to fulfill
the "add comments explaining the optimization" rule.
