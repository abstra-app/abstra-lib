import json
from pathlib import Path
from typing import Generic, List, Optional, Protocol, Type, TypeVar

from abstra_internals.settings import Settings


class Serializable(Protocol):
    def to_dto(self) -> dict: ...

    @staticmethod
    def from_dto(dto: dict) -> "Serializable": ...


T = TypeVar("T", bound=Serializable)


class FileManager(Generic[T]):
    def __init__(self, directory: str, model: Type[T]):
        self.directory = directory
        self.model = model

    @property
    def directory_path(self) -> Path:
        return Settings.root_path / self.directory

    def _get_file_path(self, id: str) -> Path:
        self.directory_path.mkdir(parents=True, exist_ok=True)
        return self.directory_path / f"{id}.json"

    def save(self, id: str, data: T) -> None:
        file_path = self._get_file_path(id)

        with file_path.open("w", encoding="utf-8") as f:
            json.dump(data.to_dto(), f, indent=4)

    def load_all(self) -> List[T]:
        data = [
            self.load(file_path.stem)
            for file_path in self.directory_path.glob("*.json")
        ]

        return [d for d in data if d is not None]

    def load(self, id: str) -> Optional[T]:
        file_path = self._get_file_path(id)
        if file_path.exists():
            with file_path.open("r", encoding="utf-8") as f:
                try:
                    dto = json.load(f)
                    return self.model.from_dto(dto)
                except Exception:
                    self.delete(id)

        return None

    def delete(self, id: str) -> None:
        file_path = self._get_file_path(id)
        if file_path.exists():
            file_path.unlink()

    def clear(self) -> None:
        for file_path in self.directory_path.glob("*.json"):
            file_path.unlink()
