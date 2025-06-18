import shutil

from abstra_internals.consts.filepaths import DOT_ABSTRA_DIR
from abstra_internals.interface.cli.deploy import _generate_zip_file
from abstra_internals.settings import Settings

from .base_migration import Migration


class Migration014(Migration):
    test_mode: bool = False

    def set_as_test(self):
        self.test_mode = True

    @staticmethod
    def target_version() -> str:
        return "14.0"

    @staticmethod
    def source_version() -> str:
        return "13.0"

    def delete_agents(self) -> None:
        del self.data["agents"]

    def delete_clients(self) -> None:
        del self.data["clients"]

    def get_all_stages(self):
        forms = self.data.get("forms", [])
        scripts = self.data.get("scripts", [])
        jobs = self.data.get("jobs", [])
        hooks = self.data.get("hooks", [])
        return forms + scripts + jobs + hooks

    def delete_transitions_to_agents_and_clients(self) -> None:
        for stage in self.get_all_stages():
            if not stage.get("transitions"):
                continue
            stage["transitions"] = [
                transition
                for transition in stage.get("transitions", [])
                if transition["target_type"] not in ["agents", "clients"]
            ]

    def backup_project_on_dot_abstra(self):
        try:
            root = Settings.root_path
            dot_abstra_folder = root / DOT_ABSTRA_DIR
            zip_path = str(_generate_zip_file())
            backup_zip_path = dot_abstra_folder / "backup.zip"
            shutil.move(zip_path, backup_zip_path)
        except Exception:
            pass

    def _migrate(self) -> None:
        if not self.test_mode:
            self.backup_project_on_dot_abstra()
        self.delete_agents()
        self.delete_clients()
        self.delete_transitions_to_agents_and_clients()
