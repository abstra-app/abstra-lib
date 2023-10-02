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
