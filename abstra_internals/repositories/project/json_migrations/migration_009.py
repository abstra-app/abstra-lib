from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration009(Migration):
    @staticmethod
    def target_version() -> str:
        return "9.0"

    @staticmethod
    def source_version() -> str:
        return "8.0"

    def _migrate(self) -> None:
        if "signup_policy" in self.data:
            del self.data["signup_policy"]
