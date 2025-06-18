import shutil
from pathlib import Path

from abstra_internals.consts.filepaths import DOT_ABSTRA_DIR
from abstra_internals.interface.cli.deploy import _generate_zip_file
from abstra_internals.settings import Settings

from .base_migration import Migration


def generate_compat_lines(script_type: str):
    return [
        "from abstra.compat import use_legacy_threads\n",
        '"""\n',
        "Calling the use_legacy_threads function allows using\n",
        "the legacy threads in versions > 3.0.0\n",
        "https://abstra.io/docs/guides/use-legacy-threads/\n\n",
        "The new way of using workflows is with tasks. Learn more\n",
        "at https://abstra.io/docs/concepts/tasks/ and contact us\n",
        "on any issues during your migration\n",
        '"""\n',
        f'use_legacy_threads("{script_type}")\n\n',
    ]


class Migration012(Migration):
    test_mode: bool = False

    @staticmethod
    def target_version() -> str:
        return "12.0"

    @staticmethod
    def source_version() -> str:
        return "11.0"

    def set_as_test(self):
        self.test_mode = True

    def create_file(self, file_name, template_content, placeholders):
        file_content = template_content.format(**placeholders)

        file_path = Settings.root_path.joinpath(file_name)
        file_path.parent.mkdir(parents=True, exist_ok=True)

        file_path.write_text(file_content, encoding="utf-8")

    def get_all_stages(self):
        forms = self.data.get("forms", [])
        scripts = self.data.get("scripts", [])
        jobs = self.data.get("jobs", [])
        hooks = self.data.get("hooks", [])
        conditions = self.data.get("conditions", [])
        iterators = self.data.get("iterators", [])
        return forms + scripts + jobs + hooks + conditions + iterators

    def create_script_from_condition(self, condition, transitions, variable_name):
        scripts = self.data.get("scripts", [])
        scripts.append(
            {
                "id": condition["id"],
                "file": f"condition_{condition['id'][:8]}.py",
                "title": f"Condition on {variable_name}",
                "is_initial": False,
                "workflow_position": condition["workflow_position"],
                "transitions": list(
                    map(
                        lambda t: {
                            **t,
                            "type": "task",
                            "task_type": t["condition_value"],
                        },
                        transitions,
                    )
                ),
            }
        )
        placeholders = {
            "variable_name": variable_name,
            "condition_values": ",".join(
                list(map(lambda t: t["condition_value"], transitions))
            ),
        }
        condition_script_path = Path(
            Path(__file__).resolve().parent / "tasks" / "condition_script.py"
        )
        condition_script_content = condition_script_path.read_text(encoding="utf-8")
        self.create_file(
            f"condition_{condition['id'][:8]}.py",
            condition_script_content,
            placeholders,
        )

    def create_script_from_iterator(
        self, iterator, variable_name, item_name, transitions
    ):
        scripts = self.data.get("scripts", [])
        scripts.append(
            {
                "id": iterator["id"],
                "file": f"iterator_{iterator['id'][:8]}.py",
                "title": f"for {item_name} in {variable_name}",
                "is_initial": False,
                "workflow_position": iterator["workflow_position"],
                "transitions": transitions,
            }
        )
        placeholders = {
            "variable_name": variable_name,
            "item_name": item_name,
        }
        iterator_script_path = Path(
            Path(__file__).resolve().parent / "tasks" / "iterator_script.py"
        )
        iterator_script_content = iterator_script_path.read_text(encoding="utf-8")
        self.create_file(
            f"iterator_{iterator['id'][:8]}.py", iterator_script_content, placeholders
        )

    def migrate_conditions(self):
        conditions = self.data.get("conditions", [])
        for condition in conditions:
            variable_name = condition["variable_name"]
            transitions = condition.get("transitions", [])
            self.create_script_from_condition(condition, transitions, variable_name)

    def migrate_iterators(self):
        iterators = self.data.get("iterators", [])
        for iterator in iterators:
            item_name = iterator["item_name"]
            variable_name = iterator["variable_name"]
            transitions = iterator.get("transitions", [])
            self.create_script_from_iterator(
                iterator, variable_name, item_name, transitions
            )

    def remove_conditions(self):
        del self.data["conditions"]

    def remove_iterators(self):
        del self.data["iterators"]

    def remove_kanban(self):
        del self.data["kanban"]

    def update_transitions_to_task_type(self):
        all_stages = self.get_all_stages()
        for stage in all_stages:
            transitions = stage.get("transitions", [])
            new_transitions = []
            for transition in transitions:
                if "condition_value" in transition:
                    del transition["condition_value"]
                if "failed" in transition["type"]:
                    transition["task_type"] = "failed"
                elif not transition.get("task_type"):
                    transition["task_type"] = "success"
                transition["type"] = "task"
                new_transitions.append(transition)
            stage["transitions"] = new_transitions

    def append_compat_to_scripts(self):
        all_stages = {
            "forms": self.data.get("forms", []),
            "scripts": self.data.get("scripts", []),
            "jobs": self.data.get("jobs", []),
            "hooks": self.data.get("hooks", []),
        }
        for stage_type, stages in all_stages.items():
            for stage in stages:
                compat_lines = generate_compat_lines(stage_type)
                filename = stage["file"]
                file_path = Settings.root_path.joinpath(filename)
                file_content = file_path.read_text(encoding="utf-8")
                file_content = "".join(compat_lines) + file_content
                file_path.write_text(file_content, encoding="utf-8")

    def backup_project_on_dot_abstra(self):
        root = Settings.root_path
        dot_abstra_folder = root / DOT_ABSTRA_DIR
        zip_path = str(_generate_zip_file())
        backup_zip_path = dot_abstra_folder / "backup.zip"
        shutil.move(zip_path, backup_zip_path)

    def _migrate(self) -> None:
        if not self.test_mode:
            self.backup_project_on_dot_abstra()
            self.append_compat_to_scripts()
        self.migrate_conditions()
        self.migrate_iterators()
        self.remove_conditions()
        self.remove_iterators()
        self.remove_kanban()
        self.update_transitions_to_task_type()
