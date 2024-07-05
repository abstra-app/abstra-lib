import gc
from pathlib import Path
from typing import Literal, Optional, Tuple

from abstra_internals.compatibility.compat_traceback import print_exception
from abstra_internals.controllers.execution_client import (
    ClientAbandoned,
    ExecutionClient,
    ExecutionClientStore,
)
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import import_as_new
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import ActionStage
from abstra_internals.repositories.stage_run import StageRunRepository


def ExecutionTarget(
    *,
    stage: ActionStage,
    execution: Execution,
    client: ExecutionClient,
    workflow_engine: IWorkflowEngine,
    stage_run_repository: StageRunRepository,
    execution_repository: ExecutionRepository,
):
    try:
        execution_repository.create(execution.to_dto())
        client.handle_start(execution.id)
        ExecutionClientStore.set(client)

        status, exception = _execute_code(stage.file_path)
        stage_run_repository.change_status(execution.stage_run_id, status)
        execution.set_status(status)
        execution_repository.update(execution.to_dto())

        if exception:
            print_exception(exception)
            client.handle_failure(exception)
        else:
            client.handle_success()

        workflow_engine.handle_execution_end(execution.to_dto())
    except Exception as e:
        AbstraLogger.capture_exception(e)
    finally:
        execution_repository.free_current()
        ExecutionClientStore.clear()


def _execute_without_exit(filepath: Path):
    try:
        import_as_new(filepath.as_posix())
    except SystemExit as e:
        no_errors = e.code is None or e.code == 0
        if no_errors:
            return
        raise Exception(f"SystemExit: {e.code}") from e


Result = Tuple[Literal["finished", "abandoned", "failed"], Optional[Exception]]


def _execute_code(filepath: Path) -> Result:
    try:
        _execute_without_exit(filepath)
        return "finished", None
    except ClientAbandoned:
        return "abandoned", None
    except Exception as e:
        return "failed", e
    finally:
        gc.collect()
