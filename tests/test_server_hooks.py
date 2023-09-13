import unittest
from abstra_internals.server.api import API
from fixtures import init_dir, clear_dir


class TestHooks(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_list(self):
        api = API()

        self.assertEqual(len(api.get_hooks()), 0)

        api.create_hook()

        self.assertEqual(len(api.get_hooks()), 1)


if __name__ == "__main__":
    unittest.main()
