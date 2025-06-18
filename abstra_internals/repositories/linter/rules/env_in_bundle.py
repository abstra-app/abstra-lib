from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings


class AddEnvToAbstraIgnore(LinterFix):
    label = "Add env to abstra ignore"

    def fix(self):
        abstraignore_file = Settings.root_path / ".abstraignore"
        with abstraignore_file.open("a") as file:
            file.write("\n.env")


class EnvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the .env file"
        self.fixes = [AddEnvToAbstraIgnore()]


class EnvInBundle(LinterRule):
    label = "You can't add .env to the bundle"
    type = "security"

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"

        if not env_file.exists():
            return []

        ignored_patterns = FileSystemService.load_ignore_patterns(Settings.root_path)

        if FileSystemService.is_ignored(
            ignored_patterns, env_file.relative_to(Settings.root_path)
        ):
            return []

        return [EnvInBundleFound()]
