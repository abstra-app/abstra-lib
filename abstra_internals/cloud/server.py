from ..environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_TEMP_DIR,
    WORKERS,
)
from ..logger import AbstraLogger
from ..server.apps import get_cloud_app
from ..server.controller.main import MainController
from ..settings import SettingsController
from ..stdio_monkey_patch import override_stdio
from .application import CustomApplication
from .hooks import on_starting, pre_fork


def run():
    AbstraLogger.init("cloud")
    override_stdio(print_exceptions=True)
    SettingsController.set_root_path(".")  # TODO: use CWD
    SettingsController.set_server_port(DEFAULT_PORT)

    options = {
        "workers": WORKERS,
        "threads": THREADS,
        "worker_class": WORKER_CLASS,
        "worker_tmp_dir": WORKER_TEMP_DIR,
        "bind": f":{DEFAULT_PORT or 8002}",
        "on_starting": on_starting,
        "pre_fork": pre_fork,
    }

    controller = MainController()
    app = get_cloud_app(controller)
    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
