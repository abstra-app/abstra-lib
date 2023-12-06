from ..widget_base import Input
from typing import Any, List


class ListInput(Input):
    type = "list-input"
    schemas: List[Any]
    item_schema: Any
    empty_value = []

    def __init__(self, key: str, item_schema: Any, **kwargs):
        super().__init__(key)
        self.item_schema = item_schema
        self.schemas = []
        self.value = self.empty_value
        self.set_props(dict(item_schema=item_schema, **kwargs))

    def serialize_value(self) -> list:
        return [schema.serialize_value() for schema in self.schemas]

    def set_props(self, props):
        self.min = props.get("min", 0)
        self.max = props.get("max", None)
        self.hint = props.get("hint", None)
        self.add_button_text = props.get("add_button_text", "+")
        self.full_width = props.get("full_width", False)
        self.required = props.get("required", True)
        self.disabled = props.get("disabled", False)
        self.schemas = [self.item_schema.copy() for _ in range(self.min)]
        if props.get("initial_value", None):
            self.set_value(props.get("initial_value", None), set_errors=False)

    def _validate_list_min_max(self) -> List[str]:
        if self.min is not None and len(self.value) < self.min:
            return ["i18n_error_min_list"]
        if self.max is not None and len(self.value) > self.max:
            return ["i18n_error_max_list"]
        return []

    @property
    def validators(self):
        return super().validators + [self._validate_list_min_max]

    def render(self, ctx: dict):
        schemas = [schema.render(ctx) for schema in self.schemas]
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
            "addButtonText": self.add_button_text,
            "fullWidth": self.full_width,
            "required": self.required,
            "disabled": self.disabled,
            "schemas": schemas,
            "value": self.serialize_value(),
        }

    def set_value(self, value: List, set_errors=False):
        if not value:
            value = []
        self.value = value
        for idx, value_item in enumerate(value):
            if idx >= len(self.schemas):
                schema = self.item_schema.copy()
                self.schemas.append(schema)
            else:
                schema = self.schemas[idx]
            schema.set_values(value_item)
        self.schemas = self.schemas[: len(value)]

    def parse_value(self, value) -> List:
        parsed_values = []
        for index, value in enumerate(value or self.empty_value):
            if index >= len(self.schemas):
                schema = self.item_schema.copy()
                value = schema.parse_value(value or {})
            else:
                schema = self.schemas[index]
                value = schema.parse_value(value or {})
            parsed_values.append(value)
        return parsed_values
