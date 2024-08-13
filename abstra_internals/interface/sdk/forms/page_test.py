import unittest

from abstra.forms import ListItemSchema, Page
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.entities.execution import Execution, RequestContext


class TestPage(unittest.TestCase):
    def setUp(self) -> None:
        request_context = RequestContext(
            body="", query_params={}, headers={}, method="GET"
        )
        self.client = FormClient(
            request_context=request_context,
            production_mode=False,
            ws=None,  # type: ignore
        )
        execution = Execution.create(
            request_context=request_context,
            stage_run_id="mock_sr_id",
            stage_id="mock_stage_id",
        )
        ExecutionStore.set(execution, self.client)

    def tearDown(self) -> None:
        ExecutionStore.clear()

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

    def test_compare_page_with_same_widgets(self):
        page = Page().read("foo")
        other_page = Page().read("foo")

        self.assertTrue(page.is_equal_to(other_page))

    def test_comparte_page_with_different_widgets(self):
        page = Page().read("foo")
        other_page = Page().read("bar")

        self.assertFalse(page.is_equal_to(other_page))

    def test_compare_page_with_different_number_of_widgets(self):
        page = Page().read("foo")
        other_page = Page().read("foo").read("bar")

        self.assertFalse(page.is_equal_to(other_page))
