from abstra_server.runtimes.forms.message_handler import MessageBroker
from abstra_server.contract import forms_contract
from abstra_server.session import LiveSession
from concurrent.futures import ThreadPoolExecutor
from collections import deque
from json import loads, dumps
import queue, typing, unittest
from abstra_server.overloads import __overload_abstra_forms_sdk
from abstra_server.utils import formated_traceback_error_message
from abstra_server.runtimes.dashes import DashRuntime
from abstra_server.api.classes import DashJSON
from abstra_server.contract.dashes import ExecutionIdMessage

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

    def close(self, error_msg: typing.Optional[Exception] = None):
        self.msgs.put(["close", error_msg])

    @property
    def connected(self):
        raise NotImplementedError()


def start_form_sync(conn: MockConnection, code: str, session_id: str):
    try:
        error = None

        session = LiveSession(conn, "forms", "path")
        session.id = session_id
        broker = MessageBroker(session)
        session.context.update(broker=broker)
        session.send(forms_contract.SessionIdMessage(session.id))
        namespace: typing.Dict[str, typing.Any] = {}

        exec(code, namespace, namespace)
    except Exception as e:
        print(formated_traceback_error_message(e))

        error = e
    finally:
        conn.close(error)


def iter_messages(
    conn: MockConnection, msgs: typing.Deque[list], test_case: unittest.TestCase
):
    while True:
        yield
        py_msg = conn.msgs.get(block=True, timeout=2)
        if py_msg[0] == "close":
            if py_msg[1] is None:
                return
            else:
                raise py_msg[1]
        if len(msgs) == 0:
            raise Exception(f"Code is sending unexpected messages: {py_msg}")
        else:
            test_case.maxDiff = None
            test_case.assertEqual(py_msg, msgs[0])
            msgs.popleft()

            if len(msgs) == 0:
                return


def assert_form(
    test_case: unittest.TestCase, code: str, msg_list: list, session_id: str
):
    msgs: typing.Deque[list] = deque(msg_list)
    executor = ThreadPoolExecutor()
    browser_msgs = [msg[1] for msg in msgs if msg[0] == "browser"]
    conn = MockConnection(browser_msgs)
    executor.submit(start_form_sync, conn, code, session_id)

    for msg in iter_messages(conn, msgs, test_case):
        pass


def assert_dash(
    test_case: unittest.TestCase, dash_json: DashJSON, msg_list: list, session_id: str
):
    msgs = deque(msg_list)
    browser_msgs = [msg[1] for msg in msg_list if msg[0] == "browser"]
    conn = MockConnection(browser_msgs=browser_msgs)
    session = LiveSession(conn, "dashes", "path")
    dash_runtime = DashRuntime(session=session, dash_json=dash_json)

    session.send(ExecutionIdMessage(session_id))
    for _ in iter_messages(conn, msgs, test_case):
        source = msgs[0][0]
        if source == "browser":
            type, data = session.recv()
            dash_runtime.handle(type, data)
