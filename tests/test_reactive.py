import unittest
from collections import deque

import simplejson

from abstra.forms import Page
from abstra_internals.controllers.execution_client import (
    ExecutionClientStore,
    FormClient,
)


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
        self.mock_ws = MockWS()
        self.form_client = FormClient(self.mock_ws, {})  # type: ignore
        ExecutionClientStore.set(self.form_client)

    def tearDown(self) -> None:
        ExecutionClientStore.clear()

    def test_rendering_with_static_part_initial_value(self):
        self.mock_ws.add_browser_message(
            {"type": "form:page-response", "payload": {"a": "1", "b": "2"}}
        )

        def render(partial):
            return Page().read("b", initial_value=partial["a"])

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
