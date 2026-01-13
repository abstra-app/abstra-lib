# IMPORTANT: Gevent monkey-patch MUST be done before ANY other imports
# to avoid RecursionError with SSL in Python 3.12+
# Only apply when using gevent worker class
import os

if os.getenv("ABSTRA_WORKER_CLASS", "gthread") == "gevent":
    from gevent import monkey

    monkey.patch_all()

# Now it's safe to import everything else
# noqa: E402 to ignore "module level import not at top of file" warning
from abstra_internals.cloud.server_application import CustomApplication  # noqa: E402
from abstra_internals.cloud.server_hooks import GunicornOptionsBuilder  # noqa: E402
from abstra_internals.controllers.main import MainController  # noqa: E402
from abstra_internals.environment import DEFAULT_PORT  # noqa: E402
from abstra_internals.logger import AbstraLogger  # noqa: E402
from abstra_internals.repositories.factory import build_prod_repositories  # noqa: E402
from abstra_internals.server.apps import get_cloud_app  # noqa: E402
from abstra_internals.settings import SettingsController  # noqa: E402
from abstra_internals.stdio_patcher import StdioPatcher  # noqa: E402


def run():
    AbstraLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    controller = MainController(repositories=build_prod_repositories())
    StdioPatcher.apply(controller)

    options = GunicornOptionsBuilder(controller).build()
    app = get_cloud_app(controller)

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
