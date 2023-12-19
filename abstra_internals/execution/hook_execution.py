from typing import Dict, Tuple

from .execution import RequestData
from .static_execution import StaticExecution


class HookExecution(StaticExecution):
    def handle_started(self):
        self.log("started", {"request": self.context["request"]})
        return super().handle_started()

    def handle_success(self) -> str:
        self.context["response"] = self.context.get("response", ("", 200, {}))
        self.log(
            "success",
            {
                "response": self.context["response"],
            },
        )
        return super().handle_success()

    def handle_failure(self, e: Exception) -> str:
        self.context["response"] = self.context.get("response", ("", 500, {}))
        self.log(
            "failed",
            {
                "response": self.context["response"],
                "error": str(e),
            },
        )
        return super().handle_failure(e)

    def handle_lock_failed(self) -> None:
        self.context["response"] = self.context.get("response", ("", 409, {}))
        return super().handle_lock_failed()

    def get_response(self) -> Tuple[Dict, int, Dict]:
        if "response" not in self.context:
            raise Exception("No response found")

        return self.context["response"]

    def setup_context(self, request: RequestData):
        self.context["request"] = (
            request.body,
            request.query_params,
            request.headers,
        )

        self.init_stage_run(request.query_params.get(self.abstra_run_key))
