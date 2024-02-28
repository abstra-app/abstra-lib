import pathlib

from .settings import Settings
from .utils.dot_abstra import PERSISTENT_DIR
from .utils.environment import FILES_FOLDER


def get_persistent_dir() -> pathlib.Path:
    if FILES_FOLDER:
        return pathlib.Path(FILES_FOLDER)

    dir = Settings.root_path / PERSISTENT_DIR
    dir.mkdir(parents=True, exist_ok=True)
    return dir
