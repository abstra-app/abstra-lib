import unittest
from uuid import uuid4

from abstra_internals.server.controller.main import MainController
from tests.fixtures import get_editor_flask_client, init_dir
from tests.test_local_stage_run_repository import clear_dir

code_headers = """
import abstra.hooks as ah

body, query, headers = ah.get_request()

ah.send_response(headers["authorization"])
"""


class TestHooksSDK(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.controller = MainController()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.flask_client = get_editor_flask_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_insensitive_headers(self):
        random = uuid4().hex

        self.hook.file_path.write_text(code_headers)
        response = self.flask_client.post(
            f"/_hooks/{self.hook.path}", headers={"Authorization": random}
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_data(as_text=True), random)
