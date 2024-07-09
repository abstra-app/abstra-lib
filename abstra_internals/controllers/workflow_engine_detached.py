from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution
from abstra_internals.repositories.stage_run import StageRunRepository


class DetachedWorkflowEngine(IWorkflowEngine):
    def __init__(self, stage_run_repository: StageRunRepository):
        self.stage_run_repository = stage_run_repository

    def handle_execution_end(self, execution: Execution):
        self.stage_run_repository.remove(execution.stage_run_id)
