import threading, traceback, uuid
from dataclasses import dataclass
from typing import Any, ClassVar, Dict, List, Optional

from ..local_log import LocalLogMessage, append_to_or_create_log_file
from ..modules import import_as_new
from ..monitoring import LogMessage, log
from ..utils.environment import IS_PREVIEW
from ..repositories import StageRunRepository
from ..repositories.stage_run import StageRun
from ..repositories.project.project import ActionStage


class NoExecutionFound(Exception):
    def __str__(self) -> str:
        return "No execution found. If you are running this locally, make sure you are running it with `abstra serve`. For more information, see https://docs.abstra.io"


@dataclass
class RequestData:
    headers: Dict[str, str]
    body: str
    method: str
    query_params: Dict[str, str]


class LockFailedMessage(Exception):
    def __init__(self, status: Optional[str]) -> None:
        super().__init__(status)


class InvalidStageRunId(Exception):
    pass


class UnsetStageRun(Exception):
    pass


class Execution:
    type = "execution"
    abstra_run_key = "abstra-run-id"
    executions: ClassVar[Dict[int, "Execution"]] = {}

    id: str
    is_initial: bool
    status = "waiting"
    stage: ActionStage
    request: RequestData

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

    def __init__(
        self,
        stage: ActionStage,
        is_initial: bool,
        request: RequestData,
        execution_id=None,
    ):
        self.stderr: List[str] = []
        self.stdout: List[str] = []
        self.context: Dict = {}
        self.request = request
        self.stage = stage
        self.is_initial = is_initial
        self.thread_id = threading.get_ident()
        Execution.executions[self.thread_id] = self
        self.id = execution_id or uuid.uuid4().__str__()

    @property
    def is_preview(self) -> bool:
        return IS_PREVIEW

    def stdio(self, type: str, text: str):
        if type == "stderr":
            self.stderr.append(text)
        elif type == "stdout":
            self.stdout.append(text)
        if self.is_preview:
            append_to_or_create_log_file(
                LocalLogMessage(
                    event=type,
                    payload={"log": text},
                    execution_id=self.id,
                    stage_run_id=self.stage_run.id if self.stage_run else None,
                    runtime_type=self.stage.type_name,
                    runtime_id=self.stage.id,
                )
            )

    def log(self, event: str, payload: Any):
        if event == "heartbeat":
            return
        log(
            LogMessage(
                event=event,
                payload=payload,
                executionId=self.id,
                runtime_type=self.stage.type_name,
                runtime_name=self.stage.title,
            )
        )

    def handle_started(self) -> str:
        return "running"

    def handle_success(self) -> str:
        return "finished"

    def handle_failure(self, e: Exception) -> str:
        traceback.print_exc()
        return "failed"

    def handle_lock_failed(self) -> None:
        stage_run_id = self.stage_run.id if self.stage_run else None
        stage_run_status = self.stage_run.status if self.stage_run else None

        self.log(
            "lock-failed",
            {
                "execution_id": self.id,
                "stage": self.stage.id,
                "stage_run_id": stage_run_id,
                "stage_run_status": stage_run_status,
            },
        )
        raise LockFailedMessage(stage_run_status)

    def setup_context(self, request: RequestData):
        raise NotImplementedError()

    @property
    def stage_run(self) -> Optional[StageRun]:
        return self.stage_run_draft

    @stage_run.setter
    def stage_run(self, stage_run: StageRun) -> None:
        self.stage_run_freezed = stage_run
        self.stage_run_draft = stage_run.clone()

    def get_not_abandoned_stage_run(self, stage_run: StageRun) -> StageRun:
        if stage_run.status != "abandoned":
            return stage_run

        next_matches = StageRunRepository.find(
            {"parent_id": stage_run.id, "stage": self.stage.id}
        )

        assert (
            len(next_matches) == 1
        ), "Internal error: abandoned stage run does not have exactly one child"

        return self.get_not_abandoned_stage_run(next_matches[0])

    def init_stage_run(self, stage_run_id: Optional[str] = None) -> None:
        if stage_run_id:
            stage_run = StageRunRepository.get(stage_run_id)
            self.stage_run = self.get_not_abandoned_stage_run(stage_run)

            if stage_run.stage == self.stage.id:
                self.stage_run = stage_run
                return

            raise InvalidStageRunId()

        if self.is_initial:
            self.stage_run = StageRunRepository.create_initial(stage=self.stage.id)
            return

        raise UnsetStageRun(
            f"This Stage is in the middle of a workflow, but no StageRun was specified"
        )

    def run(self) -> None:
        self.setup_context(self.request)
        self.status = self.handle_started()

        lock_held = self.set_stage_run_status()

        if self.stage_run and not lock_held:
            return self.handle_lock_failed()

        try:
            try:
                import_as_new(self.stage.file)
            except SystemExit as e:
                if e.code is not None and e.code != 0:
                    raise e

            self.status = self.handle_success()
        except Exception as e:
            self.status = self.handle_failure(e)
        finally:
            self.unbind()
            self.set_stage_run_status()

    def set_stage_run_status(self) -> bool:
        if not self.stage_run:
            return False

        return StageRunRepository.change_state(self.stage_run.id, self.status, self.id)

    def unbind(self) -> None:
        del Execution.executions[self.thread_id]


def get_current_execution_throwable() -> Execution:
    execution = Execution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
