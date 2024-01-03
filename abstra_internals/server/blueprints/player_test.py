import unittest

from tests.fixtures import init_dir, clear_dir, get_cloud_client


class TestPlayerApi(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_cloud_client(self.root)

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_version(self):
        res = self.client.get("/_version")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.text, "dev")
