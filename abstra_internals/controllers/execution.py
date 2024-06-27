from pathlib import Path
from typing import TYPE_CHECKING, Optional

from abstra_internals.compatibility.compat_traceback import print_exception
from abstra_internals.controllers.execution_client import (
    ExecutionClient,
    ExecutionClientStore,
)
from abstra_internals.entities.execution import (
    Execution,
    ExecutionDTO,
    RequestContext,
)
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import ActionStage, ProjectRepository
from abstra_internals.repositories.stage_run import StageRunRepository
from abstra_internals.services.execution_service import ExecutionService

STAGE_RUN_ID_PARAM_KEY = "abstra-run-id"

if TYPE_CHECKING:
    from abstra_internals.controllers.workflow import WorkflowEngine


class UnsetThread(Exception):
    pass


class ExecutionController:
    def __init__(
        self,
        *,
        stage: ActionStage,
        client: ExecutionClient,
        workflow_engine: "WorkflowEngine",
        request: Optional[RequestContext],
        target_stage_run_id: Optional[str],
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
    ) -> None:
        self.stage = stage
        self.client = client
        self.request = request
        self.workflow_engine = workflow_engine
        self.stage_run_repo = stage_run_repository
        self.execution_repo = execution_repository
        self.target_stage_run_id = target_stage_run_id

    def _should_create_initial_stage_run(self) -> bool:
        return (
            ProjectRepository.load().is_initial(self.stage)
            and not self.target_stage_run_id
        )

    def run_without_workflow(self, thread_data: dict) -> Optional[ExecutionDTO]:
        test_stage_run = self.stage_run_repo.create_detached(
            thread_data=thread_data,
            stage_id=self.stage.id,
        )

        self.target_stage_run_id = test_stage_run.id
        dto = self._run()
        self.stage_run_repo.remove(test_stage_run.id)
        return dto

    def run_with_workflow(self) -> Optional[ExecutionDTO]:
        dto = self._run()

        if dto:
            self.workflow_engine.handle_execution_end(dto)

        return dto

    def _run(self) -> Optional[ExecutionDTO]:
        try:
            ExecutionClientStore.set(self.client)
            stage_run_id = self.target_stage_run_id

            if self._should_create_initial_stage_run():
                stage_run = self.stage_run_repo.create_initial(self.stage.id)
                stage_run_id = stage_run.id

            if not stage_run_id:
                self.client.handle_unset_thread()
                return

            execution = Execution.create(
                stage=self.stage,
                request_context=self.request,
                stage_run_id=stage_run_id,
            )

            if not self.stage_run_repo.acquire_lock(
                stage_run_id=stage_run_id, execution_id=execution.id
            ):
                self.client.handle_lock_failed(stage_run_id)
                return

            self.execution_repo.create(execution.to_dto())
            self.client.handle_start(execution.id)

            status, exception = ExecutionService.run(Path(execution.stage.file))
            self.stage_run_repo.change_status(execution.stage_run_id, status)
            execution.set_status(status)
            self.execution_repo.update(execution.to_dto())

            if exception:
                print_exception(exception)
                self.client.handle_failure(exception)
            else:
                self.client.handle_success()

            return execution.to_dto()

        finally:
            ExecutionClientStore.clear()
            self.execution_repo.free_current()
