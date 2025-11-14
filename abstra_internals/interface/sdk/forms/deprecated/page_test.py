from abstra.forms import ListItemSchema, Page
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.sdk.sdk_context import (
    SDKContext,
)
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import FormContext, Request
from tests.fixtures import BaseTest


class TestPage(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        form_context = FormContext(
            request=Request(body="", query_params={}, headers={}, method="GET"),
        )

        self.client = FormClient(
            context=form_context,
            production_mode=False,
            ws=None,  # type: ignore
        )
        execution = Execution.create(
            context=form_context,
            stage_id="mock_stage_id",
        )
        self.context = SDKContext(execution, self.client, self.repositories).__enter__()

    def tearDown(self) -> None:
        self.context.__exit__(None, None, None)
        super().tearDown()

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
