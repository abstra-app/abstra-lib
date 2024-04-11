from ..server import get_cloud_app
from ..utils.environment import NTHREADS, NWORKERS, PORT
from .application import CustomApplication
from .hooks import hooks_options


def server():
    app = get_cloud_app(".")  # TODO: use CWD post 2.9.0

    options = {
        "bind": f":{PORT}",
        "workers": NWORKERS,
        "threads": NTHREADS,
        "worker_class": "gthread",
        "worker_tmp_dir": "/dev/shm",
        **hooks_options,
    }

    CustomApplication(app, options).run()
