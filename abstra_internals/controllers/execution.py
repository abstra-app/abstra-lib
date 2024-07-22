import json
from threading import Thread
from typing import Optional

from abstra_internals.controllers.execution_client import (
    ExecutionClient,
)
from abstra_internals.controllers.execution_target import ExecutionTarget
from abstra_internals.controllers.workflow_engine_detached import DetachedWorkflowEngine
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution, RequestContext
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import ActionStage, ProjectRepository
from abstra_internals.repositories.stage_run import StageRunRepository
from abstra_internals.settings import Settings
from abstra_internals.utils.dot_abstra import TEST_DATA_FILE

STAGE_RUN_ID_PARAM_KEY = "abstra-run-id"


class LockFailedException(Exception):
    pass


class UnsetThreadException(Exception):
    pass


class NotStartedException(Exception):
    pass


class ExecutionController:
    pthread: Optional[Thread] = None

    def __init__(
        self,
        *,
        stage: ActionStage,
        client: ExecutionClient,
        workflow_engine: IWorkflowEngine,
        request: Optional[RequestContext],
        target_stage_run_id: Optional[str],
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
    ) -> None:
        self.stage = stage
        self.client = client
        self.request = request
        self.workflow_engine = workflow_engine
        self.target_stage_run_id = target_stage_run_id
        self.stage_run_repository = stage_run_repository
        self.execution_repository = execution_repository

    def run(self):
        if not self.target_stage_run_id:
            if not ProjectRepository.load().is_initial(self.stage):
                self.client.handle_unset_thread()
                raise UnsetThreadException()

            self.target_stage_run_id = self.stage_run_repository.create_initial(
                self.stage.id
            ).id

        execution = Execution.create(
            stage_run_id=self.target_stage_run_id,
            request_context=self.request,
            stage_id=self.stage.id,
        )

        if not self.stage_run_repository.acquire_lock(
            stage_run_id=self.target_stage_run_id, execution_id=execution.id
        ):
            self.client.handle_lock_failed(self.target_stage_run_id)
            raise LockFailedException()

        self.pthread = Thread(
            target=ExecutionTarget,
            kwargs=dict(
                stage=self.stage,
                client=self.client,
                execution=execution,
                workflow_engine=self.workflow_engine,
                stage_run_repository=self.stage_run_repository,
                execution_repository=self.execution_repository,
            ),
            name=f"{self.stage.title} - {execution.short_id}",
        )

        self.pthread.start()
        return self

    def wait(self):
        if not self.pthread:
            raise NotStartedException()

        self.pthread.join()


class DetachedExecutionController(ExecutionController):
    @staticmethod
    def read_test_data() -> dict:
        test_file = Settings.root_path / TEST_DATA_FILE
        if not test_file.is_file():
            return {}

        return json.loads(test_file.read_text(encoding="utf-8"))

    def __init__(
        self,
        *,
        stage: ActionStage,
        client: ExecutionClient,
        request: Optional[RequestContext],
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
        workflow_engine: IWorkflowEngine,
        target_stage_run_id: Optional[str],
    ) -> None:
        detached_stage_run = stage_run_repository.create_detached(
            thread_data=self.read_test_data(),
            stage_id=stage.id,
        )

        super().__init__(
            stage=stage,
            client=client,
            request=request,
            target_stage_run_id=detached_stage_run.id,
            stage_run_repository=stage_run_repository,
            execution_repository=execution_repository,
            workflow_engine=DetachedWorkflowEngine(stage_run_repository),
        )
