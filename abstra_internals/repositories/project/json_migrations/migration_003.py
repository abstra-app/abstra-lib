from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration003(Migration):
    @staticmethod
    def target_version() -> str:
        return "3.0"

    @staticmethod
    def source_version() -> str:
        return "2.0"

    def _migrate(self) -> None:
        forms = self.data.get("forms", [])
        hooks = self.data.get("hooks", [])
        jobs = self.data.get("jobs", [])
        scripts = self.data.get("scripts", [])
        for stage in [forms, hooks, jobs, scripts]:
            if "code_content" in stage:
                del stage["code_content"]
