import unittest

from tests.fixtures import clear_dir, get_cloud_flask_client, init_dir


class TestPlayerApi(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_cloud_flask_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_version(self):
        res = self.client.get("/_version")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.text, "dev")
