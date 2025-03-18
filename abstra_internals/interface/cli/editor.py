import threading

from dotenv import load_dotenv
from werkzeug.serving import make_server

from abstra_internals.cloud_api import connect_tunnel
from abstra_internals.controllers.execution_consumer import ExecutionConsumer
from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.service.roles.client import RoleClientController
from abstra_internals.environment import HOST
from abstra_internals.fs_watcher import run_watcher
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
        target=run_watcher,
    ).start()


def start_resources_watcher():
    threading.Thread(
        daemon=True,
        name="resources_watcher",
        target=resources_polling_loop,
    ).start()


def editor(headless: bool):
    load_dotenv(Settings.root_path / ".env")
    serve_message()
    check_latest_version()
    AbstraLogger.init("local")

    controller = MainController(repositories=get_editor_repositories())
    controller.reset_repositories()
    StdioPatcher.apply(controller)

    start_file_watcher()
    start_resources_watcher()
    start_consumer(controller)

    role_client_controller = RoleClientController(controller.repositories)
    role_client_controller.loop_sync_connection_pool()

    app = get_local_app(controller)
    server = make_server(host=HOST, port=Settings.server_port, threaded=True, app=app)

    if not headless:
        browser_open_editor()

    connect_tunnel(
        on_public_url_update=role_client_controller.safe_sync_connection_pool
    )

    server.serve_forever()
