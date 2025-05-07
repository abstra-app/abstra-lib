import json
from typing import TYPE_CHECKING, List, Optional, cast

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget

if TYPE_CHECKING:
    import pandas as pd


class PandasOutput(OutputWidget):
    """Pandas DataFrame output widget for displaying tabular data.

    Attributes:
        df (pd.DataFrame): The pandas DataFrame to display.
    """

    type = "pandas-output"

    def __init__(
        self,
        df: "pd.DataFrame",
        *,
        label: Optional[str] = None,
        key: Optional[str] = None,
        actions: Optional[List[dict]] = None,
        full_width: bool = False,
        display_index: bool = True,
        filterable: bool = True,
        page_size: int = 10,
        pagination_always_visible: bool = True,
    ):
        """Initialize a PandasOutput widget.

        Args:
            df (pd.DataFrame): The pandas DataFrame to display.
            label (Optional[str]): Text label displayed above the table.
            key (Optional[str]): Identifier for the widget.
            actions (Optional[List[dict]]): List of action configurations.
            full_width (bool): Whether the table should take up the full width of its container.
            display_index (bool): Whether to display row indices.
            filterable (bool): Whether the table is filterable.
            page_size (int): Number of rows to display per page.
            pagination_always_visible (bool): Whether pagination controls are always visible.
        """
        self.label = label
        self.key = key
        self.df = df.reset_index(drop=True) if df is not None else None
        self.actions = actions
        self.full_width = full_width
        self.display_index = display_index
        self.filterable = filterable
        self.page_size = page_size
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
        serialized = json.loads(cast(str, self.df.to_json(orient="table")))
        del serialized["schema"]["pandas_version"]
        return serialized

    def _render(self):
        return {
            "type": self.type,
            "table": self.serialize_table(),
            "fullWidth": self.full_width,
            "displayIndex": self.display_index,
            "label": self.label,
            "actions": self.actions,
            "filterable": self.filterable,
            "pageSize": self.page_size,
            "paginationAlwaysVisible": self.pagination_always_visible,
        }
