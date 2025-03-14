from functools import wraps
from typing import Callable


def deprecated(new_function: str):
    def decorator(func: Callable):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(
                f"[WARNING] Function '{func.__name__}' is deprecated. Please use '{new_function}' instead."
            )
            return func(*args, **kwargs)

        setattr(wrapper, "__is_deprecated__", True)
        setattr(wrapper, "__new_function__", new_function)
        return wrapper

    return decorator
