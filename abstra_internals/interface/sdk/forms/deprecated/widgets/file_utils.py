import io
import pathlib
import shutil
from typing import TYPE_CHECKING, Union

import requests

if TYPE_CHECKING:
    from PIL.Image import Image

from abstra_internals.constants import get_uploads_dir
from abstra_internals.utils.file import (
    get_tmp_upload_dir,
    make_random_tmp_path,
    upload_file,
)


def upload_widget_file(file: Union[str, io.IOBase, pathlib.Path, "Image"]) -> str:
    if not file:
        return ""

    if isinstance(file, (io.IOBase, pathlib.Path, str)):
        return upload_file(file)

    from PIL.Image import Image

    if isinstance(file, Image):
        file_path = make_random_tmp_path()
        file.save(str(file_path))
        return upload_file(open(file_path, "rb"))

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        return upload_file(file.file)

    raise ValueError(f"Cannot convert {type(file)}")


def download_to_path(url: str) -> pathlib.Path:
    # TODO: circular import - god help me
    from abstra_internals.controllers.sdk.sdk_context import (
        SDKContextStore,
    )

    execution = SDKContextStore.get_execution()
    save_dir = get_uploads_dir() / execution.id
    save_dir.mkdir(parents=True, exist_ok=True)
    save_path = save_dir / pathlib.Path(url).name

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
