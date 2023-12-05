from __future__ import annotations  # Required for TYPE_CHECKING
from typing import TYPE_CHECKING, Any, ClassVar, Dict, List, Optional
from dataclasses import dataclass
import threading
import traceback
import uuid

from ..modules import import_as_new
from ..monitoring import LogMessage, log
from ..utils.environment import IS_PREVIEW
from .stoppable_thread import StoppableThread

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


class Execution:
    type = "execution"
    abstra_run_key = "abstra-run-id"
    executions: ClassVar[Dict[int, "Execution"]] = {}

    id: str
    is_initial: bool
    request: RequestData
    thread: StoppableThread

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

        self.thread = StoppableThread(target=self._run, args=())
        self.request = request

        self.stderr: List[str] = []
        self.stdout: List[str] = []
        self.context: Dict = {}
        self.stage = runtime_json

    @property
    def is_preview(self) -> bool:
        return IS_PREVIEW

    def run_async(self):
        self.thread.start()

    def stop(self):
        self.thread.kill()

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

    def handle_started(self) -> None:
        pass

    def handle_success(self) -> None:
        pass

    def handle_failure(self, e: Exception) -> None:
        traceback.print_exc()

    def setup_context(self, request: RequestData):
        raise NotImplementedError()

    def _run(self) -> None:
        self.thread_id = threading.get_ident()
        Execution.executions[self.thread_id] = self

        self.setup_context(self.request)
        self.handle_started()

        try:
            try:
                import_as_new(self.stage.file)
            except SystemExit as e:
                if e.code is not None and e.code != 0:
                    raise e
            self.handle_success()
        except Exception as e:
            self.handle_failure(e)
        finally:
            self.delete()

    def delete(self) -> None:
        del Execution.executions[self.thread_id]


def get_current_execution_throwable() -> Execution:
    execution = Execution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
