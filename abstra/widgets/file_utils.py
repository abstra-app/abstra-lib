import io
import tempfile
from typing import Union
from pathlib import Path

from .apis import upload_file
from .types import PILImage


def convert_file(file: Union[str, io.IOBase, PILImage]) -> str:
    if not file:
        return ""

    if isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        file = open(file, "rb")

    if callable(getattr(file, "save", None)):
        file_path = Path(tempfile.gettempdir(), "img.png")
        file.save(file_path)
        file = open(file_path, "rb")

    return upload_file(file)


def download_file(url):
    import requests

    f = tempfile.NamedTemporaryFile()
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        for chunk in r.iter_content(chunk_size=8192):
            f.write(chunk)
    f.seek(0)
    return f
