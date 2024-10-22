import datetime
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
from abstra_internals.repositories.execution_logs import LogEntry
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

            killed_executions = (
                self.main_controller.execution_repository.find_by_worker(
                    worker_id=worker_id,
                    status="running",
                    app_id=app_id,
                )
            )

            text = f"[ABORTED] Worker exited with status ({status})"
            if status == signal.Signals.SIGKILL:
                text += ": Server reached its memory limit or was replaced with a new version"

            # update executions
            for execution in killed_executions:
                # Add log entry
                err_log = LogEntry(
                    execution_id=execution.id,
                    created_at=datetime.datetime.now(),
                    payload={"text": text},
                    sequence=999999,
                    event="stderr",
                )
                self.main_controller.execution_logs_repository.save(err_log)

                # Update execution status
                self.main_controller.execution_repository.set_failure_by_id(
                    execution_id=execution.id
                )

                self.main_controller.stage_run_repository.change_status(
                    execution.stage_run_id, "failed", execution.id
                )

        except Exception as e:
            AbstraLogger.capture_exception(e)

    # Called just before exiting Gunicorn.
    def on_exit(self, server: Arbiter):
        try:
            app_id = get_internal_id(server, ensure=False)

            exited_execs = self.main_controller.execution_repository.find_by_app(
                status="running",
                app_id=app_id,
            )

            # update executions
            for execution in exited_execs:
                # Add log entry
                err_log = LogEntry(
                    execution_id=execution.id,
                    created_at=datetime.datetime.now(),
                    payload={"text": "[ABORTED] Server exited"},
                    sequence=999999,
                    event="stderr",
                )
                self.main_controller.execution_logs_repository.save(err_log)

                # Update execution status
                self.main_controller.execution_repository.set_failure_by_id(
                    execution_id=execution.id
                )

                self.main_controller.stage_run_repository.change_status(
                    execution.stage_run_id, "failed", execution.id
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
