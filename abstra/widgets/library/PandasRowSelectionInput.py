from ..widget_base import Input
from typing import List, Any, Union
import json


class PandasRowSelectionInput(Input):
    type = "pandas-row-selection-input"
    empty_value: Union[List, Any] = None
    multiple: bool = False

    def __init__(self, key: str, df: Any = None, **kwargs):
        super().__init__(key)
        self.set_props(dict(df=df, **kwargs))

    def set_props(self, props):
        self.df = props.get("df", "")
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.display_index = props.get("display_index", False)
        self.disabled = props.get("disabled", False)
        self.label = props.get("label", None)
        self.filterable = props.get("filterable", False)
        self.multiple = props.get("multiple", False)
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)

    def serialize_table(self):
        if self.df is None:
            import pandas as pd

            serialized = json.loads(
                pd.DataFrame(
                    {"change the": [1, 2, 3], "df property": [4, 5, 6]}
                ).to_json(orient="table")
            )
            del serialized["schema"]["pandas_version"]
            return serialized
        serialized = json.loads(self.df.to_json(orient="table"))
        del serialized["schema"]["pandas_version"]
        return serialized

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "table": self.serialize_table(),
            "required": self.required,
            "fullWidth": self.full_width,
            "displayIndex": self.display_index,
            "disabled": self.disabled,
            "label": self.label,
            "multiple": self.multiple,
            "filterable": self.filterable,
            "value": self.serialize_value(),
            "errors": self.errors,
        }

    def serialize_value(self) -> List:
        if isinstance(self.value, list):
            return self.value
        if self.value is None:
            return []
        return [self.value]
