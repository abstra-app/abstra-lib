import tempfile, urllib.request, zipfile, uuid, pathlib, typing

from ..credentials import resolve_headers
from ..cloud_api import create_build, update_build
from ..utils.file import files_from_directory, resolve_cwd


def _generate_zip_file(root_path: pathlib.Path) -> pathlib.Path:
    zip_path = pathlib.Path(tempfile.gettempdir(), f"{uuid.uuid4()}.zip")
    with zipfile.ZipFile(zip_path, "w") as zip_file:
        for file in files_from_directory(root_path):
            zip_file.write(file, file.relative_to(root_path))
    return zip_path


def _upload_file(url: str, file_path: pathlib.Path):
    with file_path.open("rb") as f:
        req = urllib.request.Request(url=url, method="PUT", data=f.read())
        urllib.request.urlopen(req)


def deploy(workspace_root: typing.Union[str, pathlib.Path]):
    if isinstance(workspace_root, str):
        workspace_root = pathlib.Path(workspace_root)

    root_path = resolve_cwd(workspace_root)
    headers = resolve_headers(root=root_path)
    if not headers:
        print("No API token found. Please login with `abstra login`")
        return

    data = create_build(headers)
    url = data["url"]
    build_id = data["buildId"]

    zip_path = _generate_zip_file(root_path)
    _upload_file(url=url, file_path=zip_path)
    update_build(headers=headers, build_id=build_id)
