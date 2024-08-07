import pathlib

from abstra_internals.environment import FILES_FOLDER, PROJECT_URL
from abstra_internals.settings import Settings
from abstra_internals.utils.dot_abstra import PERSISTENT_DIR


def get_persistent_dir() -> pathlib.Path:
    if FILES_FOLDER:
        return pathlib.Path(FILES_FOLDER)

    dir = Settings.root_path / PERSISTENT_DIR
    dir.mkdir(parents=True, exist_ok=True)
    return dir


def get_project_url() -> str:
    return PROJECT_URL or f"http://localhost:{Settings.server_port}"


STAGE_RUN_ID_PARAM_KEY = "abstra-run-id"
