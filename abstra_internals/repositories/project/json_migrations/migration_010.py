from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration010(Migration):
    @staticmethod
    def target_version() -> str:
        return "10.0"

    @staticmethod
    def source_version() -> str:
        return "9.0"

    def _migrate(self) -> None:
        if "visualization" in self.data:
            del self.data["visualization"]
