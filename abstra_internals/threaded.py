from threading import Thread


def threaded(func):
    def wrapper(*args, **kwargs):
        return Thread(name=func.__name__, target=func, args=args, kwargs=kwargs).start()

    return wrapper
