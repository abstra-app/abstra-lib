import requests, typing, dataclasses

from .utils.environment import LOG_SERVICE_URL
from .threaded import threaded


@dataclasses.dataclass
class LogMessage:
    event: str
    executionId: str
    payload: typing.Dict[str, str]
    runtime_type: str
    runtime_name: str

    def json(self):
        return dict(
            event=str(self.event),
            executionId=str(self.executionId),
            payload=dict(self.payload),
            runtimeType=str(self.runtime_type),
            runtimeName=str(self.runtime_name),
        )


@threaded
def log(msg: LogMessage):
    if not LOG_SERVICE_URL:
        return
    try:
        requests.post(LOG_SERVICE_URL, json=msg.json())
    except Exception:
        pass  # TODO: handle this
