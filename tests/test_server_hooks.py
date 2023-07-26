import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir, clear_dir


class TestHooks(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_list(self):
        api = API(root=self.root)

        self.assertEqual(len(api.get_hooks()), 0)

        api.create_hook()

        self.assertEqual(len(api.get_hooks()), 1)


if __name__ == "__main__":
    unittest.main()
