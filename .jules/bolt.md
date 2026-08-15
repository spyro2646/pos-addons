## 2024-08-15 - Upgrade GitHub Actions for Performance

**Learning:** Upgrading GitHub Actions to modern versions (v4/v5) improves execution
time by leveraging faster Node.js architectures (Node 20). However,
actions/upload-artifact@v4 requires `if-no-files-found: ignore` if the folder might be
empty, and actions/download-artifact@v4 no longer automatically creates the target
directory when bypassing missing artifacts with `continue-on-error: true`. **Action:**
Always verify directory existence and create necessary folders (e.g., `mkdir -p`) before
using download-artifact v4 with `continue-on-error`, and use `if-no-files-found: ignore`
to prevent upload warnings/failures.
