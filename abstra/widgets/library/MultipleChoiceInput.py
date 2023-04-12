from ..widget_base import Input
from typing import List, Dict, Union, Any


class MultipleChoiceInput(Input):
    type = "multiple-choice-input"

    def __init__(
        self, key: str, label: str, options: Union[List[str], List[Dict]], **kwargs
    ):
        super().__init__(key)
        self.label = label
        self.options = options
        self.multiple = kwargs.get("multiple", False)
        self.initial_value = kwargs.get("initial_value", None)
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.min = kwargs.get("min", None)
        self.max = kwargs.get("max", None)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options,
            "hint": self.hint,
            "multiple": self.multiple,
            "initialValue": self.initial_value,
            "required": self.required and not self.multiple,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: Union[List, Any]) -> Union[List, Any]:
        """
        Returns:
            list or any: The values/value selected by the user
        """
        return answer
