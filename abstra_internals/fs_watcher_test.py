from unittest import TestCase

from abstra_internals.fs_watcher import FileChangeEventHandler
from abstra_internals.modules import import_as_new
from abstra_internals.repositories.project.project import ProjectRepository, ScriptStage
from tests.fixtures import clear_dir, init_dir


class ReloadProjectLocalModulesTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_reload(self):
        project = ProjectRepository.load()
        mod_code = "x = 1"
        mod_file = self.root / "my_mod.py"
        mod_file.write_text(mod_code)

        main_code = "from my_mod import x"
        main_file = self.root / "main.py"
        main_file.write_text(main_code)
        script = ScriptStage(
            file="main.py",
            id="test",
            is_initial=True,
            title="test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        ProjectRepository.save(project)

        main_module = import_as_new("main.py")
        self.assertEqual(main_module.x, 1)

        mod_code = "x = 2"
        mod_file.write_text(mod_code)
        handler = FileChangeEventHandler()
        handler.reload_module(mod_file)
        main_module = import_as_new("main.py")
        self.assertEqual(main_module.x, 2)
