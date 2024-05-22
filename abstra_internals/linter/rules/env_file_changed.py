import os
from typing import List

from abstra_internals.editor_reloader import LocalReloader
from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from abstra_internals.settings import Settings


class ReloadServer(LinterFix):
    label = "Reload server"

    def fix(self):
        LocalReloader.reload()


class EnvFileChangeFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "Your .env file was updated. Please restart your development server to ensure consistency."
        self.fixes = [ReloadServer()]


class EnvFileChanged(LinterRule):
    label = "Changes to .env file detected"
    type = "bug"
    initial_last_modified = None
    initial_file_exists = None

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"
        current_file_exists = env_file.exists()

        if EnvFileChanged.initial_file_exists is None:
            EnvFileChanged.initial_file_exists = current_file_exists
            if current_file_exists:
                EnvFileChanged.initial_last_modified = os.path.getmtime(env_file)
                return []

        if EnvFileChanged.initial_file_exists != current_file_exists:
            return [EnvFileChangeFound()]

        if (
            EnvFileChanged.initial_last_modified
            and EnvFileChanged.initial_last_modified < os.path.getmtime(env_file)
        ):
            return [EnvFileChangeFound()]

        return []
