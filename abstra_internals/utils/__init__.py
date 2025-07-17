import re
import socket
import sys
import typing as t
from contextlib import closing

import jsonpath_ng as jp
import simplejson


def serialize(obj, **kwargs):
    return simplejson.dumps(obj, ignore_nan=True, **kwargs)


def deserialize(st) -> t.Any:
    return simplejson.loads(st)


def is_serializable(st):
    try:
        serialize(st)
        return True
    except Exception:
        return False


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


def get_local_python_version():
    return f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
