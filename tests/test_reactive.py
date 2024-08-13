import unittest
from collections import deque

import simplejson

from abstra.forms import Page
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.entities.execution import Execution, RequestContext
from tests.fixtures import clear_dir, init_dir


class MockWS:
    def __init__(self):
        self.browser_messages = deque([])
        self.python_messages = deque([])

    def send(self, python_message):
        self.python_messages.append(simplejson.loads(python_message))

    def receive(self):
        return simplejson.dumps(self.browser_messages.popleft())

    def add_browser_message(self, message):
        self.browser_messages.append(message)


class TestReactive(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()
        self.mock_ws = MockWS()
        request_context = RequestContext(
            body="", query_params={}, headers={}, method="GET"
        )
        self.form_client = FormClient(
            request_context=request_context,
            production_mode=False,
            ws=self.mock_ws,  # type: ignore
        )
        execution = Execution.create(
            request_context=request_context,
            stage_run_id="mock_sr_id",
            stage_id="mock_stage_id",
        )
        ExecutionStore.set(execution, self.form_client)

    def tearDown(self) -> None:
        clear_dir(self.root)
        ExecutionStore.clear()

    def test_rendering_with_static_part_initial_value(self):
        self.mock_ws.add_browser_message(
            {"type": "form:page-response", "payload": {"a": "1", "b": "2"}}
        )

        def render(partial):
            return Page().read("b", initial_value=partial.get("a"))

        ans = Page().read("a", initial_value="x").reactive(render).run()

        # Checking python sent message
        self.assertEqual(len(self.mock_ws.python_messages), 1)
        widgets = self.mock_ws.python_messages[0]["widgets"]
        self.assertEqual(widgets[0]["errors"], [])
        self.assertEqual(widgets[0]["value"], "x")
        self.assertEqual(widgets[1]["errors"], [])
        self.assertEqual(widgets[1]["value"], "x")

        # Checking browser sent message
        self.assertEqual(ans.get("a"), "1")
        self.assertEqual(ans.get("b"), "2")

    def test_render_properly(self):
        def render(partial):
            if partial.get("key") == "1":
                return Page().display("a")
            return Page().display("b")

        page = Page().read("input", key="key").reactive(render)

        page.set_values({"key": "1"})

        self.assertEqual(
            page.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "key",
                    "label": "input",
                    "mask": None,
                    "placeholder": "",
                    "required": True,
                    "type": "text-input",
                    "value": "1",
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "a",
                    "type": "text-output",
                },
            ],
        )

        page.set_values({"key": "2"})

        second_widget = page.render({})[1]

        self.assertEqual(second_widget.get("text"), "b")
