import base64
import binascii
import imghdr
import io
import pathlib
import re
from typing import Union

from PIL.Image import Image

from abstra_internals.utils.file import get_random_filepath

BASE_64_PREFIX = "data:image/png;base64,"
PREFFIX_REGEX = re.compile(r"^data:image/(jpeg|png|gif|bmp|webp);base64,")


def is_base_64(unknown_string: str) -> bool:
    if PREFFIX_REGEX.match(unknown_string):
        unknown_string = unknown_string.split(",")[1]
    try:
        base64_bytes = base64.b64decode(unknown_string, validate=True)
        image_type = imghdr.what(None, h=base64_bytes)
        if image_type in ["jpeg", "png", "gif", "bmp", "webp"]:
            return True
        else:
            return False
    except (binascii.Error, ValueError):
        return False


def to_base64(file: Union[str, io.IOBase, pathlib.Path, Image]) -> Union[str, None]:
    if not file:
        return ""

    if isinstance(file, pathlib.Path):
        with file.open("rb") as f:
            file_content = f.read()
            base64_file = base64.b64encode(file_content).decode("utf-8")
            return f"{BASE_64_PREFIX}{base64_file}"

    if isinstance(file, io.IOBase):
        file.seek(0)
        file_content = file.read()
        base64_file = base64.b64encode(file_content).decode("utf-8")
        return f"{BASE_64_PREFIX}{base64_file}"

    if isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        return f"{BASE_64_PREFIX}{file}"

    if isinstance(file, Image):
        _, file_path = get_random_filepath()
        file.save(str(file_path))
        with file_path.open("rb") as f:
            file_content = f.read()
            base64_file = base64.b64encode(file_content).decode("utf-8")
            return f"{BASE_64_PREFIX}{base64_file}"

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        if isinstance(file.file, io.IOBase):
            file.file.seek(0)
            file_content = file.file.read()
            base64_file = base64.b64encode(file_content).decode("utf-8")
            return f"{BASE_64_PREFIX}{base64_file}"

    return None
