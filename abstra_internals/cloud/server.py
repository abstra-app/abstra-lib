from ..server import get_cloud_app
from ..utils.environment import PORT, THREADS, WORKER_CLASS, WORKER_TEMP_DIR, WORKERS
from .application import CustomApplication
from .hooks import hooks_options


def run():
    app = get_cloud_app(".")  # TODO: use CWD post 2.9.0

    options = {
        "bind": f":{PORT}",
        "workers": WORKERS,
        "threads": THREADS,
        "worker_class": WORKER_CLASS,
        "worker_tmp_dir": WORKER_TEMP_DIR,
        **hooks_options,
    }

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
