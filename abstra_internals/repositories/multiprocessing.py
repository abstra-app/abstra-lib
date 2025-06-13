import abc
from multiprocessing import get_context
from typing import TYPE_CHECKING, Union

if TYPE_CHECKING:
    from multiprocessing.context import ForkServerContext, SpawnContext

MPContext = Union["ForkServerContext", "SpawnContext"]


class MPContextReposity(abc.ABC):
    def get_context(self) -> MPContext:
        raise NotImplementedError()


class SpawnContextReposity(MPContextReposity):
    def get_context(self) -> "SpawnContext":
        return get_context("spawn")
