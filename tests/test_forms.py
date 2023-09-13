import unittest
from abstra_internals.server.api import API
from fixtures import init_dir, clear_dir


class TestForms(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def updates_across_reloads(self):
        api = API()
        form = api.create_form()

        api.update_form(form.path, dict(title="New Title"))

        api2 = API()
        api2.get_workspace()
        new_form = api2.get_form(form.path)

        self.assertEqual(form.title, new_form.title)

    def test_raise_exception_on_invalid_propery_update(self):
        api = API()
        form = api.create_form()

        with self.assertRaises(Exception):
            api.update_form(
                form.path, dict(title="New Title", invalid_property="invalid")
            )
