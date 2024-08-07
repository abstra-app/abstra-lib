import os
from typing import List

from dotenv import load_dotenv

from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from abstra_internals.repositories.env_vars import EnvVarsRepository
from abstra_internals.settings import Settings


class LoadEnvVars(LinterFix):
    label = "Load environment variables"

    def fix(self):
        load_dotenv(Settings.root_path / ".env", override=True)


class EnvFileChangeFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "Your .env file was updated. Please load the new environment variables to ensure consistency."
        self.fixes = [LoadEnvVars()]


class EnvFileChanged(LinterRule):
    label = "Changes to .env file detected"
    type = "bug"
    initial_file_exists = None

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"
        current_file_exists = env_file.exists()

        if EnvFileChanged.initial_file_exists is None:
            EnvFileChanged.initial_file_exists = current_file_exists
            if current_file_exists:
                return []

        if EnvFileChanged.initial_file_exists != current_file_exists:
            return [EnvFileChangeFound()]

        env_vars = EnvVarsRepository.list()
        for env in env_vars:
            if env.value != os.getenv(env.name):
                return [EnvFileChangeFound()]

        return []
