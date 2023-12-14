from concurrent import futures

executor = futures.ThreadPoolExecutor()


def threaded(func):
    def wrapper(*args, **kwargs):
        executor.submit(func, *args, **kwargs)

    return wrapper
