from ..linter import LinterRule, LinterFix, LinterIssue
from ...settings import Settings
from typing import List
from ...utils.file import files_from_directory


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

        bundle_files = files_from_directory(Settings.root_path)

        if env_file in bundle_files:
            return [EnvInBundleFound()]
        else:
            return []
