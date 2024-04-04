from abc import ABC
from typing import TYPE_CHECKING, Any, TypedDict, Union


class LabelValueOption(TypedDict):
    label: str
    value: Any


AbstraOption = Union[str, LabelValueOption]

if TYPE_CHECKING:
    from pandas import DataFrame
    from PIL.Image import Image
    from plotly.graph_objects import Figure

    class PILImage(Image):
        pass

    class PandasDataFrame(DataFrame):
        pass

    PlotlyFigure = Figure
else:
    PandasDataFrame = ABC
    PILImage = ABC
    PlotlyFigure = ABC
