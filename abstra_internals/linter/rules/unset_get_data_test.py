from unittest import TestCase
from .unset_get_data import UnsetGetData
from tests.fixtures import init_dir, clear_dir
from ...repositories.project.project import ProjectRepository, ScriptStage


class UnsetGetDataTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_unset_get_data_valid_default(self):
        rule = UnsetGetData()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_unset_get_data_invalid(self):
        rule = UnsetGetData()
        project = ProjectRepository.load()
        code_path = self.root / "test.py"
        code_path.write_text(
            "\n".join(["from abstra.workflows import get_data", "get_data('test')"])
        )
        script = ScriptStage(
            id="test",
            file=str(code_path),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 1)

    def test_unset_get_data_invalid_with_relative_import(self):
        rule = UnsetGetData()
        project = ProjectRepository.load()
        code_path = self.root / "test.py"
        code_path.write_text(
            "\n".join(["import abstra.workflows as aw", "aw.get_data('test')"])
        )
        script = ScriptStage(
            id="test",
            file=str(code_path),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 1)

    def test_unset_get_data_valid_with_use_in_different_files_with_relative_import(
        self,
    ):
        rule = UnsetGetData()
        project = ProjectRepository.load()
        setter_file = self.root / "setter.py"
        setter_file.write_text(
            "\n".join(
                [
                    "import abstra.workflows as aw",
                    "aw.set_data('test', 1)",
                ]
            )
        )
        setter_script = ScriptStage(
            id="test",
            file=str(setter_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(setter_script)

        getter_file = self.root / "getter.py"
        getter_file.write_text(
            "\n".join(
                [
                    "from abstra.workflows import get_data",
                    "get_data('test')",
                ]
            )
        )
        getter_script = ScriptStage(
            id="test",
            file=str(getter_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(getter_script)

        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 0)

    def test_unset_get_data_check_the_right_argument(
        self,
    ):
        rule = UnsetGetData()
        project = ProjectRepository.load()
        setter_file = self.root / "setter.py"
        setter_file.write_text(
            "\n".join(
                [
                    "import abstra.workflows as aw",
                    "aw.set_data('test', 'bar')",
                ]
            )
        )
        setter_script = ScriptStage(
            id="test",
            file=str(setter_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(setter_script)

        getter_file = self.root / "getter.py"
        getter_file.write_text(
            "\n".join(
                [
                    "from abstra.workflows import get_data",
                    "get_data('bar')",
                ]
            )
        )
        getter_script = ScriptStage(
            id="test",
            file=str(getter_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(getter_script)

        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 1)
