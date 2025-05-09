import unittest
from pathlib import Path

from abstra_internals.utils.ast_cache import ASTCache
from abstra_internals.utils.file import traverse_code
from tests.fixtures import clear_dir, init_dir


class TestTraverseCode(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)
        ASTCache.clear()

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

    def test_from_import_with_method(self):
        module = Path("module.py")
        module.write_text("def method(): pass")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module import method")

        self.assertSetEqual(set(traverse_code(entrypoint)), set([entrypoint, module]))

    def test_from_import_with_class(self):
        module = Path("module.py")
        module.write_text("class Class: pass")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module import Class")

        self.assertSetEqual(
            set(traverse_code(entrypoint, yielded_files=set())),
            set([entrypoint, module]),
        )

    def test_from_import_with_multiple_methods(self):
        module = Path("module.py")
        module.write_text("def method_a(): pass\ndef method_b(): pass")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module import method_a, method_b")

        self.assertSetEqual(set(traverse_code(entrypoint)), set([entrypoint, module]))

    def test_from_import_with_nested_module_importing_methods(self):
        module = Path("module")
        module.mkdir()

        submodule = module.joinpath("submodule.py")
        submodule.write_text("def method(): pass")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module.submodule import method")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, submodule])
        )

    def test_from_import_with_relative_import_importing_methods(self):
        module = Path("module")
        module.mkdir()

        submodule = module.joinpath("submodule")
        submodule.mkdir()

        helper = submodule.joinpath("helper.py")
        # module name is module.submodule
        helper.write_text("from ...module.submodule.another_helper import some_method")

        another_helper = submodule.joinpath("another_helper.py")
        another_helper.write_text("def some_method(): pass")

        entrypoint = Path("entrypoint.py")
        entrypoint.write_text("from module.submodule import helper")

        self.assertSetEqual(
            set(traverse_code(entrypoint)), set([entrypoint, helper, another_helper])
        )
