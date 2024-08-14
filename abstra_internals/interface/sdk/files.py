import shutil
from pathlib import Path
from typing import Union
from uuid import uuid4

from abstra_internals.constants import (
    get_persistent_dir,
    get_project_url,
    get_public_dir,
)
from abstra_internals.settings import Settings


def create_public_link(path: Union[str, Path]) -> str:
    """
    Create a public link for a file by copying it to the public directory

    Args:
        path (Union[str, Path]): Path to the file

    Returns:
        str: Public link to the file
    """

    if isinstance(path, str):
        path = Settings.root_path / path

    if not path.exists():
        raise Exception("path does not exist")

    new_path = f"{uuid4()}/{path.name}"
    public_path = get_public_dir() / new_path
    public_path.parent.mkdir(parents=True, exist_ok=True)

    shutil.copy(path, public_path)
    return f"{get_project_url()}/_public/{new_path}"


__all__ = [
    "get_public_dir",
    "get_persistent_dir",
    "create_public_link",
]
