import inspect
from functools import wraps
from pathlib import Path
from typing import Any, Callable, Dict, Optional, Tuple

import flask
import requests

from abstra_internals.credentials import get_credentials
from abstra_internals.environment import (
    CLOUD_API_CLI_URL,
    CLOUD_API_PROD_HEADERS,
    CLOUD_API_PROD_URL,
    REQUEST_TIMEOUT,
)
from abstra_internals.services.jwt import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.threaded import threaded
from abstra_internals.utils import get_local_python_version
from abstra_internals.utils.env import is_dev_env, is_test_env
from abstra_internals.utils.packages import get_local_package_version


def get_local_user_id():
    import hashlib
    import uuid

    id = str(uuid.getnode())

    sha256_hash = hashlib.sha256()
    sha256_hash.update(id.encode("utf-8"))
    hashed_string = sha256_hash.hexdigest()

    return hashed_string


# EDITOR
@threaded
def send_editor_usage(payload: Dict):
    if is_test_env() or is_dev_env():
        return

    data = {
        "payload": payload,
        "userId": get_local_user_id(),
        "pythonVersion": get_local_python_version(),
        "abstraVersion": str(get_local_package_version()),
    }

    headers = {"apiKey": get_credentials()}
    api_url = f"{CLOUD_API_CLI_URL}/editor/usage"
    requests.post(api_url, json=data, headers=headers, timeout=REQUEST_TIMEOUT)


def editor_usage(func: Callable[..., Any]) -> Callable[..., Any]:
    @wraps(func)
    def wrapper(*args: Tuple[Any], **kwargs: Any) -> Any:
        arg_names = inspect.getfullargspec(func).args
        arg_values = dict(zip(arg_names, args))

        send_editor_usage({**arg_values, **kwargs, **{"event": func.__name__}})
        return func(*args, **kwargs)

    return wrapper


def editor_manual_usage(*, event: str, payload: Dict):
    send_editor_usage({**payload, "event": event})


# PLAYER
@threaded
def send_player_usage(*, event: str, payload: Dict, auth: Optional[str] = None):
    if CLOUD_API_PROD_URL is None:
        return

    body = dict(event=event, payload=payload)
    if auth is not None:
        if claims := UserClaims.from_jwt(auth.split(" ")[1]):
            body["email"] = claims.email

    requests.post(
        f"{CLOUD_API_PROD_URL}/usage/event",
        headers=CLOUD_API_PROD_HEADERS,
        json=body,
        timeout=REQUEST_TIMEOUT,
    )


def player_usage(func: Callable[..., Any]) -> Callable[..., Any]:
    @wraps(func)
    def wrapper(*args: Tuple[Any], **kwargs: Any) -> Any:
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        arg_names = inspect.getfullargspec(func).args
        arg_values = dict(zip(arg_names, args))

        send_player_usage(
            auth=auth, event=func.__name__, payload={**arg_values, **kwargs}
        )
        return func(*args, **kwargs)

    return wrapper


# Executions
def send_execution_usage(file: Path, status: str, exception: Optional[Exception]):
    if CLOUD_API_PROD_URL or is_test_env() or is_dev_env():
        return

    try:
        editor_manual_usage(
            event="execution_exception",
            payload=dict(file=str(file), status=status, exception=str(exception)),
        )
    except Exception:
        pass
