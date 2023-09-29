import base64, simplejson, jwt, traceback, re, socket, datetime
from contextlib import closing
from traceback import StackSummary

from .environment import PUBLIC_KEY

email_rgexp = r"""^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"""


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


def filter_object(object, filter_func):
    filtered = {}
    for key, value in object.items():
        if filter_func(value):
            filtered[key] = value
    return filtered


def prepate_traceback(tb: StackSummary):
    for i, stack in enumerate(tb):
        if stack.filename == "<string>":
            return [{"line": x.lineno, "filename": x.filename} for x in tb[i:]]
    else:
        return []


def formated_traceback_error_message(e: Exception, main_file="<string>"):
    files = [
        re.sub(r"<string>", main_file, f)
        for f in traceback.format_tb(e.__traceback__)
        if "abstra_server" not in f
    ]
    formated_error = "\n".join(files)
    formated_error += re.sub(r"<string>", main_file, str(e))
    return formated_error


def is_valid_email(email):
    if not isinstance(email, str):
        return False
    return re.match(email_rgexp, email)


def decode_jwt(jwt_str: str):
    try:
        if PUBLIC_KEY:
            return jwt.decode(jwt_str, key=PUBLIC_KEY, algorithms=["RS256"])
        return jwt.decode(jwt_str, options={"verify_signature": False})
    except Exception as e:
        print("error decoding jwt", e)
        return None


def endcode_fake_jwt(email: str):
    return jwt.encode(
        key="fake",
        algorithm="HS256",
        payload={
            "email": email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
        },
    )


def random_id(length=10):
    import random, string

    return "".join(random.choices(string.ascii_letters + string.digits, k=length))


def get_package_version(package_name):
    import pkg_resources

    try:
        version = pkg_resources.get_distribution(package_name).version
        return version
    except pkg_resources.DistributionNotFound:
        return None


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
