from typing import Optional

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import RequestContext
from abstra_internals.environment import set_SERVER_UUID, set_WORKER_UUID
from abstra_internals.logger import AbstraLogger, Environment
from abstra_internals.repositories.project.project import ActionStage
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher


# runs in subprocess - all arguments must be picklable/multiprocessable
def ExecutionProcess(
    *,
    root_path: str,
    worker_uuid: str,
    arbiter_uuid: str,
    stage: ActionStage,
    controller: MainController,
    environment: Optional[Environment],
    request: Optional[RequestContext] = None,
    target_stage_run_id: Optional[str] = None,
):
    Settings.set_root_path(root_path)
    AbstraLogger.init(environment)

    set_WORKER_UUID(worker_uuid)
    set_SERVER_UUID(arbiter_uuid)
    StdioPatcher.apply(controller)

    head_id = worker_uuid.split("-")[0]

    AbstraLogger.debug(f"[{head_id}] WORKER INIT")

    try:
        ExecutionController(
            repositories=controller.repositories,
            workflow_engine=controller.workflow_engine,
        ).run(
            stage=stage,
            request=request,
            target_stage_run_id=target_stage_run_id,
        )
    except Exception as e:
        AbstraLogger.error(f"[{head_id}] WORKER ERROR: {e}")
        AbstraLogger.capture_exception(e)
    finally:
        AbstraLogger.debug(f"[{head_id}] WORKER EXIT")
