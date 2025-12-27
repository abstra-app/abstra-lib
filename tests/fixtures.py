import multiprocessing
import os
import shutil
import tempfile
import threading
import time
import typing
from pathlib import Path
from unittest import TestCase

from abstra_internals.consts.filepaths import DOT_ABSTRA_DIR
from abstra_internals.controllers.main import MainController
from abstra_internals.interface.cli.editor import start_consumer
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.producer import LocalProducerRepository
from abstra_internals.repositories.project.project import LocalProjectRepository
from abstra_internals.server.apps import get_cloud_app, get_local_app
from abstra_internals.settings import SettingsController


def rm_tree(pth: Path):
    pth = Path(pth)
    if not pth.exists():
        return

    # Use shutil.rmtree with error handling for Windows compatibility
    import stat

    def handle_remove_readonly(func, path, exc):
        # Handle read-only files on Windows
        if os.path.exists(path):
            os.chmod(path, stat.S_IWRITE)
            func(path)

    try:
        shutil.rmtree(pth, onerror=handle_remove_readonly)
    except OSError:
        # Fallback to manual deletion if shutil.rmtree fails
        try:
            for root, dirs, files in os.walk(pth, topdown=False):
                for name in files:
                    file_path = os.path.join(root, name)
                    os.chmod(file_path, stat.S_IWRITE)
                    os.unlink(file_path)
                for name in dirs:
                    os.rmdir(os.path.join(root, name))
            os.rmdir(pth)
        except OSError:
            pass  # Ignore if cleanup fails


def init_dir(path: typing.Optional[Path] = None):
    path = path or Path(tempfile.mkdtemp())
    SettingsController.set_root_path(path.as_posix())
    SettingsController.set_public_url("foo")
    SettingsController.set_server_port(3000)
    LocalProjectRepository().initialize()

    return path


def clear_dir(path: Path):
    os.chdir(path.parent)
    # Invalidate cwd cache after changing directory
    from abstra_internals.utils.fs_cache import clear_all_caches, invalidate_cwd_cache

    invalidate_cwd_cache()
    # Also clear all filesystem caches to avoid stale data from deleted test directories
    clear_all_caches()
    rm_tree(path)


def copy_dir(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)


def wait_non_daemon_threads():
    while True:
        time.sleep(0.1)
        non_daemon_threads = [t for t in threading.enumerate() if not t.daemon]
        if len(non_daemon_threads) == 1:
            break


def sort_response(response: dict):
    response["tasks"] = sorted(response["tasks"], key=lambda x: x["targetStageId"])
    return response


def sort_response_by_payload(response: dict):
    response["tasks"] = sorted(response["tasks"], key=lambda x: x["payload"]["i"])
    return response


class BaseTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.repositories = build_editor_repositories()
        producer = self.repositories.producer
        assert isinstance(producer, LocalProducerRepository)
        self.queue = producer.queue
        self.controller = MainController(self.repositories)
        self.consumer, self.consumer_thread, self.consumer_controller = start_consumer(
            self.controller
        )

    def tearDown(self) -> None:
        # Close the queue first to interrupt any blocking queue.get() calls
        self.queue.close()

        # Stop the consumer
        self.consumer.stop_iter()

        # Shutdown the consumer controller's executor to stop non-daemon threads
        if hasattr(self, "consumer_controller") and self.consumer_controller:
            self.consumer_controller.shutdown()

        # Wait for the consumer thread to finish
        if self.consumer_thread.is_alive():
            self.consumer_thread.join(timeout=0.25)

        # Force cleanup of any remaining processes
        for p in multiprocessing.active_children():
            if p.is_alive():
                p.terminate()
                p.join(timeout=3.0)  # Increased timeout

                # Force kill if still alive
                if p.is_alive():
                    try:
                        p.kill()
                        p.join(timeout=1.0)
                    except (ProcessLookupError, OSError):
                        # Process already dead
                        pass

        # Give extra time for any lingering process cleanup
        time.sleep(0.2)

        # Wait for all non-daemon threads to finish
        wait_non_daemon_threads()

        # Clean up directory
        clear_dir(self.root)

    def get_editor_flask_client(self):
        return get_local_app(self.controller).test_client()

    def get_cloud_flask_client(self):
        return get_cloud_app(self.controller).test_client()


class BaseWorkflowTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.maxDiff = None
        self.client = self.get_editor_flask_client()
        (self.root / DOT_ABSTRA_DIR).mkdir(exist_ok=True)

    def tearDown(self) -> None:
        super().tearDown()
