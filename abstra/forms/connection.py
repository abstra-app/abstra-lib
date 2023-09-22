from abstra_internals.contract import Message
from abstra_internals.execution.live_execution import get_live_execution_throwable


def send(message: Message):
    execution = get_live_execution_throwable()
    return execution.send(message)


def receive():
    execution = get_live_execution_throwable()
    while True:
        type, data = execution.recv()
        if type in ["heartbeat", "browser:try-disconnect"]:
            continue

        return data
