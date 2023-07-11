import io, tempfile, pathlib
from typing import Union

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
        return upload_file(open(file, "rb"))

    if isinstance(file, io.IOBase):
        return upload_file(file)

    # PILImage
    file_path = pathlib.Path(tempfile.gettempdir(), "img.png")
    file.save(str(file_path))
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
