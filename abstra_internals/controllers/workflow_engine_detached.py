from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.entities.execution import Execution
from abstra_internals.repositories.factory import Repositories


class DetachedWorkflowEngine(IWorkflowEngine):
    def __init__(self, respositories: Repositories):
        self.repositories = respositories

    def handle_execution_end(self, execution: Execution):
        self.repositories.stage_run.remove(execution.stage_run_id)
