import logging
import threading

from dotenv import load_dotenv as _load_dotenv
from werkzeug.debug import DebuggedApplication
from werkzeug.serving import make_server

from abstra_internals.controllers.execution_consumer import ExecutionConsumer
from abstra_internals.controllers.main import MainController
from abstra_internals.editor_reloader import LocalReloader
from abstra_internals.environment import HOST
from abstra_internals.fs_watcher import watch_file_change_events
from abstra_internals.interface.cli.messages import serve_message
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import EditorConsumer
from abstra_internals.repositories.factory import get_editor_repositories
from abstra_internals.repositories.producer import LocalProducerRepository
from abstra_internals.resources_watcher import resources_polling_loop
from abstra_internals.server.apps import get_local_app
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher
from abstra_internals.utils.browser import browser_open_editor
from abstra_internals.version import check_latest_version


def start_consumer(controller: MainController):
    if not isinstance(controller.producer_repository, LocalProducerRepository):
        raise ValueError("Invalid producer repository")

    consumer = EditorConsumer(controller.producer_repository.queue)

    th = threading.Thread(
        daemon=True,
        name="execution_consumer",
        target=ExecutionConsumer,
        kwargs=dict(controller=controller, consumer=consumer),
    )

    th.start()

    return consumer, th


def start_file_watcher():
    threading.Thread(
        daemon=True,
        name="file_watcher",
        target=watch_file_change_events,
        kwargs=dict(path=str(Settings.root_path)),
    ).start()


def start_resources_watcher(controller: MainController):
    threading.Thread(
        daemon=True,
        name="resources_watcher",
        target=resources_polling_loop,
        kwargs=dict(controller=controller),
    ).start()


def editor(
    debug: bool,
    load_dotenv: bool,
    reloading: bool,
):
    serve_message()
    check_latest_version()

    controller = MainController(repositories=get_editor_repositories())
    controller.reset_repositories()
    StdioPatcher.apply(controller)
    AbstraLogger.init("local")

    start_consumer(controller)
    start_file_watcher()
    start_resources_watcher(controller)

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
