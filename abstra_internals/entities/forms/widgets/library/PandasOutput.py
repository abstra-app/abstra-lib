import json
from typing import TYPE_CHECKING, List, Optional, cast

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget

if TYPE_CHECKING:
    import pandas as pd


class PandasOutput(OutputWidget):
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
        self.label = label
        self.key = key
        self.df = df
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

    def render(self):
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
