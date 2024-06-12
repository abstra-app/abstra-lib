import threading
import time


def wait_all_threads():
    while threading.active_count() > 1:
        time.sleep(0.1)
