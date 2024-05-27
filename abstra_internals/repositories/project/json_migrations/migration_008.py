from .base_migration import Migration


class Migration008(Migration):
    @staticmethod
    def target_version() -> str:
        return "8.0"

    @staticmethod
    def source_version() -> str:
        return "7.0"

    def _migrate(self) -> None:
        workspace = self.data.get("workspace", {})

        if "sidebar" in workspace:
            del self.data["workspace"]["sidebar"]
