import requests, inspect
from pathlib import Path
from concurrent import futures
from typing import Any, Callable, Tuple
from .credentials import get_credentials
from .utils import get_package_version, get_local_user_id

executor = futures.ThreadPoolExecutor()


def async_send_usage(data, header):
    api_url = "http://cloud-api.abstra.cloud/cli/editor/usage"
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

        executor.submit(async_send_usage, metric_data, headers)

        return func(*args, **kwargs)

    original_route_name = func.__name__
    wrapper.__name__ = (
        f"{original_route_name}_usage_wrapper"  ## avoid name collision in blueprints
    )

    return wrapper
