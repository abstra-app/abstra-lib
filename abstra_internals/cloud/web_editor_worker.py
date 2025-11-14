"""
Web Editor Worker

This worker is responsible for executing code in the web editor environment.
It runs in separate pods from the web editor server to isolate resource usage
and prevent heavy executions from affecting the editor's responsiveness.

The worker:
- Consumes execution requests from a dedicated RabbitMQ queue
- Processes executions in isolated processes
- Communicates with the editor server via RabbitMQ
- Can scale horizontally based on workload
"""

from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import DEFAULT_PORT, RABBITMQ_CONNECTION_URI
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import WebEditorConsumer
from abstra_internals.repositories.factory import build_web_editor_repositories
from abstra_internals.settings import SettingsController
from abstra_internals.signals import SignalHandlers


def run():
    """
    Main entry point for the web editor worker.

    This worker:
    1. Connects to RabbitMQ using the provided connection URI
    2. Consumes messages from the web_editor_executions queue
    3. Executes code in isolated processes
    4. Handles graceful shutdown on SIGTERM
    """
    SignalHandlers.init()
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    if not RABBITMQ_CONNECTION_URI:
        raise Exception(
            "ABSTRA_RABBITMQ_CONNECTION_URI is required for web editor worker"
        )

    AbstraLogger.info("[WebEditorWorker] Starting web editor worker")
    AbstraLogger.info(
        f"[WebEditorWorker] RabbitMQ URI configured: {bool(RABBITMQ_CONNECTION_URI)}"
    )

    # Build repositories for web editor (uses WebEditorProducerRepository)
    repositories = build_web_editor_repositories(RABBITMQ_CONNECTION_URI)
    controller = MainController(repositories=repositories)

    # Start consuming from web_editor_executions queue
    with WebEditorConsumer(RABBITMQ_CONNECTION_URI) as consumer:
        SignalHandlers.register_sigterm_callback(consumer.stop_iter)
        AbstraLogger.info("[WebEditorWorker] Starting consumer loop")
        ConsumerController(controller, consumer).start_loop()


if __name__ == "__main__":
    run()
