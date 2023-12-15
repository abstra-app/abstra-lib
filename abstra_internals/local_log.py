from contextlib import suppress
from dataclasses import dataclass, field
from datetime import datetime
import json
from pathlib import Path
from typing import List, Optional, Dict

from abstra_internals.utils.environment import IS_PREVIEW
from abstra_internals.utils.file import LOCAL_LOG_FOLDER

from .utils.validate import validate_json


@dataclass
class LocalLogMessage:
    execution_id: str
    payload: Dict[str, str]
    event: Optional[str] = ""
    stage_run_id: Optional[str] = ""
    runtime_type: Optional[str] = ""
    runtime_id: Optional[str] = ""
    created_at: float = field(default_factory=lambda: datetime.now().timestamp())

    def json(self):
        return dict(
            event=str(self.event),
            executionId=str(self.execution_id),
            stageRunId=str(self.stage_run_id),
            payload=dict(self.payload),
            runtimeType=str(self.runtime_type),
            runtimeId=str(self.runtime_id),
            createdAt=float(self.created_at),
        )

    @classmethod
    def from_json(cls, json):
        validated_json = _validate_log_message_json(json)

        return LocalLogMessage(
            event=validated_json["event"],
            execution_id=validated_json["executionId"],
            stage_run_id=validated_json["stageRunId"],
            payload=validated_json["payload"],
            runtime_type=validated_json["runtimeType"],
            runtime_id=validated_json["runtimeId"],
            created_at=validated_json["createdAt"],
        )


def _validate_log_message_json(json):
    expected_types = {
        "event": str,
        "executionId": str,
        "stageRunId": Optional[str],
        "payload": dict,
        "runtimeType": str,
        "runtimeId": str,
        "createdAt": float,
    }
    return validate_json(json, expected_types)


def append_to_or_create_log_file(message: LocalLogMessage) -> None:
    if not IS_PREVIEW:
        return

    execution_id = message.execution_id
    if not execution_id:
        return

    log_file = Path(LOCAL_LOG_FOLDER) / f"{execution_id}.log"

    if not log_file.parent.exists():
        log_file.parent.mkdir(parents=True)
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(json.dumps(message.json()) + "\n")


def get_local_logs(execution_id: Optional[str]) -> List[LocalLogMessage]:
    if not IS_PREVIEW:
        return []

    log_file = Path(LOCAL_LOG_FOLDER) / f"{execution_id}.log"

    if not log_file.exists():
        return []

    try:
        with open(log_file, "r", encoding="utf-8") as f:
            logs: List[LocalLogMessage] = []
            for line in f.readlines():
                with suppress(Exception):
                    logs.append(LocalLogMessage.from_json(json.loads(line)))
            return logs
    except Exception:
        print("Error reading log file")
        return []
