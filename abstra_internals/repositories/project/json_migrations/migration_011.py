from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration011(Migration):
    @staticmethod
    def target_version() -> str:
        return "11.0"

    @staticmethod
    def source_version() -> str:
        return "10.0"

    def _migrate(self) -> None:
        self.data["language"] = "en"
