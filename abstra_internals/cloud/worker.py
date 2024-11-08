from multiprocessing.forkserver import set_forkserver_preload

from abstra_internals.controllers import execution_process
from abstra_internals.controllers.execution_consumer import ExecutionConsumer
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import RABBITMQ_CONNECTION_URI
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import RabbitConsumer
from abstra_internals.repositories.factory import get_prodution_app_repositories
from abstra_internals.settings import SettingsController
from abstra_internals.signals import SignalHandlers


def run():
    SignalHandlers.init()
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")

    if not RABBITMQ_CONNECTION_URI:
        raise Exception("RABBITMQ_CONNECTION_URI not found")

    set_forkserver_preload([execution_process.__name__])
    controller = MainController(repositories=get_prodution_app_repositories())
    with RabbitConsumer(RABBITMQ_CONNECTION_URI) as consumer:
        SignalHandlers.register_sigterm_callback(consumer.stop)
        ExecutionConsumer(consumer, controller)


if __name__ == "__main__":
    run()
