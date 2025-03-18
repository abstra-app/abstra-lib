import importlib
import sys
import threading
import time
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from watchdog.events import FileModifiedEvent, FileSystemEvent, FileSystemEventHandler
from watchdog.observers import Observer

from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.settings import Settings

IGNORED_FILES = [".abstra/resources.dat", ".abstra/", "abstra.json", "__pycache__"]
DEBOUNCE_DELAY = 0.5


class FileChangeEventHandler(FileSystemEventHandler):
    def __init__(self):
        super().__init__()
        self._debounce_timer: Optional[threading.Timer] = None
        self.dot_env_path = Settings.root_path / ".env"

    def on_modified(self, event: FileSystemEvent):
        filepath = Path(event.src_path)

        if self.should_ignore_event(event) or self.should_ignore_path(filepath):
            return

        if filepath.resolve() == self.dot_env_path.resolve():
            AbstraLogger.info("Reloading .env and all modules")
            load_dotenv(self.dot_env_path, override=True)
            for dep in ProjectRepository.load().get_local_dependencies():
                self.reload_module(dep)
            return

        resolved_deps = [
            dep.resolve() for dep in ProjectRepository.load().get_local_dependencies()
        ]

        if filepath.resolve() in resolved_deps:
            AbstraLogger.info(f"Reloading modified module: {filepath}")
            self.reload_module(filepath)
            return

    def reload_module(self, file: Path):
        module_name = file.stem
        module = sys.modules.get(module_name)

        try:
            if module is None:
                importlib.import_module(module_name)
            else:
                if module.__spec__ is not None and module.__spec__.cached is not None:
                    Path(module.__spec__.cached).unlink(missing_ok=True)
                importlib.reload(module)
        except Exception as e:
            AbstraLogger.error(
                f"Could not reload module from {file} with the following error: {e}"
            )

    def should_ignore_path(self, path: Path) -> bool:
        return any(ignored_file in str(path) for ignored_file in IGNORED_FILES)

    def should_ignore_event(self, event: FileSystemEvent) -> bool:
        return not isinstance(event, (FileModifiedEvent))


def run_watcher():
    event_handler = FileChangeEventHandler()

    observer = Observer()
    observer.schedule(event_handler, path=str(Settings.root_path), recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
