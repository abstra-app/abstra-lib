from uuid import uuid4

from tests.fixtures import BaseTest

happy_case = """
import abstra.hooks as ah

body, query, headers = ah.get_request()
q = query.get("q")

ah.send_response(q)
"""

sysexit_case = """
import sys

sys.exit(1)
"""


class TestExecution(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.client = self.get_editor_flask_client()

    def test_happy_case(self):
        random = uuid4().hex

        self.hook.file_path.write_text(happy_case)
        response = self.client.post(f"/_hooks/{self.hook.path}?q={random}")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_data(as_text=True), random)

    def test_sysexit_case(self):
        self.hook.file_path.write_text(sysexit_case)
        response = self.client.post(f"/_hooks/{self.hook.path}")

        self.assertEqual(response.status_code, 500)
