import inspect
from dataclasses import dataclass
from typing import Dict, List, Literal, Optional, TypedDict, Union

from abstra_internals.debug import make_exception_debug_data, make_frame_debug_data


class ValidationResult(TypedDict):
    status: bool
    message: str


BrowserMessageTypes = Literal[
    "execution:start",
    "auth:saved-jwt",
    "form:user-event",
    "form:page-response",
    "execute-js:response",
    "debug:close-attempt",
]

PythonMessageType = Literal[
    "execution:lock-failed",
    "execution:started",
    "execution:ended",
    "execution:stdout",
    "execution:stderr",
    "form:update-page",
    "form:mount-page",
    "auth:require-info",
    "auth:invalid-jwt",
    "auth:valid-jwt",
    "redirect:request",
    "execute-js:request",
]

MessageType = Union[BrowserMessageTypes, PythonMessageType]


class Message:
    type: PythonMessageType
    data: dict
    production_mode: bool

    def __init__(self, data: Dict, production_mode: bool):
        self.data = data
        self.production_mode = production_mode
        self.make_debug_data()

    def to_json(self) -> Dict[str, Union[str, dict]]:
        return {"type": self.type, **self.data}

    def make_debug_data(self):
        if not self.production_mode:
            debug_data = make_frame_debug_data(inspect.stack())
            self.data = {**self.data, **debug_data}


class ExecutionStdioMessage(Message):
    type: PythonMessageType

    def __init__(
        self, type: Literal["stdout", "stderr"], log: str, production_mode: bool
    ):
        super().__init__({"log": log}, production_mode)
        self.type = "execution:stdout" if type == "stdout" else "execution:stderr"


class AuthRequireInfoMessage(Message):
    type = "auth:require-info"

    def __init__(self, refresh: bool, production_mode: bool):
        super().__init__({"refresh": refresh}, production_mode)


class AuthInvalidJWTMessage(Message):
    type = "auth:invalid-jwt"

    def __init__(self, production_mode: bool):
        super().__init__({}, production_mode)


class AuthValidJWTMessage(Message):
    type = "auth:valid-jwt"

    def __init__(self, production_mode: bool):
        super().__init__({}, production_mode)


class RedirectRequestMessage(Message):
    type = "redirect:request"

    def __init__(self, url: str, query_params: dict, production_mode: bool):
        super().__init__({"url": url, "queryParams": query_params}, production_mode)


class ExecuteJSRequestMessage(Message):
    type = "execute-js:request"

    def __init__(self, code: str, context: dict, production_mode: bool):
        super().__init__({"code": code, "context": context}, production_mode)


class ExecutionLockFailedMessage(Message):
    type = "execution:lock-failed"

    def __init__(self, status: Optional[str], production_mode: bool):
        super().__init__({"status": status}, production_mode)


@dataclass
class CloseDTO:
    exit_status: Literal["SUCCESS", "EXCEPTION"]
    exception: Optional[Union[Exception, None]] = None


class ExecutionStartedMessage(Message):
    type = "execution:started"

    def __init__(self, execution_id: str, production_mode: bool):
        super().__init__({"executionId": execution_id}, production_mode)


class ExecutionEndedMessage(Message):
    type = "execution:ended"

    def __init__(self, close_dto: CloseDTO, production_mode: bool):
        self.close_dto = close_dto
        exc = str(close_dto.exception) if close_dto.exception else None
        super().__init__(
            {"exitStatus": close_dto.exit_status, "exception": exc}, production_mode
        )

    def make_debug_data(self):
        if not self.production_mode and self.close_dto.exception:
            debug = make_exception_debug_data(self.close_dto.exception)
            self.data = {**self.data, **debug}


class FormUpdatePageMessage(Message):
    type = "form:update-page"

    def __init__(
        self,
        widgets: List,
        validation: ValidationResult,
        event_seq: int,
        production_mode: bool,
    ):
        super().__init__(
            {
                "widgets": widgets,
                "validation": validation,
                "seq": event_seq,
            },
            production_mode,
        )


class FormMountPageMessage(Message):
    type = "form:mount-page"

    def __init__(
        self,
        widgets: List,
        actions: List,
        end_program: bool,
        reactive_polling_interval: int,
        steps: Optional[List],
        production_mode: bool,
    ):
        super().__init__(
            {
                "widgets": widgets,
                "actions": actions,
                "endProgram": end_program,
                "reactivePollingInterval": reactive_polling_interval,
                "steps": steps,
            },
            production_mode,
        )
