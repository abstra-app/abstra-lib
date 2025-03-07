from typing import Dict, List, Optional, Union

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.template import (
    Template,
    TemplateFunction,
    TemplateRenderer,
)
from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class ListInput(InputWidget):
    type = "list-input"
    value: List[State]

    def __init__(
        self,
        key: str,
        template: Union[Template, TemplateFunction],
        *,
        min: Optional[int] = 0,
        max: Optional[int] = None,
        hint: Optional[str] = None,
        add_button_text: str = "+",
        full_width: bool = False,
        required: bool = True,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: Optional[List[State]] = None,
    ):
        self._key = key
        self._raw_template = template
        self.value = value or []
        self.min = min
        self.max = max
        self.hint = hint
        self.add_button_text = add_button_text
        self.full_width = full_width
        self.required = required
        self.disabled = disabled
        self.errors = self._init_errors(errors)

    def get_item_template(self, idx: int) -> Template:
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
            template = self.get_item_template(idx)
            renderer = TemplateRenderer(template)
            output = renderer.render(self.value[idx])
            if output["has_errors"]:
                return ["i18n_error_invalid_list_item"]
        return []

    @property
    def validators(self):
        return super().validators + [
            self._validate_list_min_max,
            self._validate_all_items,
        ]

    def render(self):
        rendered_items = []
        serialized_value = []
        for idx in range(len(self.value)):
            item_template = self.get_item_template(idx)
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
            "key": self._key,
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

    def parse_value(self, value: List[Optional[Dict]]) -> List[State]:
        parsed_values: List[State] = []
        if not value:
            return []
        for idx, item in enumerate(value):
            state = State()
            template = self.get_item_template(idx)
            renderer = TemplateRenderer(template)
            raw_value = item or {}
            parsed = renderer.parse_state(raw_value)
            state.update_values(parsed)
            parsed_values.append(state)
        return parsed_values
