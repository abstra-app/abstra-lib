import shutil
from pathlib import Path
from unittest import TestCase

from abstra_internals.services.fs import FileSystemService


class TestFileSystemService(TestCase):
    def setUp(self):
        self.test_dir = Path("test_rm_tree_dir")
        self.test_dir.mkdir(exist_ok=True)
        (self.test_dir / "subdir").mkdir(exist_ok=True)
        (self.test_dir / "subdir" / "file.txt").write_text("hello")
        (self.test_dir / "file2.txt").write_text("world")
        (self.test_dir / "symlink").symlink_to(self.test_dir / "subdir")

    def tearDown(self):
        if self.test_dir.exists():
            shutil.rmtree(self.test_dir, ignore_errors=True)
        if Path("test_ignore_dir").exists():
            shutil.rmtree("test_ignore_dir", ignore_errors=True)

    def test_rm_tree_removes_all(self):
        FileSystemService.rm_tree(self.test_dir)
        self.assertFalse(self.test_dir.exists())

    def test_list_files_and_paths(self):
        test_dir = Path("test_ignore_dir")
        test_dir.mkdir(exist_ok=True)
        (test_dir / "file.txt").write_text("abc")
        (test_dir / "__pycache__").mkdir(exist_ok=True)
        (test_dir / "__pycache__" / "cache.pyc").write_text("cache")
        files = FileSystemService.list_files(test_dir)
        file_names = [f.name for f in files]
        self.assertIn("file.txt", file_names)
        self.assertNotIn("__pycache__", file_names)
        paths = FileSystemService.list_paths(test_dir, include_dirs=True)
        dir_names = [p.name for p in paths]
        self.assertIn("file.txt", dir_names)
        self.assertIn("test_ignore_dir", dir_names)

    def test_suffix_allowed(self):
        p = Path("foo.py")
        self.assertTrue(FileSystemService._suffix_allowed(p, [".py"]))
        self.assertFalse(FileSystemService._suffix_allowed(p, [".txt"]))

    def test_is_ignored(self):
        import re

        patterns = [re.compile(r".*\.pyc$")]
        self.assertTrue(FileSystemService.is_ignored(patterns, Path("foo.pyc")))
        self.assertFalse(FileSystemService.is_ignored(patterns, Path("foo.py")))

    def test_make_ignore_regex(self):
        regex = FileSystemService._make_ignore_regex("*.pyc")
        self.assertTrue(regex.match("foo.pyc"))
        self.assertFalse(regex.match("foo.txt"))
