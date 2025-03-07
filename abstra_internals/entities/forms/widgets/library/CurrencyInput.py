from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CurrencyInput(InputWidget):
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
        value: Optional[float] = None,
        min: Optional[float] = None,
        max: Optional[float] = None,
        currency: str = "USD",
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.placeholder = placeholder
        self.full_width = full_width
        self.disabled = disabled
        self.value = value
        self.min = min
        self.max = max
        self.currency = currency
        self.errors = self._init_errors(errors)

    def _validate_number_min_max(self) -> List[str]:
        if type(self.value) is not int and type(self.value) is not float:
            return []
        if hasattr(self, "min") and self.min is not None and self.value < self.min:
            return ["i18n_error_min_amount"]
        if hasattr(self, "max") and self.max is not None and self.value > self.max:
            return ["i18n_error_max_amount"]
        return []

    @property
    def validators(self):
        return super().validators + [self._validate_number_min_max]

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
            "currency": self.currency,
            "disabled": self.disabled,
            "errors": self.errors,
        }
