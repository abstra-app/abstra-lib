import datetime

from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from abstra_internals.environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_TEMP_DIR,
    WORKERS,
    set_SERVER_UUID,
    set_WORKER_UUID,
)
from abstra_internals.repositories.execution_logs import StdioLogEntry
from abstra_internals.server.controller.main import MainController
from abstra_internals.threaded import threaded
from abstra_internals.utils import get_internal_id


class GunicornOptionsBuilder:
    def __init__(self, main_controller: MainController) -> None:
        self.main_controller = main_controller

    @threaded
    def async_child_exit(self, server: Arbiter, worker: Worker):
        app_id = get_internal_id(server, ensure=False)
        worker_id = get_internal_id(worker, ensure=False)

        killed_executions = self.main_controller.execution_repository.find_by_worker(
            worker_id=worker_id,
            status="running",
            app_id=app_id,
        )

        # update executions
        for execution in killed_executions:
            # Add log entry
            err_log = StdioLogEntry(
                execution_id=execution.id,
                event="stderr",
                payload={"text": "Aborted: Server reached its memory limit"},
                created_at=datetime.datetime.now(),
                sequence=999999,
            )
            self.main_controller.execution_logs_repository.save(err_log)

            # Update execution status
            self.main_controller.execution_repository.set_failure_by_id(
                execution_id=execution.id
            )

            self.main_controller.stage_run_repository.change_status(
                execution.stage_run_id, "failed", execution.id
            )

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
        self.async_child_exit(server, worker)

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
        }
