import unittest

from abstra_internals.server.controller.main import MainController
from tests.fixtures import clear_dir, get_local_client, init_dir


class TestHookExecution(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        self.hook = controller.create_hook("New hook", "hook.py")
        self.client = get_local_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_case(self):
        response = self.client.post(f"/_hooks/{self.hook.path}")
        self.assertEqual(response.status_code, 200)
