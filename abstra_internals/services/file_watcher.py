import threading
import time
from pathlib import Path, PurePath
from typing import Callable, Dict, List, Literal, Optional, Union

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
from abstra_internals.utils.crdt import CRDTManager
from abstra_internals.utils.file import safe_read_file, safe_write_file

IGNORED_PATHS = [
    ".abstra/",
    ".venv",
    "__pycache__",
    ".git/index.lock",
    ".git/HEAD.lock",
    ".git/config.lock",
    ".git/refs/",
    ".git/objects/",
    ".git/hooks/",
    ".git/logs/",
    ".git/COMMIT_EDITMSG",
    ".git/MERGE_HEAD",
    ".git/FETCH_HEAD",
    ".git/ORIG_HEAD",
]
FSEventType = Literal["changed", "created", "deleted", "moved"]
Handler = Callable[[Path, FSEventType, Optional[str]], None]

crdt_managers: Dict[str, CRDTManager] = {}


class FileWatcher(FileSystemEventHandler):
    def __init__(self, handlers: List[Handler]):
        super().__init__()
        self._debounce_timers: dict[str, threading.Timer] = {}
        self._modules_folder_timer: Optional[threading.Timer] = None
        self.handlers: List[Handler] = handlers

    def start(self):
        observer = Observer()
        observer.schedule(self, path=str(Settings.root_path), recursive=True)
        observer.start()
        self._observer = observer

    def dispatch(self, event: FileSystemEvent):
        filepath = Path(event.src_path).absolute()
        filepath_str = str(filepath)

        if self.should_ignore_path(filepath):
            return

        content = None
        if isinstance(event, FileCreatedEvent):
            event_type = "created"
        elif isinstance(event, FileDeletedEvent):
            event_type = "deleted"
        elif isinstance(event, FileMovedEvent):
            event_type = "moved"
        elif isinstance(event, FileModifiedEvent):
            event_type = "changed"
            content = safe_read_file(filepath, 2.0)
            if not content:
                return

            if filepath_str not in crdt_managers or crdt_managers[filepath_str] is None:
                crdt_managers[filepath_str] = CRDTManager(file_path=filepath)

            old_content = crdt_managers[filepath_str].get_content()
            if old_content != content:
                crdt_managers[filepath_str].apply_operations_from_diff(content)
                new_content = crdt_managers[filepath_str].get_content()
                if content != new_content:
                    safe_write_file(filepath, new_content, 2.0)

        else:
            return

        def execute_handlers():
            time.sleep(0.01)
            threads = []
            for handler in self.handlers:
                thread = threading.Thread(
                    target=handler, args=(filepath, event_type, content)
                )
                thread.start()
                threads.append(thread)

            for thread in threads:
                thread.join()

        if "/modules/" in filepath_str or filepath_str.endswith("/modules"):
            if self._modules_folder_timer is not None:
                self._modules_folder_timer.cancel()

            self._modules_folder_timer = threading.Timer(
                interval=2.0, function=execute_handlers
            )
            self._modules_folder_timer.start()
        else:
            if filepath_str in self._debounce_timers:
                self._debounce_timers[filepath_str].cancel()

            self._debounce_timers[filepath_str] = threading.Timer(
                interval=0.5, function=execute_handlers
            )
            self._debounce_timers[filepath_str].start()

    def should_ignore_path(self, path: Union[Path, PurePath]) -> bool:
        path_str = str(path).replace("\\", "/")

        for ignored_pattern in IGNORED_PATHS:
            normalized_pattern = ignored_pattern.replace("\\", "/")

            if "/" in normalized_pattern:
                if normalized_pattern in path_str:
                    return True

                if path_str.endswith(normalized_pattern):
                    return True
            else:
                if (
                    f"/{normalized_pattern}/" in path_str
                    or path_str.endswith(f"/{normalized_pattern}")
                    or path_str.startswith(f"{normalized_pattern}/")
                    or path_str == normalized_pattern
                ):
                    return True

        if "/.git/" in path_str and path_str.endswith((".lock", ".tmp")):
            return True

        return False
