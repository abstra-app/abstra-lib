import time
from multiprocessing import Pipe
from uuid import uuid4

from abstra.forms import Page
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.sdk.sdk_context import SDKContext
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import FormContext, Request
from abstra_internals.interface.sdk.forms.deprecated.reactive_func import reactive
from abstra_internals.utils.websockets import MockWS, bind_ws_with_connection
from tests.fixtures import BaseTest


class TestReactive(BaseTest):
    def setUp(self):
        super().setUp()
        self.mock_ws = MockWS()

        context = FormContext(
            request=Request(body="", query_params={}, headers={}, method="GET"),
        )
        self.parent_conn, self.child_conn = Pipe()
        bind_ws_with_connection(self.mock_ws, self.parent_conn, block=False)
        self.form_client = FormClient(
            context=context, production_mode=False, conn=self.child_conn
        )
        execution = Execution.create(
            id=uuid4().__str__(),
            context=context,
            stage_id="mock_stage_id",
        )
        self.context = SDKContext(
            execution, self.form_client, self.repositories
        ).__enter__()

    def tearDown(self) -> None:
        self.context.__exit__(None, None, None)
        self.mock_ws.close()
        try:
            self.parent_conn.close()
        except Exception:
            pass
        try:
            self.child_conn.close()
        except Exception:
            pass

        time.sleep(0.1)
        super().tearDown()

    def test_rendering_with_static_part_initial_value(self):
        self.mock_ws.add_browser_message(
            {"type": "form:navigation", "payload": {"a": "1", "b": "2"}}
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
                    "maxLength": None,
                    "minLength": None,
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

    def test_reactive_decorator(self):
        @reactive
        def render(p):
            age = p.read_number("age", key="age")

            if age is not None and age > 60:
                p.display("if")
            else:
                p.display("else")

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 0,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "else",
                    "type": "text-output",
                },
            ],
        )

        render.set_values({"age": 61})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 61,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "if",
                    "type": "text-output",
                },
            ],
        )

        render.set_values({"age": 59})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 59,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "else",
                    "type": "text-output",
                },
            ],
        )

    def test_initial_value(self):
        @reactive
        def render(p):
            age = p.read_number("age", key="age", initial_value=61)

            if age is not None and age > 60:
                p.display("if")
            else:
                p.display("else")

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 61,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "if",
                    "type": "text-output",
                },
            ],
        )

    def test_initial_value_in_rendered_widgets(self):
        @reactive
        def render(p):
            age = p.read_number("age", key="age", initial_value=61)

            if age is not None and age > 60:
                p.read("if", initial_value="if value")
            else:
                p.read("else", initial_value="else value")

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 61,
                },
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "if",
                    "label": "if",
                    "placeholder": "",
                    "required": True,
                    "type": "text-input",
                    "mask": None,
                    "maxLength": None,
                    "minLength": None,
                    "value": "if value",
                },
            ],
        )

        render.set_values({"age": 59})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 59,
                },
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "else",
                    "label": "else",
                    "placeholder": "",
                    "required": True,
                    "type": "text-input",
                    "maxLength": None,
                    "minLength": None,
                    "mask": None,
                    "value": "else value",
                },
            ],
        )

        render.set_values({"age": 58, "else": "new value"})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 58,
                },
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "else",
                    "label": "else",
                    "maxLength": None,
                    "minLength": None,
                    "placeholder": "",
                    "required": True,
                    "type": "text-input",
                    "mask": None,
                    "value": "new value",
                },
            ],
        )

        render.set_values({"age": 65, "else": "new value"})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "age",
                    "label": "age",
                    "placeholder": "",
                    "required": True,
                    "type": "number-input",
                    "max": None,
                    "min": None,
                    "value": 65,
                },
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "if",
                    "label": "if",
                    "placeholder": "",
                    "required": True,
                    "type": "text-input",
                    "maxLength": None,
                    "minLength": None,
                    "mask": None,
                    "value": "if value",
                },
            ],
        )

    def test_with_other_types_of_initial_value(self):
        @reactive
        def render(p):
            checked = p.read_checkbox("checked", key="checked")

            if checked:
                p.display("if")
            else:
                p.display("else")

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "checked",
                    "label": "checked",
                    "required": True,
                    "type": "checkbox-input",
                    "value": False,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "else",
                    "type": "text-output",
                },
            ],
        )

        render.set_values({"checked": True})

        self.assertEqual(
            render.render({}),
            [
                {
                    "disabled": False,
                    "errors": [],
                    "fullWidth": False,
                    "hint": None,
                    "key": "checked",
                    "label": "checked",
                    "required": True,
                    "type": "checkbox-input",
                    "value": True,
                },
                {
                    "fullWidth": False,
                    "size": "medium",
                    "text": "if",
                    "type": "text-output",
                },
            ],
        )

    def test_widgets_with_options_handler(self):
        @reactive
        def render(p):
            num = p.read_number("Number", initial_value=10)

            if num == 10:
                p.read_checklist(
                    "Checklist", options=["A", "B", "C"], initial_value=["B"]
                )
                p.read_dropdown(
                    "Choose a color", ["Red", "Green", "Blue"], initial_value="Blue"
                )
                p.read_multiple_choice(
                    "Which programming language do you prefer?",
                    ["Python", "JavaScript"],
                    initial_value="Python",
                )

        widgets = render.render({})
        self.assertEqual(
            widgets[0],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Number",
                "label": "Number",
                "max": None,
                "min": None,
                "required": True,
                "placeholder": "",
                "type": "number-input",
                "value": 10,
            },
        )

        self.assertEqual(
            widgets[1],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Checklist",
                "label": "Checklist",
                "max": 3,
                "min": 0,
                "options": [
                    {"label": "A", "value": "0"},
                    {"label": "B", "value": "1"},
                    {"label": "C", "value": "2"},
                ],
                "required": True,
                "type": "checklist-input",
                "value": ["1"],
            },
        )

        self.assertEqual(
            widgets[2],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Choose a color",
                "label": "Choose a color",
                "max": None,
                "min": None,
                "multiple": False,
                "placeholder": "",
                "options": [
                    {"label": "Red", "value": "0"},
                    {"label": "Green", "value": "1"},
                    {"label": "Blue", "value": "2"},
                ],
                "required": True,
                "type": "dropdown-input",
                "value": ["2"],
            },
        )

        self.assertEqual(
            widgets[3],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Which programming language do you prefer?",
                "label": "Which programming language do you prefer?",
                "max": None,
                "min": None,
                "multiple": False,
                "options": [
                    {"label": "Python", "value": "0"},
                    {"label": "JavaScript", "value": "1"},
                ],
                "required": True,
                "type": "multiple-choice-input",
                "value": ["0"],
            },
        )

    def test_dropdown_input(self):
        orgs = [
            {
                "name": "org 1",
                "projects": [
                    {"name": "project 1"},
                    {"name": "project 2"},
                    {"name": "project 3"},
                ],
            },
            {
                "name": "org 2",
                "projects": [
                    {"name": "project 4"},
                    {"name": "project 5"},
                ],
            },
            {
                "name": "org 3",
                "projects": [
                    {"name": "project 5"},
                    {"name": "project 1"},
                ],
            },
        ]

        @reactive
        def render(p):
            org = p.read_dropdown(
                "Org",
                [{"label": org.get("name"), "value": org} for org in orgs],
                initial_value=orgs[0],
            )

            p.read_dropdown(
                "Proj",
                (
                    [
                        {"label": proj.get("name"), "value": proj}
                        for proj in org.get("projects")
                    ]
                    if org is not None
                    else []
                ),
                initial_value=org.get("projects")[0] if org is not None else None,
            )

        widgets = render.render({})

        self.assertEqual(
            widgets[0],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Org",
                "label": "Org",
                "max": None,
                "min": None,
                "multiple": False,
                "options": [
                    {"label": "org 1", "value": "0"},
                    {"label": "org 2", "value": "1"},
                    {"label": "org 3", "value": "2"},
                ],
                "placeholder": "",
                "required": True,
                "type": "dropdown-input",
                "value": ["0"],
            },
        )

        self.assertEqual(
            widgets[1],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Proj",
                "label": "Proj",
                "max": None,
                "min": None,
                "multiple": False,
                "options": [
                    {"label": "project 1", "value": "0"},
                    {"label": "project 2", "value": "1"},
                    {"label": "project 3", "value": "2"},
                ],
                "placeholder": "",
                "required": True,
                "type": "dropdown-input",
                "value": ["0"],
            },
        )

        render.set_values({"Org": orgs[1]})
        widgets = render.render({})

        self.assertEqual(
            widgets[0],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Org",
                "label": "Org",
                "max": None,
                "min": None,
                "multiple": False,
                "options": [
                    {"label": "org 1", "value": "0"},
                    {"label": "org 2", "value": "1"},
                    {"label": "org 3", "value": "2"},
                ],
                "placeholder": "",
                "required": True,
                "type": "dropdown-input",
                "value": ["1"],
            },
        )

        self.assertEqual(
            widgets[1],
            {
                "disabled": False,
                "errors": [],
                "fullWidth": False,
                "hint": None,
                "key": "Proj",
                "label": "Proj",
                "max": None,
                "min": None,
                "multiple": False,
                "options": [
                    {"label": "project 4", "value": "0"},
                    {"label": "project 5", "value": "1"},
                ],
                "placeholder": "",
                "required": True,
                "type": "dropdown-input",
                "value": ["0"],
            },
        )
