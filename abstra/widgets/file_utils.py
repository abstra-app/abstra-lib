import io, tempfile, pathlib, os
from typing import Union
from .apis import upload_file
from .types import PILImage


def convert_file(
    file: Union[str, io.BufferedReader, io.TextIOWrapper, PILImage]
) -> str:
    if not file:
        return ""

    elif isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        return upload_file(open(file, "rb"))

    elif isinstance(file, io.BufferedReader):
        return upload_file(file)

    elif isinstance(file, io.TextIOWrapper):
        return upload_file(file)

    # PILImage
    elif isinstance(file, PILImage):
        file_path = pathlib.Path(tempfile.gettempdir(), "img.png")
        file.save(str(file_path))
        file = open(file_path, "rb")
        return upload_file(file)

    # FileResponse. TODO: check with isinstance withour circular import
    elif hasattr(file, "file"):
        return upload_file(file.file)

    raise ValueError(f"Cannot convert {type(file)} to file")


def download_file(url: str):
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
        path = os.path.join(tempfile.gettempdir(), "_uploaded_files", name)
        return open(path, "rb")

    raise ValueError(f"Cannot download {url}")
