import pathlib
import tempfile
import uuid
import zipfile

import requests

from abstra_internals.cloud_api import create_build, update_build
from abstra_internals.credentials import resolve_headers
from abstra_internals.logger import AbstraLogger
from abstra_internals.settings import Settings
from abstra_internals.utils.file import files_from_directory


def _generate_zip_file() -> pathlib.Path:
    root_path = Settings.root_path
    zip_path = pathlib.Path(tempfile.gettempdir(), f"{uuid.uuid4()}.zip")

    with zipfile.ZipFile(zip_path, "w") as zip_file:
        for file in files_from_directory(root_path):
            zip_file.write(file, file.relative_to(root_path))

    return zip_path


def _upload_file(url: str, file_path: pathlib.Path):
    with file_path.open("rb") as f:
        requests.put(url=url, data=f.read())


def deploy():
    headers = resolve_headers()
    if not headers:
        print(
            "No project credentials found. Please run `abstra editor` and login via the web interface."
        )
        return

    data = create_build(headers)

    try:
        zip_path = _generate_zip_file()
        _upload_file(url=data.url, file_path=zip_path)
        update_build(headers=headers, build_id=data.build_id)
    except Exception as e:
        update_build(
            headers=headers, build_id=data.build_id, error="Failed to upload files"
        )
        print("Failed to deploy project", e)
        AbstraLogger.capture_exception(e)
        raise e
