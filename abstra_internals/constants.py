import pathlib

from abstra_internals.consts.filepaths import PERSISTENT_DIR_PATH
from abstra_internals.environment import FILES_FOLDER, PROJECT_URL
from abstra_internals.settings import Settings


def get_persistent_dir() -> pathlib.Path:
    """
    Get the path to the persistent directory

    Returns:
        pathlib.Path: Path to the persistent directory
    """

    if FILES_FOLDER:
        return pathlib.Path(FILES_FOLDER)

    dir = Settings.root_path / PERSISTENT_DIR_PATH
    dir.mkdir(parents=True, exist_ok=True)
    return dir


def get_public_dir() -> pathlib.Path:
    """
    Get the path to the public directory

    Returns:
        pathlib.Path: Path to the public directory
    """

    return get_persistent_dir() / "_public"


def get_uploads_dir() -> pathlib.Path:
    """
    Get the path to the uploads directory

    Returns:
        pathlib.Path: Path to the uploads directory
    """

    return get_persistent_dir() / "_uploads"


def get_project_url() -> str:
    """
    Get the project URL. localhost if running locally

    Returns:
        str: Project URL
    """

    return PROJECT_URL or f"http://localhost:{Settings.server_port}"


ABSTRA_LOGO_URL = "https://assets.abstra.cloud/logo-small-256px.png"
