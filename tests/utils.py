from abstra_server.runtimes.forms.message_handler import MessageBroker
from abstra_server.contract import forms_contract
from abstra_server.session import LiveSession
from concurrent.futures import ThreadPoolExecutor
from collections import deque
from json import loads, dumps
import queue, typing
from abstra_server.overloads import __overload_abstra_forms_sdk
from abstra_server.utils import formated_traceback_error_message

__overload_abstra_forms_sdk()


class MockConnection:
    msgs: queue.Queue

    def __init__(self, browser_msgs) -> None:
        self.browser_msgs = deque(browser_msgs)
        self.msgs = queue.Queue()

    def send(self, data: str):
        self.msgs.put(["python", loads(data)])

    def receive(self) -> str:
        if len(self.browser_msgs) == 0:
            self.close()

        self.msgs.put(["browser", self.browser_msgs[0]])
        return dumps(self.browser_msgs.popleft())

    def close(self, error_msg: typing.Optional[str] = None):
        self.msgs.put(["close", error_msg])

    @property
    def connected(self):
        raise NotImplementedError()


def assert_form_sync(conn: MockConnection, code: str, session_id: str):
    try:
        error_msg = None

        session = LiveSession(conn, "forms", "path")
        session.id = session_id
        broker = MessageBroker(session)
        session.context.update(broker=broker)
        session.send(forms_contract.SessionIdMessage(session.id))
        namespace: typing.Dict[str, typing.Any] = {}

        exec(code, namespace, namespace)
    except Exception as e:
        print(formated_traceback_error_message(e))

        error_msg = str(e)
        raise e
    finally:
        conn.close(error_msg)


def assert_form(code: str, msg_list: list, session_id: str):
    msgs: typing.Deque[list] = deque(msg_list)
    executor = ThreadPoolExecutor()
    browser_msgs = [msg[1] for msg in msgs if msg[0] == "browser"]
    conn = MockConnection(browser_msgs)
    executor.submit(assert_form_sync, conn, code, session_id)

    while True:
        py_msg = conn.msgs.get(block=True, timeout=2)
        if py_msg[0] == "close":
            if py_msg[1] is None:
                break
            else:
                raise Exception(py_msg[1])
        if len(msgs) == 0:
            raise Exception(f"Code is sending unexpected messages: {py_msg}")
        elif msgs[0] != py_msg:
            raise Exception(f"Got {py_msg}, next expected messages: {msgs}")
        else:
            msgs.popleft()
