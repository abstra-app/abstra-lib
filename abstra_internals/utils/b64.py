import base64
import binascii
import io
import re

import puremagic

BASE_64_PREFIX = "data:image/png;base64,"
PREFFIX_REGEX = re.compile(r"^data:image/(jpeg|png|gif|bmp|webp);base64,")


def is_base_64(unknown_string: str) -> bool:
    if PREFFIX_REGEX.match(unknown_string):
        unknown_string = unknown_string.split(",")[1]
    try:
        base64_bytes = base64.b64decode(unknown_string, validate=True)
        image_type = puremagic.what(None, h=base64_bytes)
        if image_type in ["jpeg", "png", "gif", "bmp", "webp"]:
            return True
        else:
            return False
    except (binascii.Error, ValueError):
        return False


def encode_base_64(input: io.IOBase):
    BASE_64_PREFIX = "data:image/png;base64,"
    input.seek(0)
    file_content = input.read()
    base64_file = base64.b64encode(file_content).decode("utf-8")
    return f"{BASE_64_PREFIX}{base64_file}"
