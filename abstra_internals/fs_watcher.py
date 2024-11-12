import threading
import time
from typing import Optional

from watchdog.events import FileModifiedEvent, FileSystemEvent, FileSystemEventHandler
from watchdog.observers import Observer

from abstra_internals.modules import reload_project_local_modules
from abstra_internals.settings import Settings

IGNORED_FILES = [".abstra/resources.dat", ".abstra/", "abstra.json"]
DEBOUNCE_DELAY = 0.5


class FileChangeEventHandler(FileSystemEventHandler):
    def __init__(self):
        super().__init__()
        self._debounce_timer: Optional[threading.Timer] = None

    def on_modified(self, event: FileSystemEvent):
        has_ignored_paths = any(
            ignored_file in str(event.src_path) for ignored_file in IGNORED_FILES
        )

        if not isinstance(event, FileModifiedEvent) or has_ignored_paths:
            return

        if self._debounce_timer is not None:
            self._debounce_timer.cancel()

        self._debounce_timer = threading.Timer(
            DEBOUNCE_DELAY, self.reload_files_on_change
        )
        self._debounce_timer.start()

    def reload_files_on_change(self):
        try:
            reload_project_local_modules()
        except Exception:
            pass


def watch_file_change_events():
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
