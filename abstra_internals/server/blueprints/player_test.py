from tests.fixtures import BaseTest


class TestPlayerApi(BaseTest):
    def test_version(self):
        res = self.get_cloud_flask_client().get("/_version")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.text, "dev")
