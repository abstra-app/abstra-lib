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
from abstra_internals.environment import EDITOR_MODE, HOST, RABBITMQ_CONNECTION_URI
from abstra_internals.interface.cli.messages import serve_message
from abstra_internals.logger import AbstraLogger
from abstra_internals.logs_watcher import LogsWatcher, on_logs_update
from abstra_internals.repositories.consumer import EditorConsumer
from abstra_internals.repositories.factory import (
    build_editor_repositories,
    build_web_editor_repositories,
)
from abstra_internals.repositories.producer import (
    LocalProducerRepository,
    WebEditorProducerRepository,
)
from abstra_internals.server.apps import get_local_app
from abstra_internals.services.file_watcher import FileWatcher
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher
from abstra_internals.tasks_watcher import TasksWatcher, on_tasks_update
from abstra_internals.utils.browser import background_open_editor
from abstra_internals.version import check_latest_version


def start_consumer(controller: MainController):
    # For local editor, use the in-memory queue
    if isinstance(controller.producer_repository, LocalProducerRepository):
        consumer = EditorConsumer(controller.producer_repository.queue)

        th = threading.Thread(
            daemon=True,
            name="start_consumer::EditorConsumer",
            target=ConsumerController(controller, consumer).start_loop,
        )

        th.start()
        return consumer, th

    # For web editor, use RabbitMQ consumer (runs in a separate worker pod)
    # The consumer thread is NOT started here - it runs in the worker pod
    if isinstance(controller.producer_repository, WebEditorProducerRepository):
        # Web editor server doesn't run consumer - workers do
        # Return None to indicate no consumer thread
        return None, None

    raise ValueError("Invalid producer repository")


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


def editor(headless: bool, verbose: bool = False):
    ensure_certificates()

    load_dotenv(Settings.root_path / ".env")

    serve_message()
    check_latest_version()
    AbstraLogger.init("local" if EDITOR_MODE == "local" else "cloud")

    # Determine if we should use RabbitMQ based on EDITOR_MODE and RABBITMQ_CONNECTION_URI
    # Web editor with workers: EDITOR_MODE=web + RABBITMQ_CONNECTION_URI set
    # Web editor without workers: EDITOR_MODE=web + no RABBITMQ_CONNECTION_URI (legacy mode)
    # Local editor: EDITOR_MODE=local
    is_web_editor = EDITOR_MODE == "web"
    use_rabbitmq_workers = is_web_editor and RABBITMQ_CONNECTION_URI is not None

    if use_rabbitmq_workers:
        AbstraLogger.info(
            "[Editor] Running in web editor mode with RabbitMQ workers (isolated execution)"
        )
        # Type assertion: we've already checked that RABBITMQ_CONNECTION_URI is not None
        assert RABBITMQ_CONNECTION_URI is not None
        repositories = build_web_editor_repositories(RABBITMQ_CONNECTION_URI)
    else:
        if is_web_editor:
            AbstraLogger.info(
                "[Editor] Running in web editor mode without workers (legacy mode)"
            )
        else:
            AbstraLogger.info("[Editor] Running in local editor mode")
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

    tasks_watcher = TasksWatcher([on_tasks_update])
    tasks_watcher.start()

    # Start consumer thread only for local editor
    # Web editor workers run in separate pods
    start_consumer(main_controller)

    app = get_local_app(main_controller)
    server = make_server(host=HOST, port=Settings.server_port, threaded=True, app=app)

    if not headless:
        background_open_editor()

    if not is_web_editor:
        # Only connect tunnel for local editor (not web editor)
        connect_tunnel(verbose=verbose)

    server.serve_forever()
