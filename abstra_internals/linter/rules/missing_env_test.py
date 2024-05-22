from unittest import TestCase

from abstra_internals.linter.rules.missing_env import MissingEnv
from abstra_internals.repositories.project.project import ProjectRepository, ScriptStage
from tests.fixtures import clear_dir, init_dir


class TestMissingEnv(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_find_no_issues_in_empty_directory(self):
        rule = MissingEnv()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

    def test_find_no_issues_in_correctly_configured_env(self):
        rule = MissingEnv()
        env_path = self.root / ".env"
        env_path.write_text("FOO=bar")
        project = ProjectRepository.load()
        code_path = self.root / "test.py"
        code_path.write_text("from os import getenv\ngetenv('FOO')")
        script = ScriptStage(
            id="test",
            file=str(code_path),
            is_initial=False,
            title="Test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

    def test_find_issues_when_code_uses_a_non_defined_env(self):
        rule = MissingEnv()
        project = ProjectRepository.load()
        code_path = self.root / "test.py"
        code_path.write_text("from os import getenv\ngetenv('FOO')")
        script = ScriptStage(
            id="test",
            file=str(code_path),
            is_initial=False,
            title="Test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        fixes = issues[0].fixes
        self.assertEqual(len(fixes), 1)

        fixes[0].fix()

        new_issues = rule.find_issues()
        self.assertEqual(len(new_issues), 0)
