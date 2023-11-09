import unittest
from pathlib import Path
from .fixtures import init_dir, clear_dir

from abstra_internals.utils.file import traverse_code


class TestTraverseCode(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)

    def test_no_import(self):
        entrypoint = Path("entrypoint.py")
        entrypoint.touch()

        self.assertEqual(list(traverse_code(entrypoint)), [entrypoint])

    def test_invalid_import(self):
        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import invalid")

        self.assertEqual(list(traverse_code(entrypoint)), [entrypoint])

    def test_import_module(self):
        module = Path("module.py")
        module.touch()
        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import module")

        self.assertSetEqual(set(traverse_code(entrypoint)), set([entrypoint, module]))

    def test_import_package(self):
        package = Path("package")
        package.mkdir()
        init = package.joinpath("__init__.py")
        init.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import package")

        self.assertSetEqual(set(traverse_code(entrypoint)), set([entrypoint, init]))

    def test_import_from_submodule(self):
        module = Path("module")
        module.mkdir()

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        helper = submodule.joinpath("helper.py")
        helper.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import module.submodule.helper")

        self.assertEqual(set(traverse_code(entrypoint)), set([entrypoint, helper]))

    def test_nested_relative_import(self):
        module = Path("module")
        module.mkdir()

        helper = module.joinpath("helper.py")
        helper.write_text("from .submodule import another_helper")

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        another_helper = submodule.joinpath("another_helper.py")
        another_helper.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import module.helper")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, helper, another_helper])
        )

    def test_nested_relative_import_from_submodule(self):
        module = Path("module")
        module.mkdir()

        helper = module.joinpath("helper.py")
        helper.touch()

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        another_helper = submodule.joinpath("another_helper.py")
        another_helper.write_text("from .. import helper")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import module.submodule.another_helper")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, another_helper, helper])
        )

    def test_absolute_import_from_nested_module(self):
        module = Path("module")
        module.mkdir()

        helper = module.joinpath("helper.py")
        helper.write_text("from module.submodule import another_helper")

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        another_helper = submodule.joinpath("another_helper.py")
        another_helper.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("import module.helper")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, helper, another_helper])
        )

    def test_import_multiple_modules_from_package(self):
        package = Path("package")
        package.mkdir()

        module_a = package.joinpath("module_a.py")
        module_a.touch()

        module_b = package.joinpath("module_b.py")
        module_b.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from package import module_a, module_b")

        self.assertSetEqual(
            set(traverse_code(entrypoint)),
            set([entrypoint, module_a, module_b]),
        )

    def test_import_from_submodule_with_module_name(self):
        module = Path("module")
        module.mkdir()

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        helper = submodule.joinpath("helper.py")
        # module name is module.submodule
        helper.write_text("from ...module.submodule import another_helper")

        another_helper = submodule.joinpath("another_helper.py")
        another_helper.touch()

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module.submodule import helper")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, helper, another_helper])
        )

    def test_raise_syntax_error(self):
        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("invalid syntax")

        with self.assertRaises(SyntaxError):
            list(traverse_code(entrypoint, raise_on_syntax_errors=True))
