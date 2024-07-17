import unittest

from abstra.forms import Page
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.entities.execution import Execution, RequestContext
from tests.fixtures import clear_dir, init_dir


class TestReactive(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()
        request_context = RequestContext(
            body="", query_params={}, headers={}, method="GET"
        )
        self.client = FormClient(
            request_context=request_context,
            production_mode=False,
        )
        execution = Execution.create(
            request_context=request_context,
            stage_run_id="mock_sr_id",
            stage_id="mock_stage_id",
        )
        ExecutionStore.set(execution, self.client)

    def tearDown(self) -> None:
        clear_dir(self.root)
        ExecutionStore.clear()

    def test_rendering_with_static_part_initial_value(self):
        self.client.ingress_queue.put(
            {"type": "form:page-response", "payload": {"a": "1", "b": "2"}}
        )

        def render(partial):
            return Page().read("b", initial_value=partial["a"])

        ans = Page().read("a", initial_value="x").reactive(render).run()

        # Checking python sent message
        self.assertEqual(self.client.egress_queue.qsize(), 1)
        widgets = self.client.egress_queue.get().message.data["widgets"]
        self.assertEqual(widgets[0]["errors"], [])
        self.assertEqual(widgets[0]["value"], "x")
        self.assertEqual(widgets[1]["errors"], [])
        self.assertEqual(widgets[1]["value"], "x")

        # Checking browser sent message
        self.assertEqual(ans.get("a"), "1")
        self.assertEqual(ans.get("b"), "2")
