import unittest
from typing import Dict

from abstra_internals.entities.forms.form_entity import FormEntity
from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.steps import PageStep, Step
from abstra_internals.entities.forms.template import Template
from abstra_internals.widgets.library import ListInput, TextInput, TextOutput

rendered_text_input = {
    "type": "text-input",
    "key": "name",
    "label": "Name",
    "value": "",
    "placeholder": "",
    "required": True,
    "hint": None,
    "fullWidth": False,
    "mask": None,
    "maxLength": None,
    "minLength": None,
    "disabled": False,
    "errors": [],
}

rendered_text_output = {
    "type": "text-output",
    "text": "test",
    "size": "medium",
    "fullWidth": False,
}

rendered_list_input = {
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
    "schemas": [],
    "value": [],
}


def compare_renders(rendered, expected):
    assert rendered["end_page"] == expected["end_page"]
    assert rendered["steps_info"] == expected["steps_info"]
    assert len(rendered["widgets"]) == len(expected["widgets"])
    for i, widget in enumerate(rendered["widgets"]):
        for key, value in widget.items():
            if value != expected["widgets"][i][key]:
                assert False, f"Widget {i} key {key} does not match.\nEXPECTED:\n{expected['widgets'][i][key]}\nGOT\n{value}"


def make_steps() -> Dict[str, Step]:
    def input_page(state: State) -> Template:
        return [TextInput(key="name", label="Name")]

    def output_page(state: State) -> Template:
        return [TextOutput(str(state["name"]))]

    def reactive_page(state: State) -> Template:
        p: Template = [TextInput(key="name", label="Name")]
        if state.get("name") == "test":
            p.append(TextOutput(str(state["name"])))
        return p

    def list_input_schema(item_state: State) -> Template:
        t: Template = [TextInput(key="name", label="Name")]
        if item_state.get("name") == "test":
            t.append(TextOutput(str(item_state["name"])))
            t.append(TextInput(key="email", label="Email"))
        return t

    def list_page(state: State) -> Template:
        return [ListInput(item_schema=list_input_schema, key="list")]

    def list_input_page(state: State):
        return [
            TextInput(key="name", label="Name"),
            ListInput(item_schema=list_input_schema, key="list"),
        ]

    def compute(state):
        pass

    return {
        "input_page": PageStep(input_page),
        "output_page": PageStep(output_page),
        "reactive_page": PageStep(reactive_page),
        "list_page": PageStep(list_page),
        "list_input_page": PageStep(list_input_page),
    }


class FormEntityTest(unittest.TestCase):
    def test_input_page(self):
        all_steps = make_steps()
        steps = [all_steps["input_page"]]
        form = FormEntity(steps, State())
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "test"},
            }
        )

        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "test",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

    def test_reactive_page(self):
        all_steps = make_steps()
        steps = [all_steps["reactive_page"]]
        form = FormEntity(steps, State())
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "test"},
            }
        )

        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "test",
                    },
                    {
                        **rendered_text_output,
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "tes"},
            }
        )

        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "tes",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

    def test_validation(self):
        all_steps = make_steps()
        steps = [all_steps["input_page"]]
        form = FormEntity(steps, State())
        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "my name"},
            }
        )

        rendered = form.run()

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": ""},
            }
        )
        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "",
                        "errors": ["i18n_error_required_field"],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

    def test_list_page(self):
        all_steps = make_steps()
        steps = [all_steps["list_page"]]
        form = FormEntity(steps, State())

        # Initial render
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_list_input,
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        # Add item
        form.handle_input(
            {
                "type": "form:input",
                "payload": {"list": [None]},
            }
        )
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_list_input,
                        "schemas": [[rendered_text_input]],
                        "value": [{"name": ""}],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

        # Fill item
        form.handle_input(
            {
                "type": "form:input",
                "payload": {"list": [{"name": "test"}]},
            }
        )
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_list_input,
                        "schemas": [
                            [
                                {
                                    **rendered_text_input,
                                    "value": "test",
                                },
                                {
                                    **rendered_text_output,
                                    "text": "test",
                                },
                                {
                                    **rendered_text_input,
                                    "key": "email",
                                    "label": "Email",
                                    "value": "",
                                },
                            ]
                        ],
                        "value": [{"name": "test", "email": ""}],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": False},
            },
        )

    def test_navigation(self):
        all_steps = make_steps()
        steps = [all_steps["input_page"], all_steps["output_page"]]
        form = FormEntity(steps, State())
        rendered = form.run()
        compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"name": "test-name"},
                "action": "i18n_next_action",
            }
        )

        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_output,
                        "text": "test-name",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 2, "total": 2, "disabled": False},
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"name": "test-name"},
                "action": "i18n_back_action",
            }
        )

        rendered = form.run()

        compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "test-name",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
            },
        )
