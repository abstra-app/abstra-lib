from ..widget_base import Input


class ClickInput(Input):
    type = "click-input"
    value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))
        self.value = None

    def set_props(self, props):
        self.label = props["label"]
        self.hint = props.get("hint", None)
        self.disabled = props.get("disabled", False)
        self.full_width = props.get("full_width", False)
        self.required = props.get("required", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "disabled": self.disabled,
            "fullWidth": self.full_width,
            "errors": self.errors,
        }

    def serialize_value(self) -> None:
        return None

    def parse_value(self, value: None) -> None:
        return None
