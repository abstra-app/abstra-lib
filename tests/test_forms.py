from abstra.forms import display
from abstra_internals.interface.sdk.user_exceptions import ExecutionNotFound
from tests.fixtures import BaseTest


class TestForms(BaseTest):
    def test_raise_exception_on_invalid_propery_update(self):
        form = self.controller.create_form("New form", "form.py")

        with self.assertRaises(Exception):
            self.controller.update_stage(
                form.path, dict(title="New Title", invalid_property="invalid")
            )

    def test_raises_exception_on_running_directly(self):
        with self.assertRaises(ExecutionNotFound):
            display("test")
