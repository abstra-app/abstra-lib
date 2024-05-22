import json
from typing import Any
from abstra_internals.widgets.widget_base import Output


class PlotlyOutput(Output):
    type = 'plotly-output'

    def __init__(self, fig: Any=None, **kwargs):
        self.set_props(dict(fig=fig, **kwargs))

    def set_props(self, props):
        self.fig = props.get('fig', None)
        self.full_width = props.get('full_width', False)
        self.label = props.get('label', '')

    def serialize_figure(self):
        if self.fig is None:
            import plotly.express as px
            df = px.data.tips()
            fig = px.density_heatmap(df, x='total_bill', y='tip')
            fig_json = fig.to_json()
            if not isinstance(fig_json, str):
                raise Exception('fig.to_json() did not return a string')
            return json.loads(fig_json)
        return json.loads(self.fig.to_json())

    def render(self, ctx: dict):
        return {'type': self.type, 'figure': self.serialize_figure(),
            'fullWidth': self.full_width, 'label': self.label}
