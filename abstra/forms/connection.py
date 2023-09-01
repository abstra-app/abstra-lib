from abstra_internals.contract import Message
from abstra_internals.session import get_live_session_throwable


def send(message: Message):
    session = get_live_session_throwable()
    return session.send(message)


def receive():
    session = get_live_session_throwable()
    while True:
        type, data = session.recv()
        if type in ["heartbeat", "browser:try-disconnect"]:
            continue

        return data
