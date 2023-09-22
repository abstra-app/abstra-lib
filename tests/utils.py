from concurrent.futures import ThreadPoolExecutor
import queue, typing, unittest
from collections import deque
from json import loads, dumps
from abstra_internals.execution.execution import RequestData
from abstra_internals.server.api.classes import DashJSON, FormJSON
from abstra_internals.contract.dashes import ExecutionIdMessage
from abstra_internals.server.overloads import overloads
from abstra_internals.execution.dashes.dash_execution import DashExecution
from abstra_internals.execution.form_execution import FormExecution
from abstra_internals.execution.dashes.dash_runtime import DashRuntime

overloads()


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
    test_case: unittest.TestCase, form_json: FormJSON, msg_list: list, execution_id: str
):
    print("asserting form", form_json.file_path)

    msgs: typing.Deque[list] = deque(msg_list)
    executor = ThreadPoolExecutor()
    browser_msgs = [msg[1] for msg in msgs if msg[0] == "browser"]
    conn = MockConnection(browser_msgs)

    execution = FormExecution(form_json, conn, execution_id)  # type: ignore
    request_data = RequestData(body="{}", headers={}, method="GET", query_params={})
    executor.submit(execution.run, request_data)

    for msg in iter_messages(conn, msgs, test_case):
        pass


def assert_dash(
    test_case: unittest.TestCase, dash_json: DashJSON, msg_list: list, execution_id: str
):
    msgs = deque(msg_list)
    browser_msgs = [msg[1] for msg in msg_list if msg[0] == "browser"]
    conn = MockConnection(browser_msgs=browser_msgs)
    execution = DashExecution(dash_json, conn, execution_id)

    # copy of implemetation of DashExecution.run()
    dash_runtime = DashRuntime(execution=execution, dash_json=dash_json)
    execution.send(ExecutionIdMessage(execution_id))
    for _ in iter_messages(conn, msgs, test_case):
        source = msgs[0][0]
        if source == "browser":
            type, data = execution.recv()
            dash_runtime.handle(type, data)
