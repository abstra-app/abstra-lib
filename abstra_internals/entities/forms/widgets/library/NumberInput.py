from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NumberInput(InputWidget):
    type = "number-input"
    value: Union[float, None]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        initial_value: Optional[float] = None,
        min: Optional[float] = None,
        max: Optional[float] = None,
        errors: Optional[Union[List[str], str]] = None,
        value: Optional[float] = None,
    ):
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = initial_value
        self.min = min
        self.max = max
        self.errors = self._init_errors(errors)
        self.number_value_handler = NumberValueHandler(
            min=self.min, max=self.max, required=self.required
        )
        self.value = value

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        return self.number_value_handler.validate(self.value)
