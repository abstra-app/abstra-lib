import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir


class TestHooks(unittest.TestCase):
    def test_api_list(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        api = API(root=workspace_root_path)

        self.assertEqual(len(api.get_hooks()), 0)

        api.create_hook()

        self.assertEqual(len(api.get_hooks()), 1)


if __name__ == "__main__":
    unittest.main()
