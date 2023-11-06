from __future__ import annotations  # Required for TYPE_CHECKING
from typing import TYPE_CHECKING, Any, ClassVar, Dict, List, Optional
from dataclasses import dataclass
import threading, traceback, uuid

from ..repositories.json.classes import AbstraJSONRepository
from ..repositories import StageRunRepository
from ..repositories.stage_run import StageRun
from ..utils.environment import IS_PREVIEW
from ..monitoring import LogMessage, log
from ..modules import import_as_new

if TYPE_CHECKING:
    from ..repositories.json.classes import RuntimeJSON


class NoExecutionFound(Exception):
    def __str__(self) -> str:
        return "No execution found. If you are running this locally, make sure you are running it with `abstra serve`. For more information, see https://docs.abstra.io"


@dataclass
class RequestData:
    headers: Dict[str, str]
    body: str
    method: str
    query_params: Dict[str, str]


class TransitionNotSpecified(Exception):
    def __init__(self):
        super().__init__("No transitions were specified for this stage")


class InvalidNextStageRun(Exception):
    def __init__(self, target, allowed):
        super().__init__(f"Target stage {target} not in allowed stages: {allowed}")


class MalformedNextStageRun(Exception):
    def __init__(self, next_abuble, allowed):
        super().__init__(
            f"Multiple next stages are possible ({allowed}) but 'stage' is not specified in {next_abuble}"
        )


class StageRunLockFailed(Exception):
    def __init__(self, status: Optional[str]) -> None:
        super().__init__(status)


class MismatchedStage(Exception):
    pass


class StageRunEnded(Exception):
    pass


class UnsetStageRun(Exception):
    pass


class Execution:
    type = "execution"
    abstra_run_key = "abstra-run-id"
    executions: ClassVar[Dict[int, "Execution"]] = {}

    id: str
    is_initial: bool
    request: RequestData
    thread: threading.Thread
    runtime_json: RuntimeJSON

    stage_run_freezed: Optional[StageRun] = None
    stage_run_draft: Optional[StageRun] = None

    @classmethod
    def get_execution(cls) -> Optional["Execution"]:
        thread_id = threading.get_ident()
        return cls.executions.get(thread_id)

    def __init__(
        self,
        runtime_json: RuntimeJSON,
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
        self.runtime_json = runtime_json

    def run_async(self):
        self.thread.start()

    def run_sync(self):
        self.thread.start()
        self.thread.join()

    @property
    def is_preview(self) -> bool:
        return IS_PREVIEW

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
                runtime_type=self.runtime_json.runner_type,
                runtime_name=self.runtime_json.path,
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
                "stage": self.runtime_json.path,
                "stage_run_id": stage_run_id,
                "stage_run_status": stage_run_status,
            },
        )
        raise StageRunLockFailed(stage_run_status)

    def set_stage(self, data: Optional[Dict] = None, assignee: Optional[str] = None):
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

    def init_stage_run(self, id: Optional[str] = None) -> None:
        if id:
            stage_run = StageRunRepository.get(id)
            if stage_run.stage == self.runtime_json.path:
                self.stage_run = stage_run
                return
            else:
                raise MismatchedStage()

        if self.is_initial:
            self.stage_run = StageRunRepository.create_initial(
                stage=self.runtime_json.path, assignee=None
            )
            return

        raise UnsetStageRun(
            f"This Task is in the middle of a workflow, but no Task Instance run was specified"
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
                import_as_new(self.runtime_json.file)
            except SystemExit as e:
                if e.code != 0:
                    raise e

            self.advance_stage(internal_call=True)
        except StageRunEnded:
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

    def advance_stage(
        self, next_stage_runs: Optional[List[dict]] = None, internal_call: bool = False
    ):
        if not self.stage_run:
            raise UnsetStageRun()

        transitions = (
            self.runtime_json.workflow_transitions  # type: ignore
            if self.runtime_json.runner_type != "dash"
            else []
        )

        abstra_json = AbstraJSONRepository.load()
        allowed_stages = list([transition.target_path for transition in transitions])
        allowed_titles = [
            abstra_json.get_workflow_runtime_by_path(stage).title
            for stage in allowed_stages
        ]

        if len(allowed_stages) == 0:
            if internal_call:
                raise StageRunEnded()
            else:
                raise TransitionNotSpecified()

        if next_stage_runs:
            for stage_run in next_stage_runs:
                if "stage" not in stage_run and len(allowed_stages) > 1:
                    raise MalformedNextStageRun(stage_run, allowed_stages)

                if stage_run["stage"] not in allowed_stages:
                    if stage_run["stage"] in allowed_titles:
                        stage_run["stage"] = allowed_stages[
                            allowed_titles.index(stage_run["stage"])
                        ]
                    else:
                        raise InvalidNextStageRun(stage_run["stage"], allowed_stages)

        default_next_stage_runs = [
            dict(stage=allowed_stage) for allowed_stage in allowed_stages
        ]

        dtos = next_stage_runs or default_next_stage_runs

        StageRunRepository.create_next(self.stage_run, dtos)

        raise StageRunEnded()

    def delete(self):
        del Execution.executions[self.thread_id]


def get_execution_throwable() -> Execution:
    execution = Execution.get_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
