from ..server import get_cloud_app
from ..utils.environment import (
    DEFAULT_PORT,
    THREADS,
    WORKER_CLASS,
    WORKER_TEMP_DIR,
    WORKERS,
)
from .application import CustomApplication
from .hooks import hooks_options


def run():
    app = get_cloud_app(".")  # TODO: use CWD post 2.9.0

    options = {
        "workers": WORKERS,
        "threads": THREADS,
        "worker_class": WORKER_CLASS,
        "worker_tmp_dir": WORKER_TEMP_DIR,
        "bind": f":{DEFAULT_PORT or 8002}",
        **hooks_options,
    }

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
