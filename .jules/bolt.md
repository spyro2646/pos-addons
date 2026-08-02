## 2024-05-24 - Upgrading CI dependencies in workflow-only repos

**Learning:** In repositories with no traditional application code (only CI/CD
configurations), upgrading core CI dependencies like `actions/cache` to modern versions
(e.g., v4) acts as a valid performance optimization by improving execution speed and
avoiding deprecated runtime overheads. **Action:** Identify and upgrade outdated GitHub
Actions with appropriate inline comments explaining the performance benefits when
operating in CI/CD-heavy codebases.
