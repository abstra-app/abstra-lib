import shutil
import tempfile
import unittest
from pathlib import Path
from typing import Optional, Tuple

from abstra_internals.repositories.git.native import NativeGitRepository
from abstra_internals.repositories.git.types import (
    GitStatus,
)


class NativeGitRepositoryTest(unittest.TestCase):
    """Test suite for NativeGitRepository"""

    def setUp(self):
        """Set up test environment"""
        super().setUp()
        self.temp_dir = Path(tempfile.mkdtemp())
        self.repo = NativeGitRepository(self.temp_dir)
        self._original_commit_changes = self.repo.commit_changes
        self.repo.commit_changes = self._commit_changes_wrapper

    def _commit_changes_wrapper(
        self, message: str, author: Optional[str] = None
    ) -> Tuple[bool, Optional[str]]:
        """Wrapper for commit_changes that ensures git is configured"""
        self.ensure_git_configured()
        return self._original_commit_changes(message, author)

    def tearDown(self):
        """Clean up test environment"""
        super().tearDown()
        if self.temp_dir and self.temp_dir.exists():
            shutil.rmtree(self.temp_dir, ignore_errors=True)

    def ensure_git_configured(self):
        """Ensure git is configured for commits (required in CI environments)"""
        if self.repo.is_git_repository() and self.repo.is_git_available():
            if not self.repo.get_git_config("user.name"):
                self.repo.set_git_config("user.name", "Test User")
            if not self.repo.get_git_config("user.email"):
                self.repo.set_git_config("user.email", "test@example.com")

    def create_test_file(self, filename: str, content: str = "test content"):
        """Create a test file in the repository"""
        file_path = self.temp_dir / filename
        file_path.parent.mkdir(parents=True, exist_ok=True)
        file_path.write_text(content)
        return file_path

    def modify_test_file(self, filename: str, content: str):
        """Modify an existing test file"""
        file_path = self.temp_dir / filename
        file_path.write_text(content)
        return file_path

    # Test Methods

    def test_is_git_available(self):
        """Test git availability check"""
        result = self.repo.is_git_available()
        self.assertIsInstance(result, bool)

    def test_init_repository(self):
        """Test repository initialization"""
        result = self.repo.init_repository()
        self.assertIsInstance(result, bool)

    def test_is_git_repository_false(self):
        """Test git repository detection on non-repo"""
        result = self.repo.is_git_repository()
        self.assertFalse(result)

    def test_is_git_repository_true(self):
        """Test git repository detection on repo"""
        self.repo.init_repository()
        result = self.repo.is_git_repository()
        self.assertTrue(result)

    def test_find_git_root(self):
        """Test finding git root directory"""
        self.repo.init_repository()
        # Create subdirectory and test from there
        sub_dir = self.temp_dir / "subdir"
        sub_dir.mkdir()
        sub_repo = NativeGitRepository(sub_dir)
        root = sub_repo.find_git_root()
        if root:
            # Resolve both paths to handle macOS symlinks (e.g., /var vs /private/var)
            self.assertEqual(root.resolve(), self.temp_dir.resolve())

    def test_get_current_branch_new_repo(self):
        """Test getting current branch in new repo"""
        self.repo.init_repository()
        branch = self.repo.get_current_branch()
        self.assertIsInstance(branch, (str, type(None)))

    def test_get_all_branches_empty(self):
        """Test getting all branches in empty repo"""
        self.repo.init_repository()
        branches = self.repo.get_all_branches()
        self.assertIsInstance(branches, list)

    def test_commit_and_get_last_commit(self):
        """Test committing and getting last commit"""
        self.repo.init_repository()
        self.create_test_file("test.txt", "initial content")

        # Commit changes
        success = self.repo.commit_changes("Test commit")
        self.assertTrue(success)

        # Get last commit
        last_commit = self.repo.get_last_commit()
        self.assertIsNotNone(last_commit)

        assert last_commit is not None

        self.assertEqual(last_commit.message, "Test commit")

    def test_get_commit_history(self):
        """Test getting commit history"""
        self.repo.init_repository()

        # Create multiple commits
        for i in range(3):
            self.create_test_file(f"test{i}.txt", f"content {i}")
            self.repo.commit_changes(f"Commit {i}")

        history = self.repo.get_commit_history(limit=2)
        self.assertIsInstance(history, list)
        self.assertLessEqual(len(history), 2)
        if history:
            self.assertEqual(history[0].message, "Commit 2")

    def test_get_changed_files(self):
        """Test getting changed files"""
        self.repo.init_repository()

        # Create and commit initial file
        self.create_test_file("test.txt", "initial")
        self.repo.commit_changes("Initial commit")

        # Modify file
        self.modify_test_file("test.txt", "modified")

        # Create new file
        self.create_test_file("new.txt", "new content")

        changed_files = self.repo.get_changed_files()
        self.assertIsInstance(changed_files, list)
        self.assertIn("test.txt", changed_files)
        self.assertIn("new.txt", changed_files)

    def test_get_changed_files_with_status(self):
        """Test getting changed files with status"""
        self.repo.init_repository()

        # Create and commit initial file
        self.create_test_file("test.txt", "initial")
        self.repo.commit_changes("Initial commit")

        # Modify file
        self.modify_test_file("test.txt", "modified")

        # Create new file
        self.create_test_file("new.txt", "new content")

        changed_files = self.repo.get_changed_files_with_status()
        self.assertIsInstance(changed_files, list)

        file_paths = [f.path for f in changed_files]
        self.assertIn("test.txt", file_paths)
        self.assertIn("new.txt", file_paths)

    def test_has_uncommitted_changes(self):
        """Test checking for uncommitted changes"""
        self.repo.init_repository()

        # Initially should have no changes after init with first commit
        initial_changes = self.repo.has_uncommitted_changes()
        self.assertFalse(initial_changes)

        # Create file - should have changes
        self.create_test_file("test.txt", "content")
        after_create = self.repo.has_uncommitted_changes()
        self.assertTrue(after_create)

        # Commit - should have no changes
        self.repo.commit_changes("Test commit")
        after_commit = self.repo.has_uncommitted_changes()
        self.assertFalse(after_commit)

    def test_get_repository_status(self):
        """Test getting comprehensive repository status"""
        status = self.repo.get_repository_status()

        self.assertIsInstance(status, GitStatus)
        self.assertIsInstance(status.available, bool)
        self.assertIsInstance(status.branches, list)
        self.assertIsInstance(status.has_changes, bool)

    def test_config_operations(self):
        """Test git config operations"""
        self.repo.init_repository()

        # Set config
        set_success = self.repo.set_git_config("user.name", "Test User")
        self.assertTrue(set_success)

        # Get config
        retrieved_value = self.repo.get_git_config("user.name")
        self.assertEqual(retrieved_value, "Test User")

    def test_remote_operations(self):
        """Test remote operations"""
        self.repo.init_repository()

        # Initially no remotes
        initial_remotes = self.repo.get_remotes()
        self.assertIsInstance(initial_remotes, list)

        # Add remote
        add_success = self.repo.add_remote("origin", "https://example.com/repo.git")
        self.assertTrue(add_success)

        # Check remote exists
        has_origin = self.repo.has_remote("origin")
        self.assertTrue(has_origin)

        # Get remotes after adding
        remotes_after = self.repo.get_remotes()
        self.assertIn("origin", remotes_after)

    def test_stash_changes(self):
        """Test stashing changes"""
        self.repo.init_repository()

        # Create and commit initial file
        self.create_test_file("test.txt", "initial")
        self.repo.commit_changes("Initial commit")

        # Modify file
        self.modify_test_file("test.txt", "modified")

        # Check we have changes
        has_changes_before = self.repo.has_uncommitted_changes()
        self.assertTrue(has_changes_before)

        # Stash changes
        stash_success = self.repo.stash_changes("Test stash")
        self.assertTrue(stash_success)

        # Check changes after stash
        has_changes_after = self.repo.has_uncommitted_changes()
        self.assertFalse(has_changes_after)

    def test_checkout_commit(self):
        """Test checking out specific commit"""
        self.repo.init_repository()

        # Create commits
        self.create_test_file("test.txt", "version 1")
        self.repo.commit_changes("First commit")
        first_commit = self.repo.get_last_commit()

        self.modify_test_file("test.txt", "version 2")
        self.repo.commit_changes("Second commit")

        # Checkout first commit
        self.assertIsNotNone(first_commit)

        assert first_commit is not None

        checkout_success = self.repo.checkout_commit(first_commit.hash)

        if checkout_success:
            # Read file content after checkout
            file_content = (self.temp_dir / "test.txt").read_text()
            self.assertEqual(file_content, "version 1")

    def test_get_ahead_behind_count(self):
        """Test calculating ahead/behind counts"""
        self.repo.init_repository()

        # Create two commits
        self.create_test_file("test1.txt", "content 1")
        self.repo.commit_changes("First commit")
        first_commit = self.repo.get_last_commit()

        self.create_test_file("test2.txt", "content 2")
        self.repo.commit_changes("Second commit")
        second_commit = self.repo.get_last_commit()

        self.assertIsNotNone(first_commit)
        self.assertIsNotNone(second_commit)

        assert first_commit is not None
        assert second_commit is not None

        # Same commits should be 0,0
        same_counts = self.repo.get_ahead_behind_count(
            first_commit.hash, first_commit.hash
        )
        self.assertEqual(same_counts, (0, 0))

        # Different commits
        diff_counts = self.repo.get_ahead_behind_count(
            second_commit.hash, first_commit.hash
        )
        self.assertIsInstance(diff_counts, tuple)
        self.assertEqual(len(diff_counts), 2)

    def test_check_merge_conflicts_simple(self):
        """Test merge conflict detection (simple case)"""
        self.repo.init_repository()

        # Create commit
        self.create_test_file("test.txt", "content")
        self.repo.commit_changes("Test commit")
        commit = self.repo.get_last_commit()

        self.assertIsNotNone(commit)

        assert commit is not None

        # Check conflict with same commit (should be false)
        has_conflicts = self.repo.check_merge_conflicts(commit.hash)
        self.assertIsInstance(has_conflicts, bool)

    def test_revert_commit(self):
        """Test reverting to previous commit"""
        self.repo.init_repository()

        # Create first version
        self.create_test_file("test.txt", "version 1")
        self.repo.commit_changes("First commit")
        first_commit = self.repo.get_last_commit()

        # Create second version
        self.modify_test_file("test.txt", "version 2")
        self.repo.commit_changes("Second commit")

        # Revert to first commit
        self.assertIsNotNone(first_commit)

        assert first_commit is not None

        revert_success = self.repo.revert_commit(first_commit.hash)

        if revert_success:
            # Check file content
            file_content = (self.temp_dir / "test.txt").read_text()
            self.assertEqual(file_content, "version 1")


if __name__ == "__main__":
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()

    suite.addTests(loader.loadTestsFromTestCase(NativeGitRepositoryTest))

    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)
