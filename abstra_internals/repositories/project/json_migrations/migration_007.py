from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration007(Migration):
    @staticmethod
    def target_version() -> str:
        return "7.0"

    @staticmethod
    def source_version() -> str:
        return "6.0"

    def _migrate(self) -> None:
        iterators = self.data.get("iterators", [])

        for iterator in iterators:
            iterator["item_name"] = "item"
