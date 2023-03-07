from ..widget_base import Input
from typing import Union, List, Dict


class DropdownInput(Input):
    type = "dropdown-input"

    def __init__(
        self, key: str, label: str, options: Union[List[str], List[Dict]], **kwargs
    ):
        super().__init__(key)
        self.label = label
        self.options = options
        self.initial_value = kwargs.get("initial_value", None)
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.multiple = kwargs.get("multiple", False)
        self.placeholder = kwargs.get("placeholder", "Select your preference")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options,
            "hint": self.hint,
            "multiple": self.multiple,
            "placeholder": self.placeholder,
            "initialValue": self.initial_value,
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: str) -> str:
        """
        Returns:
            str: The value selected by the user
        """
        return answer
