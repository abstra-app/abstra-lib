import os
import pathlib
import urllib.request
import zipfile
from uuid import uuid4 as uuid

import requests

from .credentials import get_credentials
from .utils.file import files_from_directory

CLOUD_API_ENDPOINT = os.environ.get("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud/api"

def _generate_zip_file(root_path: str) -> str:
    zip_path = f"/tmp/{uuid()}.zip"
    with zipfile.ZipFile(zip_path, "w") as zip_file:
        for file in files_from_directory(root_path):
            zip_file.write(file, file.relative_to(root_path))
    return zip_path


def _create_build(headers: dict) -> dict:
    return requests.post(
        f"{CLOUD_API_ENDPOINT}/builds", headers=headers
    ).json()


def _upload_file(url: str, file_path: str, headers: dict):
    with open(file_path, "rb") as f:
        req = urllib.request.Request(url=url, method="PUT", data=f.read())
        urllib.request.urlopen(req)


def _update_build(build_id: str, headers: dict) -> dict:
    requests.patch(
        f"{CLOUD_API_ENDPOINT}/builds/{build_id}",
        headers=headers,
    )


def deploy(workspace_root: str = "."):
    cwd = pathlib.Path.cwd()
    root_path = (cwd / workspace_root).resolve().as_posix()
    credentials = get_credentials(root_path)

    if not credentials:
        print("No API token found. Please login with `abstra login`")
        return

    headers = {"Api-Authorization": f"Bearer {credentials}"}
    data = _create_build(headers)
    url = data["url"]
    build_id = data["buildId"]
    zip_path = _generate_zip_file(root_path)
    _upload_file(url=url, file_path=zip_path, headers=headers)

    _update_build(headers=headers, build_id=build_id)
