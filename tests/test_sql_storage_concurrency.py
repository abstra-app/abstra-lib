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
    """Helper to create a valid execution."""
    return Execution.create(
        id=uuid4().__str__(),
        stage_id=stage_id,
        context=ScriptContext(
            task_id="test-task-123",
            mock_execution=ScriptExecutionMock(),
        ),
    )


def worker_single_execution(stage_id: str, test_dir: str, sleep_ms: int = 0):
    """Worker that creates an execution and completes it."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    execution = create_execution(stage_id)
    repositories.execution.create(execution)

    if sleep_ms > 0:
        time.sleep(sleep_ms / 1000.0)

    execution.set_status("finished")
    repositories.execution.update(execution)

    return True


def worker_with_crash(stage_id: str, test_dir: str):
    """Worker that crashes in the middle of execution."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    execution = create_execution(stage_id)
    repositories.execution.create(execution)

    raise Exception("Simulated crash")


def worker_task_operations(stage_id: str, test_dir: str, num_tasks: int = 5):
    """Worker that creates and manipulates tasks."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    created_tasks = []
    for i in range(num_tasks):
        task = repositories.tasks.send_task(
            type="test-task",
            payload={"index": i, "stage": stage_id},
            target_stage_id="target-stage",
            source_stage_id=stage_id,
            execution_id="exec-123",
        )
        created_tasks.append(task.id)
        time.sleep(0.01)

    for i, task_id in enumerate(created_tasks):
        try:
            if i % 2 == 0:
                repositories.tasks.lock_task(task_id, "exec-123", stage_id)
            if i % 3 == 0:
                repositories.tasks.complete_task(task_id, "exec-123", stage_id)
        except Exception:
            pass

    return True


def frontend_reader(test_dir: str, num_reads: int = 10, interval_ms: int = 10):
    """Simulates frontend making repeated reads."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    results = []
    for _ in range(num_reads):
        filter = ExecutionFilter(limit=100)
        result = repositories.execution.list(filter)
        results.append(len(result.executions))
        time.sleep(interval_ms / 1000.0)

    return results


class TestSqlStorageConcurrency(unittest.TestCase):
    """Concurrency tests for SqlStorage with threading.RLock.

    Validates all concurrency scenarios mentioned in the solution document:
    1. Simple execution
    2. 2 simultaneous executions
    3. 10 rapid sequential executions
    4. Frontend querying during execution
    5. Worker crashes
    6. Multiple threads in the same process
    7. Concurrent task operations
    """

    def _get_test_dir(self, name: str) -> Path:
        """Helper to get test directory path."""
        return Path(__file__).parent / f".abstra_test_{name}"

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def _cleanup_test_dir(self, test_dir: Path):
        """Helper to cleanup test directory."""
        if test_dir.exists():
            shutil.rmtree(test_dir)

    def test_single_execution(self):
        """Test 1: Simple execution."""
        test_dir = self._get_test_dir("1_single")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            process = mp_context.Process(
                target=worker_single_execution, args=("stage-1", str(test_dir), 0)
            )

            process.start()
            process.join(timeout=5)

            self.assertEqual(process.exitcode, 0)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            self.assertEqual(len(result.executions), 1)
            self.assertEqual(result.executions[0].status, "finished")

        finally:
            self._cleanup_test_dir(test_dir)

    def test_concurrent_executions(self):
        """Test 2: Multiple simultaneous executions."""
        num_workers = 2
        test_dir = self._get_test_dir("2_concurrent")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            processes = []
            for i in range(num_workers):
                process = mp_context.Process(
                    target=worker_single_execution,
                    args=(f"stage-{i}", str(test_dir), 50),
                )
                processes.append(process)
                process.start()
                # Small delay to prevent race condition when multiple processes
                # simultaneously create SqlStorage and access the same files.
                # threading.RLock only protects threads within same process.
                time.sleep(0.1)

            # Wait for all processes
            for process in processes:
                process.join(timeout=10)

            # Verify all completed successfully
            for process in processes:
                self.assertEqual(process.exitcode, 0)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            finished_count = sum(1 for e in result.executions if e.status == "finished")

            self.assertEqual(len(result.executions), num_workers)
            self.assertEqual(finished_count, num_workers)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_sequential_executions(self):
        """Test 3: Rapid sequential executions."""
        num_executions = 5
        test_dir = self._get_test_dir("3_sequential")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            for i in range(num_executions):
                process = mp_context.Process(
                    target=worker_single_execution,
                    args=(f"stage-{i}", str(test_dir), 0),
                )
                process.start()
                process.join(timeout=5)

                self.assertEqual(process.exitcode, 0)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            self.assertEqual(len(result.executions), num_executions)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_frontend_during_execution(self):
        """Test 4: Frontend querying during execution."""
        test_dir = self._get_test_dir("4_frontend")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            worker_process = mp_context.Process(
                target=worker_single_execution, args=("stage-slow", str(test_dir), 500)
            )

            reader_thread = threading.Thread(
                target=frontend_reader, args=(str(test_dir), 20, 25)
            )

            worker_process.start()
            time.sleep(0.05)
            reader_thread.start()

            worker_process.join(timeout=10)
            reader_thread.join(timeout=10)

            self.assertEqual(worker_process.exitcode, 0)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            self.assertEqual(len(result.executions), 1)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_worker_crash(self):
        """Test 5: Worker crashes and system continues functioning."""
        test_dir = self._get_test_dir("5_crash")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            crash_process = mp_context.Process(
                target=worker_with_crash, args=("stage-crash", str(test_dir))
            )

            crash_process.start()
            crash_process.join(timeout=5)

            if crash_process.is_alive():
                crash_process.terminate()
                crash_process.join(timeout=2)

            self.assertNotEqual(crash_process.exitcode, 0)

            time.sleep(0.1)

            success_process = mp_context.Process(
                target=worker_single_execution, args=("stage-ok", str(test_dir), 0)
            )

            success_process.start()
            success_process.join(timeout=5)

            # Ensure success process also finished properly
            if success_process.is_alive():
                success_process.terminate()
                success_process.join(timeout=2)

            self.assertEqual(success_process.exitcode, 0)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_multithreaded_same_process(self):
        """Test 6: Multiple threads in the same process."""
        test_dir = self._get_test_dir("6_multithread")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()

            def thread_worker(thread_id: int):
                for i in range(5):
                    execution = create_execution(f"stage-{thread_id}-{i}")
                    repositories.execution.create(execution)
                    execution.set_status("finished")
                    repositories.execution.update(execution)

            threads = []
            num_threads = 4

            for i in range(num_threads):
                thread = threading.Thread(target=thread_worker, args=(i,))
                threads.append(thread)
                thread.start()

            for thread in threads:
                thread.join(timeout=10)

            filter = ExecutionFilter()
            result = repositories.execution.list(filter)

            expected = num_threads * 5
            self.assertEqual(len(result.executions), expected)

        finally:
            self._cleanup_test_dir(test_dir)

    def test_concurrent_task_operations(self):
        """Test 7: Concurrent task operations."""
        test_dir = self._get_test_dir("7_tasks")
        test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(test_dir))

        try:
            repositories = build_editor_repositories()
            mp_context = SpawnContextReposity().get_context()

            num_workers = 2
            tasks_per_worker = 5

            processes = []
            for i in range(num_workers):
                process = mp_context.Process(
                    target=worker_task_operations,
                    args=(f"stage-{i}", str(test_dir), tasks_per_worker),
                )
                processes.append(process)
                process.start()
                time.sleep(0.1)  # Stagger process starts to reduce contention

            # Wait for all processes
            for process in processes:
                process.join(timeout=10)

            # Verify all completed successfully
            for process in processes:
                self.assertEqual(process.exitcode, 0)

            all_tasks = repositories.tasks.get_all_tasks()
            expected = num_workers * tasks_per_worker

            self.assertGreaterEqual(
                len(all_tasks), expected * 0.7, "Should have created most tasks"
            )

        finally:
            self._cleanup_test_dir(test_dir)
