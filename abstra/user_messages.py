import sys
from typing import Any, Callable, Tuple


def deprecated(msg: str):
    def decorator(func: Callable[..., Any]) -> Callable[..., Any]:
        def wrapper(*args: Tuple[Any], **kwargs: Any) -> Any:
            print(f"Deprecation notice: {msg}", file=sys.stderr)
            return func(*args, **kwargs)

        return wrapper

    return decorator
