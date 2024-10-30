import os
from typing import List, Optional

from dotenv import load_dotenv

from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from abstra_internals.services.env_vars import EnvVarsRepository
from abstra_internals.settings import Settings


class LoadEnvVars(LinterFix):
    label = "Load environment variables"
    rule: "EnvFileChanged"

    def __init__(self, rule: "EnvFileChanged") -> None:
        self.rule = rule

    def fix(self):
        load_dotenv(Settings.root_path / ".env", override=True)
        self.rule.has_env_file_initially = True


class EnvFileChangeFound(LinterIssue):
    def __init__(self, rule: "EnvFileChanged") -> None:
        self.label = "Your .env file was updated. Please load the new environment variables to ensure consistency."
        self.fixes = [LoadEnvVars(rule)]


class EnvFileChanged(LinterRule):
    label = "Changes to .env file detected"
    type = "bug"
    has_env_file_initially: Optional[bool] = None

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"
        has_env_file = env_file.exists()

        if self.has_env_file_initially is None:
            self.has_env_file_initially = has_env_file
            if has_env_file:
                return []

        if self.has_env_file_initially != has_env_file:
            if has_env_file:
                # File was created
                return [EnvFileChangeFound(self)]
            else:
                # File was deleted
                # No need to report this behavior as the missing_env rule will take care of it
                self.has_env_file_initially = has_env_file
                return []

        env_vars = EnvVarsRepository.list()
        for env in env_vars:
            if env.value != os.getenv(env.name):
                return [EnvFileChangeFound(self)]

        return []
