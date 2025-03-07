import json
from typing import Any

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class PlotlyOutput(OutputWidget):
    type = "plotly-output"

    def __init__(
        self,
        fig: Any = None,
        *,
        label: str = "",
        key: str = "",
        full_width: bool = False,
    ):
        self.fig = fig
        self.label = label
        self.key = key
        self.full_width = full_width

    def serialize_figure(self):
        if self.fig is None:
            import plotly.express as px

            df = px.data.tips()
            fig = px.density_heatmap(df, x="total_bill", y="tip")
            fig_json = fig.to_json()
            if not isinstance(fig_json, str):
                raise Exception("fig.to_json() did not return a string")
            return json.loads(fig_json)
        return json.loads(self.fig.to_json())

    def render(self):
        return {
            "type": self.type,
            "figure": self.serialize_figure(),
            "fullWidth": self.full_width,
            "label": self.label,
        }
