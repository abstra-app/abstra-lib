import sys
from pathlib import Path
from typing import List

from abstra_internals.consts.filepaths import GITIGNORE_FILEPATH
from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings


def get_root_and_prefix_path():
    prefix_path = Path(sys.prefix).resolve().as_posix()
    root_path = Settings.root_path.resolve().as_posix()

    return root_path, prefix_path


def running_under_virtualenv() -> bool:
    # pip._internal.utils.virtualenv._running_under_venv
    if sys.prefix != getattr(sys, "base_prefix", sys.prefix):
        return True

    # pip._internal.utils.virtualenv._running_under_legacy_virtualenv
    if hasattr(sys, "real_prefix"):
        return True

    return False


def virtualenv_inside_project() -> bool:
    root_path, prefix_path = get_root_and_prefix_path()
    return prefix_path.startswith(root_path)


def virtualenv_ignored() -> bool:
    root_path, prefix_path = get_root_and_prefix_path()
    venv_folder = prefix_path.replace(root_path, "").lstrip("/")
    return FileSystemService.is_ignored(Path(venv_folder))


class UntrackVenv(LinterFix):
    label = "Add virtual env to git ignore"

    def fix(self):
        root_path, prefix_path = get_root_and_prefix_path()
        venv_folder = prefix_path.replace(root_path, "").lstrip("/")

        if virtualenv_inside_project() and not virtualenv_ignored():
            gitignore_file = Settings.root_path / GITIGNORE_FILEPATH
            with gitignore_file.open("a") as file:
                file.write("\n")
                file.write(venv_folder)

        FileSystemService.untrack_path_from_git(Path(venv_folder))


class VenvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the virtualenv folder"
        self.fixes = [UntrackVenv()]


class VenvInBundle(LinterRule):
    label = "You can't add virtual env to the bundle"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        if not running_under_virtualenv():
            return []

        if not virtualenv_inside_project():
            return []

        if virtualenv_ignored():
            return []

        return [VenvInBundleFound()]
