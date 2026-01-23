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


class ZipValidationError(Exception):
    """Raised when the generated zip file fails validation."""

    pass


def _validate_zip_file(zip_path: pathlib.Path) -> None:
    """
    Validates the generated zip file before upload.
    Raises ZipValidationError if validation fails.
    """
    with zipfile.ZipFile(zip_path, "r") as zip_file:
        file_list = zip_file.namelist()

        # Check if zip is empty
        if not file_list:
            raise ZipValidationError(
                "The generated zip file is empty. No files were packaged for deploy. "
                "Please check your .gitignore file and ensure your project files exist. "
                "If the problem persists, contact us."
            )

        # Check if abstra.json exists
        if "abstra.json" not in file_list:
            raise ZipValidationError(
                "The abstra.json file is missing from the deploy package. "
                "This file is required for deployment. Please ensure it exists in your project root. "
                "If the problem persists, contact us."
            )


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


def deploy_without_git(show_start_message: bool = True):
    if show_start_message:
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
        _validate_zip_file(zip_path)

        DeployMessages.uploading()
        _upload_file(url=data.url, file_path=zip_path)

        DeployMessages.finalizing()
        update_build(headers=headers, build_id=data.build_id)

        project_id = _get_project_id(headers)
        DeployMessages.success(project_id)
    except ZipValidationError as e:
        update_build(headers=headers, build_id=data.build_id, error=str(e))
        DeployMessages.validation_error(str(e))
        raise e
    except Exception as e:
        update_build(
            headers=headers, build_id=data.build_id, error="Failed to upload files"
        )
        DeployMessages.error(str(e))
        AbstraLogger.capture_exception(e)
        raise e
