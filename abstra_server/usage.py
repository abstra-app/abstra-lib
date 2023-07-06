import requests
import uuid
import inspect
from typing import Any, Callable, Tuple

from abstra_cli.credentials import get_credentials

def usage(root_path: str) -> Callable[..., Any]:
    def usage_decorator(func: Callable[..., Any]) -> Callable[..., Any]:
        def wrapper(*args: Tuple[Any], **kwargs: Any) -> Any:
            arg_names = inspect.getfullargspec(func).args
            arg_values = dict(zip(arg_names, args))

            metric_data = {
            'userId': str(uuid.getnode()),
            'payload': {**arg_values, **kwargs, **{'event': func.__name__}}
            }

            headers = {
                'apiKey': get_credentials(root_path)
            }

            api_url = 'http://cloud-api.abstra.cloud/cli/editor/usage'
            requests.post(api_url, json=metric_data, headers=headers)

            

            return func(*args, **kwargs)
        
        original_route_name = func.__name__
        wrapper.__name__ = f"{original_route_name}_usage_wrapper" ## avoid name collision in blueprints
        
        return wrapper
    return usage_decorator

