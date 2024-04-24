import logging
import os
import threading
import webbrowser

from ...environment import HOST
from ...server.apps import get_local_app
from ...server.controller.main import MainController
from ...server.fs_watcher import watch_py_root_files
from ...settings import Settings
from ...stdio_monkey_patch import override_stdio
from .messages import serve_message
from .version import check_latest_version


def editor(
    debug: bool,
    load_dotenv: bool,
):
    if not debug:
        log = logging.getLogger("werkzeug")
        log.setLevel(logging.WARNING)

    serve_message()
    check_latest_version()

    # used to block hackerforms lib from opening
    os.environ["ABSTRA_SERVER"] = "true"

    override_stdio(print_exceptions=False)

    controller = MainController()
    app = get_local_app(controller)

    watch_py_root_files()
    port = Settings.server_port
    threading.Timer(1, lambda: webbrowser.open(f"http://{HOST}:{port}/_editor")).start()

    app.run(
        host=HOST,
        port=port,
        debug=debug,
        load_dotenv=load_dotenv,
    )
