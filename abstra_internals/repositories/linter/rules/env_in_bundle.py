from typing import List

from abstra_internals.consts.filepaths import GITIGNORE_FILEPATH
from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings


class UntrackEnv(LinterFix):
    label = "Add env to git ignore"

    def fix(self):
        env_file = Settings.root_path / ".env"

        if not FileSystemService.is_ignored(env_file):
            gitignore_file = Settings.root_path / GITIGNORE_FILEPATH
            with gitignore_file.open("a") as file:
                file.write("\n.env")

        FileSystemService.untrack_path_from_git(env_file)


class EnvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the .env file"
        self.fixes = [UntrackEnv()]


class EnvInBundle(LinterRule):
    label = "You can't add .env to the bundle"
    type = "security"

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"

        if not env_file.exists():
            return []

        if FileSystemService.is_ignored(env_file):
            return []

        return [EnvInBundleFound()]
