import queue
import typing
import unittest
from collections import deque
from json import dumps, loads

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.workflow_engine_detached import DetachedWorkflowEngine
from abstra_internals.repositories.execution import EditorExecutionRepository
from abstra_internals.repositories.project.project import FormStage
from abstra_internals.repositories.stage_run import LocalStageRunRepository


class MockWebSocket:
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
    conn: MockWebSocket, msgs: typing.Deque[list], test_case: unittest.TestCase
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
    ws = MockWebSocket(browser_msgs)

    stage_run_repository = LocalStageRunRepository()
    execution_repository = EditorExecutionRepository()
    workflow_engine = DetachedWorkflowEngine(
        stage_run_repository=stage_run_repository,
    )

    ExecutionController(
        workflow_engine=workflow_engine,
        stage_run_repository=stage_run_repository,
        execution_repository=execution_repository,
    ).test(
        stage=form_json,
    )

    for msg in iter_messages(ws, msgs, test_case):
        pass
