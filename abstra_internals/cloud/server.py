from abstra_internals.cloud.application import CustomApplication
from abstra_internals.cloud.hooks import child_exit, on_starting, pre_fork
from abstra_internals.environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_TEMP_DIR,
    WORKERS,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.apps import get_cloud_app
from abstra_internals.server.controller.main import MainController
from abstra_internals.settings import SettingsController
from abstra_internals.stdio_patcher import StdioPatcher


def run():
    AbstraLogger.init("cloud")
    StdioPatcher.apply(debug=True)
    SettingsController.set_root_path(".")  # TODO: use CWD
    SettingsController.set_server_port(DEFAULT_PORT)

    options = {
        "bind": f":{DEFAULT_PORT or 8002}",
        "workers": WORKERS,
        "threads": THREADS,
        "worker_class": WORKER_CLASS,
        "worker_tmp_dir": WORKER_TEMP_DIR,
        "on_starting": on_starting,
        "child_exit": child_exit,
        "pre_fork": pre_fork,
    }

    controller = MainController()
    app = get_cloud_app(controller)
    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
