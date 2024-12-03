import gc
import traceback
from pathlib import Path
from typing import Literal, Optional, Tuple

from abstra_internals.controllers.execution_client import ExecutionClient
from abstra_internals.controllers.execution_client_form import ClientAbandoned
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import import_as_new
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import ActionStage
from abstra_internals.usage import execution_usage
from abstra_internals.utils.datetime import now_str

DEFAULT_STATUS = "failed"


def ExecutionTarget(
    *,
    stage: ActionStage,
    execution: Execution,
    client: ExecutionClient,
    repositories: Repositories,
    workflow_engine: IWorkflowEngine,
):
    ExecutionStore.set(execution, client, repositories)
    status = DEFAULT_STATUS

    try:
        repositories.execution.create(execution)
        print(f"[ABSTRA] {now_str()} - Execution started")

        client.handle_start(execution.id)

        status, exception = _execute_code(stage.file_path)
        if exception:
            client.handle_failure(exception)
        else:
            client.handle_success()

    except ClientAbandoned:
        status = "abandoned"
    except Exception as e:
        status = "failed"
        AbstraLogger.capture_exception(e)
    finally:
        print(f"[ABSTRA] {now_str()} - Execution {status}")

        try:
            repositories.stage_run.change_status(execution.stage_run_id, status)
            execution.set_status(status)
            repositories.execution.update(execution)

            workflow_engine.handle_execution_end(execution)
        except Exception as e_final:
            AbstraLogger.capture_exception(e_final)
        finally:
            ExecutionStore.clear()


def _execute_without_exit(filepath: Path):
    try:
        import_as_new(filepath.as_posix())
    except SystemExit as e:
        no_errors = e.code is None or e.code == 0
        if no_errors:
            return
        raise Exception(f"SystemExit: {e.code}") from e


Result = Tuple[Literal["finished", "abandoned", "failed"], Optional[Exception]]


def print_exception(exception: Exception, entrypoint: Path):
    tb = exception.__traceback__
    # tb.tb_frame.f_code.co_filename returns "c:" instead of "C:" on Windows
    while tb and str(entrypoint).lower() != tb.tb_frame.f_code.co_filename.lower():
        tb = tb.tb_next
    traceback.print_exception(type(exception), exception, tb)


@execution_usage
def _execute_code(filepath: Path) -> Result:
    try:
        _execute_without_exit(filepath)
        return "finished", None
    except ClientAbandoned as e:
        return "abandoned", e
    except Exception as e:
        print_exception(e, entrypoint=filepath)
        return "failed", e
    finally:
        gc.collect()
