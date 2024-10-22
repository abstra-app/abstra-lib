import logging
import threading

from dotenv import load_dotenv as _load_dotenv
from werkzeug.debug import DebuggedApplication
from werkzeug.serving import make_server

from abstra_internals.controllers.main import MainController
from abstra_internals.editor_reloader import LocalReloader
from abstra_internals.environment import HOST
from abstra_internals.fs_watcher import files_changed_polling_loop
from abstra_internals.interface.cli.messages import serve_message
from abstra_internals.server.apps import get_local_app
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher
from abstra_internals.utils.browser import browser_open_editor
from abstra_internals.version import check_latest_version


def editor(
    debug: bool,
    load_dotenv: bool,
    reloading: bool,
):
    serve_message()
    check_latest_version()

    controller = MainController()
    controller.reset_repositories()
    StdioPatcher.apply(controller)

    # watch_py_root_files
    threading.Thread(
        daemon=True,
        name="file_watcher",
        target=files_changed_polling_loop,
        kwargs=dict(controller=controller),
    ).start()

    if load_dotenv:
        _load_dotenv(Settings.root_path / ".env")

    app = get_local_app(controller)
    if not debug:
        log = logging.getLogger("werkzeug")
        log.setLevel(logging.WARNING)
    else:
        app = DebuggedApplication(app, evalex=True)

    server = make_server(host=HOST, port=Settings.server_port, threaded=True, app=app)

    LocalReloader.set_server(server)

    if not reloading:
        browser_open_editor()

    server.serve_forever()
