import typing
from typing import Dict, Optional, Union
from .execution import RequestData
from .static_execution import StaticExecution
from ..repositories import StageRunRepository


class HookExecution(StaticExecution):
    def handle_started(self) -> None:
        self.log("started", {"request": self.context["request"]})

    def handle_success(self) -> None:
        self.context["response"] = self.context.get("response", ("", 200, {}))
        self.log(
            "success",
            {
                "response": self.context["response"],
            },
        )

    def handle_failure(self, exception: Exception) -> None:
        self.context["response"] = self.context.get("response", ("", 500, {}))
        self.log(
            "failed",
            {
                "response": self.context["response"],
                "error": str(exception),
            },
        )
        return super().handle_failure(exception)

    def get_response(self) -> typing.Tuple[Dict, int, Dict]:
        if "response" not in self.context:
            raise Exception("No response found")

        return self.context["response"]

    def setup_context(self, request: RequestData) -> None:
        self.context["request"] = (
            request.body,
            request.query_params,
            request.headers,
        )
