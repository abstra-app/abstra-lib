from pathlib import Path
import time
from unittest import TestCase
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    AbstraJSONRepository,
    HookJSON,
)
from abstra_internals.server.apps import create_app

from abstra_internals.server.controller import MainController
from abstra_internals.server.fs_watcher import reload_files_on_change

from .fixtures import clear_dir, init_dir


class TestHotReloadLocalModules(TestCase):
    def setUp(self):
        self.root = init_dir()
        controller = MainController()
        self.abstra_json = AbstraJSON.create()
        file = "hook.py"
        hook = HookJSON(
            file=file,
            path="hook",
            title="Hook 1",
            workflow_transitions=[],
        )
        self.abstra_json.hooks.append(hook)
        AbstraJSONRepository.save(self.abstra_json)
        self.client = create_app(controller).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_do_not_update_modules_when_changing_entrypoint(self):
        _create_base_files()
        hook_path = Path("hook.py")
        first_write = hook_path.stat().st_mtime

        first_response = self.client.post("/_hooks/hook")
        self.assertEqual(first_response.status_code, 200)

        time.sleep(0.5)
        hook_path.touch()

        has_reloaded = reload_files_on_change(self.abstra_json, first_write)
        self.assertFalse(has_reloaded)

        second_response = self.client.post("/_hooks/hook")
        self.assertEqual(
            first_response.get_data(as_text=True),
            second_response.get_data(as_text=True),
        )

    def test_update_modules_when_changing_dependencies(self):
        _create_base_files()
        dependency_path = Path("helpers/user.py")
        first_write = dependency_path.stat().st_mtime

        first_response = self.client.post("/_hooks/hook")
        self.assertEqual(first_response.status_code, 200)

        time.sleep(0.5)
        dependency_path.touch()

        has_reloaded = reload_files_on_change(self.abstra_json, first_write)
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
