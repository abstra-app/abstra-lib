import sys
from pathlib import Path
from typing import List

from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
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


class AddVenvToAbstraIgnore(LinterFix):
    label = "Add virtual env to abstra ignore"

    def fix(self):
        root_path, prefix_path = get_root_and_prefix_path()
        venv_folder = prefix_path.replace(root_path, "").lstrip("/")

        abstraignore_file = Settings.root_path / ".abstraignore"
        with abstraignore_file.open("a") as file:
            file.write("\n")
            file.write(venv_folder)


class VenvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the virtualenv folder"
        self.fixes = [AddVenvToAbstraIgnore()]


class VenvInBundle(LinterRule):
    label = "You can't add virtual env to the bundle"
    type = "bug"

    def virtualenv_inside_project(self) -> bool:
        root_path, prefix_path = get_root_and_prefix_path()
        return prefix_path.startswith(root_path)

    def virtualenv_in_abstraignore(self) -> bool:
        abstraignore_file = Settings.root_path / ".abstraignore"
        if not abstraignore_file.exists():
            return False

        root_path, prefix_path = get_root_and_prefix_path()
        venv_folder = prefix_path.replace(root_path, "").lstrip("/")

        for line in abstraignore_file.read_text(encoding="utf-8").split("\n"):
            if line == venv_folder:
                return True

        return False

    def find_issues(self) -> List[LinterIssue]:
        if not running_under_virtualenv():
            return []

        if not self.virtualenv_inside_project():
            return []

        if self.virtualenv_in_abstraignore():
            return []

        return [VenvInBundleFound()]
