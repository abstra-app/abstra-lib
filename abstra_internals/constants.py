import pathlib
from .settings import Settings
from .utils.environment import FILES_FOLDER


def get_persistent_dir() -> pathlib.Path:
    if FILES_FOLDER:
        return pathlib.Path(FILES_FOLDER)

    dir = Settings.root_path / ".abstra" / "persistent"
    dir.mkdir(parents=True, exist_ok=True)
    return dir
