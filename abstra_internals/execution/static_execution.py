import typing

from .execution import Execution, NoExecutionFound


class StaticExecution(Execution):
    type = "static-execution"

    @classmethod
    def get_current_execution(cls) -> typing.Optional["StaticExecution"]:
        execution = Execution.get_current_execution()
        if isinstance(execution, StaticExecution):
            return execution

        return None

    def stdio(self, type: str, text: str):
        self.log(type, {"log": text})
        return super().stdio(type, text)


def get_static_execution_throwable() -> StaticExecution:
    execution = StaticExecution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
