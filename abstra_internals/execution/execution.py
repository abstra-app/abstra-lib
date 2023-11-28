from __future__ import annotations  # Required for TYPE_CHECKING
from typing import TYPE_CHECKING, Any, ClassVar, Dict, List, Optional
from dataclasses import dataclass
import threading, traceback, uuid, copy

from ..repositories.project.project import ProjectRepository
from ..repositories import StageRunRepository
from ..repositories.stage_run import StageRun
from ..utils.environment import IS_PREVIEW
from ..monitoring import LogMessage, log
from ..modules import import_as_new

if TYPE_CHECKING:
    from ..repositories.project.project import WorkflowStage


class NoExecutionFound(Exception):
    def __str__(self) -> str:
        return "No execution found. If you are running this locally, make sure you are running it with `abstra serve`. For more information, see https://docs.abstra.io"


@dataclass
class RequestData:
    headers: Dict[str, str]
    body: str
    method: str
    query_params: Dict[str, str]


class StageRunLockFailed(Exception):
    def __init__(self, status: Optional[str]) -> None:
        super().__init__(status)


class InvalidStageRunId(Exception):
    pass


class UnsetStageRun(Exception):
    pass


@dataclass
class WorkflowThread:
    _label: str
    _data: dict
    _assignee: Optional[str]
    _allowed_transitions: List[str]

    def set_transition(self, name: str):
        if name not in self._allowed_transitions:
            raise Exception(
                f"Transition '{name}' not found in {self._allowed_transitions}"
            )

        self._label = name

    def get_data(self) -> dict:
        return self._data

    def get_assignee(self) -> Optional[str]:
        return self._assignee

    def set_data(self, key: str, value: Any):
        self._data[key] = value

    def set_assignee(self, assignee: str):
        self._assignee = assignee

    def _clone(self) -> "WorkflowThread":
        return copy.deepcopy(self)


class Execution:
    type = "execution"
    abstra_run_key = "abstra-run-id"
    executions: ClassVar[Dict[int, "Execution"]] = {}

    id: str
    is_initial: bool
    request: RequestData
    thread: threading.Thread
    stage: WorkflowStage

    stage_run_freezed: Optional[StageRun] = None
    stage_run_draft: Optional[StageRun] = None
    workflow_threads: List[WorkflowThread]

    @classmethod
    def get_execution(cls) -> Optional["Execution"]:
        thread_id = threading.get_ident()
        return cls.executions.get(thread_id)

    def __init__(
        self,
        runtime_json: WorkflowStage,
        is_initial: bool,
        request: RequestData,
        execution_id=None,
    ):
        if execution_id:
            self.id = execution_id
        else:
            self.id = uuid.uuid4().__str__()

        self.is_initial = is_initial

        self.thread = threading.Thread(target=self._run, args=())
        self.request = request

        self.stderr: List[str] = []
        self.stdout: List[str] = []
        self.context: Dict = {}
        self.stage = runtime_json
        self.next_stage_runs = []

    @property
    def is_preview(self) -> bool:
        return IS_PREVIEW

    def run_async(self):
        self.thread.start()

    def run_sync(self):
        self.thread.start()
        self.thread.join()

    def stdio(self, type: str, text: str):
        if type == "stderr":
            self.stderr.append(text)
        elif type == "stdout":
            self.stdout.append(text)

    def log(self, event: str, payload: Any):
        if event == "heartbeat":
            return
        log(
            LogMessage(
                event=event,
                payload=payload,
                executionId=self.id,
                runtime_type=self.stage.runner_type,
                runtime_name=self.stage.title,
            )
        )

    def handle_started(self):
        pass

    def handle_success(self) -> str:
        return "finished"

    def handle_failure(self, e: Exception) -> str:
        traceback.print_exc()
        return "failed"

    def handle_lock_failed(self):
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
        raise StageRunLockFailed(stage_run_status)

    def set_stage(
        self, data: Optional[Dict] = None, assignee: Optional[str] = None
    ) -> None:
        raise NotImplementedError("Can only be called from a hook")

    def setup_context(self, request: RequestData):
        raise NotImplementedError()

    @property
    def stage_run(self) -> Optional[StageRun]:
        return self.stage_run_draft

    @stage_run.setter
    def stage_run(self, stage_run: StageRun) -> None:
        self.stage_run_freezed = stage_run
        self.stage_run_draft = stage_run.clone()
        self.init_workflow_threads()

    def init_workflow_threads(self) -> None:
        if not self.stage_run:
            raise UnsetStageRun()

        allowed_transitions = [t.label for t in self.stage.workflow_transitions]
        self.workflow_threads = []
        if len(allowed_transitions) > 0:
            self.workflow_threads = [
                WorkflowThread(
                    _label=allowed_transitions[0],
                    _data=self.stage_run.data,
                    _assignee=self.stage_run.assignee,
                    _allowed_transitions=allowed_transitions,
                )
            ]

    def init_stage_run(self, stage_run_id: Optional[str] = None) -> None:
        if stage_run_id:
            stage_run = StageRunRepository.get(stage_run_id)
            if stage_run.stage == self.stage.id:
                self.stage_run = stage_run
                return
            else:
                raise InvalidStageRunId()

        if self.is_initial:
            self.stage_run = StageRunRepository.create_initial(stage=self.stage.id)
            return

        raise UnsetStageRun(
            f"This Stage is in the middle of a workflow, but no Step was specified"
        )

    def _run(self) -> None:
        self.thread_id = threading.get_ident()
        Execution.executions[self.thread_id] = self

        status = "running"
        self.setup_context(self.request)
        if self.stage_run and not self.set_stage_run_status(status):
            return self.handle_lock_failed()

        self.handle_started()
        try:
            try:
                import_as_new(self.stage.file)
            except SystemExit as e:
                if e.code is not None and e.code != 0:
                    raise e

            self.create_next_stage_runs()
            status = self.handle_success()
        except Exception as e:
            status = self.handle_failure(e)
        finally:
            self.delete()
            self.set_stage_run_status(status)

    def set_stage_run_status(self, status: str) -> bool:
        if not self.stage_run:
            return False

        return StageRunRepository.change_state(self.stage_run.id, status)

    def set_transition(self, transition_label: str) -> None:
        for transition in self.workflow_threads:
            transition.set_transition(transition_label)

    def set_next_assignee(self, assignee: str) -> None:
        for transition in self.workflow_threads:
            transition._assignee = assignee

    def set_next_data(self, key: str, value: Any) -> None:
        for transition in self.workflow_threads:
            transition._data[key] = value

    def split_workflow_thread(self, count: int) -> List[WorkflowThread]:
        if count <= 0:
            raise Exception("Count must be greater than 0")

        if len(self.workflow_threads) != 1:
            raise Exception("Thread was already splitted. You can't call this twice")

        transition = self.workflow_threads[0]

        for _ in range(count - 1):
            self.workflow_threads.append(transition._clone())

        return self.workflow_threads

    def create_next_stage_runs(self) -> None:
        if not self.stage_run:
            raise UnsetStageRun()

        project = ProjectRepository.load()  # TODO: inject this

        next_stage_runs_dtos = [
            dict(
                stage=project.follow_transition(self.stage.id, t._label).id,
                data=t._data,
                assignee=t._assignee,
            )
            for t in self.workflow_threads
        ]

        StageRunRepository.create_next(self.stage_run, next_stage_runs_dtos)

    def delete(self) -> None:
        del Execution.executions[self.thread_id]


def get_execution_throwable() -> Execution:
    execution = Execution.get_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
