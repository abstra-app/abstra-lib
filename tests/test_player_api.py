import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server import get_cloud_app


class TestPlayerApi(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_cloud_app(str(self.root)).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_version(self):
        res = self.client.get("/_version")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.text, "dev")
