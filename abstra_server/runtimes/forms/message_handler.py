import inspect

from ...session import LiveSession
from ...contract import forms_contract

from abstra.forms.debug_utils import Frames, make_debug_data, CloseDTO

"""
class Connection:
    url_params: dict = {}

    def close(self, dto: CloseDTO):
        pass
        
    def send(self, data: dict, frames: Frames = None):
        pass
        
    def receive(self, path: str = "") -> any:
        pass

"""


class MessageBroker:
    session: LiveSession
    url_params: dict = {}

    def __init__(self, session: LiveSession):
        self.session = session
        self.__wait_start()

    def __wait_start(self):
        type = None
        while type != "start":
            type, data = self.session.recv()
        self.url_params = data["params"]

    def __browser_msg_handler__log_only(self, data: dict):
        # log data
        pass

    def __browser_msg_handler(self) -> dict:
        type, data = self.session.recv()
        if type in ["heartbeat", "executed-by", "metadata", "browser:try-disconnect"]:
            self.__browser_msg_handler__log_only(data)
            return self.__browser_msg_handler()
        return data

    # Connection interface
    def send(self, data: dict, frames: Frames = None):
        if self.session.is_preview:
            debug = make_debug_data(frames or inspect.stack())
            data.update(debug)
        self.session.send(forms_contract.GenericMessage(data))

    def receive(self, path: str = ""):
        data = self.__browser_msg_handler()
        if not path:
            return data
        return data.get(path)

    def close(self, dto: CloseDTO):
        self.send(
            {
                "type": "program:end",
                "exitCode": dto.exit_code,
                "exception": dto.exception,
            },
            frames=dto.frames,
        )
        self.session.close()
