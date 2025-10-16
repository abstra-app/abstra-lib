from .base_migration import Migration


class Migration016(Migration):
    @staticmethod
    def target_version() -> str:
        return "16.0"

    @staticmethod
    def source_version() -> str:
        return "15.0"

    def _migrate(self) -> None:
        for form_data in self.data.get("forms", []):
            form_data.pop("allow_restart", None)
            form_data.pop("restart_button_text", None)
            form_data.pop("welcome_title", None)
