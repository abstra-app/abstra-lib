from typing import List
from dataclasses import dataclass


class Migration:
    warnings: List[str]

    @staticmethod
    def target_version() -> str:
        raise NotImplementedError

    @staticmethod
    def source_version() -> str:
        raise NotImplementedError

    def __init__(self, data: dict) -> None:
        self.data = data
        self.warnings = []

    @property
    def data(self) -> dict:
        raise NotImplementedError

    @data.setter
    def data(self, data: dict):
        self.data = data

    def _migrate(self) -> None:
        raise NotImplementedError

    def _bump_version(self) -> None:
        self.data["version"] = self.target_version

    def apply(self) -> None:
        self._migrate()
        self._bump_version()
