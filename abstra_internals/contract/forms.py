from dataclasses import dataclass
import typing
from .common import (  # exported
    Message,
    StdioMessage,
    AuthValidJWTMessage,
    AuthInvalidJWTMessage,
    AuthRequireInfoMessage,
)


@dataclass
class CloseDTO:
    exit_code: typing.Union[int, None] = None
    exception: typing.Union[str, None] = None


class SessionIdMessage(Message):
    type = "session-id"

    def __init__(self, session_id: str):
        super().__init__({"sessionId": session_id})


class CloseMessage(Message):
    type = "program:end"

    def __init__(self, close_dto: CloseDTO):
        super().__init__(
            {"exitCode": close_dto.exit_code, "exception": close_dto.exception}
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
