import shutil
import threading
import time
import unittest
from pathlib import Path
from uuid import uuid4

from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import (
    ScriptContext,
    ScriptExecutionMock,
)
from abstra_internals.repositories.execution import ExecutionFilter
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.multiprocessing import SpawnContextReposity
from abstra_internals.settings import Settings


def create_execution(stage_id: str):
    """Helper to create execution."""
    return Execution.create(
        id=uuid4().__str__(),
        stage_id=stage_id,
        context=ScriptContext(
            task_id="test-task",
            mock_execution=ScriptExecutionMock(),
        ),
    )


def worker_write_same_id(execution_id: str, stage_id: str, test_dir: str, value: int):
    """Worker that writes to the same ID (potential race condition)."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    execution = create_execution(f"{stage_id}-{value}")
    execution.id = execution_id

    repositories.execution.create(execution)
    time.sleep(0.01)
    execution.set_status("finished")
    repositories.execution.update(execution)


def worker_rapid_updates(execution_id: str, test_dir: str, num_updates: int):
    """Worker that makes multiple rapid updates."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    execution = create_execution("rapid-stage")
    execution.id = execution_id

    repositories.execution.create(execution)

    for i in range(num_updates):
        execution.set_status("lock" if i % 2 == 0 else "finished")
        repositories.execution.update(execution)
        time.sleep(0.001)


def reader_during_write(test_dir: str, execution_id: str, num_reads: int):
    """Thread that reads while another process is writing."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    successful_reads = 0
    for _ in range(num_reads):
        try:
            exec = repositories.execution.get(execution_id)
            if exec:
                successful_reads += 1
        except Exception:
            pass
        time.sleep(0.001)

    return successful_reads


def writer_process_func(test_dir: str):
    """Worker process that creates executions."""
    Settings.set_root_path(test_dir)
    repos = build_editor_repositories()
    for i in range(30):
        exec = create_execution(f"stage-{i}")
        repos.execution.create(exec)
        exec.set_status("finished")
        repos.execution.update(exec)
        time.sleep(0.01)


class TestSqlStorageRaceConditions(unittest.TestCase):
    """Tests for race conditions and edge cases for SqlStorage.

    Tests specific scenarios that can cause problems:
    1. Two processes writing to the same ID simultaneously
    2. Reading during write
    3. Deletion during read
    4. Multiple operations on the same file
    5. High frequency operations
    """

    def _get_test_dir(self, name: str) -> Path:
        """Helper to get test directory path."""
        return Path(__file__).parent / f".abstra_race_{name}"

    def _cleanup_test_dir(self, test_dir: Path):
        """Helper to cleanup test directory."""
        if test_dir.exists():
            shutil.rmtree(test_dir)

    def test_same_id_conflict(self):
        """Test 1: Two processes try to write to the same ID (classic race condition)."""
        test_dir = self._get_test_dir("1")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            same_id = "conflict-exec-123"

            p1 = mp_context.Process(
                target=worker_write_same_id, args=(same_id, "stage-a", str(test_dir), 1)
            )
            p2 = mp_context.Process(
                target=worker_write_same_id, args=(same_id, "stage-b", str(test_dir), 2)
            )

            p1.start()
            p2.start()

            p1.join(timeout=5)
            p2.join(timeout=5)

            # System should survive race condition on same ID
            exec = repositories.execution.get(same_id)
            self.assertIsNotNone(exec)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_read_during_write(self):
        """Test 2: Read data while another process is writing."""
        test_dir = self._get_test_dir("2")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            exec_id = "read-during-write-123"

            writer = mp_context.Process(
                target=worker_rapid_updates, args=(exec_id, str(test_dir), 100)
            )

            reader_results = []

            def run_reader():
                result = reader_during_write(str(test_dir), exec_id, 50)
                reader_results.append(result)

            reader_thread = threading.Thread(target=run_reader)

            writer.start()
            time.sleep(0.05)
            reader_thread.start()

            writer.join(timeout=10)
            reader_thread.join(timeout=10)

            self.assertEqual(writer.exitcode, 0)
            self.assertGreater(len(reader_results), 0)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_high_frequency_operations(self):
        """Test 3: High frequency operations on different IDs (heavy load without direct conflicts)."""
        test_dir = self._get_test_dir("3")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()

            def rapid_worker(thread_id: int):
                for i in range(50):
                    execution = create_execution(f"stage-{thread_id}-{i}")
                    repositories.execution.create(execution)
                    execution.set_status("finished")
                    repositories.execution.update(execution)

            threads = []
            num_threads = 5

            for i in range(num_threads):
                thread = threading.Thread(target=rapid_worker, args=(i,))
                threads.append(thread)
                thread.start()

            for thread in threads:
                thread.join(timeout=30)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            expected = num_threads * 50
            actual = len(result.executions)

            # Allow for some loss, but not significant
            self.assertGreaterEqual(
                actual, expected * 0.95, "Should complete most operations"
            )

        finally:
            self._cleanup_test_dir(test_dir)

    def test_interleaved_operations(self):
        """Test 4: Interleaved operations on executions and tasks."""
        test_dir = self._get_test_dir("4")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()

            def exec_worker():
                for i in range(20):
                    execution = create_execution(f"stage-{i}")
                    repositories.execution.create(execution)
                    execution.set_status("finished")
                    repositories.execution.update(execution)
                    time.sleep(0.002)

            def task_worker():
                for i in range(20):
                    repositories.tasks.send_task(
                        type="test",
                        payload={"i": i},
                        target_stage_id="target",
                        source_stage_id="source",
                        execution_id="exec",
                    )
                    time.sleep(0.002)

            threads = []
            for _ in range(2):
                threads.append(threading.Thread(target=exec_worker))
                threads.append(threading.Thread(target=task_worker))

            for t in threads:
                t.start()

            for t in threads:
                t.join(timeout=30)

            filter = ExecutionFilter()
            execs = repositories.execution.list(filter)
            tasks = repositories.tasks.get_all_tasks()

            self.assertGreaterEqual(len(execs.executions), 38)
            self.assertGreaterEqual(len(tasks), 38)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_process_vs_thread_contention(self):
        """Test 5: Contention between process and thread.
        Parent thread reads while child process writes.
        """
        test_dir = self._get_test_dir("5")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            read_counts = []

            def reader_thread_func():
                for _ in range(40):
                    filter = ExecutionFilter()
                    result = repositories.execution.list(filter)
                    read_counts.append(len(result.executions))
                    time.sleep(0.01)

            writer = mp_context.Process(
                target=writer_process_func, args=(str(test_dir),)
            )

            reader = threading.Thread(target=reader_thread_func)

            writer.start()
            time.sleep(0.05)
            reader.start()

            writer.join(timeout=10)
            reader.join(timeout=10)

            self.assertEqual(writer.exitcode, 0)
            self.assertGreater(len(read_counts), 0)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_clear_during_operations(self):
        """Test 6: Clear called during active operations (edge case)."""
        test_dir = self._get_test_dir("6")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()

            # Create some initial executions
            for i in range(10):
                exec = create_execution(f"pre-stage-{i}")
                repositories.execution.create(exec)

            def writer_thread():
                for i in range(50):
                    try:
                        exec = create_execution(f"stage-{i}")
                        repositories.execution.create(exec)
                        time.sleep(0.005)
                    except Exception:
                        pass

            def clear_thread():
                time.sleep(0.1)
                try:
                    repositories.execution.clear()
                except Exception:
                    pass

            writer = threading.Thread(target=writer_thread)
            clearer = threading.Thread(target=clear_thread)

            writer.start()
            clearer.start()

            writer.join(timeout=10)
            clearer.join(timeout=10)

            # System should survive clear during operations
            filter = ExecutionFilter()
            result = repositories.execution.list(filter)
            self.assertIsNotNone(result)

        finally:
            self._cleanup_test_dir(test_dir)
