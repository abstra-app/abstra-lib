import abc
from multiprocessing import get_context
from multiprocessing.context import ForkServerContext, SpawnContext
from typing import Union

MPContext = Union[ForkServerContext, SpawnContext]


class MPContextReposity(abc.ABC):
    def get_context(self) -> MPContext:
        raise NotImplementedError()


class ForkserverContextRepository(MPContextReposity):
    def get_context(self) -> ForkServerContext:
        return get_context("forkserver")


class SpawnContextReposity(MPContextReposity):
    def get_context(self) -> SpawnContext:
        return get_context("spawn")
