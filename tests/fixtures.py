import os
import shutil
import sys
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
from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
)
from abstra_internals.server.apps import get_cloud_app, get_local_app
from abstra_internals.settings import SettingsController


def rm_tree(pth: Path):
    """Windows-safe recursive directory removal with retry logic for file locking."""
    pth = Path(pth)
    if not pth.exists():
        return

    if sys.platform == "win32":
        max_attempts = 5
        for attempt in range(max_attempts):
            try:
                _rm_tree_impl(pth)
                return
            except (OSError, PermissionError) as e:
                if attempt == max_attempts - 1:
                    try:
                        shutil.rmtree(pth, ignore_errors=True)
                        return
                    except Exception:
                        pass
                    raise e
                time.sleep(0.1 * (2**attempt))
    else:
        _rm_tree_impl(pth)


def _rm_tree_impl(pth: Path):
    """Non-recursive directory removal to avoid stack overflow."""
    directories_to_remove = []

    for root, dirs, files in os.walk(pth, topdown=False):
        root_path = Path(root)

        for file in files:
            file_path = root_path / file
            try:
                if sys.platform == "win32":
                    file_path.chmod(0o777)
                file_path.unlink()
            except (OSError, PermissionError):
                try:
                    file_path.chmod(0o777)
                    file_path.unlink()
                except Exception:
                    pass

        directories_to_remove.append(root_path)

    for directory_path in directories_to_remove:
        try:
            if directory_path.exists():
                directory_path.rmdir()
        except OSError:
            pass


def init_dir(path: typing.Optional[Path] = None):
    path = path or Path(tempfile.mkdtemp())
    SettingsController.set_root_path(path.as_posix())
    SettingsController.set_public_url("foo")
    SettingsController.set_server_port(3000)
    LocalProjectRepository().initialize()

    _cleanup_cache_dirs(path)
    return path


def _cleanup_cache_dirs(base_path: Path):
    """Clean up problematic cache directories that cause Windows file locking."""
    cache_directories = [".ruff_cache", "__pycache__", ".pytest_cache", ".mypy_cache"]

    for cache_dir_name in cache_directories:
        cache_path = base_path / cache_dir_name
        if cache_path.exists():
            try:
                rm_tree(cache_path)
            except Exception:
                pass


def clear_dir(path: Path):
    """Safely clear directory with Windows file locking handling."""
    _cleanup_cache_dirs(path)

    try:
        os.chdir(path.parent)
    except OSError:
        try:
            os.chdir(Path.home())
        except Exception:
            pass

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
        self.controller = MainController(self.repositories)

    def tearDown(self) -> None:
        wait_non_daemon_threads()

        if sys.platform == "win32":
            time.sleep(0.1)

        try:
            clear_dir(self.root)
        except Exception:
            if sys.platform == "win32":
                time.sleep(0.5)
                try:
                    clear_dir(self.root)
                except Exception as e:
                    print(
                        f"Warning: Failed to clean up test directory {self.root}: {e}"
                    )
            else:
                raise

    def get_editor_flask_client(self):
        return get_local_app(self.controller).test_client()

    def get_cloud_flask_client(self):
        return get_cloud_app(self.controller).test_client()


class BaseWorkflowTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.maxDiff = None
        self.client = self.get_editor_flask_client()
        self.consumer, self.thread = start_consumer(self.controller)
        (self.root / DOT_ABSTRA_DIR).mkdir(exist_ok=True)

    def tearDown(self) -> None:
        self.consumer.stop_iter()
        self.thread.join()
        super().tearDown()
