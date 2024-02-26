import datetime
import threading
import uuid
from abc import abstractmethod
from dataclasses import dataclass
from typing import Any, ClassVar, Dict, Literal, Optional, Tuple, Union

from .stage_run_manager import StageRunManager

from ..compatibility import compat_traceback
from ..modules import import_as_new
from ..repositories.project.project import ActionStage
from ..repositories.stage_run import (
    StageRun,
)

from ..repositories.execution import (
    ExecutionRepository,
    ExecutionStatus,
    ExecutionDTO,
)

from ..repositories.execution_logs import (
    ExecutionLogsRepository,
    StdioLogEntry,
    UnhandledExceptionLogEntry,
)
from ..repositories.project.project import ActionStage
from ..repositories.stage_run import StageRun
from ..utils.datetime import to_utc_iso_string


class NoExecutionFound(Exception):
    def __str__(self) -> str:
        return "No execution found. If you are running this locally, make sure you are running it with `abstra serve`. For more information, see https://docs.abstra.io"


ABSTRA_RUN_KEY = "abstra-run-id"


@dataclass
class RequestData:
    body: str
    method: str
    query_params: Dict[str, str]
    headers: Dict[str, str]

    def sanitize_dict(self, headers: Dict[str, Any]):
        sanitized: Dict[str, str] = {}

        for key, value in headers.items():
            if isinstance(value, str):
                sanitized[key] = value

        return sanitized

    def to_dto(self):
        return dict(
            headers=self.sanitize_dict(self.headers),
            body=self.body,
            method=self.method,
            queryParams=self.query_params,
        )


ResponseData = Tuple[Union[str, Dict], int, Dict]


@dataclass
class ExecutionContext:
    request: RequestData
    response: Optional[ResponseData]

    def to_dto(self):
        return dict(
            request=self.request.to_dto(),
            response=self.response,
        )


class Execution:
    executions: ClassVar[Dict[int, "Execution"]] = {}

    id: str
    created_at: datetime.datetime
    is_initial: bool
    status: Optional[ExecutionStatus] = None
    stage: ActionStage
    context: ExecutionContext

    stage_run_manager: StageRunManager
    execution_repository: ExecutionRepository
    execution_logs_repository: ExecutionLogsRepository

    _log_count: int = 0

    stage_run_draft: Optional[StageRun] = None
    stage_run_freezed: Optional[StageRun] = None

    @classmethod
    def get_execution_by_id(cls, execution_id: str) -> Optional["Execution"]:
        for execution in cls.executions.values():
            if execution.id == execution_id:
                return execution
        return None

    @classmethod
    def get_current_execution(cls) -> Optional["Execution"]:
        thread_id = threading.get_ident()
        return cls.executions.get(thread_id)

    @property
    def log_count(self) -> int:
        self._log_count += 1
        return self._log_count

    def __init__(
        self,
        stage: ActionStage,
        is_initial: bool,
        request: RequestData,
        stage_run_manager: StageRunManager,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
        execution_id: Optional[str] = None,
    ):
        self.id = execution_id or uuid.uuid4().__str__()
        self.thread_id = threading.get_ident()

        self.stage = stage
        self.is_initial = is_initial
        self.created_at = datetime.datetime.now()

        self.context = ExecutionContext(
            request=request,
            response=None,
        )
        Execution.executions[self.thread_id] = self

        self.stage_run_manager = stage_run_manager
        self.execution_repository = execution_repository
        self.execution_logs_repository = execution_logs_repository

    @property
    def stage_run(self) -> Optional[StageRun]:
        return self.stage_run_draft

    @stage_run.setter
    def stage_run(self, stage_run: StageRun) -> None:
        self.stage_run_freezed = stage_run
        self.stage_run_draft = stage_run.clone()

    def to_dto(self) -> ExecutionDTO:
        if not self.status:
            raise Exception("Internal error: status is not set")

        return ExecutionDTO(
            id=self.id,
            status=self.status,
            created_at=to_utc_iso_string(self.created_at),
            context=self.context.to_dto(),
            stage_id=self.stage.id,
            stage_run_id=self.stage_run.id if self.stage_run else None,
        )

    def save(self) -> None:
        self.execution_repository.update(self.to_dto())

    def stdio(self, event: Literal["stderr", "stdout"], text: str) -> None:
        self.execution_logs_repository.save(
            StdioLogEntry(
                execution_id=self.id,
                event=event,
                payload={"text": text},
                created_at=datetime.datetime.now(),
                sequence=self.log_count,
            )
        )

    def log_exception(self, e: Exception) -> None:
        self.execution_logs_repository.save(
            UnhandledExceptionLogEntry(
                execution_id=self.id,
                payload={
                    "text": "".join(
                        compat_traceback.format_exception(e),
                    ),
                },
                sequence=self.log_count,
                created_at=datetime.datetime.now(),
            )
        )

    @abstractmethod
    def received_stage_run_id(self) -> Optional[str]:
        raise NotImplementedError()

    @abstractmethod
    def handle_start(self) -> None:
        raise NotImplementedError()

    @abstractmethod
    def handle_success(self) -> None:
        raise NotImplementedError()

    @abstractmethod
    def handle_failure(self, e: Exception) -> None:
        raise NotImplementedError()

    @abstractmethod
    def handle_lock_failed(self) -> None:
        raise NotImplementedError()

    def attempt_handle_exception(self, e: Exception) -> bool:
        return False

    def set_stage_run(self, stage_run_id):
        self.stage_run = self.stage_run_manager.init_stage_run(self.stage, stage_run_id)

        lock_held = self.set_stage_run_status()
        if self.stage_run and not lock_held:
            self.status = "lock-failed"
            self.handle_lock_failed()
            self.save()

    def run(self) -> None:
        self.status = "running"
        self.execution_repository.create(self.to_dto())
        self.handle_start()
        stage_run_id = self.received_stage_run_id()
        if stage_run_id or self.stage.is_initial:
            self.set_stage_run(stage_run_id)
            if self.status == "lock-failed":
                return

        try:
            try:
                import_as_new(self.stage.file)
            except SystemExit as e:
                had_errors = e.code is not None and e.code != 0
                if had_errors:
                    raise e

            self.status = "finished"
            self.handle_success()
        except Exception as e:
            if not self.attempt_handle_exception(e):
                self.status = "failed"
                self.log_exception(e)
                self.handle_failure(e)
        finally:
            self.save()
            self.unbind()
            self.set_stage_run_status()

    def set_stage_run_status(self) -> bool:
        if not self.stage_run or not self.status:
            return False

        return self.stage_run_manager.change_state(
            self.stage_run.id, self.status, self.id
        )

    def unbind(self) -> None:
        del Execution.executions[self.thread_id]


def get_current_execution_throwable() -> Execution:
    execution = Execution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
