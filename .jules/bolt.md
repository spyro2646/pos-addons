## 2024-05-24 - Upgrading CI Actions for Node 20

**Learning:** Upgrading GitHub Actions to v4+ optimizes CI performance by leveraging
Node 20. When upgrading `actions/setup-python@v4` to `v5`, it's critical to note that v5
drops support for Python 3.7. Workflows that explicitly require Python 3.7.x must remain
on v4 or earlier. Additionally, `actions/upload-artifact@v4` requires the target path to
exist and `actions/download-artifact@v4` does not support `if-no-files-found: ignore`.
However, based on the exploration, the upload step in `.github/workflows/DINAR-pr.yml`
is safely preceded by `mkdir new-deps/`, so no extra structural changes are needed to
prevent upload failure. **Action:** When migrating older repositories to modern CI
dependencies, conditionally target versions based on language support (e.g., keeping
Python 3.7 workflows on `v4` while upgrading others to `v5`) instead of applying blanket
upgrades. Always verify that artifacts upload steps have their directories pre-created.
