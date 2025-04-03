from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CurrencyInput(InputWidget):
    """Currency input widget for entering monetary values.

    Attributes:
        value (Optional[float]): The currency value entered by the user.
    """

    type = "currency-input"
    value: Optional[float]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        placeholder: Optional[str] = "",
        full_width: bool = False,
        disabled: bool = False,
        min: Optional[float] = None,
        max: Optional[float] = None,
        currency: str = "USD",
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a CurrencyInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            placeholder (Optional[str]): Placeholder text displayed when the input is empty.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            min (Optional[float]): Minimum allowed value.
            max (Optional[float]): Maximum allowed value.
            currency (str): Currency code to use for formatting (e.g., "USD", "EUR").
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.hint = hint
        self.placeholder = placeholder
        self.full_width = full_width
        self.disabled = disabled
        self.value = None
        self.min = min
        self.max = max
        self.currency = currency
        self.errors = errors

    def _validate_number_min_max(self) -> List[str]:
        if type(self.value) is not int and type(self.value) is not float:
            return []
        if hasattr(self, "min") and self.min is not None and self.value < self.min:
            return ["i18n_error_min_amount"]
        if hasattr(self, "max") and self.max is not None and self.value > self.max:
            return ["i18n_error_max_amount"]
        return []

    @property
    def _validators(self):
        return super()._validators + [self._validate_number_min_max]

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
            "currency": self.currency,
            "disabled": self.disabled,
            "errors": self.errors,
        }
