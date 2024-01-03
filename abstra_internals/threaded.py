from concurrent import futures

executor = futures.ThreadPoolExecutor()


def threaded(func):
    def wrapper(*args, **kwargs):
        return executor.submit(func, *args, **kwargs)

    return wrapper
