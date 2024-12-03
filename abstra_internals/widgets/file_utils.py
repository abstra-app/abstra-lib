import io
import pathlib
import shutil
from typing import TYPE_CHECKING, Union

import requests

if TYPE_CHECKING:
    from PIL.Image import Image

from abstra_internals.constants import get_uploads_dir
from abstra_internals.utils.file import (
    get_random_filepath,
    get_tmp_upload_dir,
    upload_file,
)


def upload_widget_file(file: Union[str, io.IOBase, pathlib.Path, "Image"]) -> str:
    if not file:
        return ""

    if isinstance(file, (io.IOBase, pathlib.Path, str)):
        return upload_file(file)

    from PIL.Image import Image

    if isinstance(file, Image):
        _, file_path = get_random_filepath()
        file.save(str(file_path))
        return upload_file(open(file_path, "rb"))

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        return upload_file(file.file)

    raise ValueError(f"Cannot convert {type(file)}")


def download_to_path(url: str) -> pathlib.Path:
    # circular import
    from abstra_internals.controllers.execution_store import ExecutionStore

    execution_id = ExecutionStore.get_by_thread().execution.id
    save_dir = get_uploads_dir() / execution_id
    save_dir.mkdir(parents=True, exist_ok=True)
    save_path = save_dir / url.split("/")[-1]

    if url.startswith("http://") or url.startswith("https://"):
        with save_path.open("wb") as f, requests.get(url, stream=True) as r:
            r.raise_for_status()
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)

        return save_path

    elif url.startswith("/_files/"):
        tmp_name = url[len("/_files/") :]
        path = get_tmp_upload_dir() / tmp_name
        shutil.copy(path, save_path)

        return save_path

    raise ValueError(f"Cannot download {url}")
