import json
from typing import TYPE_CHECKING, Dict, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    MultipleHandler,
)

if TYPE_CHECKING:
    import pandas as pd


class PandasRowSelectionInput(InputWidget):
    """Pandas DataFrame row selection input widget for selecting rows from tabular data.

    Attributes:
        value (Union[List[Dict], Dict, None]): The selected row(s) from the DataFrame. If `multiple` is True, this can be a list of rows as dicts; otherwise, it is a single dict or None.
    """

    type = "pandas-row-selection-input"
    value: Union[List[Dict], Dict, None]

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
        min: Optional[int] = None,
        max: Optional[int] = None,
        page_size: int = 10,
        errors: Optional[Union[List[str], str]] = None,
        pagination_always_visible: bool = True,
    ):
        """Initialize a PandasRowSelectionInput widget.

        Args:
            df (pd.DataFrame): The pandas DataFrame to display.
            key (Optional[str]): Identifier for the widget.
            required (bool): Whether row selection is required before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the table should take up the full width of its container.
            display_index (bool): Whether to display row indices.
            disabled (bool): Whether the input is non-interactive.
            label (str): Text label displayed above the table.
            filterable (bool): Whether the table is filterable.
            multiple (bool): Whether multiple rows can be selected.
            min (Optional[int]): Minimum number of rows that must be selected when multiple=True.
            max (Optional[int]): Maximum number of rows that can be selected when multiple=True.
            page_size (int): Number of rows to display per page.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            pagination_always_visible (bool): Whether pagination controls are always visible.
        """
        self.df = df.reset_index(drop=True) if df is not None else None
        self.key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.display_index = display_index
        self.disabled = disabled
        self.label = label
        self.filterable = filterable
        self.multiple = multiple
        self.value = [] if self.multiple else None
        self.min = min
        self.max = max
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.page_size = page_size
        self.errors = errors
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

    def _serialize_value(self) -> List:
        return self.multiple_handler.value_to_list(self.value)

    def _parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)

    def _render(self):
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
            "value": self._serialize_value(),
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
            "pageSize": self.page_size,
            "paginationAlwaysVisible": self.pagination_always_visible,
        }
