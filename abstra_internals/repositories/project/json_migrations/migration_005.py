from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration005(Migration):
    @staticmethod
    def target_version() -> str:
        return "5.0"

    @staticmethod
    def source_version() -> str:
        return "4.0"

    def _migrate(self) -> None:
        conditions = self.data.get("conditions", [])

        for condition in conditions:
            if "title" in condition:
                del condition["title"]

        iterators = self.data.get("iterators", [])
        for iterator in iterators:
            if "title" in iterator:
                del iterator["title"]
