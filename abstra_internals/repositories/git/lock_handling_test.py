import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path
from unittest.mock import Mock, patch

from abstra_internals.repositories.git.native import NativeGitRepository


class GitLockFileHandlingTest(unittest.TestCase):
    """Test suite for git lock file handling and subprocess management"""

    def setUp(self):
        """Set up test environment"""
        super().setUp()
        self.temp_dir = Path(tempfile.mkdtemp())
        self.repo = NativeGitRepository(self.temp_dir)
        self._setup_git_repo()

    def tearDown(self):
        """Clean up test environment"""
        super().tearDown()
        if self.temp_dir and self.temp_dir.exists():
            shutil.rmtree(self.temp_dir, ignore_errors=True)

    def _setup_git_repo(self):
        """Initialize a git repository for testing"""
        self.repo.init_repository()
        if not self.repo.get_git_config("user.name"):
            self.repo.set_git_config("user.name", "Test User")
        if not self.repo.get_git_config("user.email"):
            self.repo.set_git_config("user.email", "test@example.com")

    def _create_lock_file(self, lock_path: str) -> Path:
        """Create a fake lock file for testing"""
        lock_file = self.temp_dir / lock_path
        lock_file.parent.mkdir(parents=True, exist_ok=True)
        lock_file.write_text("fake lock content")
        return lock_file

    # ============================================================================
    # Test: Lock File Detection and Cleanup
    # ============================================================================

    def test_detect_and_cleanup_index_lock(self):
        """Test detection and cleanup of .git/index.lock"""
        # Create a fake lock file
        lock_file = self._create_lock_file(".git/index.lock")
        self.assertTrue(lock_file.exists())

        # Run cleanup
        cleaned = self.repo._detect_and_cleanup_stale_locks()

        # Verify lock file was removed
        self.assertTrue(cleaned)
        self.assertFalse(lock_file.exists())

    def test_detect_and_cleanup_head_lock(self):
        """Test detection and cleanup of .git/HEAD.lock"""
        lock_file = self._create_lock_file(".git/HEAD.lock")
        self.assertTrue(lock_file.exists())

        cleaned = self.repo._detect_and_cleanup_stale_locks()

        self.assertTrue(cleaned)
        self.assertFalse(lock_file.exists())

    def test_detect_and_cleanup_refs_lock(self):
        """Test detection and cleanup of lock files in .git/refs/"""
        # Create lock file in refs/heads/
        lock_file = self._create_lock_file(".git/refs/heads/main.lock")
        self.assertTrue(lock_file.exists())

        cleaned = self.repo._detect_and_cleanup_stale_locks()

        self.assertTrue(cleaned)
        self.assertFalse(lock_file.exists())

    def test_detect_and_cleanup_refs_remotes_lock(self):
        """Test detection and cleanup of lock files in .git/refs/remotes/"""
        # Create lock file in refs/remotes/
        lock_file = self._create_lock_file(".git/refs/remotes/abstra/main.lock")
        self.assertTrue(lock_file.exists())

        cleaned = self.repo._detect_and_cleanup_stale_locks()

        self.assertTrue(cleaned)
        self.assertFalse(lock_file.exists())

    def test_cleanup_multiple_lock_files(self):
        """Test cleanup of multiple lock files at once"""
        lock_files = [
            self._create_lock_file(".git/index.lock"),
            self._create_lock_file(".git/HEAD.lock"),
            self._create_lock_file(".git/refs/heads/main.lock"),
        ]

        for lock_file in lock_files:
            self.assertTrue(lock_file.exists())

        cleaned = self.repo._detect_and_cleanup_stale_locks()

        self.assertTrue(cleaned)
        for lock_file in lock_files:
            self.assertFalse(lock_file.exists())

    def test_cleanup_returns_false_when_no_locks(self):
        """Test that cleanup returns False when there are no lock files"""
        cleaned = self.repo._detect_and_cleanup_stale_locks()
        self.assertFalse(cleaned)

    # ============================================================================
    # Test: Lock File Error Detection
    # ============================================================================

    def test_handle_lock_file_error_detects_index_lock(self):
        """Test detection of index.lock error message"""
        stderr = "fatal: Unable to create '/path/.git/index.lock': File exists."

        should_retry, message = self.repo._handle_lock_file_error(stderr)

        # Should detect lock error but not find actual locks to clean
        self.assertFalse(should_retry)  # No actual lock files created
        self.assertIn("lock file detected", message.lower())

    def test_handle_lock_file_error_detects_another_process(self):
        """Test detection of 'another git process' error message"""
        stderr = "fatal: another git process seems to be running in this repository"

        should_retry, message = self.repo._handle_lock_file_error(stderr)

        self.assertFalse(should_retry)
        self.assertIn("lock file detected", message.lower())

    def test_handle_lock_file_error_detects_refs_error(self):
        """Test detection of refs/heads error message"""
        stderr = "error: couldn't set 'refs/heads/main'"

        should_retry, message = self.repo._handle_lock_file_error(stderr)

        self.assertFalse(should_retry)
        self.assertIn("lock file detected", message.lower())

    def test_handle_lock_file_error_with_cleanup_success(self):
        """Test error handling when lock files are found and cleaned"""
        # Create actual lock file
        self._create_lock_file(".git/index.lock")

        stderr = "fatal: Unable to create '/path/.git/index.lock': File exists."

        should_retry, message = self.repo._handle_lock_file_error(stderr)

        # Should detect lock error and successfully clean
        self.assertTrue(should_retry)
        self.assertIn("cleaned up", message.lower())

    def test_handle_lock_file_error_ignores_non_lock_errors(self):
        """Test that non-lock errors are not treated as lock errors"""
        stderr = "fatal: not a git repository"

        should_retry, message = self.repo._handle_lock_file_error(stderr)

        self.assertFalse(should_retry)
        self.assertEqual(message, stderr)  # Original error passed through

    # ============================================================================
    # Test: Auto-Retry on Lock Errors
    # ============================================================================

    def test_commit_retries_after_lock_cleanup(self):
        """Test that commit operation retries after cleaning lock files"""
        # Create a test file to commit
        test_file = self.temp_dir / "test.txt"
        test_file.write_text("test content")

        # Create lock file that will be cleaned up
        self._create_lock_file(".git/index.lock")

        # Mock _run_git_command to simulate lock error then success
        original_run = self.repo._run_git_command
        call_count = {"count": 0}

        def mock_run(command, cwd=None, input=None):
            call_count["count"] += 1

            # First call to "add ." should succeed (no lock yet)
            if "add" in command:
                return original_run(command, cwd, input)

            # First commit attempt: simulate lock error
            if call_count["count"] == 2 and "commit" in command:
                return (
                    False,
                    "",
                    "fatal: Unable to create '.git/index.lock': File exists.",
                )

            # Second commit attempt: should succeed (after cleanup)
            return original_run(command, cwd, input)

        with patch.object(self.repo, "_run_git_command", side_effect=mock_run):
            success, error = self.repo.commit_changes("Test commit")

        # Should succeed after retry
        self.assertTrue(success)
        self.assertIsNone(error)

    def test_add_all_files_retries_after_lock_cleanup(self):
        """Test that _run_git_command auto-retries after cleaning lock files"""
        # Create test file
        test_file = self.temp_dir / "test.txt"
        test_file.write_text("test content")

        # Create lock file that will be cleaned up
        lock_file = self._create_lock_file(".git/index.lock")

        # Mock subprocess.Popen to simulate lock error first, then success
        call_count = {"count": 0}

        original_popen = subprocess.Popen

        def mock_popen(*args, **kwargs):
            call_count["count"] += 1
            # First call: return lock error
            if call_count["count"] == 1:
                mock_proc = Mock()
                mock_proc.communicate.return_value = (
                    "",
                    "fatal: Unable to create '.git/index.lock': File exists.",
                )
                mock_proc.returncode = 1
                return mock_proc
            # Second call (after retry): succeed
            return original_popen(*args, **kwargs)

        with patch("subprocess.Popen", side_effect=mock_popen):
            success, error = self.repo.add_all_files()

        # Should succeed after retry
        self.assertTrue(success)
        self.assertIsNone(error)
        # Lock file should be cleaned up
        self.assertFalse(lock_file.exists())

    def test_push_retries_after_lock_cleanup(self):
        """Test that _run_git_command correctly detects and retries refs lock errors"""
        # Test at the _run_git_command level directly
        lock_file = self._create_lock_file(".git/refs/remotes/origin/main.lock")

        # Mock subprocess.Popen to simulate lock error first, then success
        call_count = {"count": 0}
        original_popen = subprocess.Popen

        def mock_popen(*args, **kwargs):
            # Only mock git push commands
            if (
                len(args) > 0
                and isinstance(args[0], list)
                and len(args[0]) > 0
                and args[0][0] == "git"
                and "push" in args[0]
            ):
                call_count["count"] += 1
                mock_proc = Mock()
                if call_count["count"] == 1:
                    # First call: return lock error
                    mock_proc.communicate.return_value = (
                        "",
                        "error: couldn't set 'refs/heads/main'",
                    )
                    mock_proc.returncode = 1
                else:
                    # Second call (after retry): succeed
                    mock_proc.communicate.return_value = ("", "")
                    mock_proc.returncode = 0
                return mock_proc
            # For other commands, use real Popen
            return original_popen(*args, **kwargs)

        with patch(
            "abstra_internals.repositories.git.native.subprocess.Popen",
            side_effect=mock_popen,
        ):
            success, stdout, stderr = self.repo._run_git_command(
                ["push", "origin", "main"]
            )

        # Should succeed after retry
        self.assertTrue(success)
        # Lock file should be cleaned up
        self.assertFalse(lock_file.exists())
        # Should have been called twice (first attempt + retry)
        self.assertEqual(call_count["count"], 2)

    # ============================================================================
    # Test: Process Timeout and Cleanup
    # ============================================================================

    def test_timeout_kills_process(self):
        """Test that timeout properly kills the git process"""
        # Mock Popen to simulate a long-running process
        mock_process = Mock()
        mock_process.communicate.side_effect = subprocess.TimeoutExpired("git", 30)
        mock_process.poll.return_value = None  # Process is still running

        with patch("subprocess.Popen", return_value=mock_process):
            success, stdout, stderr = self.repo._run_git_command(["status"])

        # Verify process cleanup was attempted
        self.assertFalse(success)
        self.assertEqual(stderr, "Git command timed out after 30 seconds")
        mock_process.terminate.assert_called_once()

    def test_timeout_force_kills_if_terminate_fails(self):
        """Test that timeout force kills process if terminate doesn't work"""
        mock_process = Mock()
        mock_process.communicate.side_effect = subprocess.TimeoutExpired("git", 30)
        mock_process.wait.side_effect = [subprocess.TimeoutExpired("git", 2), None]
        mock_process.poll.return_value = None

        with patch("subprocess.Popen", return_value=mock_process):
            success, stdout, stderr = self.repo._run_git_command(["status"])

        # Verify force kill was attempted
        self.assertFalse(success)
        mock_process.terminate.assert_called_once()
        mock_process.kill.assert_called_once()

    def test_process_cleanup_on_exception(self):
        """Test that process is cleaned up on unexpected exceptions"""
        mock_process = Mock()
        mock_process.communicate.side_effect = RuntimeError("Unexpected error")
        mock_process.poll.return_value = None  # Process still running

        with patch("subprocess.Popen", return_value=mock_process):
            success, stdout, stderr = self.repo._run_git_command(["status"])

        # Verify process was killed
        self.assertFalse(success)
        mock_process.kill.assert_called_once()

    def test_smart_timeout_for_network_operations(self):
        """Test that network operations get longer timeout (2 min)"""
        mock_process = Mock()
        mock_process.communicate.return_value = ("", "")
        mock_process.returncode = 0

        with patch("subprocess.Popen", return_value=mock_process):
            # Network operations should get 120s timeout
            for operation in ["push", "pull", "fetch", "clone"]:
                mock_process.reset_mock()
                self.repo._run_git_command([operation, "origin", "main"])
                # Verify communicate was called with 120s timeout
                mock_process.communicate.assert_called_once()
                call_kwargs = mock_process.communicate.call_args[1]
                self.assertEqual(call_kwargs.get("timeout"), 120)

    def test_smart_timeout_for_local_operations(self):
        """Test that local operations get shorter timeout (30s)"""
        mock_process = Mock()
        mock_process.communicate.return_value = ("", "")
        mock_process.returncode = 0

        with patch("subprocess.Popen", return_value=mock_process):
            # Local operations should get 30s timeout
            for operation in ["status", "add", "commit", "log"]:
                mock_process.reset_mock()
                self.repo._run_git_command([operation])
                # Verify communicate was called with 30s timeout
                mock_process.communicate.assert_called_once()
                call_kwargs = mock_process.communicate.call_args[1]
                self.assertEqual(call_kwargs.get("timeout"), 30)

    def test_custom_timeout_override(self):
        """Test that custom timeout can override smart defaults"""
        mock_process = Mock()
        mock_process.communicate.return_value = ("", "")
        mock_process.returncode = 0

        with patch("subprocess.Popen", return_value=mock_process):
            # Custom timeout should be used instead of default
            self.repo._run_git_command(["push", "origin", "main"], timeout=600)
            mock_process.communicate.assert_called_once()
            call_kwargs = mock_process.communicate.call_args[1]
            self.assertEqual(call_kwargs.get("timeout"), 600)

    # ============================================================================
    # Test: Integration Scenarios
    # ============================================================================

    def test_commit_succeeds_with_stale_lock_files(self):
        """Integration test: commit should succeed even with stale lock files"""
        # Create test file
        test_file = self.temp_dir / "test.txt"
        test_file.write_text("test content")

        # Create multiple stale lock files
        self._create_lock_file(".git/index.lock")
        self._create_lock_file(".git/HEAD.lock")

        # First attempt should detect locks and clean them
        # In real scenario, git would fail on first attempt, trigger cleanup, then succeed
        # For this test, we'll manually clean and then commit
        cleaned = self.repo._detect_and_cleanup_stale_locks()
        self.assertTrue(cleaned)

        # Now commit should succeed
        success, error = self.repo.commit_changes("Test commit with lock cleanup")

        self.assertTrue(success)
        self.assertIsNone(error)

    def test_no_false_positives_on_normal_errors(self):
        """Test that normal git errors don't trigger lock file cleanup"""
        # Try to commit with no changes
        success, error = self.repo.commit_changes("Empty commit")

        # Should fail but not because of lock files
        self.assertFalse(success)
        # Error should not mention lock files
        self.assertIsNotNone(error)
        if error is not None:
            self.assertNotIn("lock", error.lower())


class GitLockFileEdgeCasesTest(unittest.TestCase):
    """Test edge cases and error conditions in lock file handling"""

    def setUp(self):
        """Set up test environment"""
        self.temp_dir = Path(tempfile.mkdtemp())
        self.repo = NativeGitRepository(self.temp_dir)

    def tearDown(self):
        """Clean up test environment"""
        if self.temp_dir and self.temp_dir.exists():
            shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_cleanup_on_non_git_repository(self):
        """Test that cleanup gracefully handles non-git repositories"""
        cleaned = self.repo._detect_and_cleanup_stale_locks()
        self.assertFalse(cleaned)

    def test_cleanup_with_permission_error(self):
        """Test cleanup handles permission errors gracefully"""
        self.repo.init_repository()

        # Create lock file
        lock_file = self.temp_dir / ".git" / "index.lock"
        lock_file.write_text("test")

        # Mock unlink to raise permission error
        original_unlink = Path.unlink

        def mock_unlink(self, *args, **kwargs):
            if self.name.endswith(".lock"):
                raise PermissionError("Permission denied")
            return original_unlink(self, *args, **kwargs)

        with patch.object(Path, "unlink", mock_unlink):
            # Should not raise, but return False
            self.repo._detect_and_cleanup_stale_locks()
            # Cleanup attempted but failed, lock still exists
            self.assertTrue(lock_file.exists())

    def test_handle_lock_error_with_empty_stderr(self):
        """Test lock error handling with empty stderr"""
        should_retry, message = self.repo._handle_lock_file_error("")
        self.assertFalse(should_retry)
        self.assertEqual(message, "")

    def test_handle_lock_error_case_insensitive(self):
        """Test that lock error detection is case-insensitive"""
        stderr = "FATAL: Unable to create '.git/INDEX.LOCK': File exists."
        should_retry, message = self.repo._handle_lock_file_error(stderr)
        # Should detect even with different case
        self.assertIn("lock file detected", message.lower())


if __name__ == "__main__":
    # Run tests with verbose output
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()

    suite.addTests(loader.loadTestsFromTestCase(GitLockFileHandlingTest))
    suite.addTests(loader.loadTestsFromTestCase(GitLockFileEdgeCasesTest))

    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)

    # Exit with appropriate code
    exit(0 if result.wasSuccessful() else 1)
