from abc import abstractmethod, ABC

from typing import TYPE_CHECKING

PILImage = ABC
PandasDataFrame = ABC
PlotlyFigure = ABC

if TYPE_CHECKING:
    from plotly.graph_objects import Figure
    from PIL.Image import Image
    from pandas import DataFrame

    PILImage = Image
    PandasDataFrame = DataFrame
    PlotlyFigure = Figure
