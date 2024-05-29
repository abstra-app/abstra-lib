from pathlib import Path
from typing import Optional, Type

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
from abstra_internals.repositories.project.project import (
    ActionStage,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import (
    StageRunRepository,
)
from abstra_internals.services.execution_service import ExecutionService

STAGE_RUN_ID_PARAM_KEY = "abstra-run-id"


class UnsetThread(Exception):
    pass


class ExecutionController:
    def __init__(
        self,
        stage: ActionStage,
        target_stage_run_id: Optional[str],
        request: Optional[RequestContext],
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
        project_repository: Type[ProjectRepository],
        client: ExecutionClient,
    ) -> None:
        self.stage_run_repo = stage_run_repository
        self.execution_repo = execution_repository
        self.project_repo = project_repository

        self.client = client
        self.stage = stage
        self.target_stage_run_id = target_stage_run_id
        self.request = request

    def _should_create_initial_stage_run(self) -> bool:
        # TODO: move logic to stage entity
        project = self.project_repo.load()
        if not project:
            raise Exception("Project not found")

        return project.is_initial(self.stage) and not self.target_stage_run_id

    def run_detached(self, thread_data: dict) -> Optional[ExecutionDTO]:
        test_stage_run = self.stage_run_repo.create_detached(
            self.stage.id, thread_data=thread_data
        )

        self.target_stage_run_id = test_stage_run.id
        dto = self.run()
        self.stage_run_repo.remove(test_stage_run.id)
        return dto

    def run(self) -> Optional[ExecutionDTO]:
        ExecutionClientStore.set(self.client)
        stage_run_id = self.target_stage_run_id

        if self._should_create_initial_stage_run():
            stage_run = self.stage_run_repo.create_initial(self.stage.id)
            stage_run_id = stage_run.id

        if not stage_run_id:
            self.client.handle_unset_thread()
            ExecutionClientStore.clear()
            return

        execution = Execution.create(
            stage=self.stage,
            request_context=self.request,
            stage_run_id=stage_run_id,
        )

        if self.target_stage_run_id and not self.stage_run_repo.acquire_lock(
            self.target_stage_run_id, execution.id
        ):
            self.client.handle_lock_failed(self.target_stage_run_id)
            ExecutionClientStore.clear()
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

        ExecutionClientStore.clear()
        return execution.to_dto()
