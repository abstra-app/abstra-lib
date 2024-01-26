import tempfile, requests, zipfile, uuid, pathlib
from ...settings import Settings
from ...credentials import resolve_headers
from ...utils.file import files_from_directory
from ...cloud_api import create_build, update_build


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
            "No project credentials found. Please run `abstra serve` and login via the web interface."
        )
        return

    data = create_build(headers)
    url = data.url
    build_id = data.build_id

    zip_path = _generate_zip_file()
    _upload_file(url=url, file_path=zip_path)
    update_build(headers=headers, build_id=build_id)
