from abstra_internals.cloud.server_application import CustomApplication
from abstra_internals.cloud.server_hooks import GunicornOptionsBuilder
from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.service.roles.client import RoleClientController
from abstra_internals.environment import DEFAULT_PORT
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.factory import get_prodution_app_repositories
from abstra_internals.server.apps import get_cloud_app
from abstra_internals.settings import SettingsController
from abstra_internals.stdio_patcher import StdioPatcher


def run():
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    controller = MainController(repositories=get_prodution_app_repositories())
    StdioPatcher.apply(controller)

    role_client_controller = RoleClientController(controller.repositories)
    role_client_controller.safe_sync_connection_pool()
    role_client_controller.loop_sync_connection_pool()

    options = GunicornOptionsBuilder(controller).build()
    app = get_cloud_app(controller)

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
