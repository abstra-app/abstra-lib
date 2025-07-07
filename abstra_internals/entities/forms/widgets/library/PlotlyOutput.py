import json
from typing import TYPE_CHECKING, Any, Optional

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget

if TYPE_CHECKING:
    import plotly.graph_objects as go


class PlotlyOutput(OutputWidget):
    """Plotly figure output widget for displaying interactive charts."""

    fig: Optional["go.Figure"] = None

    type = "plotly-output"

    def __init__(
        self,
        fig: Any = None,
        *,
        label: str = "",
        key: str = "",
        full_width: bool = False,
    ):
        """Initialize a PlotlyOutput widget.

        Args:
            fig (Any): The Plotly figure to display.
            label (str): Text label displayed above the chart.
            key (str): Identifier for the widget.
            full_width (bool): Whether the chart should take up the full width of its container.
        """
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
        else:
            fig_json = self.fig.to_json()
            if not isinstance(fig_json, str):
                raise Exception(
                    f"fig.to_json() did not return a string: {type(fig_json)}"
                )
            return json.loads(fig_json)

    def _render(self):
        return {
            "type": self.type,
            "figure": self.serialize_figure(),
            "fullWidth": self.full_width,
            "label": self.label,
        }
