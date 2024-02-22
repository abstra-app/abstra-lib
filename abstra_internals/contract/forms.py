from dataclasses import dataclass
from typing import Optional, Union, List, Literal, TypedDict, Dict


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
    "env:files-changed",
]

MessageType = Union[BrowserMessageTypes, PythonMessageType]


class Message:
    type: PythonMessageType
    data: dict

    def __init__(self, data: Dict):
        self.data = data

    def to_json(self) -> Dict[str, Union[str, dict]]:
        return {"type": self.type, **self.data}


class ExecutionStdioMessage(Message):
    type: PythonMessageType

    def __init__(self, type: Literal["stdout", "stderr"], log: str):
        super().__init__({"log": log})
        self.type = "execution:stdout" if type == "stdout" else "execution:stderr"


class AuthRequireInfoMessage(Message):
    type = "auth:require-info"

    def __init__(self, refresh: bool):
        super().__init__({"refresh": refresh})


class AuthInvalidJWTMessage(Message):
    type = "auth:invalid-jwt"

    def __init__(self):
        super().__init__({})


class AuthValidJWTMessage(Message):
    type = "auth:valid-jwt"

    def __init__(self):
        super().__init__({})


class RedirectRequestMessage(Message):
    type = "redirect:request"

    def __init__(self, url: str, query_params: dict):
        super().__init__({"url": url, "queryParams": query_params})


class ExecuteJSRequestMessage(Message):
    type = "execute-js:request"

    def __init__(self, code: str, context: dict):
        super().__init__({"code": code, "context": context})


class FilesChangedMessage(Message):
    type = "env:files-changed"

    def __init__(self):
        super().__init__({})


class ExecutionLockFailedMessage(Message):
    type = "execution:lock-failed"

    def __init__(self, status: Optional[str]):
        super().__init__({"status": status})


@dataclass
class CloseDTO:
    exit_status: Literal["SUCCESS", "EXCEPTION"]
    exception: Optional[Union[Exception, None]] = None


class ExecutionStartedMessage(Message):
    type = "execution:started"

    def __init__(self, execution_id: str):
        super().__init__({"executionId": execution_id})


class ExecutionEndedMessage(Message):
    type = "execution:ended"

    def __init__(self, close_dto: CloseDTO):
        self.close_dto = close_dto
        exc = str(close_dto.exception) if close_dto.exception else None
        super().__init__({"exitStatus": close_dto.exit_status, "exception": exc})


class FormUpdatePageMessage(Message):
    type = "form:update-page"

    def __init__(self, widgets: List, validation: ValidationResult, event_seq: int):
        super().__init__(
            {
                "widgets": widgets,
                "validation": validation,
                "seq": event_seq,
            }
        )


class FormMountPageMessage(Message):
    type = "form:mount-page"

    def __init__(
        self,
        widgets: List,
        actions: List,
        end_program: bool,
        reactive_polling_interval: int,
        steps: List,
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
