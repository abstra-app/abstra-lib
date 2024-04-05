from .server.controller.main import MainController
from .settings import SettingsController
from .stdio_monkey_patch import override_stdio


def cloud_setup(root: str):
    SettingsController.set_root_path(root)
    SettingsController.set_server_port(None)
    override_stdio(print_exceptions=True)

    return MainController()
