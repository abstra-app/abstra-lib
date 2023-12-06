from ..widget_base import Input
from typing import List, Optional


class CurrencyInput(Input):
    type = "currency-input"
    value: Optional[float]
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.value = props.get("initial_value", self.empty_value)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.placeholder = props.get("placeholder", "")
        self.full_width = props.get("full_width", False)
        self.min = props.get("min")
        self.max = props.get("max")
        self.currency = props.get("currency", "USD")
        self.disabled = props.get("disabled", False)

    def _validate_number_min_max(self) -> List[str]:
        if type(self.value) != int and type(self.value) != float:
            return []
        if hasattr(self, "min") and self.min is not None and self.value < self.min:
            return ["i18n_error_min_amount"]
        if hasattr(self, "max") and self.max is not None and self.value > self.max:
            return ["i18n_error_max_amount"]
        return []

    @property
    def validators(self):
        return super().validators + [self._validate_number_min_max]

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
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

    def serialize_value(self) -> Optional[float]:
        return self.value if self.value != None else self.empty_value
