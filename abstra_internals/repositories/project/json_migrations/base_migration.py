from typing import List


class Migration:
    warnings: List[str]
    _data: dict

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
        if not self._data:
            raise ValueError("Data is not set")
        return self._data

    @data.setter
    def data(self, value: dict) -> None:
        self._data = value

    def _migrate(self) -> None:
        raise NotImplementedError

    def _bump_version(self) -> None:
        self.data["version"] = self.target_version()

    def apply(self) -> None:
        self._migrate()
        self._bump_version()
