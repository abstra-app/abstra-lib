import inspect
from functools import wraps
from typing import Any, Callable, Dict, Tuple

import requests

from abstra_internals.credentials import get_credentials
from abstra_internals.environment import CLOUD_API_CLI_URL
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
