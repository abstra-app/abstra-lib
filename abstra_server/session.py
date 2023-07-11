import flask_sock, typing, threading, uuid, traceback, os
from .utils import serialize, deserialize
from .contract import Message, should_send, StdioMessage


class Execution:
    type = "execution"
    executions: typing.ClassVar[typing.Dict] = {}

    @classmethod
    def get_execution(cls) -> typing.Optional["Execution"]:
        thread_id = threading.get_ident()
        return cls.executions.get(thread_id)

    def __init__(self):
        self.context = {}
        self.id = uuid.uuid4().__str__()
        self.stderr: typing.List[str] = []
        self.stdout: typing.List[str] = []
        self.thread_id = threading.get_ident()
        Execution.executions[self.thread_id] = self

    @property
    def is_preview(self) -> bool:
        # return self.__is_preview
        return os.environ.get("ABSTRA_ENVIRONMENT") != "production"

    def stdio(self, type: str, text: str):
        if type == "stderr":
            self.stderr.append(text)
        elif type == "stdout":
            self.stdout.append(text)
        # TODO: save to .logs

    def delete(self):
        del Execution.executions[self.thread_id]


class LiveSession(Execution):
    type = "session"

    @staticmethod
    def get_session() -> typing.Optional["LiveSession"]:
        execution = Execution.get_execution()
        if isinstance(execution, LiveSession):
            return execution

        return None

    def __init__(self, connection: flask_sock.Server, is_preview: bool):
        super().__init__()
        self.__is_preview = is_preview
        self.__connection = connection

    def send(self, msg: Message):
        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self.__connection.send(str_data)

    def recv(self) -> typing.Tuple[str, typing.Dict]:
        str_data = self.__connection.receive()
        data = deserialize(str_data)
        return data["type"], data

    def close(self, reason: str = ""):
        self.__connection.close(message=reason)

    def stdio(self, type: str, text: str):
        self.send(StdioMessage(type, text))
        return super().stdio(type, text)

    @property
    def connected(self) -> bool:
        return self.__connection.connected

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)
        self.delete()


class StaticSession(Execution):
    type = "static-session"

    @staticmethod
    def get_session() -> typing.Optional["StaticSession"]:
        execution = Execution.get_execution()
        if isinstance(execution, StaticSession):
            return execution

        return None

    def __init__(self):
        super().__init__()
