## 2024-08-16 - CI Bottleneck with Deprecated Actions

**Learning:** GitHub Actions automatically hard-fails workflows that rely on deprecated
versions of core actions like `actions/cache@v1` and `actions/upload-artifact@v1`. These
older actions also use outdated Node architectures which are significantly slower to
boot and execute. **Action:** Always upgrade core actions (checkout, cache,
upload/download-artifact) to modern versions (like v4) which leverage faster Node
architectures and avoid catastrophic CI blocking regressions.
