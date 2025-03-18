import unittest
from typing import List, cast

import pandas as pd

from abstra_internals.entities.forms.form_entity import FormEntity
from abstra_internals.entities.forms.steps import (
    ComputationStep,
    GeneratorStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import (
    BackButton,
    NextButton,
    State,
    Template,
    TemplateGeneratorFunction,
)
from abstra_internals.entities.forms.widgets.library import (
    ListInput,
    PandasRowSelectionInput,
    TagInput,
    TextInput,
    TextOutput,
)

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

rendered_pandas_row_selection_input = {
    "type": "pandas-row-selection-input",
    "key": "my_table",
    "hint": None,
    "table": {
        "schema": {
            "fields": [
                {"name": "index", "type": "integer"},
                {"name": "name", "type": "string"},
                {"name": "amount", "type": "integer"},
            ],
            "primaryKey": ["index"],
        },
        "data": [
            {"index": 0, "name": "Alice", "amount": 100},
            {"index": 1, "name": "Bob", "amount": 200},
            {"index": 2, "name": "Charlie", "amount": 300},
        ],
    },
    "paginationAlwaysVisible": True,
    "required": True,
    "fullWidth": True,
    "displayIndex": False,
    "disabled": False,
    "label": "pandas_row_selection",
    "multiple": True,
    "filterable": False,
    "value": [],
    "errors": [],
    "min": None,
    "max": None,
    "pageSize": 10,
}


def input_page(state: State) -> Template:
    return [TextInput(key="name", label="Name")]


input_page_step = PageStep(input_page)


def double_input_page(state: State) -> Template:
    return [
        TextInput(key="name", label="Name"),
        TextInput(key="email", label="Email"),
    ]


double_input_step = PageStep(double_input_page)


def output_page(state: State) -> Template:
    return [TextOutput(str(state["name"]))]


output_page_step = PageStep(output_page)


def tag_input_page(state: State) -> Template:
    return [TagInput(key="tags", label="Tags")]


tag_input_page_step = PageStep(tag_input_page)


def reactive_page(state: State) -> Template:
    p: Template = [TextInput(key="name", label="Name")]
    if state.get("name") == "test":
        p.append(TextOutput(str(state["name"])))
    return p


reactive_page_step = PageStep(reactive_page)


def list_input_schema(item_state: State) -> Template:
    t: Template = [TextInput(key="name", label="Name")]
    if item_state.get("name") == "test":
        t.append(TextOutput(str(item_state["name"])))
        t.append(TextInput(key="email", label="Email"))
    return t


def list_page(state: State) -> Template:
    return [ListInput(template=list_input_schema, key="list")]


list_page_step = PageStep(list_page)


def list_and_input_page(state: State):
    return [
        TextInput(key="name", label="Name"),
        ListInput(template=list_input_schema, key="list"),
    ]


list_with_input_page_step = PageStep(list_and_input_page)


def pandas_row_selection_page(state: State) -> Template:
    df = pd.DataFrame(
        {
            "name": ["Alice", "Bob", "Charlie"],
            "amount": [100, 200, 300],
        }
    )
    return [
        PandasRowSelectionInput(
            df=df, key="my_table", label="pandas_row_selection", multiple=True
        )
    ]


pandas_row_selection_page_step = PageStep(pandas_row_selection_page)


def compute(state):
    pass


compute_step = ComputationStep(compute)


class FormEntityTest(unittest.TestCase):
    def compare_renders(self, rendered, expected):
        self.assertEqual(rendered["end_page"], expected["end_page"])
        self.assertEqual(rendered["steps_info"], expected["steps_info"])
        self.assertEqual(len(rendered["widgets"]), len(expected["widgets"]))
        self.assertEqual(rendered["buttons"], expected.get("buttons", []))

        for i, widget in enumerate(rendered["widgets"]):
            for key, value in widget.items():
                if value != expected["widgets"][i][key]:
                    print(
                        f"WIDGET '{widget.get('key', '')}' (index {i}) | KEY '{key}'\nEXPECTED: {expected['widgets'][i][key]}\nGOT: {value}"
                    )
                self.assertEqual(
                    value,
                    expected["widgets"][i][key],
                )

    def test_input_page(self):
        steps: List[Step] = [input_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()
        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "test"},
            }
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "test",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

    def test_reactive_page(self):
        steps: List[Step] = [reactive_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()
        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "test"},
            }
        )

        rendered = form.run()

        self.compare_renders(
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
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "tes"},
            }
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "tes",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

    def test_validation(self):
        steps: List[Step] = [double_input_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                    },
                    {
                        **rendered_text_input,
                        "key": "email",
                        "label": "Email",
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": "my name"},
            }
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "my name",
                    },
                    {
                        **rendered_text_input,
                        "key": "email",
                        "label": "Email",
                        "value": "",
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"name": ""},
            }
        )
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "",
                        "errors": ["i18n_error_required_field"],
                    },
                    {
                        **rendered_text_input,
                        "key": "email",
                        "label": "Email",
                        "value": "",
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

    def test_list_page(self):
        steps: List[Step] = [list_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)

        # Initial render
        rendered = form.run()
        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_list_input,
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
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
        self.compare_renders(
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
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
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
        self.compare_renders(
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
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

        # delete string
        form.handle_input(
            {
                "type": "form:input",
                "payload": {"list": [{"name": ""}]},
            }
        )

        rendered = form.run()

        # validate error
        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_list_input,
                        "schemas": [
                            [
                                {
                                    **rendered_text_input,
                                    "value": "",
                                    "errors": ["i18n_error_required_field"],
                                }
                            ]
                        ],
                        "errors": ["i18n_error_invalid_list_item"],
                        "value": [{"name": ""}],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
            },
        )

    def test_tag_input(self):
        steps: List[Step] = [tag_input_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)

        # Initial render
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        "type": "tag-input",
                        "key": "tags",
                        "label": "Tags",
                        "value": [],
                        "placeholder": "",
                        "required": True,
                        "hint": None,
                        "fullWidth": False,
                        "disabled": False,
                        "errors": [],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
                "yielding": False,
            },
        )

        # Add item
        form.handle_input(
            {
                "type": "form:input",
                "payload": {"tags": ["tag1"]},
            }
        )
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        "type": "tag-input",
                        "key": "tags",
                        "label": "Tags",
                        "value": ["tag1"],
                        "placeholder": "",
                        "required": True,
                        "hint": None,
                        "fullWidth": False,
                        "disabled": False,
                        "errors": [],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 1, "disabled": True},
                "buttons": [NextButton()],
                "yielding": False,
            },
        )

        form.handle_input(
            {
                "type": "form:input",
                "payload": {"tags": ["tag1", "tag2"]},
            }
        )

    def test_navigation(self):
        steps: List[Step] = [input_page_step, output_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()
        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
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

        self.compare_renders(
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
                "buttons": [BackButton(), NextButton()],
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

        self.compare_renders(
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
                "buttons": [NextButton()],
            },
        )

    def test_navigation_with_list_pages(self):
        steps: List[Step] = [list_with_input_page_step, output_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                    },
                    {
                        **rendered_list_input,
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"name": "test-name", "list": [{"name": "test"}]},
                "action": "i18n_next_action",
            }
        )

        rendered = form.run()

        self.compare_renders(
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
                "buttons": [BackButton(), NextButton()],
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"name": "test-name", "list": [{"name": "test"}]},
                "action": "i18n_back_action",
            }
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                        "value": "test-name",
                    },
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
                    },
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
            },
        )

    def test_navigation_with_pandas_row_selection(self):
        steps: List[Step] = [pandas_row_selection_page_step, input_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()

        print(rendered)
        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_pandas_row_selection_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"my_table": [{"index": 0, "name": "Alice", "amount": 100}]},
                "action": "i18n_next_action",
            }
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_input,
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 2, "total": 2, "disabled": False},
                "buttons": [BackButton(), NextButton()],
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

        self.assertEqual(
            form.state["my_table"], [{"index": 0, "name": "Alice", "amount": 100}]
        )

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_pandas_row_selection_input,
                        "value": [{"index": 0, "name": "Alice", "amount": 100}],
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
            },
        )

    def test_page_buttons(self):
        steps: List[Step] = [input_page_step, output_page_step]
        form = FormEntity(steps, State(), force_hide_steps=False)
        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
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

        self.compare_renders(
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
                "buttons": [BackButton(), NextButton()],
            },
        )

    def test_computation_step(self):
        def mock_compute(state):
            state["computed"] = "computed"

        steps = [
            input_page_step,
            ComputationStep(mock_compute),
            output_page_step,
        ]
        form = FormEntity(steps, State(), force_hide_steps=False)

        rendered = form.run()
        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
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

        self.compare_renders(
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
                "buttons": [BackButton(), NextButton()],
            },
        )

        form.handle_navigation(
            {
                "type": "form:navigation",
                "payload": {"name": "test-name"},
                "action": "i18n_next_action",
            }
        )

        self.assertEqual(form.state["computed"], "computed")

    def test_generator_step(self):
        def mock_generator(state: State):
            yield [TextOutput("test 1")]
            yield [TextOutput("test 2")]

        steps = [
            input_page_step,
            GeneratorStep(cast(TemplateGeneratorFunction, mock_generator)),
            output_page_step,
        ]
        form = FormEntity(steps, State(), force_hide_steps=False)

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [rendered_text_input],
                "end_page": False,
                "steps_info": {"current": 1, "total": 2, "disabled": False},
                "buttons": [NextButton()],
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

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_output,
                        "text": "test 1",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 2, "total": 2, "disabled": False},
                "buttons": [],
            },
        )

        rendered = form.run()

        self.compare_renders(
            rendered,
            {
                "widgets": [
                    {
                        **rendered_text_output,
                        "text": "test 2",
                    }
                ],
                "end_page": False,
                "steps_info": {"current": 2, "total": 2, "disabled": False},
                "buttons": [],
            },
        )

        rendered = form.run()

        self.compare_renders(
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
                "buttons": [BackButton(), NextButton()],
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

        self.compare_renders(
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
                "buttons": [NextButton()],
            },
        )

    def test_for_loop_run(self):
        def page_a(state: State) -> Template:
            return [TextInput(key="name", label="Name")]

        for i in range(2):
            steps: List[Step] = [PageStep(page_a)]
            form = FormEntity(steps, State(), force_hide_steps=False)
            state = form.run()

            self.compare_renders(
                state,
                {
                    "widgets": [rendered_text_input],
                    "end_page": False,
                    "steps_info": {"current": 1, "total": 1, "disabled": True},
                    "buttons": [NextButton()],
                },
            )

            form.handle_input(
                {
                    "type": "form:input",
                    "payload": {"name": "test"},
                }
            )

            state = form.run()
