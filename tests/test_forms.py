import unittest

from abstra.forms import display
from abstra_internals.controllers.main import MainController
from abstra_internals.interface.sdk.user_exceptions import UnboundSDK
from tests.fixtures import clear_dir, init_dir


class TestForms(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def updates_across_reloads(self):
        controller = MainController()
        form = controller.create_form("New form", "form.py")

        controller.update_stage(form.path, dict(title="New Title"))

        api2 = MainController()
        api2.get_workspace()
        new_form = api2.get_form(form.path)

        if not new_form:
            self.fail("Form not found")

        self.assertEqual(form.title, new_form.title)

    def test_raise_exception_on_invalid_propery_update(self):
        controller = MainController()
        form = controller.create_form("New form", "form.py")

        with self.assertRaises(Exception):
            controller.update_stage(
                form.path, dict(title="New Title", invalid_property="invalid")
            )

    def test_raises_exception_on_running_directly(self):
        with self.assertRaises(UnboundSDK):
            display("test")
