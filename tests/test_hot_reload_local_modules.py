import time
from datetime import datetime
from pathlib import Path

from abstra_internals.fs_watcher import reload_files_on_change
from tests.fixtures import BaseTest


class TestHotReloadLocalModules(BaseTest):
    def setUp(self):
        super().setUp()
        self.controller.create_hook("hook", "hook.py")
        self.client = self.get_editor_flask_client()

    def test_do_not_update_modules_when_changing_entrypoint(self):
        _create_base_files()
        hook_path = Path("hook.py")
        first_write = datetime.now().timestamp()

        first_response = self.client.post("/_hooks/hook")
        self.assertEqual(first_response.status_code, 200)

        time.sleep(0.5)
        hook_path.touch()

        has_reloaded = reload_files_on_change(self.controller, first_write)
        self.assertFalse(has_reloaded)

        second_response = self.client.post("/_hooks/hook")
        self.assertEqual(
            first_response.get_data(as_text=True),
            second_response.get_data(as_text=True),
        )

    def test_update_modules_when_changing_dependencies(self):
        _create_base_files()
        dependency_path = Path("helpers/user.py")
        first_write = datetime.now().timestamp()

        first_response = self.client.post("/_hooks/hook")
        self.assertEqual(first_response.status_code, 200)

        time.sleep(0.5)
        dependency_path.touch()

        has_reloaded = reload_files_on_change(self.controller, first_write)
        self.assertTrue(has_reloaded)

        second_response = self.client.post("/_hooks/hook")
        self.assertNotEqual(
            first_response.get_data(as_text=True),
            second_response.get_data(as_text=True),
        )
        # assert the second response text is not null
        self.assertEqual(len(second_response.get_data(as_text=True)), 8)


def _create_base_files():
    Path("hook.py").write_text(
        "import abstra.hooks as ah\nfrom helpers import user\nah.send_response(user.id)"
    )
    Path("helpers").mkdir()
    Path("helpers/user.py").write_text("import uuid\nid = uuid.uuid4().hex[:8]")
