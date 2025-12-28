from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import DEFAULT_PORT, RABBITMQ_CONNECTION_URI
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import (
    WebEditorConsumer,
    WebEditorControlConsumer,
)
from abstra_internals.repositories.factory import build_web_editor_repositories
from abstra_internals.settings import SettingsController
from abstra_internals.signals import SignalHandlers


def run():
    SignalHandlers.init()
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    if not RABBITMQ_CONNECTION_URI:
        raise Exception("ABSTRA_RABBITMQ_CONNECTION_URI not found")

    repositories = build_web_editor_repositories(RABBITMQ_CONNECTION_URI)
    controller = MainController(repositories=repositories)

    with WebEditorConsumer(RABBITMQ_CONNECTION_URI) as consumer:
        with WebEditorControlConsumer(RABBITMQ_CONNECTION_URI) as control_consumer:
            SignalHandlers.register_sigterm_callback(consumer.stop_iter)
            SignalHandlers.register_sigterm_callback(control_consumer.stop_iter)
            ConsumerController(controller, consumer, control_consumer).start_loop()


if __name__ == "__main__":
    run()
