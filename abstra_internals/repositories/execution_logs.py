import json
from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Literal, Optional, Union

import requests
from pydantic.dataclasses import dataclass

from .serializer import SerializationHelper
from ..utils.datetime import from_utc_iso_string, to_utc_iso_string
from ..utils.environment import SIDECAR_HEADERS, SIDECAR_URL
from ..utils.dot_abstra import LOCAL_LOGS_FOLDER


class LogEntryFactory:
    @staticmethod
    def from_dto(dto: Dict) -> "LogEntry":
        if dto.get("event") == "stdout" or dto.get("event") == "stderr":
            return StdioLogEntry(
                execution_id=dto["executionId"],
                created_at=from_utc_iso_string(dto["createdAt"]),
                event=dto["event"],
                payload=dto["payload"],
                sequence=dto["sequence"],
            )
        elif dto.get("event") == "form-message":
            return FormEventLogEntry(
                execution_id=dto["executionId"],
                created_at=from_utc_iso_string(dto["createdAt"]),
                payload=dto["payload"],
                sequence=dto["sequence"],
            )
        elif dto.get("event") == "unhandled-exception":
            return UnhandledExceptionLogEntry(
                execution_id=dto["executionId"],
                created_at=from_utc_iso_string(dto["createdAt"]),
                payload=dto["payload"],
                sequence=dto["sequence"],
            )
        else:
            raise Exception("Invalid log entry type")


@dataclass
class StdioLogEntry:
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


@dataclass
class FormEventLogEntry:
    execution_id: str
    created_at: datetime
    sequence: int
    payload: Dict[Literal["messageType", "messagePayload"], Union[str, Dict]]
    event: Literal["form-message"] = "form-message"

    def to_dto(self) -> Dict[str, Any]:
        return {
            "executionId": self.execution_id,
            "createdAt": to_utc_iso_string(self.created_at),
            "event": self.event,
            "payload": self.payload,
            "sequence": self.sequence,
        }


@dataclass
class UnhandledExceptionLogEntry:
    execution_id: str
    created_at: datetime
    payload: Dict[Literal["text"], str]
    sequence: int
    event: Literal["unhandled-exception"] = "unhandled-exception"

    def to_dto(self) -> Dict[str, Any]:
        return {
            "executionId": self.execution_id,
            "createdAt": to_utc_iso_string(self.created_at),
            "event": self.event,
            "payload": self.payload,
            "sequence": self.sequence,
        }


LogEntry = Union[StdioLogEntry, FormEventLogEntry, UnhandledExceptionLogEntry]
LogEvent = Literal["stdout", "stderr", "form-message", "unhandled-exception"]


class ExecutionLogsRepository(ABC):
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


class LocalExecutionLogsRepository(ExecutionLogsRepository):
    _logs: Dict[str, List[LogEntry]]

    def __init__(self):
        self._logs = {}

    def save(self, log_entry: LogEntry) -> None:
        execution_id = log_entry.execution_id

        if not execution_id:
            return

        log_file = Path(LOCAL_LOGS_FOLDER) / f"{execution_id}.log"

        if not log_file.parent.exists():
            log_file.parent.mkdir(parents=True)

        with open(log_file, "a", encoding="utf-8") as f:
            f.write(json.dumps(log_entry.to_dto()) + "\n")

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
                    logs.append(LogEntryFactory.from_dto(dto))
                return logs
        except Exception as e:
            import traceback

            traceback.print_exc()
            print(f"Error reading log file {log_file}: {e}")
            return []


class RemoteExecutionLogsRepository(ExecutionLogsRepository):
    def __init__(self, url: str, headers: Dict[str, str]):
        self.url = url
        self.headers = headers

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

        return [LogEntryFactory.from_dto(log) for log in response.json()]


def execution_logs_repository_factory() -> ExecutionLogsRepository:
    if SIDECAR_URL:
        return RemoteExecutionLogsRepository(url=SIDECAR_URL, headers=SIDECAR_HEADERS)
    else:
        return LocalExecutionLogsRepository()
