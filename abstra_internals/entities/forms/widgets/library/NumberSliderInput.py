from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NumberSliderInput(InputWidget):
    """Number slider input widget for selecting numeric values with a sliding control.

    Attributes:
        value (float): The numeric value selected by the user.
    """

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
        errors: Optional[Union[List[str], str]] = None,
        min: float = 0,
        max: float = 100,
        step: float = 1,
    ):
        """Initialize a NumberSliderInput widget.

        Args:
            label (str): Text label displayed above the slider.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether the slider must be adjusted before proceeding.
            hint (Optional[str]): Help text displayed below the slider.
            full_width (bool): Whether the slider should take up the full width of its container.
            disabled (bool): Whether the slider is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            min (float): Minimum value for the slider.
            max (float): Maximum value for the slider.
            step (float): Step increment for the slider.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = min
        self.errors = errors
        self.min = min
        self.max = max
        self.step = step
        self.number_value_handler = NumberValueHandler(
            min=self.min, max=self.max, required=self.required
        )

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
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
