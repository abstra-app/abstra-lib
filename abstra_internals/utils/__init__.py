import base64, simplejson, re, socket
from contextlib import closing

from .file import *
from .email import *


def serialize(obj):
    return simplejson.dumps(obj, ignore_nan=True)


def deserialize(st):
    return simplejson.loads(st)


def is_serializable(st):
    try:
        serialize(st)
        return True
    except:
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
    import random, string

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
