from unittest import TestCase

from abstra_internals.modules import import_as_new, reload_module
from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
    ScriptStage,
)
from tests.fixtures import clear_dir, init_dir


class TestImportAsNewAndReload(TestCase):
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


class TestReload(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_reload(self):
        project = self.project_repository.load()
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
        self.project_repository.save(project)

        main_module = import_as_new("main.py")
        self.assertEqual(main_module.x, 1)

        mod_code = "x = 2"
        mod_file.write_text(mod_code)
        reload_module(mod_file)
        main_module = import_as_new("main.py")
        self.assertEqual(main_module.x, 2)

    def test_reload_nested_module(self):
        project = self.project_repository.load()

        nested_dir = self.root / "foo"
        nested_dir.mkdir()
        mod_file = nested_dir / "bar.py"
        mod_file.write_text("y = 10")

        main_file = self.root / "main.py"
        main_file.write_text("from foo.bar import y")

        script = ScriptStage(
            file="main.py",
            id="test_nested",
            is_initial=True,
            title="test_nested",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        self.project_repository.save(project)

        main_module = import_as_new("main.py")
        self.assertEqual(main_module.y, 10)

        mod_file.write_text("y = 42")
        reload_module(mod_file)

        main_module = import_as_new("main.py")
        self.assertEqual(main_module.y, 42)

    def test_reload_nested_module_symlinked_root(self):
        project = self.project_repository.load()

        nested_dir = self.root / "pkg"
        nested_dir.mkdir()
        mod_file = nested_dir / "mod.py"
        mod_file.write_text("z = 100")

        main_file = self.root / "main.py"
        main_file.write_text("from pkg.mod import z")

        script = ScriptStage(
            file="main.py",
            id="test_symlinked",
            is_initial=True,
            title="test_symlinked",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        self.project_repository.save(project)

        symlink_root = self.root.parent / "symlinked_root"

        if symlink_root.is_symlink():
            symlink_root.unlink()
        if symlink_root.is_dir():
            symlink_root.rmdir()

        symlink_root.symlink_to(self.root)

        mod_file_symlinked = symlink_root / "pkg" / "mod.py"
        mod_file_symlinked.write_text("z = 123")

        reload_module(mod_file_symlinked)

        main_module = import_as_new("main.py")
        self.assertEqual(main_module.z, 123)
