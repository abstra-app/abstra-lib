from os.path import getmtime
from typing import List

from ...settings import Settings
from ..linter import LinterIssue, LinterRule


class EnvFileChangeFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "Your .env file was updated. Please restart your development server to ensure consistency."
        self.fixes = []


class EnvFileChanged(LinterRule):
    label = "Changes to .env file detected"
    type = "warning"
    initial_last_modified = None
    initial_file_exists = None

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"
        current_file_exists = env_file.exists()

        if EnvFileChanged.initial_file_exists is None:
            EnvFileChanged.initial_file_exists = current_file_exists
            if current_file_exists:
                EnvFileChanged.initial_last_modified = getmtime(env_file)
                return []

        if EnvFileChanged.initial_file_exists != current_file_exists:
            return [EnvFileChangeFound()]

        if (
            EnvFileChanged.initial_last_modified
            and EnvFileChanged.initial_last_modified < getmtime(env_file)
        ):
            return [EnvFileChangeFound()]

        return []
