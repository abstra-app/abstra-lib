from dataclasses import dataclass
from typing import Optional, Union, List, Literal, TypedDict


class ValidationResult(TypedDict):
    status: bool
    message: str


class Message:
    type: str
    data: dict

    def __init__(self, data: dict):
        self.data = data

    def to_json(self, is_preview: bool):
        return {"type": self.type, **self.data}


class StdioMessage(Message):
    type = "stdio"

    def __init__(self, type: str, log: str):
        super().__init__({"log": log})
        self.type = type


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


class RedirectMessage(Message):
    type = "redirect"

    def __init__(self, url: str, query_params: dict):
        super().__init__({"url": url, "queryParams": query_params})


class AlertMessage(Message):
    type = "alert"

    def __init__(self, message: str, severity: str):
        super().__init__({"message": message, "severity": severity})


class ExecuteJSRequestMessage(Message):
    type = "execute-js:request"

    def __init__(self, code: str, context: dict):
        super().__init__({"code": code, "context": context})


class FilesChangedMessage(Message):
    type = "files:changed"

    def __init__(self):
        super().__init__({})


class LockFailedMessage(Message):
    type = "stage-run:lock-failed"

    def __init__(self, status: Optional[str]):
        super().__init__({"status": status})


@dataclass
class CloseDTO:
    exit_status: Literal["SUCCESS", "EXCEPTION"]
    exception: Optional[Union[Exception, None]] = None


class ExecutionIdMessage(Message):
    type = "execution-id"

    def __init__(self, execution_id: str):
        super().__init__({"executionId": execution_id})


class CloseMessage(Message):
    type = "program:end"
    close_dto: CloseDTO

    def __init__(self, close_dto: CloseDTO):
        self.close_dto = close_dto
        exc = str(close_dto.exception) if close_dto.exception else None
        super().__init__({"exitStatus": close_dto.exit_status, "exception": exc})


class FormUpdateMessage(Message):
    type = "form-update"

    def __init__(self, widgets: List, validation: ValidationResult, event_seq: int):
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
