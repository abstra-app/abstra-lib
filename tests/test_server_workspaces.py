import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir, clear_dir
from pathlib import Path


class TestWorkspace(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_start_at_relative_new_dir(self):
        root = Path("./relative-non-new-dir")
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_start_at_relative_new_deep_dir(self):
        root = Path("./relative-non-new-dir/deep/dir")
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_start_at_absolute_new_dir(self):
        root = Path(tempfile.gettempdir()).joinpath("absolute-non-new-dir").absolute()
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_start_at_absolute_new_deep_dir(self):
        root = (
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir/deep/dir")
            .absolute()
        )
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_start_at_relative_new_deep_dir_ending_with_slash(self):
        root = Path("./relative-non-new-dir/deep/dir/")
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_start_at_absolute_new_deep_dir_ending_with_slash(self):
        root = (
            Path(tempfile.gettempdir())
            .joinpath("absolute-non-new-dir/deep/dir/")
            .absolute()
        )
        try:
            api = API(root=root)
            forms = api.get_forms()
            self.assertEqual(forms, [])
            api.create_form()
        finally:
            clear_dir(root)

    def test_api_update(self):
        api = API(root=self.root)

        api.update_workspace({"name": "test-workspace-updated"})

        workspace = api.get_workspace()

        self.assertEqual(workspace.name, "test-workspace-updated")
