import io
import pathlib
import tempfile
from typing import Union

from abstra_internals.utils.file import (
    get_random_filepath,
    internal_path,
)
from abstra_internals.widgets.apis import upload_file


def convert_file(file: Union[str, io.IOBase, pathlib.Path]) -> str:
    if not file:
        return ""

    if isinstance(file, (io.IOBase, pathlib.Path)):
        return upload_file(file)

    if isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        return upload_file(open(file, "rb"))

    # PILImage. TODO: check with isinstance without external dependency
    if hasattr(file, "save"):
        _, file_path = get_random_filepath()
        file.save(str(file_path))
        return upload_file(open(file_path, "rb"))

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        return upload_file(file.file)

    raise ValueError(f"Cannot convert {type(file)}")


def download_file(
    url: str,
) -> Union[io.BufferedReader, tempfile._TemporaryFileWrapper]:
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
