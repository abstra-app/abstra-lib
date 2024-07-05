import abc

from abstra_internals.entities.execution import ExecutionDTO


class IWorkflowEngine(abc.ABC):
    @abc.abstractmethod
    def handle_execution_end(self, execution_dto: ExecutionDTO):
        raise NotImplementedError()
