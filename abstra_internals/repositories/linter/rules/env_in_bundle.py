from typing import List

from abstra_internals.consts.filepaths import GITIGNORE_FILEPATH
from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings


class AddEnvToGitIgnore(LinterFix):
    label = "Add env to git ignore"

    def fix(self):
        abstraignore_file = Settings.root_path / GITIGNORE_FILEPATH
        with abstraignore_file.open("a") as file:
            file.write("\n.env")
        # Clear cache after modifying .gitignore
        FileSystemService.clear_gitignore_cache()


class EnvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the .env file"
        self.fixes = [AddEnvToGitIgnore()]


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
