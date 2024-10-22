import json
from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Literal, Optional, TypedDict

import requests

from abstra_internals.environment import SIDECAR_HEADERS, SIDECAR_URL
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.serializer import SerializationHelper
from abstra_internals.threaded import threaded
from abstra_internals.utils import serialize
from abstra_internals.utils.datetime import from_utc_iso_string, to_utc_iso_string
from abstra_internals.utils.dot_abstra import LOCAL_LOGS_FOLDER


@dataclass
class LogEntry:
    execution_id: str
    created_at: datetime
    event: Literal["stderr", "stdout"]
    payload: Dict[Literal["text"], str]
    sequence: int

    def to_dto(self) -> Dict[str, Any]:
        return {
            "executionId": self.execution_id,
            "createdAt": to_utc_iso_string(self.created_at),
            "event": self.event,
            "payload": self.payload,
            "sequence": self.sequence,
        }

    @staticmethod
    def from_dto(dto: Dict) -> "LogEntry":
        if dto.get("event") == "stdout" or dto.get("event") == "stderr":
            return LogEntry(
                execution_id=dto["executionId"],
                created_at=from_utc_iso_string(dto["createdAt"]),
                event=dto["event"],
                payload=dto["payload"],
                sequence=dto["sequence"],
            )
        else:
            raise Exception("Invalid log entry type")


LogEvent = Literal["stdout", "stderr"]
LogsDTO = TypedDict("LogsDTO", {"type": str, "text": str})


class ExecutionLogsRepository(ABC):
    sequence: int

    def get_sequence(self) -> int:
        self.sequence += 1
        return self.sequence

    def insert_stdio(
        self, execution_id: str, event: Literal["stdout", "stderr"], text: str
    ):
        self.save(
            LogEntry(
                execution_id=execution_id,
                created_at=datetime.now(),
                event=event,
                payload={"text": text},
                sequence=self.get_sequence(),
            )
        )

    @abstractmethod
    def save(self, log_entry: LogEntry) -> None:
        raise NotImplementedError()

    @abstractmethod
    def get(
        self,
        execution_id: str,
        event: Optional[LogEvent] = None,
    ) -> List[LogEntry]:
        raise NotImplementedError()

    def get_logs_dto(self, execution_id: str) -> List[LogsDTO]:
        logs = self.get(execution_id)
        output: List[LogsDTO] = []
        for entry in logs:
            text = entry.payload.get("text")
            if not text:
                continue

            if entry.event == "stdout":
                output.append({"type": "stdout", "text": text})
            elif entry.event == "stderr":
                output.append({"type": "stderr", "text": text})
            elif entry.event == "unhandled-exception":
                output.append({"type": "stderr", "text": text})

        return output


class LocalExecutionLogsRepository(ExecutionLogsRepository):
    _logs: Dict[str, List[LogEntry]]

    def __init__(self):
        self.sequence = 0
        self._logs = {}

    def save(self, log_entry: LogEntry) -> None:
        execution_id = log_entry.execution_id

        if not execution_id:
            return

        log_file = Path(LOCAL_LOGS_FOLDER) / f"{execution_id}.log"

        if not log_file.parent.exists():
            log_file.parent.mkdir(parents=True)

        with open(log_file, "a", encoding="utf-8") as f:
            f.write(serialize(log_entry.to_dto()) + "\n")

    def get(
        self,
        execution_id: str,
        event: Optional[LogEvent] = None,
    ) -> List[LogEntry]:
        log_file = Path(LOCAL_LOGS_FOLDER) / f"{execution_id}.log"

        if not log_file.exists():
            return []

        try:
            with open(log_file, "r", encoding="utf-8") as f:
                logs: List[LogEntry] = []
                for line in f.readlines():
                    dto = json.loads(line)
                    if event and dto["event"] != event:
                        continue
                    logs.append(LogEntry.from_dto(dto))
                return logs
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return []


class RemoteExecutionLogsRepository(ExecutionLogsRepository):
    def __init__(self, url: str, headers: Dict[str, str]):
        self.url = url
        self.headers = headers
        self.sequence = 0

    @threaded
    def save(self, log_entry: LogEntry) -> None:
        validated_payload = SerializationHelper.enforce_max_size(log_entry.payload)

        dto = {
            **log_entry.to_dto(),
            "payload": validated_payload,
        }

        res = requests.post(
            f"{self.url}/executions/{log_entry.execution_id}/logs",
            json=dto,
            headers=self.headers,
        )

        res.raise_for_status()

    def get(
        self,
        execution_id: str,
        event: Optional[LogEvent] = None,
    ) -> List[LogEntry]:
        response = requests.get(
            f"{self.url}/executions/{execution_id}/logs",
            params={"event": event} if event else None,
            headers=self.headers,
        )

        response.raise_for_status()

        return [LogEntry.from_dto(log) for log in response.json()]


def execution_logs_repository_factory() -> ExecutionLogsRepository:
    if SIDECAR_URL:
        return RemoteExecutionLogsRepository(url=SIDECAR_URL, headers=SIDECAR_HEADERS)
    else:
        return LocalExecutionLogsRepository()
