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

    def __init__(self):
        super().__init__({})


class AuthInvalidJWTMessage(Message):
    type = "auth:invalid-jwt"

    def __init__(self):
        super().__init__({})


class AuthValidJWTMessage(Message):
    type = "auth:valid-jwt"

    def __init__(self):
        super().__init__({})
