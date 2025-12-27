from multiprocessing import Pipe
from unittest.mock import ANY
from uuid import uuid4

from abstra.forms import ListItemSchema, Page
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.sdk.sdk_context import SDKContext
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import FormContext, Request
from abstra_internals.interface.sdk.forms.deprecated.widgets.library import ListInput
from abstra_internals.utils.websockets import MockWS, bind_ws_with_connection
from tests.fixtures import BaseTest

default_text_input = {
    "type": "text-input",
    "key": "foo",
    "label": "foo",
    "value": "",
    "placeholder": "",
    "required": True,
    "hint": None,
    "fullWidth": False,
    "mask": None,
    "disabled": False,
    "maxLength": None,
    "minLength": None,
    "errors": [],
}


class TestListInput(BaseTest):
    def setUp(self):
        super().setUp()
        self.maxDiff = None

        context = FormContext(
            request=Request(body="", query_params={}, headers={}, method="GET"),
        )
        parent_conn, child_conn = Pipe()
        bind_ws_with_connection(MockWS(), parent_conn, block=False)
        self.client = FormClient(
            context=context, production_mode=False, conn=child_conn
        )
        execution = Execution.create(
            id=uuid4().__str__(),
            context=context,
            stage_id="mock_stage_id",
        )
        self.context = SDKContext(execution, self.client, self.repositories).__enter__()

    def tearDown(self) -> None:
        self.context.__exit__(None, None, None)
        return super().tearDown()

    def test_empty_case(self):
        schema = ListItemSchema().read("foo")
        input = ListInput("key", schema)

        rendered = input.render({})

        self.assertEqual(rendered["value"], [])

    def test_simple_case(self):
        schema = ListItemSchema().read("foo")
        input = ListInput("key", schema)

        self.assertEqual(input.render({})["value"], [])

        input.set_value([{"foo": "bar"}], set_errors=False)

        self.assertEqual(
            input.serialize_value(),
            [{"foo": "bar"}],
        )

    def test_simple_case_with_empty_required_field(self):
        schema = ListItemSchema().read("foo", required=True)
        input = ListInput("key", schema)

        input.set_value([{"foo": ""}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], ["i18n_error_invalid_list_item"])

        input.set_value([{"foo": "bar"}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], [])

    def test_multiple_required_fields(self):
        schema = ListItemSchema().read("foo", required=True).read("bar", required=True)
        input = ListInput("key", schema)

        input.set_value([{"foo": "baz", "bar": ""}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], ["i18n_error_invalid_list_item"])

        input.set_value([{"foo": "baz", "bar": "qux"}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], [])

    def test_required_and_optional_fields(self):
        schema = ListItemSchema().read("foo", required=True).read("bar", required=False)
        input = ListInput("key", schema)

        input.set_value([{"foo": "baz", "bar": ""}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], [])

    def test_multiple_items(self):
        schema = ListItemSchema().read("foo", required=True).read("bar", required=False)
        input = ListInput("key", schema)

        input.set_value([{"foo": "baz", "bar": ""}, {"foo": "qux", "bar": "quux"}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], [])

        input.set_value([{"foo": "baz", "bar": ""}, {"foo": "", "bar": ""}])
        input.set_errors()
        self.assertEqual(input.render({})["errors"], ["i18n_error_invalid_list_item"])

    def test_list_with_reactive(self):
        schema = ListItemSchema().reactive(lambda _: Page().read("foo"))
        list_input = ListInput("key", schema, initial_value=[dict(foo="bar")])
        self.assertEqual(list_input.value, [dict(foo="bar")])
        list_item_page = list_input.schemas[0]
        reactive_widget = list_item_page.widgets[0]
        self.assertEqual(
            reactive_widget.render({}), [{**default_text_input, "value": "bar"}]
        )
        self.assertEqual(
            list_input.value,
            [dict(foo="bar")],
        )

    def test_add_item(self):
        schema = ListItemSchema().reactive(lambda _: Page().read("foo"))

        page = Page().reactive(lambda _: Page().read_list(schema, key="list"))

        page.set_values(dict(list=[dict(list=[None])]))

        # page -> reactive -> list -> schema
        self.assertEqual(
            schema.render({}),
            [default_text_input],
        )

        self.assertEqual(
            page.widgets[0].value,  # type: ignore
            dict(list=[dict(list=[None])]),
        )

        self.assertEqual(
            page.render({}),
            [
                {
                    "type": "list-input",
                    "key": "list",
                    "hint": None,
                    "errors": [],
                    "min": 0,
                    "max": None,
                    "addButtonText": "+",
                    "fullWidth": False,
                    "required": True,
                    "disabled": False,
                    "value": [{"foo": ""}],
                    "schemas": [
                        [
                            {
                                "type": "text-input",
                                "key": "foo",
                                "label": "foo",
                                "value": "",
                                "placeholder": "",
                                "required": True,
                                "hint": None,
                                "fullWidth": False,
                                "maxLength": None,
                                "minLength": None,
                                "mask": None,
                                "disabled": False,
                                "errors": [],
                            }
                        ]
                    ],
                }
            ],
        )

    def test_list_reactive_dropdown(self):
        schema = ListItemSchema().reactive(
            lambda _: Page().read_dropdown("foo", ["bar", "baz"])
        )
        page = Page().read_list(schema, key="list")

        page.set_values(dict(list=[dict(foo=["bar"])]))

        self.assertEqual(
            page.render({}),
            [
                {
                    "type": "list-input",
                    "key": "list",
                    "hint": None,
                    "errors": [],
                    "min": 0,
                    "max": None,
                    "addButtonText": "+",
                    "fullWidth": False,
                    "required": True,
                    "disabled": False,
                    "value": [{"foo": [ANY]}],
                    "schemas": [
                        [
                            {
                                "type": "dropdown-input",
                                "key": "foo",
                                "label": "foo",
                                "options": [
                                    {"label": "bar", "value": ANY},
                                    {"label": "baz", "value": ANY},
                                ],
                                "min": None,
                                "max": None,
                                "hint": None,
                                "multiple": False,
                                "placeholder": "",
                                "value": [ANY],
                                "required": True,
                                "fullWidth": False,
                                "disabled": False,
                                "errors": [],
                            }
                        ]
                    ],
                }
            ],
        )
