from abc import ABC

from typing import TYPE_CHECKING


if TYPE_CHECKING:
    from plotly.graph_objects import Figure
    from PIL.Image import Image
    from pandas import DataFrame

    class PILImage(Image):
        pass

    class PandasDataFrame(DataFrame):
        pass

    PlotlyFigure = Figure
else:
    PandasDataFrame = ABC
    PILImage = ABC
    PlotlyFigure = ABC
