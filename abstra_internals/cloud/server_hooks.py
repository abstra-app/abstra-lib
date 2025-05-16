import inspect
import signal

from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from abstra_internals.controllers.main import MainController
from abstra_internals.environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_TEMP_DIR,
    WORKERS,
    set_SERVER_UUID,
    set_WORKER_UUID,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils import get_internal_id


class GunicornOptionsBuilder:
    def __init__(self, main_controller: MainController) -> None:
        self.main_controller = main_controller

    #### HOOKS

    # Called just before the master process is initialized.
    def on_starting(self, server: Arbiter):
        server_uuid = get_internal_id(server)
        set_SERVER_UUID(server_uuid)

    # Called just before a worker is forked.
    def pre_fork(self, server: Arbiter, worker: Worker):
        worker_uuid = get_internal_id(worker)
        set_WORKER_UUID(worker_uuid)

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

            worker_id = get_internal_id(worker, ensure=False)
            app_id = get_internal_id(server, ensure=False)

            err_msg = f"[ABORTED] Worker exited with status ({status})"
            if status == signal.Signals.SIGKILL:
                err_msg += ": Server reached its memory limit or was replaced with a new version"

            self.main_controller.worker_exit(
                app_id=app_id, worker_id=worker_id, err_msg=err_msg
            )

        except Exception as e:
            AbstraLogger.capture_exception(e)

    # Called just before exiting Gunicorn.
    def on_exit(self, server: Arbiter):
        try:
            app_id = get_internal_id(server, ensure=False)
            self.main_controller.app_exit(
                app_id=app_id, err_msg="[ABORTED] Server exited"
            )

        except Exception as e:
            AbstraLogger.capture_exception(e)

    def build(self):
        return {
            "bind": f":{DEFAULT_PORT or 8002}",
            "workers": WORKERS,
            "threads": THREADS,
            "worker_class": WORKER_CLASS,
            "worker_tmp_dir": WORKER_TEMP_DIR,
            "on_starting": self.on_starting,
            "pre_fork": self.pre_fork,
            "child_exit": self.child_exit,
            "on_exit": self.on_exit,
        }
