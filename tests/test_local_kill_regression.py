import signal
import unittest
from unittest.mock import MagicMock, patch

from abstra_internals.entities.execution import Execution
from abstra_internals.repositories.execution import LocalExecutionRepository
from abstra_internals.repositories.multiprocessing import MPContext


class TestLocalKillRegression(unittest.TestCase):
    @patch("os.kill")
    def test_local_kill_uses_os_kill(self, mock_os_kill):
        # Setup
        mock_mp_context = MagicMock(spec=MPContext)
        mock_mp_context.RLock = MagicMock()  # Add RLock mock
        repo = LocalExecutionRepository(mock_mp_context)
        repo.fs_storage = MagicMock()

        execution_id = "exec-local-1"
        mock_execution = MagicMock(spec=Execution)
        mock_execution.pid = 12345
        repo.get = MagicMock(return_value=mock_execution)

        # Action
        repo.stop_execution(execution_id)

        # Assertion
        # It should call os.kill(pid, signal.SIGTERM)
        mock_os_kill.assert_any_call(12345, signal.SIGTERM)

        # It might also call os.kill(pid, 0) for checking if alive, or SIGKILL
        # But determining at least one SIGTERM call confirms we are using the local mechanism
        self.assertTrue(mock_os_kill.called)


if __name__ == "__main__":
    unittest.main()
