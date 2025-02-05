from .base_migration import Migration


class Migration013(Migration):
    @staticmethod
    def target_version() -> str:
        return "13.0"

    @staticmethod
    def source_version() -> str:
        return "12.0"

    def _migrate(self) -> None:
        self.data["agents"] = []
        self.data["clients"] = []
