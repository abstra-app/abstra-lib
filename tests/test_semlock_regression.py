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
    return Execution.create(
        id=uuid4().__str__(),
        stage_id=stage_id,
        context=ScriptContext(
            task_id="test",
            mock_execution=ScriptExecutionMock(),
        ),
    )


def worker_basic(stage_id: str, test_dir: str):
    """Basic worker that creates and finishes execution."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()

    execution = create_execution(stage_id)
    repositories.execution.create(execution)
    execution.set_status("finished")
    repositories.execution.update(execution)


def worker_failing(test_dir: str):
    """Worker that fails intentionally."""
    Settings.set_root_path(test_dir)
    repositories = build_editor_repositories()
    execution = create_execution("crash-stage")
    repositories.execution.create(execution)
    raise Exception("Simulated crash")


class TestSemLockRegression(unittest.TestCase):
    """Regression test for the SemLock error fix.

    Focused and reliable test suite to validate that:
    1. The SemLock error does not occur (spawn process works)
    2. SqlStorage works in basic concurrency scenarios
    3. System is resilient to failures

    This test should be run before each release/deploy.
    """

    def setUp(self):
        self.test_dir = Path(__file__).parent / ".abstra_regr"
        self.test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(self.test_dir))

    def tearDown(self):
        if self.test_dir.exists():
            shutil.rmtree(self.test_dir)

    def test_no_semlock_error(self):
        """Critical test: Verifies that there is no SemLock error."""
        build_editor_repositories()
        mp_context = SpawnContextReposity().get_context()

        process = mp_context.Process(
            target=worker_basic, args=("test-stage", str(self.test_dir))
        )

        process.start()
        process.join(timeout=10)

        # Ensure process actually finished
        if process.is_alive():
            process.terminate()
            process.join(timeout=2)

        self.assertEqual(
            process.exitcode, 0, "Worker should have executed successfully"
        )

    def test_basic_operations(self):
        """Test 2: Basic operations work correctly."""
        repositories = build_editor_repositories()

        execution = create_execution("test-stage")
        repositories.execution.create(execution)

        execution.set_status("finished")
        repositories.execution.update(execution)

        filter = ExecutionFilter()
        result = repositories.execution.list(filter)

        self.assertEqual(len(result.executions), 1)
        self.assertEqual(result.executions[0].status, "finished")

    def test_concurrent_spawns(self):
        """Test 3: Multiple simultaneous spawns."""
        repositories = build_editor_repositories()
        mp_context = SpawnContextReposity().get_context()

        processes = []
        for i in range(3):
            p = mp_context.Process(
                target=worker_basic, args=(f"stage-{i}", str(self.test_dir))
            )
            processes.append(p)
            p.start()
            time.sleep(0.05)

        # Wait for all processes
        for p in processes:
            p.join(timeout=10)
            # Ensure process actually finished
            if p.is_alive():
                p.terminate()
                p.join(timeout=2)

        # Verify that all completed
        for p in processes:
            self.assertEqual(p.exitcode, 0)

        filter = ExecutionFilter()
        result = repositories.execution.list(filter)

        self.assertGreaterEqual(
            len(result.executions), 2, "Should have at least 2 executions"
        )

    def test_thread_safety(self):
        """Test 4: Threading.RLock protects threads in the same process."""
        repositories = build_editor_repositories()

        def thread_worker(n: int):
            for i in range(3):
                exec = create_execution(f"stage-{n}-{i}")
                repositories.execution.create(exec)
                exec.set_status("finished")
                repositories.execution.update(exec)

        threads = []
        for i in range(3):
            t = threading.Thread(target=thread_worker, args=(i,))
            threads.append(t)
            t.start()

        for t in threads:
            t.join(timeout=15)

        filter = ExecutionFilter()
        result = repositories.execution.list(filter)

        self.assertEqual(
            len(result.executions), 9, "3 threads should create 9 executions"
        )

    def test_resilience(self):
        """Test 5: System continues functioning after worker failure."""
        build_editor_repositories()
        mp_context = SpawnContextReposity().get_context()

        # Worker that crashes
        crash_p = mp_context.Process(target=worker_failing, args=(str(self.test_dir),))
        crash_p.start()
        crash_p.join(timeout=5)

        # Ensure crash process actually finished
        if crash_p.is_alive():
            crash_p.terminate()
            crash_p.join(timeout=2)

        self.assertNotEqual(crash_p.exitcode, 0, "Worker should have crashed")

        # Add small delay to ensure any file handles are closed
        time.sleep(0.1)

        # Worker that works
        ok_p = mp_context.Process(
            target=worker_basic, args=("ok-stage", str(self.test_dir))
        )
        ok_p.start()
        ok_p.join(timeout=5)

        # Ensure success process also finished properly
        if ok_p.is_alive():
            ok_p.terminate()
            ok_p.join(timeout=2)

        self.assertEqual(
            ok_p.exitcode, 0, "System should continue functioning after crash"
        )
