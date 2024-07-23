from functools import wraps
from threading import Thread


def threaded(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return Thread(name=func.__name__, target=func, args=args, kwargs=kwargs).start()

    return wrapper
