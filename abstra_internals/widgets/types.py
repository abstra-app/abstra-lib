from abc import abstractmethod, ABC


# Represents an Image from PIL package
# from PIL.Image import Image
class PILImage(ABC):
    @abstractmethod
    def save(self, path: str):
        pass


# Represents a DataFrame from pandas package
# from pandas import DataFrame
class PandasDataFrame(ABC):
    @abstractmethod
    def to_json(self, **kwargs):
        pass


# Represents a Figure from plotly package
# from plotly.graph_objects import Figure
class PlotlyFigure(ABC):
    @abstractmethod
    def to_json(self, **kwargs):
        pass
