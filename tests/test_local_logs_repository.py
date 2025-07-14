import unittest
from datetime import datetime

from abstra_internals.repositories.execution_logs import (
    LocalExecutionLogsRepository,
    LogEntry,
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
        log_entry = LogEntry(
            execution_id="foo",
            stage_id="bar",
            created_at=datetime.now(),
            event="stdout",
            payload={"text": "hello"},
            sequence=1,
        )
        self.repository.save(log_entry)
        logs = self.repository.get("foo")
        self.assertEqual(len(logs), 1)
        self.assertIsInstance(logs[0], LogEntry)
        self.assertEqual(logs[0].payload["text"], "hello")  # type: ignore // above assertion is enough
