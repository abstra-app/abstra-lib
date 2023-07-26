import os
from pathlib import Path
import unittest
from abstra_cli.utils import files_from_directory, get_ignore_files
from .fixtures import init_dir, clear_dir


class TestListing(unittest.TestCase):
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
        abstra = self.add_folder(".abstra")
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
