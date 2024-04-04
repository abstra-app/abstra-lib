import tempfile
import unittest
from pathlib import Path

from abstra_internals.server.controller.main import MainController

from .fixtures import clear_dir, init_dir


class TestWorkspace(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_start_at_relative_new_dir(self):
        self.root = init_dir(Path("relative-non-new-dir"))
        controller = MainController()
        forms = controller.get_forms()
        self.assertEqual(forms, [])
        controller.create_form("New form", "form.py")

    def test_start_at_relative_new_deep_dir(self):
        self.root = init_dir(Path.cwd() / "relative-non-new-dir" / "deep" / "dir")
        controller = MainController()
        forms = controller.get_forms()
        self.assertEqual(forms, [])
        controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir()).joinpath("absolute-non-new-dir").absolute()
        )
        controller = MainController()
        forms = controller.get_forms()
        self.assertEqual(forms, [])
        controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_deep_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir")
            .joinpath("deep")
            .joinpath("dir")
            .absolute()
        )
        controller = MainController()
        forms = controller.get_forms()
        self.assertEqual(forms, [])
        controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_deep_dir_ending_with_slash(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir/deep/dir/")
            .absolute()
        )
        controller = MainController()
        forms = controller.get_forms()
        self.assertEqual(forms, [])
        controller.create_form("New form", "form.py")
