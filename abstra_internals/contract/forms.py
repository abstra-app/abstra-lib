from dataclasses import dataclass
import typing
from .common import (  # exported
    Message,
    StdioMessage,
    AuthValidJWTMessage,
    AuthInvalidJWTMessage,
    AuthRequireInfoMessage,
)

exit_status = {
    "success": "SUCCESS",
    "lock_acquisition_failed": "LOCK_ACQUISITION_FAILED",
    "generic_exception": "GENERIC_EXCEPTION",
}


@dataclass
class CloseDTO:
    exit_status: str
    exception: typing.Union[str, None] = None

    def __post_init__(self):
        if self.exit_status not in exit_status.values():
            raise ValueError(
                f"exit_status must be one of {exit_status.values()}, got {self.exit_status}"
            )


class ExecutionIdMessage(Message):
    type = "execution-id"

    def __init__(self, execution_id: str):
        super().__init__({"executionId": execution_id})


class CloseMessage(Message):
    type = "program:end"

    def __init__(self, close_dto: CloseDTO):
        super().__init__(
            {"exitStatus": close_dto.exit_status, "exception": close_dto.exception}
        )


class FormUpdateMessage(Message):
    type = "form-update"

    def __init__(self, widgets: typing.List, validation: typing.Dict, event_seq: int):
        super().__init__(
            {
                "widgets": widgets,
                "validation": validation,
                "seq": event_seq,
            }
        )


class FormMessage(Message):
    type = "form"

    def __init__(
        self,
        widgets: typing.List,
        actions: typing.List,
        end_program: bool,
        reactive_polling_interval: int,
        steps: typing.List,
    ):
        super().__init__(
            {
                "widgets": widgets,
                "actions": actions,
                "endProgram": end_program,
                "reactivePollingInterval": reactive_polling_interval,
                "steps": steps,
            }
        )
