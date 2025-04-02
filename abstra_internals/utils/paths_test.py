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
        base_path = Path("/bar")
        relative = get_relative_path(path, base_path)
        self.assertEqual(relative, Path("foo"))

    def test_both_absolute_paths(self):
        path = Path("/foo/bar")
        base_path = Path("/foo")
        relative = get_relative_path(path, base_path)
        self.assertEqual(relative, Path("bar"))

    def test_both_absolute_non_related_paths(self):
        path = Path("/foo")
        base_path = Path("/bar")
        with self.assertRaises(NotSubpathError):
            get_relative_path(path, base_path)
