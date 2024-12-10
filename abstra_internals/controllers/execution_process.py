from typing import Optional

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import ClientContext
from abstra_internals.environment import set_SERVER_UUID, set_WORKER_UUID
from abstra_internals.logger import AbstraLogger, Environment
from abstra_internals.repositories.project.project import Stage
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher


# runs in subprocess - all arguments must be picklable/multiprocessable
def ExecutionProcess(
    *,
    root_path: str,
    worker_uuid: str,
    arbiter_uuid: str,
    stage: Stage,
    controller: MainController,
    environment: Optional[Environment],
    request: Optional[ClientContext] = None,
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
        ).run(
            stage=stage,
            context=request,
        )
    except Exception as e:
        AbstraLogger.error(f"[{head_id}] WORKER ERROR: {e}")
        AbstraLogger.capture_exception(e)
    finally:
        AbstraLogger.debug(f"[{head_id}] WORKER EXIT")
