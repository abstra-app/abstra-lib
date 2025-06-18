import unittest
from pathlib import Path

from abstra_internals.utils.file import (
    generate_conflictless_path,
    module2path,
    path2module,
)


class Module2PathTest(unittest.TestCase):
    def test_module2path_module(self):
        module = "a.b.c"
        path = module2path(module, False)
        self.assertEqual(path, Path("a", "b", "c.py"))

    def test_module2path_package(self):
        module = "a.b.c"
        path = module2path(module, True)
        self.assertEqual(path, Path("a", "b", "c", "__init__.py"))


class Path2ModuleTest(unittest.TestCase):
    def test_path2module_module(self):
        path = Path("a", "b", "c.py")
        module = path2module(path)
        self.assertEqual(module, "a.b.c")

    def test_path2module_package(self):
        path = Path("a", "b", "c", "__init__.py")
        module = path2module(path)
        self.assertEqual(module, "a.b.c")


class CreatePathTest(unittest.TestCase):
    def test_without_conflict(self):
        self.assertEqual(generate_conflictless_path("file"), "file")

    def test_conflict_with_static_path(self):
        path = "login"
        generated_path = generate_conflictless_path(path)

        self.assertNotEqual(generated_path, path)
        self.assertIn(path + "-", generated_path)

    def test_conflict_with_dynamic_path(self):
        path = "error/some-error"
        generated_path = generate_conflictless_path(path)

        self.assertNotEqual(generated_path, path)
        self.assertIn(path + "-", generated_path)
