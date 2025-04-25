"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

import plotly.graph_objects as go

from abstra.forms import PlotlyOutput, Widget, run

figure = go.Figure(
    data=[go.Bar(x=[1, 2, 3], y=[1, 3, 2])],
    layout=go.Layout(title=go.layout.Title(text="Bar chart example")),
)

# Create a page with the widget
example_page: List[Widget] = [
    PlotlyOutput(
        fig=figure,
        label="Bar chart example",
        key="my-plotly-output",
        full_width=True,
    )
]

# Run the form
result = run([example_page])

# Print the result
print(result)
