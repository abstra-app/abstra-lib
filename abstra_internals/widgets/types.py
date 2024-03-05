from abc import ABC

from typing import TYPE_CHECKING, Any, Union, TypedDict


class LabelValueOption(TypedDict):
    label: str
    value: Any


AbstraOption = Union[str, LabelValueOption]

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
