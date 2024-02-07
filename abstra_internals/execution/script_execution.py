from typing import Optional
from ..repositories.project.project import ScriptStage
from .execution import Execution, RequestData
from ..repositories.execution_logs import ExecutionLogsRepository
from ..repositories.execution import ExecutionRepository
from .stage_run_manager import StageRunManager


class ScriptExecution(Execution):
    stage_run_id: str

    def __init__(
        self,
        stage: ScriptStage,
        stage_run_id: str,
        stage_run_manager: StageRunManager,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
    ):
        request = RequestData(
            headers={},
            body="",
            method="GET",
            query_params={},
        )

        self.stage_run_id = stage_run_id

        super().__init__(
            stage=stage,
            is_initial=True,
            request=request,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
            stage_run_manager=stage_run_manager,
        )

    def handle_start(self) -> None:
        pass

    def handle_success(self) -> None:
        pass

    def handle_failure(self, e: Exception) -> None:
        pass

    def handle_lock_failed(self) -> None:
        pass

    def received_stage_run_id(self) -> Optional[str]:
        return self.stage_run_id
