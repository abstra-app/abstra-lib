import abc

from abstra_internals.entities.execution import Execution


class IWorkflowEngine(abc.ABC):
    @abc.abstractmethod
    def handle_execution_end(self, execution: Execution):
        raise NotImplementedError()
