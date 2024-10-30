import tempfile
from pathlib import Path

from tests.fixtures import BaseTest, init_dir


class TestWorkspace(BaseTest):
    def setUp(self) -> None:
        super().setUp()

    def test_start_at_relative_new_dir(self):
        self.root = init_dir(Path("relative-non-new-dir"))
        forms = self.controller.get_forms()
        self.assertEqual(forms, [])
        self.controller.create_form("New form", "form.py")

    def test_start_at_relative_new_deep_dir(self):
        self.root = init_dir(Path.cwd() / "relative-non-new-dir" / "deep" / "dir")
        forms = self.controller.get_forms()
        self.assertEqual(forms, [])
        self.controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir()).joinpath("absolute-non-new-dir").absolute()
        )
        forms = self.controller.get_forms()
        self.assertEqual(forms, [])
        self.controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_deep_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir")
            .joinpath("deep")
            .joinpath("dir")
            .absolute()
        )
        forms = self.controller.get_forms()
        self.assertEqual(forms, [])
        self.controller.create_form("New form", "form.py")

    def test_start_at_absolute_new_deep_dir_ending_with_slash(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir/deep/dir/")
            .absolute()
        )
        forms = self.controller.get_forms()
        self.assertEqual(forms, [])
        self.controller.create_form("New form", "form.py")
