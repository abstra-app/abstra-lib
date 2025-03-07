from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NpsInput(InputWidget):
    type = "nps-input"
    value: int

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        min: int = 0,
        max: int = 10,
        min_hint: str = "Not at all likely",
        max_hint: str = "Extremely likely",
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: int = 0,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.min = min
        self.max = max
        self.min_hint = min_hint
        self.max_hint = max_hint
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.number_value_handler = NumberValueHandler(min=self.min, max=self.max)
        self.errors = self._init_errors(errors)
        self.value = value

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "min": self.min,
            "max": self.max,
            "minHint": self.min_hint,
            "maxHint": self.max_hint,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        return self.number_value_handler.validate(self.value)
