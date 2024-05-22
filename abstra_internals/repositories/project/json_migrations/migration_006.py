from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration006(Migration):
    @staticmethod
    def target_version() -> str:
        return "6.0"

    @staticmethod
    def source_version() -> str:
        return "5.0"

    def _migrate(self) -> None:
        self.data["kanban"] = {
            "access_control": {"is_public": False, "required_roles": []}
        }

        self.data["signup_policy"] = {"email_patterns": []}

        for form in self.data.get("forms", []):
            form["access_control"] = {"is_public": True, "required_roles": []}
