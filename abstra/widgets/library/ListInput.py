from ..widget_base import Input
from typing import Any, List


class ListInput(Input):
    type = "list-input"
    instances: List[Any] = []

    def __init__(self, key: str, item_schema: Any, **kwargs):
        super().__init__(key)
        self.item_schema = item_schema
        self.initial_value = kwargs.get("initial_value", [{}])
        self.min = kwargs.get("min", None)
        self.max = kwargs.get("max", None)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.add_button_text = kwargs.get("add_button_text", "+")
        self.full_width = kwargs.get("full_width", False)
        self.required = kwargs.get("required", True)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        json = {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "itemSchema": self.item_schema.json(
                payload=self.item_schema.convert_answer({})
            ),
            "initialValue": self.initial_value,
            "columns": self.columns,
            "min": self.min,
            "max": self.max,
            "addButtonText": self.add_button_text,
            "fullWidth": self.full_width,
            "required": self.required,
            "disabled": self.disabled,
        }
        overloaded_schemas = self.__get_overloaded_schemas(
            kwargs.get("payload").get(self.key) if kwargs.get("payload") else None
        )
        if overloaded_schemas:
            json["overloadedItemSchemas"] = overloaded_schemas
        return json

    def convert_answer(self, answers) -> List:
        """
        Returns:
            list: The values entered by the user
        """
        return [
            (
                self.instances[index].convert_answer(answer)
                if index < len(self.instances)
                else self.item_schema.convert_answer(answer)
            )
            for index, answer in enumerate(answers or [])
        ]

    def __get_overloaded_schemas(self, payload):
        if payload:
            self.instances = [self.item_schema.copy() for _ in payload]
            return [
                self.instances[index].json(payload=payload_item)
                for index, payload_item in enumerate(payload)
            ]
        else:
            return None
