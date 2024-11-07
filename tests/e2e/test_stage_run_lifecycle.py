from time import sleep
from uuid import uuid4

from abstra_internals.threaded import threaded
from tests.fixtures import BaseTest

sleeping_code = """
import abstra.hooks as ah
from time import sleep

body, query, headers = ah.get_request()
sleep(0.2)
ah.send_response(headers["authorization"])
"""


class TestStageRunLifecycle(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.client = self.get_editor_flask_client()

    def test_switches_to_running_and_then_finished(self):
        random = uuid4().hex

        self.hook.file_path.write_text(sleeping_code)

        @threaded
        def async_hook_call():
            return self.client.post(
                f"/_hooks/{self.hook.path}", headers={"Authorization": random}
            )

        async_hook_call()

        sleep(0.1)

        stage_runs_response = self.client.get("/_editor/api/stage_runs")
        stage_runs = stage_runs_response.get_json()

        self.assertEqual(len(stage_runs), 1)
        self.assertEqual(stage_runs[0]["status"], "running")

        for _ in range(20):
            stage_runs_response = self.client.get("/_editor/api/stage_runs")
            stage_runs = stage_runs_response.get_json()

            if stage_runs[0]["status"] == "finished":
                break

            sleep(0.2)
        else:
            self.fail("Hook did not become finished")
