import inspect
from functools import wraps
from pathlib import Path
from typing import Any, Callable, Dict, Literal, Optional, Tuple

import flask
import requests

from abstra_internals.credentials import get_credentials
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.threaded import threaded
from abstra_internals.utils import (
    get_local_python_version,
    get_local_user_id,
    is_dev_env,
    is_test_env,
)
from abstra_internals.utils.packages import get_local_package_version


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
    requests.post(api_url, json=data, headers=headers)


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
    if SIDECAR_URL is None:
        return

    body = dict(event=event, payload=payload)
    if auth is not None:
        if claims := UserClaims.from_jwt(auth.split(" ")[1]):
            body["email"] = claims.email

    requests.post(f"{SIDECAR_URL}/usage/event", headers=SIDECAR_HEADERS, json=body)


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
def _send_execution_usage(file: Path, status: str, exception: Optional[Exception]):
    if SIDECAR_URL or is_test_env() or is_dev_env():
        return

    try:
        editor_manual_usage(
            event="execution_exception",
            payload=dict(file=str(file), status=status, exception=str(exception)),
        )
    except Exception:
        pass


Result = Tuple[Literal["finished", "abandoned", "failed"], Optional[Exception]]


def execution_usage(func: Callable[[Path], Result]) -> Callable[[Path], Result]:
    @wraps(func)
    def wrapper(file: Path) -> Result:
        status, exception = func(file)
        _send_execution_usage(file, status, exception)
        return status, exception

    return wrapper
