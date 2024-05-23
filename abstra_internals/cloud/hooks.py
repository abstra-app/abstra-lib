import datetime

from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from abstra_internals.environment import set_SERVER_UUID, set_WORKER_UUID
from abstra_internals.repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from abstra_internals.repositories.execution_logs import StdioLogEntry
from abstra_internals.threaded import threaded
from abstra_internals.utils import get_internal_id


@threaded
def async_child_exit(server: Arbiter, worker: Worker):
    app_id = get_internal_id(server, ensure=False)
    worker_id = get_internal_id(worker, ensure=False)

    killed_executions = execution_repository.find_by_worker(
        worker_id=worker_id,
        status="running",
        app_id=app_id,
    )

    # update executions
    for execution_dto in killed_executions:
        # Add log entry
        err_log = StdioLogEntry(
            execution_id=execution_dto["id"],
            event="stderr",
            payload={"text": "Aborted: Server reached its memory limit"},
            created_at=datetime.datetime.now(),
            sequence=999999,
        )
        execution_logs_repository.save(err_log)

        # Update execution status
        execution_repository.set_failure_by_id(execution_id=execution_dto["id"])

        stage_run_repository.change_status(
            execution_dto["stage_run_id"], "failed", execution_dto["id"]
        )


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
