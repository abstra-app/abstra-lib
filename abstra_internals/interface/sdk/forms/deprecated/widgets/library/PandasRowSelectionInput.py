import json
from typing import TYPE_CHECKING, Any, List, Union

from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import (
    Input,
    MultipleHandler,
)

if TYPE_CHECKING:
    import pandas as pd
DEFAULT_PAGE_SIZE = 10


class PandasRowSelectionInput(Input):
    type = "pandas-row-selection-input"
    empty_value: Union[List, Any] = None
    multiple: bool = False
    df: "pd.DataFrame"

    def __init__(self, key: str, df: Any = None, **kwargs):
        super().__init__(key)
        self.set_props(dict(df=df, **kwargs))

    def set_props(self, props):
        self.df = props.get("df", "")
        try:
            self.df = self.df.reset_index(drop=True)
        except Exception:
            pass
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", True)
        self.display_index = props.get("display_index", False)
        self.disabled = props.get("disabled", False)
        self.label = props.get("label", "")
        self.filterable = props.get("filterable", False)
        self.multiple = props.get("multiple", False)
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)
        self.min = props.get("min", None)
        self.max = props.get("max", None)
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.pagination_always_visible = props.get("pagination_always_visible", True)
        self.page_size = props.get("page_size", DEFAULT_PAGE_SIZE)
        super().set_props(props)

    def serialize_table(self):
        if self.df is None:
            import pandas as pd

            df = pd.DataFrame({"change the": [1, 2, 3], "df property": [4, 5, 6]})
            df_json = df.to_json(orient="table")
            if not isinstance(df_json, str):
                raise Exception("df.to_json() did not return a string")
            serialized = json.loads(df_json)
            del serialized["schema"]["pandas_version"]
            return serialized
        df_json = str(self.df.to_json(orient="table"))
        serialized = json.loads(df_json)
        del serialized["schema"]["pandas_version"]
        return serialized

    def validate(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) -> List:
        return self.multiple_handler.value_to_list(self.value)

    def parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)

    def render(self, ctx: dict):
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
            "min": self.min,
            "max": self.max,
            "pageSize": self.page_size,
            "paginationAlwaysVisible": self.pagination_always_visible,
        }
