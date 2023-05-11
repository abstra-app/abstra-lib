from ..widget_base import Output
from typing import Any
import json


class PandasOutput(Output):
    type = "pandas-output"

    def __init__(self, df: Any, **kwargs):
        self.df = df
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.display_index = kwargs.get("display_index", False)
        self.label = kwargs.get("label", None)
        self.actions = kwargs.get("actions", [])
        self.filterable = kwargs.get("filterable", False)
        self.editable = kwargs.get("editable", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "table": json.loads(self.df.to_json(orient="table")),
            "columns": self.columns,
            "fullWidth": self.full_width,
            "displayIndex": self.display_index,
            "label": self.label,
            "actions": self.actions,
            "filterable": self.filterable,
            "editable": self.editable,
        }
