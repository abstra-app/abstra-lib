import json
import threading
import time
from collections import defaultdict
from pathlib import Path
from typing import Callable, List

from watchdog.events import (
    FileCreatedEvent,
    FileModifiedEvent,
    FileSystemEvent,
    FileSystemEventHandler,
)
from watchdog.observers import Observer

from abstra_internals.consts.filepaths import LOCAL_LOGS_DIR_PATH
from abstra_internals.controllers.execution.execution_stdio import BroadcastController
from abstra_internals.utils import serialize

LogUpdateHandler = Callable[[str, str, str], None]  # execution_id, stage_id, content


class LogsWatcher(FileSystemEventHandler):
    def __init__(self, handlers: List[LogUpdateHandler]):
        super().__init__()
        self.handlers: List[LogUpdateHandler] = handlers
        self._last_offsets: dict[str, int] = {}

    def start(self):
        Path(LOCAL_LOGS_DIR_PATH).mkdir(parents=True, exist_ok=True)

        observer = Observer()
        observer.schedule(self, path=str(LOCAL_LOGS_DIR_PATH), recursive=False)
        observer.start()
        self._observer = observer

    def dispatch(self, event: FileSystemEvent):
        if not isinstance(event, (FileCreatedEvent, FileModifiedEvent)):
            return

        filepath = Path(event.src_path)
        if filepath.suffix != ".log" or not filepath.parent.samefile(
            LOCAL_LOGS_DIR_PATH
        ):
            return

        execution_id = filepath.stem

        self._handle_file_event(filepath, execution_id)

    def _handle_file_event(self, filepath: Path, execution_id: str):
        time.sleep(0.01)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                last_offset = self._last_offsets.get(execution_id, 0)
                f.seek(last_offset)
                new_content = f.read()
                current_offset = f.tell()
                self._last_offsets[execution_id] = current_offset

            if not new_content:
                return

            lines = new_content.strip().splitlines()
            logs_by_stage: dict[str, list[str]] = defaultdict(list)

            for line in lines:
                try:
                    data = json.loads(line)
                    stage_id = data.get("stageId")
                    log = data.get("payload", {}).get("text", "")
                    if stage_id:
                        logs_by_stage[stage_id].append(log)
                except json.JSONDecodeError:
                    print(f"Invalid JSON line in {execution_id}.log: {line}")

            for stage_id, stage_logs in logs_by_stage.items():
                combined_logs = "\n".join(stage_logs)
                for handler in self.handlers:
                    threading.Thread(
                        target=handler, args=(execution_id, stage_id, combined_logs)
                    ).start()

        except Exception as e:
            print(f"Error reading log file {filepath}: {e}")


def on_logs_update(execution_id: str, stage_id: str, log_content: str):
    msg = serialize(
        dict(
            type="stdio",
            payload=dict(
                type="stdout",
                log=log_content,
                execution_id=execution_id,
                stage_id=stage_id,
            ),
        )
    )
    BroadcastController.broadcast(msg=msg)
