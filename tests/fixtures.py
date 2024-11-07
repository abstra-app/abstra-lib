import os
import shutil
import tempfile
import threading
import time
import typing
from pathlib import Path
from unittest import TestCase

from abstra_internals.controllers.main import MainController
from abstra_internals.interface.cli.editor import start_consumer
from abstra_internals.repositories.factory import get_local_repositories
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.apps import get_cloud_app, get_local_app
from abstra_internals.settings import SettingsController
from abstra_internals.utils.dot_abstra import DOT_ABSTRA_FOLDER_NAME


def rm_tree(pth: Path):
    pth = Path(pth)
    if not pth.exists():
        return
    for child in pth.glob("*"):
        if child.is_file():
            child.unlink()
        else:
            rm_tree(child)
    pth.rmdir()


def init_dir(path: typing.Optional[Path] = None):
    path = path or Path(tempfile.mkdtemp())
    SettingsController.set_root_path(path.as_posix())
    ProjectRepository.initialize()

    return path


def clear_dir(path: Path):
    os.chdir(path.parent)
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
    response["stage_run_cards"] = sorted(
        response["stage_run_cards"], key=lambda x: x["stage"]
    )
    for stage_run_card in response["stage_run_cards"]:
        stage_run_card["content"] = sorted(
            stage_run_card["content"], key=lambda x: x["key"]
        )
    return response


class BaseTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        (self.root / DOT_ABSTRA_FOLDER_NAME).mkdir(exist_ok=True)
        self.repositories = get_local_repositories()
        self.controller = MainController(self.repositories)

    def tearDown(self) -> None:
        wait_non_daemon_threads()
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
        self.consumer, self.thread = start_consumer(self.controller)

    def tearDown(self) -> None:
        self.consumer.stop()
        self.thread.join()
        super().tearDown()
