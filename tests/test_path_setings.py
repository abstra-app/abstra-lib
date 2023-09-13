import tempfile, unittest
from pathlib import Path
from abstra_internals.server.api import API
from fixtures import init_dir, clear_dir


class TestWorkspace(unittest.TestCase):
    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_start_at_relative_new_dir(self):
        self.root = init_dir(Path("relative-non-new-dir"))
        api = API()
        forms = api.get_forms()
        self.assertEqual(forms, [])
        api.create_form()

    def test_start_at_relative_new_deep_dir(self):
        self.root = init_dir(Path.cwd() / "relative-non-new-dir" / "deep" / "dir")
        api = API()
        forms = api.get_forms()
        self.assertEqual(forms, [])
        api.create_form()

    def test_start_at_absolute_new_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir()).joinpath("absolute-non-new-dir").absolute()
        )
        api = API()
        forms = api.get_forms()
        self.assertEqual(forms, [])
        api.create_form()

    def test_start_at_absolute_new_deep_dir(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir")
            .joinpath("deep")
            .joinpath("dir")
            .absolute()
        )
        api = API()
        forms = api.get_forms()
        self.assertEqual(forms, [])
        api.create_form()

    def test_start_at_absolute_new_deep_dir_ending_with_slash(self):
        self.root = init_dir(
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir/deep/dir/")
            .absolute()
        )
        api = API()
        forms = api.get_forms()
        self.assertEqual(forms, [])
        api.create_form()
