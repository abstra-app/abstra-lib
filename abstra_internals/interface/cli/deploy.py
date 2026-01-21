import pathlib
import tempfile
import uuid
import zipfile
from typing import Optional

import requests

from abstra_internals.cloud_api import create_build, get_api_key_info, update_build
from abstra_internals.credentials import resolve_headers
from abstra_internals.interface.cli.deploy_messages import DeployMessages
from abstra_internals.logger import AbstraLogger
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings


def _generate_zip_file() -> pathlib.Path:
    root_path = Settings.root_path
    zip_path = pathlib.Path(tempfile.gettempdir(), f"{uuid.uuid4()}.zip")

    with zipfile.ZipFile(zip_path, "w") as zip_file:
        for file in FileSystemService.list_files(root_path, use_ignore=True):
            zip_file.write(file, file.relative_to(root_path))

    return zip_path


def _upload_file(url: str, file_path: pathlib.Path):
    with file_path.open("rb") as f:
        requests.put(url=url, data=f.read())


def _get_project_id(headers: dict) -> Optional[str]:
    try:
        api_key_info = get_api_key_info(headers)
        if api_key_info.get("logged"):
            return api_key_info.get("info", {}).get("projectId")
    except Exception:
        pass
    return None


def deploy_without_git():
    DeployMessages.start(method="upload")

    DeployMessages.authenticating()
    headers = resolve_headers()
    if not headers:
        DeployMessages.no_credentials()
        return

    data = create_build(headers)

    try:
        DeployMessages.packaging()
        zip_path = _generate_zip_file()

        DeployMessages.uploading()
        _upload_file(url=data.url, file_path=zip_path)

        DeployMessages.finalizing()
        update_build(headers=headers, build_id=data.build_id)

        project_id = _get_project_id(headers)
        DeployMessages.success(project_id)
    except Exception as e:
        update_build(
            headers=headers, build_id=data.build_id, error="Failed to upload files"
        )
        DeployMessages.error(str(e))
        AbstraLogger.capture_exception(e)
        raise e
