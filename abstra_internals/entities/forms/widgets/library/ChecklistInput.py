from typing import List, Optional

from abstra_internals.entities.forms.widgets.widget_base import (
    AbstraOption,
    InputWidget,
    OptionsHandler,
)


class ChecklistInput(InputWidget):
    type = "checklist-input"
    value: List[object]

    def __init__(
        self,
        label: str,
        options: List[AbstraOption],
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        value: Optional[List[object]] = None,
        min: int = 0,
        max: Optional[int] = None,
        errors: Optional[List[str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.options = options
        self.value = value or []
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.min: int = min
        self.max = max or len(self.options)
        self.options_handler = OptionsHandler(self.options)
        self.errors = self._init_errors(errors)

    def is_value_unset(self):
        return False

    def _validate_required(self) -> List[str]:
        if not self.required and len(self.value) == 0:
            return []
        errors = []
        if len(self.value) < self.min:
            if len(self.options) == 1:
                errors.append("i18n_error_required_field")
            else:
                errors.append("i18n_error_min_list")
        if len(self.value) > self.max:
            errors.append("i18n_error_max_list")
        return errors

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "options": self.options_handler.serialized_options(),
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
        }

    def serialize_value(self) -> List:
        return self.options_handler.ids_from_values(self.value)

    def parse_value(self, value):
        return self.options_handler.values_from_ids(value)
