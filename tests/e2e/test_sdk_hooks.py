from uuid import uuid4

from tests.fixtures import BaseTest

code_headers = """
import abstra.hooks as ah

body, query, headers = ah.get_request()

ah.send_response(headers["authorization"])
"""


class TestHooksSDK(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.client = self.get_editor_flask_client()

    def test_insensitive_headers(self):
        random = uuid4().hex

        self.hook.file_path.write_text(code_headers)
        response = self.client.post(
            f"/_hooks/{self.hook.path}", headers={"Authorization": random}
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_data(as_text=True), random)
