from ..widget_base import Input
from ..file_utils import convert_file
from typing import Union, List, Any


class CardsInput(Input):
    type = "cards-input"

    def __init__(self, key: str, label: str, options: Any, **kwargs):
        super().__init__(key)
        self.label = label
        self.options = options
        self.multiple = kwargs.get("multiple", False)
        self.searchable = kwargs.get("searchable", False)
        self.initial_value = kwargs.get("initial_value", None)
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 2)
        self.full_width = kwargs.get("full_width", False)
        self.layout = kwargs.get("layout", "list")
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "options": [
                {**opt, "image": convert_file(opt.get("image"))} for opt in self.options
            ],
            "multiple": self.multiple,
            "searchable": self.searchable,
            "initialValue": self.initial_value,
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "layout": self.layout,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: Union[List, Any]) -> Union[List, Any]:
        """
        Returns:
            list, any: The options/option selected by the user
        """
        return answer
