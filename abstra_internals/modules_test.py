from unittest import TestCase
from .modules import import_as_new, reload_project_local_modules
from tests.fixtures import init_dir, clear_dir
from .repositories.project.project import ProjectRepository, ScriptStage


class TestImportAsNew(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_export_variables(self):
        code = "x = 1"
        file = self.root / "test.py"
        file.write_text(code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 1)

    def test_reload_variables(self):
        old_code = "x = 1"
        file = self.root / "test.py"
        file.write_text(old_code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 1)
        new_code = "x = 2"
        file.write_text(new_code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 2)


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
        reload_project_local_modules()
        main_module = import_as_new("main.py")
        self.assertEqual(main_module.x, 2)
