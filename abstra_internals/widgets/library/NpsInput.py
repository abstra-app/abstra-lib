from ..widget_base import NumberishInput


class NpsInput(NumberishInput):
    type = "nps-input"
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.value = props.get("initial_value", None)
        self.required = props.get("required", True)
        self.min = props.get("min", 0)
        self.max = props.get("max", 10)
        self.min_hint = props.get("min_hint", "Not at all likely")
        self.max_hint = props.get("max_hint", "Extremely likely")
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.disabled = props.get("disabled", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "min": self.min,
            "max": self.max,
            "minHint": self.min_hint,
            "maxHint": self.max_hint,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> int:
        return self.value
