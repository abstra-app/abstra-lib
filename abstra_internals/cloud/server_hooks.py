import inspect
import signal
from uuid import uuid4

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


class GunicornOptionsBuilder:
    def __init__(self, main_controller: MainController) -> None:
        self.main_controller = main_controller

    def get_internal_id(self, obj: object, ensure=True) -> str:
        key = "abstra_uuid"

        if not getattr(obj, key, None) and ensure:
            setattr(obj, key, uuid4().__str__())

        return getattr(obj, key)

    #### HOOKS

    # Called just before the master process is initialized.
    def on_starting(self, server: Arbiter):
        server_uuid = self.get_internal_id(server)
        set_SERVER_UUID(server_uuid)

    # Called just before a worker is forked.
    def pre_fork(self, server: Arbiter, worker: Worker):
        worker_uuid = self.get_internal_id(worker)
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

            worker_id = self.get_internal_id(worker, ensure=False)
            app_id = self.get_internal_id(server, ensure=False)

            err_msg = f"Process exited with status '{status}'"
            if status == signal.Signals.SIGKILL:
                err_msg += ": memory limit reached"

            self.main_controller.fail_worker_executions(
                app_id=app_id, worker_id=worker_id, reason=err_msg
            )

        except Exception as e:
            AbstraLogger.capture_exception(e)

    # Called just before exiting Gunicorn.
    def on_exit(self, server: Arbiter):
        try:
            app_id = self.get_internal_id(server, ensure=False)
            self.main_controller.fail_app_executions(
                app_id=app_id, reason="Process exited unexpectedly."
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
