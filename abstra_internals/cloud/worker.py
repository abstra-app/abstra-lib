from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import DEFAULT_PORT, RABBITMQ_CONNECTION_URI
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import RabbitConsumer
from abstra_internals.repositories.factory import get_prodution_app_repositories
from abstra_internals.settings import SettingsController
from abstra_internals.signals import SignalHandlers


def run():
    SignalHandlers.init()
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    if not RABBITMQ_CONNECTION_URI:
        raise Exception("RABBITMQ_CONNECTION_URI not found")

    controller = MainController(repositories=get_prodution_app_repositories())
    with RabbitConsumer(RABBITMQ_CONNECTION_URI) as consumer:
        SignalHandlers.register_sigterm_callback(consumer.stop)
        ConsumerController(controller, consumer).start_loop()


if __name__ == "__main__":
    run()
