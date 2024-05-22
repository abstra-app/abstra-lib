import unittest
from datetime import datetime

from abstra_internals.repositories.execution_logs import (
    FormEventLogEntry,
    LocalExecutionLogsRepository,
    StdioLogEntry,
)
from tests.fixtures import clear_dir, init_dir


class TestLocalExecutionLogsRepository(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.repository = LocalExecutionLogsRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_starts_empty(self):
        logs = self.repository.get("foo")
        self.assertEqual(len(logs), 0)

    def test_create_stdio(self):
        log_entry = StdioLogEntry(
            execution_id="foo",
            created_at=datetime.now(),
            event="stdout",
            payload={"text": "hello"},
            sequence=1,
        )
        self.repository.save(log_entry)
        logs = self.repository.get("foo")
        self.assertEqual(len(logs), 1)
        self.assertIsInstance(logs[0], StdioLogEntry)
        self.assertEqual(logs[0].payload["text"], "hello")  # type: ignore // above assertion is enough

    def test_create_form_event(self):
        log_entry = FormEventLogEntry(
            execution_id="foo",
            created_at=datetime.now(),
            payload={"messageType": "foo", "messagePayload": {"bar": "baz"}},
            sequence=1,
        )
        self.repository.save(log_entry)
        logs = self.repository.get("foo")
        self.assertEqual(len(logs), 1)
        self.assertIsInstance(logs[0], FormEventLogEntry)
        self.assertEqual(logs[0].payload["messageType"], "foo")  # type: ignore // above assertion is enough

    def test_create_multiple(self):
        log_entry1 = StdioLogEntry(
            execution_id="foo",
            created_at=datetime.now(),
            event="stdout",
            payload={"text": "hello"},
            sequence=1,
        )
        log_entry2 = FormEventLogEntry(
            execution_id="foo",
            created_at=datetime.now(),
            payload={"messageType": "foo", "messagePayload": {"bar": "baz"}},
            sequence=2,
        )
        self.repository.save(log_entry1)
        self.repository.save(log_entry2)
        logs = self.repository.get("foo")
        self.assertEqual(len(logs), 2)
        self.assertIsInstance(logs[0], StdioLogEntry)
        self.assertIsInstance(logs[1], FormEventLogEntry)
