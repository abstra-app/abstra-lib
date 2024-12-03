import json
from typing import Optional

from abstra_internals.controllers.execution_client import (
    ExecutionClient,
    HeadlessClient,
)
from abstra_internals.controllers.execution_target import ExecutionTarget
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution, PreExecution, RequestContext
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import ActionStage, ProjectRepository
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
        repositories: Repositories,
        workflow_engine: IWorkflowEngine,
    ) -> None:
        self.repositories = repositories
        self.workflow_engine = workflow_engine

    def submit(
        self,
        stage: ActionStage,
        request: Optional[RequestContext] = None,
        target_stage_run_id: Optional[str] = None,
    ):
        return self.repositories.producer.submit(
            PreExecution(
                request=request,
                stage_id=stage.id,
                target_stage_run_id=target_stage_run_id,
            )
        )

    def run(
        self,
        *,
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

            target_stage_run_id = self.repositories.stage_run.create_initial(
                stage.id
            ).id

        target_stage_run_id = self.repositories.stage_run.ensure_not_abandoned(
            target_stage_run_id
        )

        execution = Execution.create(
            stage_run_id=target_stage_run_id,
            request_context=request,
            stage_id=stage.id,
        )

        if not self.repositories.stage_run.acquire_lock(
            stage_run_id=target_stage_run_id, execution_id=execution.id
        ):
            client.handle_lock_failed(target_stage_run_id)
            raise LockFailedException()

        ExecutionTarget(
            stage=stage,
            client=client,
            execution=execution,
            repositories=self.repositories,
            workflow_engine=self.workflow_engine,
        )

    def test(
        self,
        stage: ActionStage,
        client: Optional[ExecutionClient] = None,
        request: Optional[RequestContext] = None,
    ):
        detached_stage_run = self.repositories.stage_run.create_detached(
            thread_data=read_test_data(),
            stage_id=stage.id,
        )

        return self.run(
            stage=stage,
            client=client,
            request=request,
            target_stage_run_id=detached_stage_run.id,
        )
