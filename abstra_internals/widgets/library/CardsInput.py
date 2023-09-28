from ..widget_base import OptionalListInput
from ..file_utils import convert_file
from typing import Union, List, Any


class CardsInput(OptionalListInput):
    type = "cards-input"
    empty_value = None
    multiple: bool = False

    def __init__(self, key: str, label: str, options: Any, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, options=options, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.options = [
            {**opt, "image": convert_file(opt.get("image"))}
            for opt in props.get("options", [])
        ]
        self.searchable = props.get("searchable", False)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.columns = props.get("columns", 2)
        self.full_width = props.get("full_width", False)
        self.layout = props.get("layout", "list")
        self.disabled = props.get("disabled", False)
        self.multiple = props.get("multiple", False)
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "options": self.options,
            "multiple": self.multiple,
            "searchable": self.searchable,
            "value": self.serialize_value(),
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "layout": self.layout,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> Union[List, Any]:
        if isinstance(self.value, list):
            return self.value
        if self.value is None:
            return []
        return [self.value]
