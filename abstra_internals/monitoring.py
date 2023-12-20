import requests, typing, dataclasses

from .threaded import threaded
from .utils.environment import SIDECAR_URL, SIDECAR_HEADERS


@dataclasses.dataclass
class LogMessage:
    event: str
    executionId: str
    runtime_type: str
    runtime_name: str
    payload: typing.Dict[str, str]

    def json(self):
        return dict(
            event=str(self.event),
            payload=dict(self.payload),
            executionId=str(self.executionId),
            runtimeType=str(self.runtime_type),
            runtimeName=str(self.runtime_name),
        )


@threaded
def log(msg: LogMessage):
    if not SIDECAR_URL:
        return
    try:
        requests.post(f"{SIDECAR_URL}/log", headers=SIDECAR_HEADERS, json=msg.json())
    except Exception:
        pass  # TODO: handle this
