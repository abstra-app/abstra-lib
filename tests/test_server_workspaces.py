import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir, clear_dir


class TestWorkspace(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_update(self):
        api = API(root=self.root)

        api.update_workspace({"name": "test-workspace-updated"})

        workspace = api.get_workspace()

        self.assertEqual(workspace.name, "test-workspace-updated")
