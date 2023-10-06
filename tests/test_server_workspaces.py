import tempfile, unittest
from pathlib import Path
from abstra_internals.server.controller import MainController
from .fixtures import init_dir, clear_dir


class TestWorkspace(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_update(self):
        controller = MainController()

        controller.update_workspace({"name": "test-workspace-updated"})

        workspace = controller.get_workspace()

        self.assertEqual(workspace.name, "test-workspace-updated")
