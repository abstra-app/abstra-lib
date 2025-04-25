from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import Input


class TextInput(Input):
    type = "text-input"
    empty_value = ""

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "")
        self.required = props.get("required", True)
        self.value = props.get("initial_value", self.empty_value)
        self.placeholder = props.get("placeholder", "")
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.mask = props.get("mask", None)
        self.max_length = props.get("max_length", None)
        self.min_length = props.get("min_length", None)
        self.disabled = props.get("disabled", False)
        super().set_props(props)

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
            "mask": self.mask,
            "maxLength": self.max_length,
            "minLength": self.min_length,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> str:
        return self.value or ""

    def validate(self):
        validation_errors = super().validate()
        if self.max_length and len(self.value) > self.max_length:
            validation_errors.append(
                f"Value is too long. Max length is {self.max_length}"
            )
        if self.min_length and len(self.value) < self.min_length:
            validation_errors.append(
                f"Value is too short. Min length is {self.min_length}"
            )
        return validation_errors
