import json
import threading
import time
from pathlib import Path
from typing import Callable, List

from watchdog.events import (
    FileCreatedEvent,
    FileModifiedEvent,
    FileSystemEvent,
    FileSystemEventHandler,
)
from watchdog.observers import Observer

from abstra_internals.consts.filepaths import TASKS_DIR_PATH
from abstra_internals.controllers.execution.execution_stdio import BroadcastController
from abstra_internals.repositories.tasks import TaskDTO
from abstra_internals.utils import serialize

TaskUpdateHandler = Callable[[TaskDTO], None]


class TasksWatcher(FileSystemEventHandler):
    def __init__(self, handlers: List[TaskUpdateHandler]):
        super().__init__()
        self.handlers: List[TaskUpdateHandler] = handlers
        self._last_offsets: dict[str, int] = {}

    def start(self):
        Path(TASKS_DIR_PATH).mkdir(parents=True, exist_ok=True)

        observer = Observer()
        observer.schedule(self, path=str(TASKS_DIR_PATH), recursive=False)
        observer.start()
        self._observer = observer

    def dispatch(self, event: FileSystemEvent):
        if not isinstance(event, (FileCreatedEvent, FileModifiedEvent)):
            return

        filepath = Path(event.src_path)
        if filepath.suffix != ".json" or not filepath.parent.samefile(TASKS_DIR_PATH):
            return

        # Ignore __schema__.json file created by FileSystemJsonTables
        if filepath.name == "__schema__.json":
            return

        self._handle_file_event(filepath)

    def _handle_file_event(self, filepath: Path):
        time.sleep(0.01)

        # Ignore __schema__.json file created by FileSystemJsonTables
        if filepath.name == "__schema__.json":
            return

        raw_task = filepath.read_text(encoding="utf-8")
        parsed_json = json.loads(raw_task)

        # Ignore files that don't contain valid TaskDTO objects
        # FileSystemJsonTables may create files with empty arrays or invalid data
        if not isinstance(parsed_json, dict):
            return

        task = TaskDTO(**parsed_json)

        for handler in self.handlers:
            threading.Thread(target=handler, args=(task,)).start()


def on_tasks_update(task: TaskDTO):
    msg = serialize(dict(type="task", payload=task.dump()))
    BroadcastController.broadcast(msg=msg)
