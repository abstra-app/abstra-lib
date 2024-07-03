from abstra_internals.cloud.application import CustomApplication
from abstra_internals.cloud.hooks import GunicornOptionsBuilder
from abstra_internals.environment import DEFAULT_PORT
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.apps import get_cloud_app
from abstra_internals.server.controller.main import MainController
from abstra_internals.settings import SettingsController
from abstra_internals.stdio_patcher import StdioPatcher


def run():
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")  # TODO: use CWD
    SettingsController.set_server_port(DEFAULT_PORT)

    controller = MainController()
    StdioPatcher.apply(controller)

    options = GunicornOptionsBuilder(controller).build()
    app = get_cloud_app(controller)

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
