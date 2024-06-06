import unittest
from unittest.mock import ANY

from abstra.forms import ListItemSchema, Page
from abstra_internals.controllers.execution_client import (
    ExecutionClientStore,
    FormClient,
)
from abstra_internals.widgets.library import ListInput

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
    "errors": [],
}


class TestListInput(unittest.TestCase):
    def setUp(self):
        self.maxDiff = None
        self.form_client = FormClient(
            ws=None,  # type: ignore
            request_context={},  # type: ignore
            production_mode=False,
        )
        ExecutionClientStore.set(self.form_client)

    def tearDown(self) -> None:
        ExecutionClientStore.clear()
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

    @unittest.skip("TODO: Known issue")
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
            page.widgets[0].value,
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
