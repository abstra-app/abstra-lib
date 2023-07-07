import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir


class TestWorkspace(unittest.TestCase):
    def test_api_update(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")

        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)

        api.update_workspace({"name": "test-workspace-updated"})

        workspace = api.get_workspace()

        self.assertEqual(workspace.name, "test-workspace-updated")
