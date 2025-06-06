from typing import Dict, List, Optional, Union

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.template import (
    Template,
    TemplateFunction,
    TemplateRenderer,
)
from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class ListInput(InputWidget):
    """Repeatable list of input components that can be dynamically added or removed.

    Attributes:
        value (List[State]): The list of states for each item in the list. State is a dictionary-like object that holds the values for each input in the list indexed by their keys.
    """

    type = "list-input"
    value: List[State]

    def __init__(
        self,
        key: str,
        template: Union["Template", "TemplateFunction"],
        *,
        min: Optional[int] = 0,
        max: Optional[int] = None,
        hint: Optional[str] = None,
        add_button_text: str = "+",
        full_width: bool = False,
        required: bool = True,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a ListInput widget.

        Args:
            key (str): Identifier for the widget.
            template (Union[Template, TemplateFunction]): Template or function that returns a template for each list item.
            min (Optional[int]): Minimum number of items required.
            max (Optional[int]): Maximum number of items allowed.
            hint (Optional[str]): Help text displayed below the input.
            add_button_text (str): Text displayed on the button to add a new item.
            full_width (bool): Whether the input should take up the full width of its container.
            required (bool): Whether at least one item is required.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.key = key
        self._raw_template = template
        self.value = [State() for _ in range(min)] if min else []
        self.min = min
        self.max = max
        self.hint = hint
        self.add_button_text = add_button_text
        self.full_width = full_width
        self.required = required
        self.disabled = disabled
        self.errors = errors

    def _get_item_template(self, idx: int) -> Template:
        item_state = self.value[idx] if idx < len(self.value) else {}
        if callable(self._raw_template):
            result = self._raw_template(State(item_state))
            if isinstance(result, tuple):
                return result[0]
            return result or []
        return self._raw_template

    def _validate_list_min_max(self) -> List[str]:
        if self.min is not None and len(self.value) < self.min:
            return ["i18n_error_min_list"]
        if self.max is not None and len(self.value) > self.max:
            return ["i18n_error_max_list"]
        return []

    def _validate_all_items(self) -> List[str]:
        for idx in range(len(self.value)):
            template = self._get_item_template(idx)
            renderer = TemplateRenderer(template)
            output = renderer.render(self.value[idx])
            if output["has_errors"]:
                return ["i18n_error_invalid_list_item"]
        return []

    @property
    def _validators(self):
        return super()._validators + [
            self._validate_list_min_max,
            self._validate_all_items,
        ]

    def _render(self):
        rendered_items = []
        serialized_value = []
        for idx in range(len(self.value)):
            item_template = self._get_item_template(idx)
            renderer = TemplateRenderer(item_template)
            output = renderer.render(self.value[idx])
            rendered_items.append(output["widgets"])
            item_value = {
                widget["key"]: widget["value"]
                for widget in output["widgets"]
                if "key" in widget
            }
            serialized_value.append(item_value)
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
            "addButtonText": self.add_button_text,
            "fullWidth": self.full_width,
            "required": self.required,
            "disabled": self.disabled,
            "schemas": rendered_items,
            "value": serialized_value,
        }

    def _parse_value(self, value: List[Optional[Dict]]) -> List[State]:
        parsed_values: List[State] = []
        if not value:
            return []
        for idx, item in enumerate(value):
            state = State()
            template = self._get_item_template(idx)
            renderer = TemplateRenderer(template)
            raw_value = item or {}
            parsed = renderer.parse_state(raw_state=raw_value, include_missing=False)
            state.update(parsed)
            parsed_values.append(state)
        return parsed_values
