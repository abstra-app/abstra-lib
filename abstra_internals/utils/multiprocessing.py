import sys
from multiprocessing import Queue

from abstra_internals.repositories.multiprocessing import MPContext


def safe_multiprocessing_queue(mp_context: MPContext) -> Queue:
    try:
        return mp_context.Queue()
    except OSError as e:
        if e.errno == 28:  # ENOSPC
            if sys.platform == "darwin":
                print("\nError: System limit for semaphores reached.")
                print(
                    "This is a common issue on macOS when processes are not cleaned up properly."
                )
                print(
                    "Please try restarting your computer to clear the system semaphores."
                )
            else:
                print("\nError: System resource limit reached (Errno 28).")
                print(
                    "Please check your system for resource exhaustion (e.g. disk space, shared memory)."
                )
            sys.exit(1)
        raise e
