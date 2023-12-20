import requests, inspect
from typing import Any, Callable, Tuple

from .threaded import threaded
from .credentials import get_credentials
from .utils.environment import CLOUD_API_CLI_URL
from .utils import get_package_version, get_local_user_id


@threaded
def send_usage(data, header):
    api_url = f"{CLOUD_API_CLI_URL}/editor/usage"
    requests.post(api_url, json=data, headers=header)


def usage(func: Callable[..., Any]) -> Callable[..., Any]:
    def wrapper(*args: Tuple[Any], **kwargs: Any) -> Any:
        arg_names = inspect.getfullargspec(func).args
        arg_values = dict(zip(arg_names, args))

        metric_data = {
            "userId": get_local_user_id(),
            "payload": {**arg_values, **kwargs, **{"event": func.__name__}},
            "abstraVersion": get_package_version("abstra"),
        }

        headers = {"apiKey": get_credentials()}
        send_usage(metric_data, headers)
        return func(*args, **kwargs)

    original_route_name = func.__name__
    wrapper.__name__ = f"{original_route_name}_usage_wrapper"

    return wrapper
