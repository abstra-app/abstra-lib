import threading
import time
from pathlib import Path
from typing import Callable, List, Literal

from watchdog.events import (
    FileCreatedEvent,
    FileDeletedEvent,
    FileModifiedEvent,
    FileMovedEvent,
    FileSystemEvent,
    FileSystemEventHandler,
)
from watchdog.observers import Observer

from abstra_internals.settings import Settings

IGNORED_PATHS = [
    ".abstra/",
    ".venv",
    "__pycache__",
]
FSEventType = Literal["changed", "created", "deleted", "moved"]
Handler = Callable[[Path, FSEventType], None]


class FileWatcher(FileSystemEventHandler):
    def __init__(self, handlers: List[Handler]):
        super().__init__()
        self._debounce_timers: dict[str, threading.Timer] = {}
        self.handlers: List[Handler] = handlers

    def start(self):
        observer = Observer()
        observer.schedule(self, path=str(Settings.root_path), recursive=True)
        observer.start()
        self._observer = observer

    def dispatch(self, event: FileSystemEvent):
        filepath = Path(event.src_path)
        filepath_str = str(filepath)

        if self.should_ignore_path(filepath):
            return

        if isinstance(event, FileCreatedEvent):
            event_type = "created"
        elif isinstance(event, FileDeletedEvent):
            event_type = "deleted"
        elif isinstance(event, FileMovedEvent):
            event_type = "moved"
        elif isinstance(event, FileModifiedEvent):
            event_type = "changed"
        else:
            return

        if filepath_str in self._debounce_timers:
            self._debounce_timers[filepath_str].cancel()

        def execute_handlers():
            time.sleep(0.01)
            threads = []
            for handler in self.handlers:
                thread = threading.Thread(target=handler, args=(filepath, event_type))
                thread.start()
                threads.append(thread)

            for thread in threads:
                thread.join()

        self._debounce_timers[filepath_str] = threading.Timer(
            interval=0.5, function=execute_handlers
        )  # 500ms debounce
        self._debounce_timers[filepath_str].start()

    def should_ignore_path(self, path: Path) -> bool:
        return any(ignored_file in str(path) for ignored_file in IGNORED_PATHS)
