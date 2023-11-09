from ..linter import LinterRule, LinterFix
from ...settings import Settings
from ...utils.file import files_from_directory


class AddEnvToAbstraIgnore(LinterFix):
    label = "Add env to abstra ignore"
    description = "\n".join(
        [
            "Add the .env file to the .abstraignore file.",
            "If the .abstraignore file does not exist, it will be created.",
        ]
    )

    def fix(self):
        abstraignore_file = Settings.root_path / ".abstraignore"
        with abstraignore_file.open("a") as file:
            file.write("\n.env")


class EnvInBundle(LinterRule):
    label = ".env in bundle"
    type = "security"
    description = "\n".join(
        ["The .env file should not be in the bundle.", "This is a security risk."]
    )
    fixes = [AddEnvToAbstraIgnore()]

    def is_valid(self) -> bool:
        env_file = Settings.root_path / ".env"

        bundle_files = files_from_directory(Settings.root_path)

        return env_file not in bundle_files
