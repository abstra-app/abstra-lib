from typing import Optional
from .execution import ABSTRA_RUN_KEY, Execution, ResponseData


class HookExecution(Execution):
    @staticmethod
    def get_current_hook_execution() -> "HookExecution":
        execution = Execution.get_current_execution()
        if isinstance(execution, HookExecution):
            return execution

        raise Exception("No hook execution found")

    def handle_start(self) -> None:
        pass

    def handle_success(self) -> None:
        self.context.response = self.context.response or ("", 200, {})

    def handle_failure(self, e: Exception) -> None:
        self.context.response = self.context.response or ("", 500, {})

    def handle_lock_failed(self) -> None:
        self.context.response = self.context.response or ("", 409, {})

    def get_response(self) -> ResponseData:
        if self.context.response is None:
            raise Exception("No response set")

        return self.context.response

    def received_stage_run_id(self) -> Optional[str]:
        return self.context.request.query_params.get(ABSTRA_RUN_KEY)
