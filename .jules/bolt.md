## 2024-05-24 - Upgrading core GitHub Actions to v4/v5

**Learning:** Upgrading GitHub Actions (checkout, cache, upload-artifact) to modern
versions constitutes a valid performance optimization by leveraging the faster Node 20
architecture and more efficient caching mechanisms. When upgrading `upload-artifact` and
`download-artifact` to v4, special care must be taken as v4 fails if the path does not
exist on disk, unlike v1. **Action:** Explicitly create the target directory using
`mkdir -p` before downloading an artifact with `actions/download-artifact@v4`, and use
`if-no-files-found: ignore` when uploading conditionally generated directories with
`actions/upload-artifact@v4`.
