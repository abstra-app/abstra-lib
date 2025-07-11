import json
from pathlib import Path
from typing import Generic, List, Optional, Type, TypeVar

from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.services.fs import FileSystemService
from abstra_internals.settings import Settings
from abstra_internals.utils.serializable import Serializable

T = TypeVar("T", bound=Serializable)


class FileSystemStorage(Generic[T]):
    def __init__(self, mp_context: MPContext, directory: str, model: Type[T]):
        self.lock = mp_context.RLock()
        self.directory = directory
        self.model = model

    @property
    def directory_path(self) -> Path:
        return Settings.root_path / self.directory

    def save(self, id: str, data: T) -> None:
        with self.lock:
            file_path = self._get_file_path(id)

            with file_path.open("w", encoding="utf-8") as f:
                f.write(data.dump_json())

    def load_all(self) -> List[T]:
        with self.lock:
            data = [
                self._load(file_path.stem)
                for file_path in FileSystemService.list_files(
                    self.directory_path,
                    allowed_suffixes=[".json"],
                )
            ]

            return [d for d in data if d is not None]

    def load(self, id: str) -> Optional[T]:
        with self.lock:
            return self._load(id)

    def delete(self, id: str) -> None:
        with self.lock:
            file_path = self._get_file_path(id)
            if file_path.exists():
                file_path.unlink()

    def clear(self) -> None:
        with self.lock:
            for file_path in FileSystemService.list_files(
                self.directory_path,
                allowed_suffixes=[".json"],
            ):
                file_path.unlink()

    def _get_file_path(self, id: str) -> Path:
        self.directory_path.mkdir(parents=True, exist_ok=True)
        return self.directory_path / f"{id}.json"

    def _load(self, id: str) -> Optional[T]:
        file_path = self._get_file_path(id)
        if file_path.exists():
            with file_path.open("r", encoding="utf-8") as f:
                try:
                    dto = json.load(f)
                    return self.model(**dto)
                except Exception as e:
                    AbstraLogger.capture_exception(e)
                    self.delete(id)

        return None
