from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NumberSliderInput(InputWidget):
    type = "number-slider-input"
    value: float

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        min: Optional[float] = None,
        max: Optional[float] = None,
        step: Optional[float] = None,
        errors: Optional[Union[List[str], str]] = None,
        value: float = 0,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.min = min
        self.max = max
        self.step = step
        self.errors = self._init_errors(errors)
        self.value = value
        self.number_value_handler = NumberValueHandler(
            min=self.min, max=self.max, required=self.required
        )

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        return self.number_value_handler.validate(self.value)
