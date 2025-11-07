import shutil
import zipfile
from io import BytesIO
from pathlib import Path
from typing import Optional

import requests


def get_default_branch(repo_url: str) -> str:
    """
    Gets the default branch name for a GitHub repository.

    Args:
        repo_url: The GitHub repository URL (e.g., "https://github.com/user/repo")

    Returns:
        The default branch name (e.g., "main", "master")

    Raises:
        requests.RequestException: If the API request fails
        KeyError: If the response doesn't contain the expected data
    """
    parts = repo_url.rstrip("/").split("github.com/")[-1]

    api_url = f"https://api.github.com/repos/{parts}"
    response = requests.get(api_url)
    response.raise_for_status()

    data = response.json()
    return data["default_branch"]


def download_github_repo(
    repo_url: str,
    extract_path: Path,
    branch_name: str = "master",
    target_folder_name: Optional[str] = None,
) -> None:
    """
    Downloads a GitHub repository as a zip file and extracts it to the specified path.

    Args:
        repo_url: The GitHub repository URL (e.g., "https://github.com/user/repo")
        extract_path: The path where the repository will be extracted
        branch_name: The branch name to download (default: "master")
        target_folder_name: Optional target folder name. If provided, moves contents from
                          "repo-branch" to this folder. If None, keeps the extracted folder as-is.

    Raises:
        requests.RequestException: If the download fails
        zipfile.BadZipFile: If the downloaded file is not a valid zip
        Exception: For other errors during extraction or file operations
    """
    response = requests.get(f"{repo_url}/archive/refs/heads/{branch_name}.zip")
    response.raise_for_status()

    with zipfile.ZipFile(BytesIO(response.content)) as z:
        z.extractall(extract_path)

    if target_folder_name:
        repo_name = repo_url.rstrip("/").split("/")[-1]
        extracted_folder = extract_path / f"{repo_name}-{branch_name}"
        target_folder = extract_path / target_folder_name

        if extracted_folder.exists():
            target_folder.mkdir(exist_ok=True)
            for item in extracted_folder.iterdir():
                dest = target_folder / item.name
                if dest.exists():
                    if dest.is_dir():
                        shutil.rmtree(dest)
                    else:
                        dest.unlink()
                shutil.move(str(item), str(dest))
            shutil.rmtree(extracted_folder)
