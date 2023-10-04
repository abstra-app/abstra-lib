from __future__ import annotations  # Required for TYPE_CHECKING

import threading
import traceback
import uuid
from dataclasses import dataclass
from typing import TYPE_CHECKING, Any, Callable, ClassVar, Dict, List, Optional

from ..monitoring import LogMessage, log
from ..repositories import StageRunRepository
from ..repositories.stage_run import StageRun
from ..utils.environment import IS_PREVIEW

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


class MismatchedStage(Exception):
    pass


class StageRunEnded(Exception):
    pass


class UnsetStageRun(Exception):
    pass


class Execution:
    id: str
    type = "execution"
    executions: ClassVar[Dict[int, "Execution"]] = {}
    is_initial: bool
    stage_run: Optional[StageRun] = None
    runtime_json: RuntimeJSON
    request: RequestData
    thread: threading.Thread

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

    def handle_success(self):
        pass

    def handle_failure(self, exception: Exception):
        pass

    def handle_lock_failed(self):
        pass

    def set_stage(self, data: Optional[Dict] = None, assignee: Optional[str] = None):
        raise NotImplementedError("Can only be called from a hook")

    def setup_context(self, request: RequestData):
        raise NotImplementedError()

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

        code = self.runtime_json.file_path.read_text(encoding="utf-8")
        namespace: dict = {}

        self.setup_context(self.request)

        if self.stage_run and not self.set_stage_run_status("running"):
            return self.handle_lock_failed()

        try:
            exec(code, namespace, namespace)
            self.advance_stage(internal_call=True)
        except SystemExit:
            self.set_stage_run_status("finished")
            return self.handle_success()
        except StageRunEnded:
            self.set_stage_run_status("finished")
            return self.handle_success()
        except Exception as e:
            traceback.print_exc()
            self.set_stage_run_status("failed")
            return self.handle_failure(e)
        finally:
            self.delete()

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

        allowed_stages = list([transition.target_path for transition in transitions])

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
