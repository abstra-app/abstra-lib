from ..widget_base import NumberishInput


class NumberSliderInput(NumberishInput):
    type = "number-slider-input"
    empty_value = 0

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.value = props.get("initial_value", self.empty_value)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.min = props.get("min")
        self.max = props.get("max")
        self.step = props.get("step")
        self.disabled = props.get("disabled", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> float:
        return self.value or 0
