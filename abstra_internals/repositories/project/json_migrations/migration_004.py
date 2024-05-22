from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration004(Migration):
    @staticmethod
    def target_version() -> str:
        return "4.0"

    @staticmethod
    def source_version() -> str:
        return "3.0"

    def _migrate(self) -> None:
        forms = self.data.get("forms", [])

        for form in forms:
            form["notification_trigger"] = {
                "variable_name": "assignee_emails",
                "enabled": False,
            }
