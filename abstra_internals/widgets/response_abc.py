from abc import ABC, abstractmethod
from io import BufferedReader
from pathlib import Path


class AbstractFileResponse(ABC):
    masked: str
    raw: str
    country_code: str
    national_number: str

    @property
    @abstractmethod
    def name(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def content(self) -> bytes:
        raise NotImplementedError

    @property
    @abstractmethod
    def file(self) -> BufferedReader:
        raise NotImplementedError

    @property
    @abstractmethod
    def path(self) -> Path:
        raise NotImplementedError
