import base64
import os
import random
import re
import socket
import sys
import typing as t
from contextlib import closing
from uuid import uuid4

import jsonpath_ng as jp
import simplejson


def generate_n_digit_code(n: int) -> str:
    return str(random.randint(10 ** (n - 1), 10**n - 1))


def serialize(obj, **kwargs):
    return simplejson.dumps(obj, ignore_nan=True, **kwargs)


def deserialize(st) -> object:
    return simplejson.loads(st)


def is_json_serializable(value):
    try:
        serialize(value)
        return True
    except TypeError:
        return False


def is_serializable(st):
    try:
        serialize(st)
        return True
    except Exception:
        return False


def btos(b64):
    return base64.b64decode(b64).decode()


def get_staticmethod(cls, name):
    # hack because python sucks
    method_key = f"_{cls.__name__}{name}"
    return getattr(cls, method_key, None)


def parse_value(cls, value):
    convert = get_staticmethod(cls, "__parse_value")
    return convert(value) if convert else value


def serialize_value(cls, value):
    revert = get_staticmethod(cls, "__serialize_value")
    return revert(value) if revert else value


def random_id(length=10):
    import random
    import string

    return "".join(random.choices(string.ascii_letters + string.digits, k=length))


def hash_string(value):
    import hashlib

    sha256_hash = hashlib.sha256()
    sha256_hash.update(value.encode("utf-8"))
    hashed_string = sha256_hash.hexdigest()

    return hashed_string


def get_local_user_id():
    import uuid

    id = str(uuid.getnode())

    return hash_string(id)


def check_is_url(url: str) -> bool:
    return bool(re.match(r"^https?://", url))


def get_free_port(default_port: int) -> int:
    range_start = default_port
    range_end = default_port + 100

    for port in range(range_start, range_end):
        with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            port_is_available = sock.connect_ex(("localhost", port)) != 0
            if port_is_available:
                return port

    raise Exception(
        f"Could not find a free port in the range {range_start}-{range_end}"
    )


def is_it_true(val: str) -> bool:
    return val.lower() == "true"


def nested_get(data: t.Dict, path: str):
    try:
        expr = jp.parse(path)
        return next(m.value for m in expr.find(data))
    except Exception:
        return None


def is_test_env():
    return "PYTEST_CURRENT_TEST" in os.environ


def is_dev_env() -> bool:
    dev_versions = ["0.0.0"]
    from abstra_internals.utils.packages import get_local_package_version

    return str(get_local_package_version()) in dev_versions


def get_internal_id(obj: object, ensure=True) -> str:
    key = "abstra_uuid"

    if not getattr(obj, key, None) and ensure:
        setattr(obj, key, uuid4().__str__())

    return getattr(obj, key)


def get_local_python_version():
    return f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
