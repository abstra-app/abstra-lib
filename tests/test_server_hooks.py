import unittest
from abstra_server.api import API
from uuid import uuid4 as uuid
from .fixtures import init_dir


class TestHooks(unittest.TestCase):
    def test_api_list(self):
        workspace_root_path = f"/tmp/{uuid()}"
        init_dir(workspace_root_path)

        api = API(root=workspace_root_path)

        self.assertEqual(len(api.get_hooks()), 0)

        api.create_hook()

        self.assertEqual(len(api.get_hooks()), 1)


if __name__ == "__main__":
    unittest.main()
