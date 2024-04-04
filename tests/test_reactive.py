import unittest
from collections import deque
from threading import get_ident

from abstra.forms import Page
from abstra_internals.execution import Execution, FormExecution


class MockFormExecution(FormExecution):
    def __init__(self):
        self.browser_messages = deque([])
        self.python_messages = deque([])

    def send(self, python_message):
        self.python_messages.append(python_message)

    def receive(self):
        return self.browser_messages.popleft()

    def add_browser_message(self, message):
        self.browser_messages.append(message)


class TestReactive(unittest.TestCase):
    def setUp(self):
        self.mock = MockFormExecution()
        Execution.executions[get_ident()] = self.mock

    def test_rendering_with_static_part_initial_value(self):
        self.mock.add_browser_message(
            {"type": "form:page-response", "payload": {"a": "1", "b": "2"}}
        )

        def render(partial):
            return Page().read("b", initial_value=partial["a"])

        ans = Page().read("a", initial_value="x").reactive(render).run()

        # Checking python sent message
        self.assertEqual(len(self.mock.python_messages), 1)
        widgets = self.mock.python_messages[0].data["widgets"]
        self.assertEqual(widgets[0]["errors"], [])
        self.assertEqual(widgets[0]["value"], "x")
        self.assertEqual(widgets[1]["errors"], [])
        self.assertEqual(widgets[1]["value"], "x")

        # Checking browser sent message
        self.assertEqual(ans.get("a"), "1")
        self.assertEqual(ans.get("b"), "2")
