import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir, clear_dir


class TestForms(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def updates_across_reloads(self):
        api = API(root=self.root)
        form = api.create_form()

        api.update_form(form.path, dict(title="New Title"))

        api2 = API(root=self.root)
        api2.get_workspace()
        new_form = api2.get_form(form.path)

        self.assertEqual(form.title, new_form.title)

    def test_raise_exception_on_invalid_propery_update(self):
        api = API(root=self.root)
        form = api.create_form()

        with self.assertRaises(Exception):
            api.update_form(
                form.path, dict(title="New Title", invalid_property="invalid")
            )
