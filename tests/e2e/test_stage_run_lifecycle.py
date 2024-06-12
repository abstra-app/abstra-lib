import unittest
from time import sleep
from uuid import uuid4

from abstra_internals.server.controller.main import MainController
from abstra_internals.threaded import threaded
from tests.fixtures import get_editor_flask_client, init_dir

sleeping_code = """
import abstra.hooks as ah
from time import sleep

body, query, headers = ah.get_request()
sleep(0.2)
ah.send_response(headers["authorization"])
"""


class TestStageRunLifecycle(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.controller = MainController()
        self.controller.stage_run_repository.clear()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.flask_client = get_editor_flask_client()

    def tearDown(self) -> None:
        self.controller.stage_run_repository.clear()
        return super().tearDown()

    def test_switches_to_running(self):
        random = uuid4().hex

        self.hook.file_path.write_text(sleeping_code)

        @threaded
        def async_hook_call():
            return self.flask_client.post(
                f"/_hooks/{self.hook.path}", headers={"Authorization": random}
            )

        async_hook_call()

        sleep(0.1)

        stage_runs_response = self.flask_client.get("/_editor/api/stage_runs")
        stage_runs = stage_runs_response.get_json()

        self.assertEqual(len(stage_runs), 1)
        self.assertEqual(stage_runs[0]["status"], "running")
