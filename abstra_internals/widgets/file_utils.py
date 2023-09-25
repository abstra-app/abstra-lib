import io
import tempfile
import pathlib
import typing
from typing import Union
from .apis import upload_file, internal_path


def convert_file(file: typing.Union[str, io.BufferedReader, io.TextIOWrapper]) -> str:
    if not file:
        return ""

    if isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        return upload_file(open(file, "rb"))

    if isinstance(file, io.BufferedReader):
        return upload_file(file)

    if isinstance(file, io.TextIOWrapper):
        return upload_file(file)

    if isinstance(file, pathlib.Path):
        return upload_file(open(file, "rb"))

    # PILImage. TODO: check with isinstance without external dependency
    if hasattr(file, "save"):
        file_path = pathlib.Path(tempfile.gettempdir(), "img.png")
        file.save(str(file_path))
        return upload_file(open(file_path, "rb"))

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        return upload_file(file.file)


def download_file(url: str) -> Union[io.BufferedReader, tempfile._TemporaryFileWrapper]:
    import requests

    if url.startswith("http://") or url.startswith("https://"):
        f = tempfile.NamedTemporaryFile()
        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        f.seek(0)

        return f

    elif url.startswith("/_files/"):
        name = url[len("/_files/") :]
        path = internal_path(name)
        return open(path, "rb")

    raise ValueError(f"Cannot download {url}")
