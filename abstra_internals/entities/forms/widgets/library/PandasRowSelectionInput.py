import json
from typing import TYPE_CHECKING, Any, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    MultipleHandler,
)

if TYPE_CHECKING:
    import pandas as pd


class PandasRowSelectionInput(InputWidget):
    type = "pandas-row-selection-input"
    value: Union[List[Any], Any] = None

    def __init__(
        self,
        df: "pd.DataFrame",
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = True,
        display_index: bool = False,
        disabled: bool = False,
        label: str = "",
        filterable: bool = False,
        multiple: bool = False,
        initial_value: Optional[Union[List, Any]] = None,
        min: Optional[int] = None,
        max: Optional[int] = None,
        page_size: int = 10,
        errors: Optional[Union[List[str], str]] = None,
        value: Optional[Union[List[Any], Any]] = None,
        pagination_always_visible: bool = True,
    ):
        self.df = df
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.display_index = display_index
        self.disabled = disabled
        self.label = label
        self.filterable = filterable
        self.multiple = multiple
        self.empty_value = [] if self.multiple else None
        self.value = initial_value or self.empty_value
        self.min = min
        self.max = max
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.page_size = page_size
        self.errors = self._init_errors(errors)
        self.value = value
        self.pagination_always_visible = pagination_always_visible

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

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) -> List:
        return self.multiple_handler.value_to_list(self.value)

    def parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
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
