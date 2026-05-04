## 2024-05-18 - Avoid redundant apt-get installations for pre-installed runner tools
**Learning:** Standard tools like `jq` are already pre-installed on standard GitHub Actions `ubuntu-latest` runners. Running `sudo apt-get install jq` during workflow execution introduces unnecessary overhead and network requests.
**Action:** Before writing steps to install common system tools via package managers, verify if the tool is already pre-installed in the GitHub Actions runner environment.
