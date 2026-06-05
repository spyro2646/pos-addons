## 2024-06-05 - Modernize GitHub Actions versions for better performance

**Learning:** Upgrading GitHub Actions like `actions/cache`, `actions/upload-artifact`,
and `actions/download-artifact` from v1/v2 to v4 provides a significant CI execution
performance improvement due to a modernized backend and zstd compression. Action v4
behaviors are stricter; `upload-artifact@v4` fails if no files are found (requires
`if-no-files-found: ignore` where files are conditionally missing) and
`download-artifact@v4` strictly fails if artifact is missing (requires
`continue-on-error: true`). **Action:** Always verify action behavior post-upgrade when
updating to strictly-enforced versions like v4, and add error fallbacks as necessary.

## 2024-06-05 - Avoid installing pre-installed dependencies in CI

**Learning:** Standard tools like `jq` are pre-installed on GitHub Actions
`ubuntu-latest` runners. Manually installing them using `apt-get` consumes unnecessary
execution time without providing any benefit. **Action:** Before explicitly installing
system packages in CI workflows, verify if they are already included in the standard
runner image to optimize CI execution time.
