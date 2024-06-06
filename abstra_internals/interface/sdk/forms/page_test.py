import unittest

from abstra.forms import ListItemSchema, Page
from abstra_internals.controllers.execution_client import (
    ExecutionClientStore,
    FormClient,
)


class TestPage(unittest.TestCase):
    def setUp(self) -> None:
        self.client = FormClient(ws=None, request_context={}, production_mode=False)  # type: ignore
        ExecutionClientStore.set(self.client)
        return super().setUp()

    def tearDown(self) -> None:
        ExecutionClientStore.clear()
        return super().tearDown()

    def test_reactive_list_dropdown(self):
        schema = ListItemSchema().read_dropdown("dropdown", ["foo", "bar"])

        def render(ctx):
            return Page().read_list(schema, key="list", min=1)

        page = Page().reactive(render)

        rendered = page.render({})

        bar_value = rendered[0]["schemas"][0][0]["options"][1]["value"]

        browser_input = {"list": [{"dropdown": [bar_value]}]}
        parsed_value = page.parse_value(browser_input)

        self.assertEqual(parsed_value, {"list": [{"dropdown": "bar"}]})
