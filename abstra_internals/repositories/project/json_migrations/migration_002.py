from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)


class Migration002(Migration):
    @staticmethod
    def target_version() -> str:
        return "2.0"

    @staticmethod
    def source_version() -> str:
        return "1.0"

    def _add_visualization_settings(self) -> None:
        self.data["visualization"] = []

    def _transition_label_to_type(self) -> None:
        for stage_type in ["scripts", "forms", "hooks", "jobs"]:
            for stage in self.data[stage_type]:
                stage["transitions"] = [
                    {
                        "target_id": transition["target_id"],
                        "target_type": transition["target_type"],
                        "type": transition.get("type", f"{stage_type}:finished"),
                        "id": transition["id"],
                    }
                    for transition in stage["transitions"]
                ]

    def _add_control_stages(self) -> None:
        self.data["iterators"] = []
        self.data["conditions"] = []

    def _migrate(self) -> None:
        self._transition_label_to_type()
        self._add_visualization_settings()
        self._add_control_stages()
