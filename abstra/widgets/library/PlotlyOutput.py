from ..widget_base import Output
from typing import Any
import json


class PlotlyOutput(Output):
    type = "plotly-output"

    def __init__(self, fig: Any, **kwargs):
        self.fig = fig
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.label = kwargs.get("label", None)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "figure": json.loads(self.fig.to_json()),
            "columns": self.columns,
            "fullWidth": self.full_width,
            "label": self.label,
        }
