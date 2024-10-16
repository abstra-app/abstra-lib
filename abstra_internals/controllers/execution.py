import json
from threading import Thread
from typing import Optional

from abstra_internals.controllers.execution_client import (
    ExecutionClient,
    HeadlessClient,
)
from abstra_internals.controllers.execution_target import ExecutionTarget
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution, RequestContext
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import (
    ActionStage,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import StageRunRepository
from abstra_internals.settings import Settings
from abstra_internals.utils.dot_abstra import TEST_DATA_FILE


def read_test_data():
    test_file = Settings.root_path / TEST_DATA_FILE
    if not test_file.is_file():
        return {}

    return json.loads(test_file.read_text(encoding="utf-8"))


class LockFailedException(Exception):
    pass


class UnsetThreadException(Exception):
    pass


class NotStartedException(Exception):
    pass


class ExecutionController:
    def __init__(
        self,
        *,
        workflow_engine: IWorkflowEngine,
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
    ) -> None:
        self.workflow_engine = workflow_engine
        self.stage_run_repository = stage_run_repository
        self.execution_repository = execution_repository

    def run(
        self,
        *,
        wait=True,
        stage: ActionStage,
        client: Optional[ExecutionClient] = None,
        request: Optional[RequestContext] = None,
        target_stage_run_id: Optional[str] = None,
    ):
        if not client:
            client = HeadlessClient()

        if not target_stage_run_id:
            if not ProjectRepository.load().is_initial(stage):
                client.handle_unset_thread()
                raise UnsetThreadException()

            target_stage_run_id = self.stage_run_repository.create_initial(stage.id).id

        target_stage_run_id = self.stage_run_repository.ensure_not_abandoned(
            target_stage_run_id
        )

        execution = Execution.create(
            stage_run_id=target_stage_run_id,
            request_context=request,
            stage_id=stage.id,
        )

        if not self.stage_run_repository.acquire_lock(
            stage_run_id=target_stage_run_id, execution_id=execution.id
        ):
            client.handle_lock_failed(target_stage_run_id)
            raise LockFailedException()

        pthread = Thread(
            target=ExecutionTarget,
            kwargs=dict(
                stage=stage,
                client=client,
                execution=execution,
                workflow_engine=self.workflow_engine,
                stage_run_repository=self.stage_run_repository,
                execution_repository=self.execution_repository,
            ),
            name=f"{stage.title} - {execution.short_id}",
        )

        pthread.start()
        if wait:
            pthread.join()

    def test(
        self,
        stage: ActionStage,
        client: Optional[ExecutionClient] = None,
        request: Optional[RequestContext] = None,
    ):
        detached_stage_run = self.stage_run_repository.create_detached(
            thread_data=read_test_data(),
            stage_id=stage.id,
        )

        return self.run(
            stage=stage,
            client=client,
            request=request,
            target_stage_run_id=detached_stage_run.id,
        )
