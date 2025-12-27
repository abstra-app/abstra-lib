import shutil
import time
import unittest
from dataclasses import dataclass
from pathlib import Path
from uuid import uuid4

from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import (
    FormContext,
    FormExecutionMock,
    Request,
)
from abstra_internals.repositories.execution import ExecutionFilter
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.multiprocessing import SpawnContextReposity
from abstra_internals.settings import Settings


@dataclass
class FakeStage:
    """Fake stage to simulate what is passed to the child process"""

    id: str
    title: str
    file: str


def child_process_main(stage: FakeStage, root_path: str):
    """Function executed in the child process (worker)."""
    Settings.set_root_path(root_path)

    # Try to create repositories (this used to cause the error before the fix)
    repositories = build_editor_repositories()

    # Try to create an execution (write to SqlStorage)
    execution = Execution.create(
        id=uuid4().__str__(),
        stage_id=stage.id,
        context=FormContext(
            request=Request(
                query_params={},
                headers={},
                method="GET",
                body="{}",
            ),
            mock_execution=FormExecutionMock(test_answers=[]),
        ),
    )

    repositories.execution.create(execution)

    # Try to update the execution
    execution.set_status("finished")
    repositories.execution.update(execution)

    # Try to read executions
    filter = ExecutionFilter(offset=0, limit=10)
    all_executions = repositories.execution.list(filter)

    return len(all_executions.executions) > 0


class TestSemLockFix(unittest.TestCase):
    """Test script to verify that the SemLock error has been resolved.

    Reproduces the scenario that caused the error:
    1. PARENT process creates SqlStorage (as web-editor does)
    2. Tries to spawn CHILD process passing objects with SqlStorage
    3. CHILD process tries to use SqlStorage

    Before the fix: error "SemLock created in a fork context being shared with spawn context"
    After the fix: should work normally
    """

    def setUp(self):
        self.test_dir = Path(__file__).parent / ".abstra_test"
        self.test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(self.test_dir))

    def tearDown(self):
        if self.test_dir.exists():
            shutil.rmtree(self.test_dir)

    def test_semlock_scenario(self):
        """Tests the complete scenario that caused the SemLock error"""
        # PARENT PROCESS: creates repositories (as web-editor does in editor.py:92)
        build_editor_repositories()

        # Create a fake stage to pass to the child process
        stage = FakeStage(id="test-form-123", title="Test Form", file="test.py")

        # SPAWN CHILD PROCESS: uses spawn context (as consumer.py:84 does)
        mp_context = SpawnContextReposity().get_context()

        process = mp_context.Process(
            target=child_process_main,
            args=(stage, str(self.test_dir)),
            name="TestWorker",
        )

        process.start()
        process.join(timeout=30)

        # Ensure process actually finished
        if process.is_alive():
            process.terminate()
            process.join(timeout=2)

        self.assertFalse(process.is_alive(), "Process should not be alive")
        self.assertEqual(
            process.exitcode,
            0,
            "Child process should have completed without errors (no SemLock error)",
        )

    def test_concurrent_workers(self):
        """Tests scenario with multiple simultaneous workers (like the real system)"""
        build_editor_repositories()

        mp_context = SpawnContextReposity().get_context()
        processes = []

        for i in range(2):
            stage = FakeStage(
                id=f"test-form-{i}", title=f"Test Form {i}", file=f"test{i}.py"
            )

            process = mp_context.Process(
                target=child_process_main,
                args=(stage, str(self.test_dir)),
                name=f"TestWorker-{i}",
            )

            processes.append(process)
            process.start()
            time.sleep(0.1)  # Stagger process starts to reduce contention

        # Wait for all processes
        for process in processes:
            process.join(timeout=30)
            # Ensure process actually finished
            if process.is_alive():
                process.terminate()
                process.join(timeout=2)

        # Verify that all completed successfully
        for i, process in enumerate(processes):
            self.assertFalse(process.is_alive(), f"Worker {i} should not be alive")
            self.assertEqual(
                process.exitcode, 0, f"Worker {i} should have completed successfully"
            )
