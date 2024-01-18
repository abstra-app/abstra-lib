import queue, typing, unittest
from collections import deque
from json import loads, dumps

from abstra_internals.stdio_monkey_patch import override_stdio
from abstra_internals.execution.execution import RequestData
from abstra_internals.execution.form_execution import FormExecution
from abstra_internals.repositories.project.project import FormStage
from abstra_internals.execution.stoppable_thread import StoppableThread

override_stdio(print_exceptions=True)


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
    test_case: unittest.TestCase,
    form_json: FormStage,
    msg_list: list,
    execution_id: str,
):
    msgs: typing.Deque[list] = deque(msg_list)
    browser_msgs = [msg[1] for msg in msgs if msg[0] == "browser"]
    conn = MockConnection(browser_msgs)

    request_data = RequestData(body="{}", headers={}, method="GET", query_params={})
    execution = FormExecution(
        stage=form_json,
        is_initial=True,
        connection=conn,  # type: ignore
        request=request_data,
        execution_id=execution_id,
    )  # type: ignore

    thread = StoppableThread(target=execution.run, args=())
    thread.start()

    for msg in iter_messages(conn, msgs, test_case):
        pass
