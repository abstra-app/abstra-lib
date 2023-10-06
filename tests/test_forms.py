import unittest
from abstra_internals.server.controller import MainController
from .fixtures import init_dir, clear_dir
from abstra.forms import display
from abstra_internals.execution.execution import NoExecutionFound


class TestForms(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def updates_across_reloads(self):
        controller = MainController()
        form = controller.create_form()

        controller.update_runtime(form.path, dict(title="New Title"))

        api2 = MainController()
        api2.get_workspace()
        new_form = api2.get_form(form.path)

        self.assertEqual(form.title, new_form.title)

    def test_raise_exception_on_invalid_propery_update(self):
        controller = MainController()
        form = controller.create_form()

        with self.assertRaises(Exception):
            controller.update_runtime(
                form.path, dict(title="New Title", invalid_property="invalid")
            )

    def test_raises_exception_on_running_directly(self):
        with self.assertRaises(NoExecutionFound):
            display("test")
