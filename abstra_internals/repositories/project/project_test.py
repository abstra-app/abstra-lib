from unittest import TestCase
from tests.fixtures import init_dir, clear_dir
from .project import ProjectRepository, ScriptStage


class ProjectTests(TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_delete_file_if_remove_file_true(self):
        project = ProjectRepository.load()
        file = self.root / "script.py"
        file.write_text("print('hello, world')")

        script = ScriptStage(
            file="script.py",
            id="test",
            is_initial=True,
            title="test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        ProjectRepository.save(project)
        project.delete_stage("test", remove_file=True)
        self.assertFalse(file.exists())

    def test_dont_delete_file_if_remove_file_false(self):
        project = ProjectRepository.load()
        file = self.root / "script.py"
        file.write_text("print('hello, world')")

        script = ScriptStage(
            file="script.py",
            id="test",
            is_initial=True,
            title="test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        ProjectRepository.save(project)
        project.delete_stage("test", remove_file=False)
        self.assertTrue(file.exists())
