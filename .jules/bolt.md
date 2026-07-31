## 2024-05-01 - Upgraded Github Actions to avoid Node runner penalties

**Learning:** Legacy GitHub Actions (v1/v2) trigger hidden performance penalties by
downloading and bootstrapping deprecated Node.js runtime environments (like Node 12 or
16), which significantly slows down CI spin-up times. Furthermore,
`actions/upload-artifact@v4` ignores hidden files by default, meaning any CI workflow
relying on generating hidden dummy files (like `.empty`) to ensure an artifact always
exists requires the explicitly added `include-hidden-files: true` property. **Action:**
Always upgrade core actions (checkout, cache, upload-artifact) to their modern Node 20
equivalents (v4) to bypass these deprecation penalties, and explicitly verify
hidden-file handling during v4 migration.
