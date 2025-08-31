import os
import ssl
import subprocess
import sys
import threading
from multiprocessing import Queue

import certifi
from dotenv import load_dotenv
from werkzeug.serving import make_server

from abstra_internals.cloud_api import connect_tunnel
from abstra_internals.controllers.codebase_events import CodebaseEventController
from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import HOST
from abstra_internals.interface.cli.messages import serve_message
from abstra_internals.logger import AbstraLogger
from abstra_internals.logs_watcher import LogsWatcher, on_logs_update
from abstra_internals.repositories.consumer import EditorConsumer
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.producer import LocalProducerRepository
from abstra_internals.server.apps import get_local_app
from abstra_internals.services.file_watcher import FileWatcher
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher
from abstra_internals.utils.browser import background_open_editor
from abstra_internals.version import check_latest_version


def start_consumer(controller: MainController):
    if not isinstance(controller.producer_repository, LocalProducerRepository):
        raise ValueError("Invalid producer repository")

    consumer = EditorConsumer(controller.producer_repository.queue)

    th = threading.Thread(
        daemon=True,
        name="start_consumer::ExecutionConsumer",
        target=ConsumerController(controller, consumer).start_loop,
    )

    th.start()

    return consumer, th


def ensure_certificates():
    try:
        cafile = certifi.where()
        if not os.path.isfile(cafile):
            raise FileNotFoundError(f"Certifi CA file not found at {cafile}")
        ssl.create_default_context(cafile=cafile)
    except Exception:
        print(
            "SSL certificate validation failed. Attempting to restore certificates..."
        )
        try:
            subprocess.run(
                [
                    sys.executable,
                    "-m",
                    "pip",
                    "install",
                    "--force-reinstall",
                    "certifi",
                ],
                check=True,
            )
            import certifi as certifi_reinstalled

            cafile_re = certifi_reinstalled.where()
            if os.path.isfile(cafile_re):
                print(f"Certificates restored at: {cafile_re}")
            else:
                print(
                    f"Certifi CA file still missing at: {cafile_re}. Please check your Python environment."
                )
        except Exception as update_e:
            print(f"Failed to restore certificates: {update_e}")


def editor(headless: bool):
    ensure_certificates()

    load_dotenv(Settings.root_path / ".env")

    serve_message()
    check_latest_version()
    AbstraLogger.init("local")

    repositories = build_editor_repositories(Queue())
    main_controller = MainController(repositories)
    main_controller.reset_repositories()
    StdioPatcher.apply(main_controller)

    codebase_event_controller = CodebaseEventController(repositories)
    watcher = FileWatcher(
        [
            codebase_event_controller.reload_env,
            codebase_event_controller.reload_modules,
            codebase_event_controller.lint_files,
            codebase_event_controller.broadcast_changes,
        ]
    )
    watcher.start()

    logs_watcher = LogsWatcher([on_logs_update])
    logs_watcher.start()

    start_consumer(main_controller)

    app = get_local_app(main_controller)
    server = make_server(host=HOST, port=Settings.server_port, threaded=True, app=app)

    if not headless:
        background_open_editor()

    connect_tunnel()

    server.serve_forever()
