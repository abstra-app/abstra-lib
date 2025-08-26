from pathlib import Path
from unittest import TestCase

from .paths import NotSubpathError, get_relative_path


class TestRelativePath(TestCase):
    def test_relative_path(self):
        path = Path("foo/bar")
        base_path = Path("foo")
        relative = get_relative_path(path, base_path)
        self.assertEqual(relative, Path("bar"))

    def test_relative_non_related_paths(self):
        path = Path("foo")
        base_path = Path("bar")
        with self.assertRaises(NotSubpathError):
            get_relative_path(path, base_path)

    def test_relative_path_absolute_base(self):
        path = Path("foo")
        # Create a truly absolute path that works cross-platform
        # On Windows: C:\some_absolute_path, On Unix: /some_absolute_path
        if Path("/").is_absolute():
            base_path = Path("/some_absolute_path")
        else:
            base_path = Path("C:/some_absolute_path")
        relative = get_relative_path(path, base_path)
        self.assertEqual(relative, Path("foo"))

    def test_both_absolute_paths(self):
        # Create truly absolute paths that work cross-platform
        if Path("/").is_absolute():  # Unix-like system
            path = Path("/foo/bar")
            base_path = Path("/foo")
        else:  # Windows
            path = Path("C:/foo/bar")
            base_path = Path("C:/foo")
        relative = get_relative_path(path, base_path)
        self.assertEqual(relative, Path("bar"))

    def test_both_absolute_non_related_paths(self):
        # Create truly absolute paths that work cross-platform
        if Path("/").is_absolute():  # Unix-like system
            path = Path("/foo")
            base_path = Path("/bar")
        else:  # Windows
            path = Path("C:/foo")
            base_path = Path("D:/bar")
        with self.assertRaises(NotSubpathError):
            get_relative_path(path, base_path)
