## YYYY-MM-DD - [Initial check]

**Learning:** Checking the repository to plan the next performance improvement.
**Action:** Upgrading GitHub actions versions to v4 could improve performance in CI
jobs. Need to write an execution plan.

## YYYY-MM-DD - [Upgrading actions]

**Learning:** Outdated GitHub actions versions could lead to deprecation warnings, CI
breaks, or slow executions. Upgrading setup-python, upload-artifact, download-artifact,
cache, and pre-commit actions across workflow files can provide performance improvements
in CI via modernized backends. Node.js deprecations require to update to v4. **Action:**
Upgraded actions versions and ensured syntax is valid.
