import sys
import traceback


def format_exception(exception, limit=None, chain=True):
    if sys.version_info >= (3, 10):
        # For Python 3.10 and later
        # https://docs.python.org/3/library/traceback.html#traceback.format_exception

        return traceback.format_exception(exception, limit=limit, chain=chain)
    else:
        # For Python 3.9 and earlier
        return traceback.format_exception(
            type(exception), exception, exception.__traceback__, limit=limit
        )
