from unittest import TestCase
from unittest.mock import ANY

from abstra_internals.widgets.library.DropdownInput import DropdownInput


class TestHotReloadLocalModules(TestCase):
    maxDiff = None

    def test_initial_render_dict_list(self):
        widget = DropdownInput(
            key="dropdown_key_1",
            label="Dropdown Label",
            options=[{"label": "Option 1", "value": "option_1"}],
        )
        result = widget.render({})

        # option values are generated automatically
        self.assertEqual(
            result,
            {
                "type": "dropdown-input",
                "key": "dropdown_key_1",
                "label": "Dropdown Label",
                "options": [{"label": "Option 1", "value": ANY}],
                "hint": None,
                "multiple": False,
                "placeholder": "",
                "value": [],
                "required": True,
                "fullWidth": False,
                "disabled": False,
                "min": None,
                "max": None,
                "errors": [],
            },
        )

    def test_initial_render_str_list(self):
        widget = DropdownInput(
            key="dropdown_key_1",
            label="Dropdown Label",
            options=["Option 1", "Option 2"],
        )

        result = widget.render({})

        self.assertEqual(
            result,
            {
                "type": "dropdown-input",
                "key": "dropdown_key_1",
                "label": "Dropdown Label",
                "options": [
                    {"label": "Option 1", "value": ANY},
                    {"label": "Option 2", "value": ANY},
                ],
                "hint": None,
                "multiple": False,
                "placeholder": "",
                "value": [],
                "required": True,
                "fullWidth": False,
                "disabled": False,
                "errors": [],
                "min": None,
                "max": None,
            },
        )

    def test_render_setting_value(self):
        widget = DropdownInput(
            key="dropdown_key_1",
            label="Dropdown Label",
            options=["Option 1", "Option 2"],
        )

        initial_render = widget.render({})

        user_sent_value = [initial_render["options"][1]["value"]]
        parsed_value = widget.parse_value(user_sent_value)
        widget.set_value(parsed_value)

        result = widget.render({})

        self.assertEqual(
            result,
            {
                "type": "dropdown-input",
                "key": "dropdown_key_1",
                "label": "Dropdown Label",
                "options": [
                    {
                        "label": "Option 1",
                        "value": initial_render["options"][0]["value"],
                    },
                    {
                        "label": "Option 2",
                        "value": initial_render["options"][1]["value"],
                    },
                ],
                "hint": None,
                "multiple": False,
                "placeholder": "",
                "value": [initial_render["options"][1]["value"]],
                "required": True,
                "fullWidth": False,
                "disabled": False,
                "errors": [],
                "min": None,
                "max": None,
            },
        )

    def test_min_error(self):
        widget = DropdownInput(
            key="dropdown_key_1",
            label="Dropdown Label",
            options=["Option 1", "Option 2", "Option 3"],
            multiple=True,
            min=2,
        )

        initial_render = widget.render({})
        user_sent_value = [initial_render["options"][1]["value"]]
        parsed_value = widget.parse_value(user_sent_value)
        widget.set_value(parsed_value, set_errors=True)

        result = widget.render({})

        self.assertEqual(
            result,
            {
                "type": "dropdown-input",
                "key": "dropdown_key_1",
                "label": "Dropdown Label",
                "options": [
                    {
                        "label": "Option 1",
                        "value": initial_render["options"][0]["value"],
                    },
                    {
                        "label": "Option 2",
                        "value": initial_render["options"][1]["value"],
                    },
                    {
                        "label": "Option 3",
                        "value": initial_render["options"][2]["value"],
                    },
                ],
                "hint": None,
                "multiple": True,
                "placeholder": "",
                "value": [initial_render["options"][1]["value"]],
                "required": True,
                "fullWidth": False,
                "disabled": False,
                "errors": ["i18n_error_min_list"],
                "min": 2,
                "max": None,
            },
        )

    def test_max_error(self):
        widget = DropdownInput(
            key="dropdown_key_1",
            label="Dropdown Label",
            options=["Option 1", "Option 2", "Option 3"],
            multiple=True,
            max=1,
        )

        initial_render = widget.render({})
        user_sent_value = [
            initial_render["options"][0]["value"],
            initial_render["options"][1]["value"],
        ]
        parsed_value = widget.parse_value(user_sent_value)
        widget.set_value(parsed_value, set_errors=True)

        result = widget.render({})

        self.assertEqual(
            result,
            {
                "type": "dropdown-input",
                "key": "dropdown_key_1",
                "label": "Dropdown Label",
                "options": [
                    {
                        "label": "Option 1",
                        "value": initial_render["options"][0]["value"],
                    },
                    {
                        "label": "Option 2",
                        "value": initial_render["options"][1]["value"],
                    },
                    {
                        "label": "Option 3",
                        "value": initial_render["options"][2]["value"],
                    },
                ],
                "hint": None,
                "multiple": True,
                "placeholder": "",
                "value": [
                    initial_render["options"][0]["value"],
                    initial_render["options"][1]["value"],
                ],
                "required": True,
                "fullWidth": False,
                "disabled": False,
                "errors": ["i18n_error_max_list"],
                "min": None,
                "max": 1,
            },
        )
