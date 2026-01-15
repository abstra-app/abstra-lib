import inspect
import signal

from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from abstra_internals.controllers.main import MainController
from abstra_internals.environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_CONNECTIONS,
    WORKER_TEMP_DIR,
    WORKERS,
)
from abstra_internals.logger import AbstraLogger


class GunicornOptionsBuilder:
    def __init__(self, main_controller: MainController) -> None:
        self.main_controller = main_controller

    #### HOOKS

    # Called just after a worker has been exited, in the master process.
    def child_exit(self, server: Arbiter, worker: Worker):
        try:
            # gambi do gunicorn
            # https://github.com/benoitc/gunicorn/blob/master/gunicorn/arbiter.py#L515
            status = -1
            if curr_frame := inspect.currentframe():
                if back := curr_frame.f_back:
                    back_status = back.f_locals.get("status")
                    if isinstance(back_status, int):
                        status = back_status

            err_msg = f"Process exited with status '{status}'"
            if status == signal.Signals.SIGKILL:
                err_msg += ": memory limit reached"

            AbstraLogger.warning(f"[ABSTRA] Worker {worker.pid} exited. {err_msg}")

        except Exception as e:
            AbstraLogger.capture_exception(e)

    def build(self):
        config = {
            "bind": f":{DEFAULT_PORT or 8002}",
            "workers": WORKERS,
            "worker_class": WORKER_CLASS,
            "worker_tmp_dir": WORKER_TEMP_DIR,
            "child_exit": self.child_exit,
        }

        # Use worker_connections for gevent/eventlet, threads for gthread/sync
        if WORKER_CLASS in ["gevent", "eventlet"]:
            config["worker_connections"] = WORKER_CONNECTIONS
        else:
            config["threads"] = THREADS

        return config
