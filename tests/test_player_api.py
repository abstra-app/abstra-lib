import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.apps.player import get_player_bp
from abstra_internals.server.api import API
from abstra_internals.server import get_cloud_app


class TestPlayerApi(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        api = API()
        self.client = get_cloud_app(str(self.root)).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_healthcheck(self):
        res = self.client.get("/_healthcheck")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json, {"ok": True})
