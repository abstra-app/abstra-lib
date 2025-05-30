import threading
import time
from pathlib import Path
from typing import Callable, List, Optional

from watchdog.events import FileModifiedEvent, FileSystemEvent, FileSystemEventHandler
from watchdog.observers import Observer

from abstra_internals.settings import Settings

IGNORED_FILES = [
    ".abstra/resources.dat",
    ".abstra/",
    "abstra.json",
    ".venv",
    "__pycache__",
]

Handler = Callable[[Path], None]


class FileChangeWatcher(FileSystemEventHandler):
    def __init__(self):
        super().__init__()
        self._debounce_timer: Optional[threading.Timer] = None
        self.handlers: List[Handler] = []

    def add_handler(self, handler: Handler):
        self.handlers.append(handler)

    def on_modified(self, event: FileSystemEvent):
        filepath = Path(event.src_path)

        if self.should_ignore_event(event) or self.should_ignore_path(filepath):
            return

        threads = []
        for handler in self.handlers:
            thread = threading.Thread(target=handler, args=(filepath,))
            thread.start()
            threads.append(thread)

        for thread in threads:
            thread.join()

    def should_ignore_path(self, path: Path) -> bool:
        return any(ignored_file in str(path) for ignored_file in IGNORED_FILES)

    def should_ignore_event(self, event: FileSystemEvent) -> bool:
        return not isinstance(event, (FileModifiedEvent))

    def run(self):
        observer = Observer()
        observer.schedule(self, path=str(Settings.root_path), recursive=True)
        observer.start()

        try:
            while True:
                time.sleep(1)

        except KeyboardInterrupt:
            observer.stop()
        observer.join()
