import threading
import traceback
from multiprocessing import Queue
from typing import Optional

from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import ClientContext
from abstra_internals.environment import (
    IS_PRODUCTION,
    set_SERVER_UUID,
    set_WORKER_UUID,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.factory import (
    build_editor_repositories,
    build_prod_repositories,
)
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher


def process_main(
    *,
    root_path: str,
    server_port: int,
    worker_id: str,
    app_id: str,
    stage: StageWithFile,
    request: Optional[ClientContext] = None,
    local_queue: Optional[Queue] = None,
):
    thread = threading.current_thread()
    thread.name = f"WorkerProcess[{worker_id}]"
    Settings.set_root_path(root_path)
    Settings.set_server_port(server_port, force=True)

    try:
        if IS_PRODUCTION:
            AbstraLogger.init("cloud")
            repositories = build_prod_repositories()
            controller = MainController(repositories)
        else:
            AbstraLogger.init("local")
            repositories = build_editor_repositories(local_queue)
            controller = MainController(repositories)

        set_SERVER_UUID(app_id)
        set_WORKER_UUID(worker_id)

        StdioPatcher.apply(controller)

        ExecutionController(
            repositories=controller.repositories,
            stage=stage,
            client=None,
            context=request,
        ).run()

        AbstraLogger.debug("[ConsumerController Subprocess] Finished")
    except Exception as e:
        AbstraLogger.error(f"[ConsumerController Subprocess] Error: {e}")
        AbstraLogger.capture_exception(e)
        traceback.print_exc()
        raise e
