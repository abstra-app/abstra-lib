import unittest
from pathlib import Path

from abstra_internals.utils.dot_abstra import DOT_ABSTRA_FOLDER_NAME
from abstra_internals.utils.file import (
    files_from_directory,
    generate_conflictless_path,
    module2path,
    path2module,
)
from tests.fixtures import clear_dir, init_dir


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


class FilesFromDirectoryTest(unittest.TestCase):
    def add_file(self, name, content, path=None):
        filepath = (path or self.path).joinpath(name)
        filepath.write_text(content, encoding="utf-8")
        return filepath

    def add_folder(self, name, path=None):
        folderpath = (path or self.path).joinpath(name)
        folderpath.mkdir()
        return folderpath

    def setUp(self) -> None:
        self.path = init_dir()
        self.abstra_json_path = self.path.joinpath("abstra.json")

    def tearDown(self) -> None:
        clear_dir(self.path)

    def assertSamePaths(self, paths, expected):
        self.assertEqual(set([str(p) for p in paths]), set([str(p) for p in expected]))

    def test_empty_directory(self):
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])

    def test_no_ignore(self):
        filepath = self.add_file("foo", "bar")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [filepath, self.abstra_json_path])

    def test_ignore_file(self):
        self.add_file(".abstraignore", "ignored")
        self.add_file("ignored", "foo")
        tracked = self.add_file("tracked", "bar")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [tracked, self.abstra_json_path])

    def test_ignore_file_pattern(self):
        self.add_file(".abstraignore", "~$*.xlsx")
        self.add_file("~$file.xlsx", "foo")
        self.add_file("~$planilha.xlsx", "foo")
        tracked = self.add_file("tracked", "bar")

        files = files_from_directory(self.path)
        self.assertSamePaths(files, [tracked, self.abstra_json_path])

    def test_ignore_empty(self):
        self.add_folder("ignored")
        self.add_folder("empty")
        self.add_file(".abstraignore", "ignored")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])

    def test_ignore_folder(self):
        ignored = self.add_folder("ignored")
        self.add_file("abc", "foo", path=ignored)
        ignored2 = self.add_folder("ignored2")
        self.add_file("xyz", "foo", path=ignored2)
        folder = self.add_folder("tracked")
        tracked = self.add_file("tracked", "tracked", path=folder)
        self.add_file(".abstraignore", "ignored\nignored2/")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [tracked, self.abstra_json_path])

    def test_ignore_wildcard(self):
        self.add_file("ignored.ipynb", "foo")
        tracked = self.add_file("tracked", "bar")
        self.add_file(".abstraignore", "*.ipynb")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [tracked, self.abstra_json_path])

    def test_ignore_abstra_folder(self):
        abstra = self.add_folder(DOT_ABSTRA_FOLDER_NAME)
        self.add_file("credentials", "SECRET", path=abstra)
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])

    def test_ignore_git_folder(self):
        git = self.add_folder(".git")
        self.add_file("somefile", "somecontent", path=git)
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])

    def test_ignore_abstra_ignore_file(self):
        self.add_file(".abstraignore", "ignored")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])

    def test_ignore_git_ignore_file(self):
        self.add_file(".gitignore", "ignored")
        files = files_from_directory(self.path)
        self.assertSamePaths(files, [self.abstra_json_path])


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
