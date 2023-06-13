from .common import (  # exported
    Message,
    StdioMessage,
    AuthValidJWTMessage,
    AuthInvalidJWTMessage,
    AuthRequireInfoMessage,
)


# class ProgramEndMessage(Message):
#     type = "program:end"

#     def __init__(self, exit_code: int, exception: str, frames: list):
#         super().__init__(
#             {
#                 "exitCode": exit_code,
#                 "exception": exception,
#             }
#         )


class SessionIdMessage(Message):
    type = "session-id"

    def __init__(self, session_id: str):
        super().__init__({"sessionId": session_id})


class GenericMessage(Message):
    type = None

    def __init__(self, data: dict):
        self.type = data["type"]
        super().__init__(data)
