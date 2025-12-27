import shutil
import unittest
from pathlib import Path

from abstra_internals.repositories.execution import ExecutionFilter
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.multiprocessing import SpawnContextReposity
from abstra_internals.settings import Settings


def worker_function(test_dir: str):
    """Function executed in the child process."""
    Settings.set_root_path(test_dir)

    # This line used to cause the SemLock error before the fix
    repositories = build_editor_repositories()

    # Test basic SqlStorage operation
    filter = ExecutionFilter()
    repositories.execution.list(filter)

    return True


class TestSemLockSimple(unittest.TestCase):
    """Simple and direct test for the SemLock fix.

    Reproduces exactly the problem:
    1. Creates SqlStorage in PARENT process with threading.RLock
    2. Tries to spawn CHILD process
    3. CHILD process uses SqlStorage

    If there was a SemLock error, it would fail at step 2 (pickle of spawn).
    """

    def setUp(self):
        self.test_dir = Path(__file__).parent / ".abstra_test_simple"
        self.test_dir.mkdir(exist_ok=True)
        Settings.set_root_path(str(self.test_dir))

    def tearDown(self):
        if self.test_dir.exists():
            shutil.rmtree(self.test_dir)

    def test_spawn_process_with_repositories(self):
        """Verifies that the SemLock fix is working"""
        # Create repositories in PARENT process
        repositories = build_editor_repositories()
        self.assertIsNotNone(repositories)

        # Try to spawn CHILD process
        mp_context = SpawnContextReposity().get_context()

        # This spawn would cause SemLock error if RLock was multiprocessing.RLock
        process = mp_context.Process(target=worker_function, args=(str(self.test_dir),))

        process.start()
        process.join(timeout=10)

        # Ensure process actually finished
        if process.is_alive():
            process.terminate()
            process.join(timeout=2)

        # Verify that the process completed successfully
        self.assertEqual(
            process.exitcode,
            0,
            "Child process should have finished with exitcode 0 (no SemLock error)",
        )
