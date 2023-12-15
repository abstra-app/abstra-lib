import unittest

from abstra_internals.local_log import (
    LocalLogMessage,
    append_to_or_create_log_file,
    get_local_logs,
)
from abstra_internals.utils.file import LOCAL_LOG_FOLDER
from tests.fixtures import clear_dir, init_dir


class TestLocalLogFile(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)

    def test_create_and_read_log_file_work_properly(self):
        execution_id = "execution_id"
        local_log_message = LocalLogMessage(
            event="event",
            execution_id=execution_id,
            stage_run_id="stage_run_id",
            payload=dict(),
            runtime_type="runtime_type",
            runtime_id="runtime_id",
        )
        append_to_or_create_log_file(local_log_message)

        log_file_path = self.root / LOCAL_LOG_FOLDER / f"{execution_id}.log"
        self.assertTrue(log_file_path.exists())

        logs = get_local_logs(execution_id)
        self.assertEqual(len(logs), 1)

        log = logs[0]
        self.assertEqual(log.json(), local_log_message.json())

    def test_create_and_read_log_file_work_properly_with_multiple_logs(self):
        execution_id = "execution_id"
        local_log_message1 = LocalLogMessage(
            event="event1",
            execution_id=execution_id,
            stage_run_id="stage_run_id",
            payload=dict(),
            runtime_type="runtime_type",
            runtime_id="runtime_id",
        )
        local_log_message2 = LocalLogMessage(
            event="event2",
            execution_id=execution_id,
            stage_run_id="stage_run_id",
            payload=dict(),
            runtime_type="runtime_type",
            runtime_id="runtime_id",
        )
        append_to_or_create_log_file(local_log_message1)
        append_to_or_create_log_file(local_log_message2)

        log_file_path = self.root / LOCAL_LOG_FOLDER / f"{execution_id}.log"
        self.assertTrue(log_file_path.exists())

        logs = get_local_logs(execution_id)
        self.assertEqual(len(logs), 2)

        log1 = logs[0]
        self.assertEqual(log1.json(), local_log_message1.json())

        log2 = logs[1]
        self.assertEqual(log2.json(), local_log_message2.json())

    def test_get_local_logs_returns_empty_list_if_no_logs(self):
        execution_id = "execution_id"
        logs = get_local_logs(execution_id)
        self.assertEqual(len(logs), 0)

    def test_get_local_logs_ignores_wrong_lines(self):
        log_folder = self.root / LOCAL_LOG_FOLDER
        log_folder.mkdir(parents=True, exist_ok=True)
        log_file_with_corrupted_line = self.root / LOCAL_LOG_FOLDER / "execution_id.log"

        # First line is correct
        # Second line was corrupted and is missing a character
        # Third line is correct
        log_file_with_corrupted_line.write_text(
            '{"event": "stdout", "executionId": "execution_id", "stageRunId": "stage_run_id", "payload": {"log": "Some log"}, "runtimeType": "form", "runtimeId": "runtime_id", "createdAt": 1702603307.300161}\n'
            + '"event": "stdout", "executionId": "execution_id", "stageRunId": "stage_run_id", "payload": {"log": "Wrong log"}, "runtimeType": "form", "runtimeId": "runtime_id", "createdAt": 1702603307.30061}\n'
            + '{"event": "stdout", "executionId": "execution_id", "stageRunId": "stage_run_id", "payload": {"log": "Wrong log"}, "runtimeType": "form", "runtimeId": "runtime_id", "createdAt": 1702603307.30061}\n'
        )

        self.assertTrue(log_file_with_corrupted_line.exists())

        logs = get_local_logs("execution_id")
        self.assertEqual(len(logs), 2)
