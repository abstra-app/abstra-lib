from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NumberInput(InputWidget):
    """Number input widget for capturing numeric values.

    Attributes:
        value (Union[float, None]): The numeric value entered by the user.
    """

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
        min: Optional[float] = None,
        max: Optional[float] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a NumberInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (Optional[str]): Placeholder text displayed when the input is empty.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            min (Optional[float]): Minimum allowed value.
            max (Optional[float]): Maximum allowed value.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.min = min
        self.max = max
        self.value = None
        self.errors = errors
        self.number_value_handler = NumberValueHandler(
            min=self.min, max=self.max, required=self.required
        )

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
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

    @property
    def _validators(self):
        return [
            self._run_validators,
        ]

    def _run_validators(self) -> List[str]:
        return self.number_value_handler.validate(self.value)
