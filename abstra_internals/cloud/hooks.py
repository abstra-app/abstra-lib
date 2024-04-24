import datetime

from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from ..environment import set_SERVER_UUID, set_WORKER_UUID
from ..repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from ..repositories.execution_logs import StdioLogEntry
from ..threaded import threaded
from ..utils import get_internal_id


@threaded
def async_child_exit(server: Arbiter, worker: Worker):
    app_id = get_internal_id(server, ensure=False)
    worker_id = get_internal_id(worker, ensure=False)

    killed_executions = execution_repository.find_for_worker(
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
        execution_logs_repository.save(err_log)

        # Update execution status
        execution.status = "failed"
        execution_repository.update(execution)

        # Update stage run
        if execution.stage_run_id:
            stage_run_repository.change_state(execution.stage_run_id, "failed")


#### HOOKS


# Called just before the master process is initialized.
def on_starting(server: Arbiter):
    server_uuid = get_internal_id(server)
    set_SERVER_UUID(server_uuid)


# Called just before a worker is forked.
def pre_fork(server: Arbiter, worker: Worker):
    worker_uuid = get_internal_id(worker)
    set_WORKER_UUID(worker_uuid)


# Called just after a worker has been exited, in the master process.
def child_exit(server: Arbiter, worker: Worker):
    async_child_exit(server, worker)
