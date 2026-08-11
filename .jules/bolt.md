## 2024-08-11 - GitHub Actions Upgrade

**Learning:** Upgrading `actions/download-artifact` to v4 introduces stricter
validation, and requires handling missing directories properly if bypassed with
`continue-on-error: true`. **Action:** When upgrading actions to v4, always evaluate
implications on expected directories downstream, and ensure scripts check for both
directory and file existence.
