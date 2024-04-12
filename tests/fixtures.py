import os
import shutil
import tempfile
import typing
from pathlib import Path

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.apps import get_cloud_app, get_local_app
from abstra_internals.server.controller.main import MainController
from abstra_internals.settings import SettingsController


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


def get_local_client():
    controller = MainController()
    app = get_local_app(controller)
    return app.test_client()


def get_cloud_client():
    controller = MainController()
    app = get_cloud_app(controller)
    return app.test_client()


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
