from .base_migration import Migration


class Migration017(Migration):
    @staticmethod
    def target_version() -> str:
        return "17.0"

    @staticmethod
    def source_version() -> str:
        return "16.0"

    def _migrate(self) -> None:
        # Add packages array if it doesn't exist
        if "components" not in self.data:
            self.data["components"] = []

        for form in self.data.get("forms", []):
            form["input"] = False
            form["output"] = False

        for script in self.data.get("scripts", []):
            script["input"] = False
            script["output"] = False

        for hook in self.data.get("hooks", []):
            hook["input"] = False
            hook["output"] = False

        for job in self.data.get("jobs", []):
            job["input"] = False
            job["output"] = False
