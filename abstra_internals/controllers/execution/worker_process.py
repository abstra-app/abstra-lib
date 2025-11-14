import signal
import threading
import traceback
from multiprocessing import Queue
from multiprocessing.connection import Connection
from typing import TYPE_CHECKING, Any, Dict, Optional, Union

from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client import (
    ClientAbandoned,
    ExecutionClient,
    HeadlessClient,
)
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.execution.execution_client_hook import HookClient
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import ClientContext
from abstra_internals.entities.execution_context import FormContext, HookContext
from abstra_internals.environment import IS_PRODUCTION, set_SERVER_UUID, set_WORKER_UUID
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.factory import (
    build_editor_repositories,
    build_prod_repositories,
)
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher

if TYPE_CHECKING:
    from abstra_internals.utils.rabbitmq_connection import RabbitMQConnection


# Connection-like type for both Pipe and RabbitMQ connections
ConnectionLike = Union[Connection, "RabbitMQConnection"]


def make_client_from_context(
    ctx: ClientContext, connection: ConnectionProtocol
) -> ExecutionClient:
    if isinstance(ctx, FormContext):
        return FormClient(
            context=ctx,
            conn=connection,
            production_mode=IS_PRODUCTION,
        )
    elif isinstance(ctx, HookContext):
        return HookClient(
            context=ctx,
            conn=connection,
        )
    else:
        return HeadlessClient(
            context=ctx, conn=connection, production_mode=IS_PRODUCTION
        )


def process_main(
    *,
    root_path: str,
    server_port: int,
    worker_id: str,
    app_id: str,
    stage: StageWithFile,
    connection: Optional[Connection],
    request: ClientContext,
    local_queue: Optional[Queue] = None,
    rabbitmq_params: Optional[Dict[str, Any]] = None,
):
    thread = threading.current_thread()
    thread.name = f"WorkerProcess[{worker_id}]"
    Settings.set_root_path(root_path)
    Settings.set_server_port(server_port, force=True)

    try:
        # Create RabbitMQ connection if parameters are provided
        actual_connection = connection
        if connection is None and rabbitmq_params is not None:
            from abstra_internals.utils.rabbitmq_connection import RabbitMQConnection

            AbstraLogger.debug(
                f"[WorkerProcess] Creating RabbitMQ connection for execution {rabbitmq_params['execution_id']}"
            )
            actual_connection = RabbitMQConnection(
                connection_uri=rabbitmq_params["connection_uri"],
                send_queue=f"worker_to_server_{rabbitmq_params['execution_id']}",
                recv_queue=f"server_to_worker_{rabbitmq_params['execution_id']}",
                execution_id=rabbitmq_params["execution_id"],
            )

        if actual_connection is None:
            raise Exception("No connection available - this should never happen")

        if IS_PRODUCTION:
            AbstraLogger.init("cloud")
            repositories = build_prod_repositories()
            controller = MainController(repositories)
        else:
            AbstraLogger.init("local")
            assert local_queue is not None, "Local queue is not initialized"
            repositories = build_editor_repositories(local_queue)
            controller = MainController(repositories)

        set_SERVER_UUID(app_id)
        set_WORKER_UUID(worker_id)

        StdioPatcher.apply(controller)

        execution_client = make_client_from_context(request, actual_connection)

        execution_controller = ExecutionController(
            repositories=controller.repositories,
            stage=stage,
            client=execution_client,
            context=request,
        )

        def sigterm_handler(signum, frame):
            raise ClientAbandoned()

        # Registra o handler para SIGTERM
        signal.signal(signal.SIGTERM, sigterm_handler)

        execution_data = execution_controller.run()

        AbstraLogger.debug("[ConsumerController Subprocess] Finished")
        return execution_data
    except Exception as e:
        AbstraLogger.error(f"[ConsumerController Subprocess] Error: {e}")
        AbstraLogger.capture_exception(e)
        traceback.print_exc()
        raise e
