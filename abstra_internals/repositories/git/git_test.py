import shutil
import tempfile
import unittest
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Tuple, Type

from abstra_internals.repositories.git.dulwich import DulwichGitRepository
from abstra_internals.repositories.git.native import NativeGitRepository
from abstra_internals.repositories.git.types import (
    GitRepositoryInterface,
    GitStatus,
)


class _GitRepositoryTestBase(unittest.TestCase, ABC):
    """Base class providing common test methods for GitRepositoryInterface implementations"""

    __test__ = False

    @property
    @abstractmethod
    def repo_class(self) -> Type[GitRepositoryInterface]:
        """The repository class to test"""
        pass

    def setUp(self):
        """Set up test environment"""
        super().setUp()
        self.temp_dir = Path(tempfile.mkdtemp())
        self.repo = self.repo_class(self.temp_dir)
        self._original_commit_changes = self.repo.commit_changes
        self.repo.commit_changes = self._commit_changes_wrapper

    def _commit_changes_wrapper(self, message: str, add_all: bool = True) -> bool:
        """Wrapper for commit_changes that ensures git is configured"""
        self.ensure_git_configured()
        return self._original_commit_changes(message, add_all)

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
        sub_repo = self.repo_class(sub_dir)
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


class NativeGitRepositoryTest(_GitRepositoryTestBase):
    """Test suite for NativeGitRepository"""

    # Override parent's __test__ = False to make this discoverable by pytest
    __test__ = True

    @property
    def repo_class(self) -> Type[GitRepositoryInterface]:
        return NativeGitRepository


class DulwichGitRepositoryTest(_GitRepositoryTestBase):
    """Test suite for DulwichGitRepository"""

    __test__ = True

    @property
    def repo_class(self) -> Type[GitRepositoryInterface]:
        return DulwichGitRepository


class GitImplementationComparisonTest(unittest.TestCase):
    """Test suite to compare both implementations and ensure they have identical behavior"""

    def setUp(self):
        """Set up test environments for both implementations"""
        super().setUp()
        self.temp_dir1 = Path(tempfile.mkdtemp())
        self.temp_dir2 = Path(tempfile.mkdtemp())
        self.native_repo = NativeGitRepository(self.temp_dir1)
        self.native_repo.configure_git_user("Test User", "test@example.com")
        self.dulwich_repo = DulwichGitRepository(self.temp_dir2)
        self.dulwich_repo.configure_git_user("Test User", "test@example.com")

        # Wrap repo methods to auto-configure git when needed
        self._setup_repo_wrapper(self.native_repo)
        self._setup_repo_wrapper(self.dulwich_repo)

    def _setup_repo_wrapper(self, repo):
        """Set up commit wrapper for a repository"""
        original_commit = repo.commit_changes

        def commit_wrapper(message: str) -> bool:
            self._ensure_git_configured(repo)
            return original_commit(message)

        repo.commit_changes = commit_wrapper

    def _ensure_git_configured(self, repo):
        """Ensure git is configured for commits (required in CI environments)"""
        # Check if user is already configured
        if not repo.get_git_config("user.name"):
            repo.set_git_config("user.name", "Test User")
        if not repo.get_git_config("user.email"):
            repo.set_git_config("user.email", "test@example.com")

    def tearDown(self):
        """Clean up test environments"""
        super().tearDown()
        for temp_dir in [self.temp_dir1, self.temp_dir2]:
            if temp_dir and temp_dir.exists():
                shutil.rmtree(temp_dir, ignore_errors=True)

    def _create_identical_file(self, filename: str, content: str) -> Tuple[Path, Path]:
        """Create identical files in both test directories"""
        file1 = self.temp_dir1 / filename
        file2 = self.temp_dir2 / filename

        file1.parent.mkdir(parents=True, exist_ok=True)
        file2.parent.mkdir(parents=True, exist_ok=True)

        file1.write_text(content)
        file2.write_text(content)

        return file1, file2

    def test_git_availability_identical(self):
        """Test that both implementations report git availability identically"""
        native_available = self.native_repo.is_git_available()
        dulwich_available = self.dulwich_repo.is_git_available()

        self.assertEqual(
            native_available,
            dulwich_available,
            "Git availability detection differs between implementations",
        )
        self.assertIsInstance(native_available, bool)
        self.assertIsInstance(dulwich_available, bool)

    def test_repository_initialization_identical(self):
        """Test that both implementations initialize repositories identically"""
        # Create test files before initialization to test that init adds and commits them
        self._create_identical_file("test_file.txt", "test content for init")
        self._create_identical_file("another_file.py", "print('hello from init')")

        # Initialize repositories
        native_init = self.native_repo.init_repository()
        dulwich_init = self.dulwich_repo.init_repository()

        self.assertEqual(
            native_init, dulwich_init, "Repository initialization behavior differs"
        )
        self.assertTrue(native_init, "Native repo initialization should succeed")
        self.assertTrue(dulwich_init, "Dulwich repo initialization should succeed")

        # Both implementations should create repos
        self.assertTrue(
            self.native_repo.is_git_repository(), "Native should create git repo"
        )
        self.assertTrue(
            self.dulwich_repo.is_git_repository(), "Dulwich should create git repo"
        )

        # Both should have no uncommitted changes (because init should add and commit all files)
        native_uncommitted = self.native_repo.has_uncommitted_changes()
        dulwich_uncommitted = self.dulwich_repo.has_uncommitted_changes()

        self.assertEqual(
            native_uncommitted,
            dulwich_uncommitted,
            f"Uncommitted changes after init differs: Native={native_uncommitted}, Dulwich={dulwich_uncommitted}",
        )
        self.assertFalse(
            native_uncommitted, "Native: should have no uncommitted changes after init"
        )
        self.assertFalse(
            dulwich_uncommitted,
            "Dulwich: should have no uncommitted changes after init",
        )

        # Both should have an initial commit
        native_last_commit = self.native_repo.get_last_commit()
        dulwich_last_commit = self.dulwich_repo.get_last_commit()

        self.assertIsNotNone(native_last_commit, "Native: should have initial commit")
        self.assertIsNotNone(dulwich_last_commit, "Dulwich: should have initial commit")

        assert native_last_commit is not None
        assert dulwich_last_commit is not None

        # Both should have same commit message
        self.assertEqual(
            native_last_commit.message,
            dulwich_last_commit.message,
            "Initial commit messages should be identical",
        )
        self.assertEqual(
            native_last_commit.message,
            "First commit",
            "Initial commit message should be 'First commit'",
        )

    def test_repository_detection_identical(self):
        """Test that both implementations detect repositories identically"""
        # Test on non-repo directories
        native_is_repo_before = self.native_repo.is_git_repository()
        dulwich_is_repo_before = self.dulwich_repo.is_git_repository()

        self.assertEqual(
            native_is_repo_before,
            dulwich_is_repo_before,
            "Repository detection differs on non-repo directories",
        )

        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Test on repo directories
        native_is_repo_after = self.native_repo.is_git_repository()
        dulwich_is_repo_after = self.dulwich_repo.is_git_repository()

        self.assertEqual(
            native_is_repo_after,
            dulwich_is_repo_after,
            "Repository detection differs on repo directories",
        )
        self.assertTrue(native_is_repo_after, "Native should detect repo after init")
        self.assertTrue(dulwich_is_repo_after, "Dulwich should detect repo after init")

    def test_changed_files_detection_identical(self):
        """Test that both implementations detect changed files identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create identical test files
        self._create_identical_file("test.txt", "test content")
        self._create_identical_file("subdir/nested.txt", "nested content")

        # Get changed files
        native_changed = set(self.native_repo.get_changed_files())
        dulwich_changed = set(self.dulwich_repo.get_changed_files())

        self.assertEqual(
            native_changed,
            dulwich_changed,
            f"Changed files detection differs: Native={native_changed}, Dulwich={dulwich_changed}",
        )

        # Git reports directories for new directory structures
        expected_files = {"test.txt", "subdir/"}
        self.assertEqual(native_changed, expected_files)
        self.assertEqual(dulwich_changed, expected_files)

    def test_commit_behavior_identical(self):
        """Test that both implementations commit changes identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create identical test files
        self._create_identical_file("test.txt", "initial content")

        # Commit changes
        native_commit_success = self.native_repo.commit_changes("Test commit")
        dulwich_commit_success = self.dulwich_repo.commit_changes("Test commit")

        self.assertEqual(
            native_commit_success,
            dulwich_commit_success,
            "Commit success behavior differs",
        )
        self.assertTrue(native_commit_success, "Native commit should succeed")
        self.assertTrue(dulwich_commit_success, "Dulwich commit should succeed")

        # Check last commit
        native_last_commit = self.native_repo.get_last_commit()
        dulwich_last_commit = self.dulwich_repo.get_last_commit()

        self.assertIsNotNone(native_last_commit, "Native should have last commit")
        self.assertIsNotNone(dulwich_last_commit, "Dulwich should have last commit")

        assert native_last_commit is not None
        assert dulwich_last_commit is not None

        self.assertEqual(
            native_last_commit.message,
            dulwich_last_commit.message,
            "Commit messages should be identical",
        )
        self.assertEqual(native_last_commit.message, "Test commit")

    def test_repository_status_identical(self):
        """Test that both implementations report repository status identically"""
        # Get status on fresh repositories
        native_status = self.native_repo.get_repository_status()
        dulwich_status = self.dulwich_repo.get_repository_status()

        # Both should be available after initialization
        self.assertEqual(
            native_status.available,
            dulwich_status.available,
            "Repository status availability differs",
        )
        self.assertTrue(native_status.available, "Native repo should be available")
        self.assertTrue(dulwich_status.available, "Dulwich repo should be available")

        # Test with changes
        self._create_identical_file("test.txt", "content")

        native_status_with_changes = self.native_repo.get_repository_status()
        dulwich_status_with_changes = self.dulwich_repo.get_repository_status()

        self.assertEqual(
            native_status_with_changes.has_changes,
            dulwich_status_with_changes.has_changes,
            "Change detection in status differs",
        )
        self.assertTrue(native_status_with_changes.has_changes)
        self.assertTrue(dulwich_status_with_changes.has_changes)

    def test_config_operations_identical(self):
        """Test that both implementations handle configuration identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Set configuration
        native_set_success = self.native_repo.set_git_config("user.name", "Test User")
        dulwich_set_success = self.dulwich_repo.set_git_config("user.name", "Test User")

        self.assertEqual(
            native_set_success, dulwich_set_success, "Config set behavior differs"
        )
        self.assertTrue(native_set_success, "Native config set should succeed")
        self.assertTrue(dulwich_set_success, "Dulwich config set should succeed")

        # Get configuration
        native_config_value = self.native_repo.get_git_config("user.name")
        dulwich_config_value = self.dulwich_repo.get_git_config("user.name")

        self.assertEqual(
            native_config_value, dulwich_config_value, "Config get behavior differs"
        )
        self.assertEqual(native_config_value, "Test User")
        self.assertEqual(dulwich_config_value, "Test User")

    def test_remote_operations_identical(self):
        """Test that both implementations handle remotes identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Initially no remotes
        native_initial_remotes = self.native_repo.get_remotes()
        dulwich_initial_remotes = self.dulwich_repo.get_remotes()

        self.assertEqual(
            set(native_initial_remotes),
            set(dulwich_initial_remotes),
            "Initial remotes differ",
        )
        self.assertEqual(len(native_initial_remotes), 0)
        self.assertEqual(len(dulwich_initial_remotes), 0)

        # Add remote
        remote_url = "https://example.com/repo.git"
        native_add_success = self.native_repo.add_remote("origin", remote_url)
        dulwich_add_success = self.dulwich_repo.add_remote("origin", remote_url)

        self.assertEqual(
            native_add_success, dulwich_add_success, "Add remote behavior differs"
        )
        self.assertTrue(native_add_success, "Native add remote should succeed")
        self.assertTrue(dulwich_add_success, "Dulwich add remote should succeed")

        # Check remote exists
        native_has_origin = self.native_repo.has_remote("origin")
        dulwich_has_origin = self.dulwich_repo.has_remote("origin")

        self.assertEqual(
            native_has_origin, dulwich_has_origin, "Remote existence check differs"
        )
        self.assertTrue(native_has_origin, "Native should have origin remote")
        self.assertTrue(dulwich_has_origin, "Dulwich should have origin remote")

        # Get remotes after adding
        native_remotes_after = set(self.native_repo.get_remotes())
        dulwich_remotes_after = set(self.dulwich_repo.get_remotes())

        self.assertEqual(
            native_remotes_after,
            dulwich_remotes_after,
            "Remotes list differs after adding",
        )
        self.assertIn("origin", native_remotes_after)
        self.assertIn("origin", dulwich_remotes_after)

    def test_uncommitted_changes_detection_identical(self):
        """Test that both implementations detect uncommitted changes identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create and commit initial files
        self._create_identical_file("test.txt", "initial")
        self.native_repo.commit_changes("Initial commit")
        self.dulwich_repo.commit_changes("Initial commit")

        # Should have no changes after commit
        native_no_changes = self.native_repo.has_uncommitted_changes()
        dulwich_no_changes = self.dulwich_repo.has_uncommitted_changes()

        self.assertEqual(
            native_no_changes,
            dulwich_no_changes,
            "Uncommitted changes detection differs after commit",
        )
        self.assertFalse(
            native_no_changes, "Native should have no changes after commit"
        )
        self.assertFalse(
            dulwich_no_changes, "Dulwich should have no changes after commit"
        )

        # Modify files - should have changes
        (self.temp_dir1 / "test.txt").write_text("modified")
        (self.temp_dir2 / "test.txt").write_text("modified")

        native_has_changes = self.native_repo.has_uncommitted_changes()
        dulwich_has_changes = self.dulwich_repo.has_uncommitted_changes()

        self.assertEqual(
            native_has_changes,
            dulwich_has_changes,
            "Uncommitted changes detection differs after modification",
        )
        self.assertTrue(native_has_changes, "Native should detect changes")
        self.assertTrue(dulwich_has_changes, "Dulwich should detect changes")

    def test_branch_operations_identical(self):
        """Test that both implementations handle branches identically"""
        # Create test files before initialization to ensure commits are made
        self._create_identical_file("test.txt", "test content")

        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Get current branch
        native_branch = self.native_repo.get_current_branch()
        dulwich_branch = self.dulwich_repo.get_current_branch()

        # Both should return the same type (str or None)
        self.assertEqual(
            type(native_branch),
            type(dulwich_branch),
            "Current branch return types differ",
        )

        # Get all branches
        native_branches = self.native_repo.get_all_branches()
        dulwich_branches = self.dulwich_repo.get_all_branches()

        self.assertEqual(
            type(native_branches),
            type(dulwich_branches),
            "All branches should return lists",
        )
        self.assertIsInstance(native_branches, list)
        self.assertIsInstance(dulwich_branches, list)
        # With files to commit, both should have the same branches
        self.assertEqual(
            set(native_branches),
            set(dulwich_branches),
            "Branch lists should be identical",
        )

    def test_single_main_branch_only(self):
        """Test that both implementations create only the main branch during initialization"""
        # Create test files before initialization
        self._create_identical_file("test.txt", "test content")

        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Get all branches for both implementations
        native_branches = self.native_repo.get_all_branches()
        dulwich_branches = self.dulwich_repo.get_all_branches()

        # Both should have exactly one branch
        self.assertEqual(
            len(native_branches),
            1,
            f"Native repo should have exactly 1 branch, got {len(native_branches)}: {native_branches}",
        )
        self.assertEqual(
            len(dulwich_branches),
            1,
            f"Dulwich repo should have exactly 1 branch, got {len(dulwich_branches)}: {dulwich_branches}",
        )

        # Both should have the same single branch
        self.assertEqual(
            native_branches,
            dulwich_branches,
            f"Branch lists should be identical: Native={native_branches}, Dulwich={dulwich_branches}",
        )

        # That branch should be 'main'
        self.assertEqual(
            native_branches[0],
            "main",
            f"Native repo should create 'main' branch, got '{native_branches[0]}'",
        )
        self.assertEqual(
            dulwich_branches[0],
            "main",
            f"Dulwich repo should create 'main' branch, got '{dulwich_branches[0]}'",
        )

        # Current branch should also be 'main'
        native_current = self.native_repo.get_current_branch()
        dulwich_current = self.dulwich_repo.get_current_branch()

        self.assertEqual(
            native_current,
            "main",
            f"Native repo current branch should be 'main', got '{native_current}'",
        )
        self.assertEqual(
            dulwich_current,
            "main",
            f"Dulwich repo current branch should be 'main', got '{dulwich_current}'",
        )

        # Both should report the same current branch
        self.assertEqual(
            native_current,
            dulwich_current,
            f"Current branch should be identical: Native='{native_current}', Dulwich='{dulwich_current}'",
        )

        # Verify no 'master' branch exists in either implementation
        self.assertNotIn(
            "master",
            native_branches,
            f"Native repo should not create 'master' branch, branches: {native_branches}",
        )
        self.assertNotIn(
            "master",
            dulwich_branches,
            f"Dulwich repo should not create 'master' branch, branches: {dulwich_branches}",
        )

    def test_comprehensive_workflow_identical(self):
        """Test a complete workflow to ensure identical behavior throughout"""
        # Initialize
        self.assertTrue(self.native_repo.init_repository())
        self.assertTrue(self.dulwich_repo.init_repository())

        # Create files
        self._create_identical_file("file1.txt", "content 1")
        self._create_identical_file("dir/file2.txt", "content 2")

        # Check changes
        native_changes_1 = set(self.native_repo.get_changed_files())
        dulwich_changes_1 = set(self.dulwich_repo.get_changed_files())
        self.assertEqual(native_changes_1, dulwich_changes_1)

        # Commit
        self.assertTrue(self.native_repo.commit_changes("First commit"))
        self.assertTrue(self.dulwich_repo.commit_changes("First commit"))

        # Verify no changes after commit
        self.assertFalse(self.native_repo.has_uncommitted_changes())
        self.assertFalse(self.dulwich_repo.has_uncommitted_changes())

        # Modify files
        (self.temp_dir1 / "file1.txt").write_text("modified content 1")
        (self.temp_dir2 / "file1.txt").write_text("modified content 1")

        # Create new files
        self._create_identical_file("new_file.txt", "new content")

        # Check changes again
        native_changes_2 = set(self.native_repo.get_changed_files())
        dulwich_changes_2 = set(self.dulwich_repo.get_changed_files())
        self.assertEqual(native_changes_2, dulwich_changes_2)

        # Should detect changes
        self.assertTrue(self.native_repo.has_uncommitted_changes())
        self.assertTrue(self.dulwich_repo.has_uncommitted_changes())

        # Get status
        native_status = self.native_repo.get_repository_status()
        dulwich_status = self.dulwich_repo.get_repository_status()

        self.assertEqual(native_status.available, dulwich_status.available)
        self.assertEqual(native_status.has_changes, dulwich_status.has_changes)

        # Commit again
        self.assertTrue(self.native_repo.commit_changes("Second commit"))
        self.assertTrue(self.dulwich_repo.commit_changes("Second commit"))

        # Get commit history
        native_history = self.native_repo.get_commit_history(limit=5)
        dulwich_history = self.dulwich_repo.get_commit_history(limit=5)

        self.assertEqual(len(native_history), len(dulwich_history))
        if native_history and dulwich_history:
            self.assertEqual(native_history[0].message, dulwich_history[0].message)

    def test_merge_conflict_detection_missing_commit_identical(self):
        """Test merge conflict detection with non-existent remote commit - should be identical"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create and commit a file
        self._create_identical_file("test.txt", "content")
        self.native_repo.commit_changes("Test commit")
        self.dulwich_repo.commit_changes("Test commit")

        # Test with non-existent commit hash
        fake_commit = "ed29b9897832c8cb1f04687ef9f515028d3e96ed"

        native_conflicts = self.native_repo.check_merge_conflicts(fake_commit)
        dulwich_conflicts = self.dulwich_repo.check_merge_conflicts(fake_commit)

        self.assertEqual(
            native_conflicts,
            dulwich_conflicts,
            f"Merge conflict detection with missing commit differs: Native={native_conflicts}, Dulwich={dulwich_conflicts}",
        )
        # Should both return True (conflicts) for missing commits
        self.assertTrue(
            native_conflicts, "Native should report conflicts for missing commit"
        )
        self.assertTrue(
            dulwich_conflicts, "Dulwich should report conflicts for missing commit"
        )

    def test_merge_conflict_detection_same_commit_identical(self):
        """Test merge conflict detection with same commit - should be identical (no conflicts)"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create and commit a file
        self._create_identical_file("test.txt", "content")
        self.native_repo.commit_changes("Test commit")
        self.dulwich_repo.commit_changes("Test commit")

        # Get the commit hash
        native_commit = self.native_repo.get_last_commit()
        dulwich_commit = self.dulwich_repo.get_last_commit()

        assert native_commit is not None
        assert dulwich_commit is not None

        # Test merge conflict with same commit
        native_conflicts = self.native_repo.check_merge_conflicts(native_commit.hash)
        dulwich_conflicts = self.dulwich_repo.check_merge_conflicts(dulwich_commit.hash)

        self.assertEqual(
            native_conflicts,
            dulwich_conflicts,
            f"Merge conflict detection with same commit differs: Native={native_conflicts}, Dulwich={dulwich_conflicts}",
        )
        # Should both return False (no conflicts) for same commit
        self.assertFalse(
            native_conflicts, "Native should report no conflicts for same commit"
        )
        self.assertFalse(
            dulwich_conflicts, "Dulwich should report no conflicts for same commit"
        )

    def test_merge_conflict_detection_unrelated_histories_identical(self):
        """Test merge conflict detection with unrelated histories"""
        # Create separate repos to simulate unrelated histories
        temp_dir3 = Path(tempfile.mkdtemp())
        temp_dir4 = Path(tempfile.mkdtemp())

        try:
            repo3 = NativeGitRepository(temp_dir3)
            repo4 = DulwichGitRepository(temp_dir4)

            # Configure git for both
            self._setup_repo_wrapper(repo3)
            self._setup_repo_wrapper(repo4)

            # Initialize first repo
            self.native_repo.init_repository()
            self.dulwich_repo.init_repository()

            # Create first commit
            self._create_identical_file("file1.txt", "content1")
            self.native_repo.commit_changes("First commit")
            self.dulwich_repo.commit_changes("First commit")

            # Initialize separate repos with different history
            repo3.init_repository()
            repo4.init_repository()

            # Create different first commit in separate repos
            (temp_dir3 / "file2.txt").write_text("different content")
            (temp_dir4 / "file2.txt").write_text("different content")
            repo3.commit_changes("Different first commit")
            repo4.commit_changes("Different first commit")

            # Get commit from separate repo
            separate_commit = repo3.get_last_commit()

            assert separate_commit is not None

            # Test conflict detection with unrelated commit
            # Note: This tests the case where commit exists but has no common ancestor
            native_conflicts = self.native_repo.check_merge_conflicts(
                separate_commit.hash
            )
            dulwich_conflicts = self.dulwich_repo.check_merge_conflicts(
                separate_commit.hash
            )

            self.assertEqual(
                native_conflicts,
                dulwich_conflicts,
                f"Merge conflict detection with unrelated history differs: Native={native_conflicts}, Dulwich={dulwich_conflicts}",
            )
            # Should both return True (conflicts) for unrelated histories
            self.assertTrue(
                native_conflicts, "Native should report conflicts for unrelated history"
            )
            self.assertTrue(
                dulwich_conflicts,
                "Dulwich should report conflicts for unrelated history",
            )

        finally:
            if temp_dir3.exists():
                shutil.rmtree(temp_dir3, ignore_errors=True)
            if temp_dir4.exists():
                shutil.rmtree(temp_dir4, ignore_errors=True)

    def test_ahead_behind_count_identical(self):
        """Test ahead/behind counting behavior is identical"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create identical commit history
        self._create_identical_file("file1.txt", "content1")
        self.native_repo.commit_changes("Commit 1")
        self.dulwich_repo.commit_changes("Commit 1")
        commit1_native = self.native_repo.get_last_commit()
        commit1_dulwich = self.dulwich_repo.get_last_commit()

        assert commit1_dulwich is not None
        assert commit1_native is not None

        self._create_identical_file("file2.txt", "content2")
        self.native_repo.commit_changes("Commit 2")
        self.dulwich_repo.commit_changes("Commit 2")
        commit2_native = self.native_repo.get_last_commit()
        commit2_dulwich = self.dulwich_repo.get_last_commit()

        assert commit2_dulwich is not None
        assert commit2_native is not None

        # Test same commit (should be 0,0)
        native_same = self.native_repo.get_ahead_behind_count(
            commit1_native.hash, commit1_native.hash
        )
        dulwich_same = self.dulwich_repo.get_ahead_behind_count(
            commit1_dulwich.hash, commit1_dulwich.hash
        )

        self.assertEqual(
            native_same, dulwich_same, "Same commit ahead/behind should be identical"
        )
        self.assertEqual(native_same, (0, 0), "Same commit should be (0,0)")

        # Test different commits
        native_diff = self.native_repo.get_ahead_behind_count(
            commit2_native.hash, commit1_native.hash
        )
        dulwich_diff = self.dulwich_repo.get_ahead_behind_count(
            commit2_dulwich.hash, commit1_dulwich.hash
        )

        self.assertEqual(
            native_diff,
            dulwich_diff,
            "Different commit ahead/behind should be identical",
        )

    def test_pull_changes_simulation_identical(self):
        """Test simulated pull behavior (without actual remote) is identical"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create initial state
        self._create_identical_file("test.txt", "initial")
        self.native_repo.commit_changes("Initial commit")
        self.dulwich_repo.commit_changes("Initial commit")

        # Add fake remote
        fake_remote_url = "https://github.com/fake/repo.git"
        native_add_remote = self.native_repo.add_remote("origin", fake_remote_url)
        dulwich_add_remote = self.dulwich_repo.add_remote("origin", fake_remote_url)

        self.assertEqual(
            native_add_remote,
            dulwich_add_remote,
            "Add remote should behave identically",
        )
        self.assertTrue(native_add_remote, "Should successfully add remote")

        # Test pull behavior with non-existent remote (should both fail identically)
        native_pull = self.native_repo.pull_changes(conflict_resolution="theirs")
        dulwich_pull = self.dulwich_repo.pull_changes(conflict_resolution="theirs")

        self.assertEqual(
            native_pull,
            dulwich_pull,
            "Pull behavior with fake remote should be identical",
        )
        # Both should fail since remote doesn't exist
        self.assertFalse(native_pull, "Pull from fake remote should fail")
        self.assertFalse(dulwich_pull, "Pull from fake remote should fail")

    def test_repository_state_after_operations_identical(self):
        """Test that repository state remains identical after various operations"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Helper to compare full repository state
        def compare_repo_states(operation_name):
            native_status = self.native_repo.get_repository_status()
            dulwich_status = self.dulwich_repo.get_repository_status()

            self.assertEqual(
                native_status.available,
                dulwich_status.available,
                f"After {operation_name}: availability differs",
            )
            self.assertEqual(
                native_status.has_changes,
                dulwich_status.has_changes,
                f"After {operation_name}: has_changes differs",
            )
            self.assertEqual(
                native_status.branch,
                dulwich_status.branch,
                f"After {operation_name}: current branch differs",
            )
            self.assertEqual(
                set(native_status.branches),
                set(dulwich_status.branches),
                f"After {operation_name}: branch list differs",
            )

            # Compare changed files
            native_changed = set(self.native_repo.get_changed_files())
            dulwich_changed = set(self.dulwich_repo.get_changed_files())
            self.assertEqual(
                native_changed,
                dulwich_changed,
                f"After {operation_name}: changed files differ",
            )

        # Test state after initialization
        compare_repo_states("initialization")

        # Add files and test state
        self._create_identical_file("test.txt", "content")
        self._create_identical_file("dir/nested.txt", "nested")
        compare_repo_states("adding files")

        # Commit and test state
        self.native_repo.commit_changes("Test commit")
        self.dulwich_repo.commit_changes("Test commit")
        compare_repo_states("first commit")

        # Modify files and test state
        (self.temp_dir1 / "test.txt").write_text("modified")
        (self.temp_dir2 / "test.txt").write_text("modified")
        compare_repo_states("modifying files")

        # Add new files and test state
        self._create_identical_file("new.txt", "new content")
        compare_repo_states("adding new files")

        # Commit again and test state
        self.native_repo.commit_changes("Second commit")
        self.dulwich_repo.commit_changes("Second commit")
        compare_repo_states("second commit")

    def test_stash_behavior_identical(self):
        """Test that stash operations behave identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create and commit initial files
        self._create_identical_file("test.txt", "initial")
        self.native_repo.commit_changes("Initial commit")
        self.dulwich_repo.commit_changes("Initial commit")

        # Modify files to create changes to stash
        (self.temp_dir1 / "test.txt").write_text("modified for stash")
        (self.temp_dir2 / "test.txt").write_text("modified for stash")

        # Verify we have changes before stash
        self.assertTrue(self.native_repo.has_uncommitted_changes())
        self.assertTrue(self.dulwich_repo.has_uncommitted_changes())

        # Stash changes
        native_stash = self.native_repo.stash_changes("Test stash")
        dulwich_stash = self.dulwich_repo.stash_changes("Test stash")

        self.assertEqual(
            native_stash, dulwich_stash, "Stash operation results should be identical"
        )
        self.assertTrue(native_stash, "Native stash should succeed")
        self.assertTrue(dulwich_stash, "Dulwich stash should succeed")

        # Verify state after stash
        native_changes_after = self.native_repo.has_uncommitted_changes()
        dulwich_changes_after = self.dulwich_repo.has_uncommitted_changes()

        self.assertEqual(
            native_changes_after,
            dulwich_changes_after,
            "Changes detection after stash should be identical",
        )
        self.assertFalse(native_changes_after, "Should have no changes after stash")
        self.assertFalse(dulwich_changes_after, "Should have no changes after stash")

        # Verify file content after stash
        native_content = (self.temp_dir1 / "test.txt").read_text()
        dulwich_content = (self.temp_dir2 / "test.txt").read_text()

        self.assertEqual(
            native_content,
            dulwich_content,
            "File content after stash should be identical",
        )
        self.assertEqual(
            native_content, "initial", "File should be reverted to original content"
        )

    def test_checkout_commit_behavior_identical(self):
        """Test that commit checkout behaves identically"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create commit history
        self._create_identical_file("test.txt", "version 1")
        self.native_repo.commit_changes("First commit")
        self.dulwich_repo.commit_changes("First commit")
        first_commit_native = self.native_repo.get_last_commit()
        first_commit_dulwich = self.dulwich_repo.get_last_commit()

        self._create_identical_file("test.txt", "version 2")
        self.native_repo.commit_changes("Second commit")
        self.dulwich_repo.commit_changes("Second commit")

        assert first_commit_native is not None
        assert first_commit_dulwich is not None

        # Checkout first commit
        native_checkout = self.native_repo.checkout_commit(first_commit_native.hash)
        dulwich_checkout = self.dulwich_repo.checkout_commit(first_commit_dulwich.hash)

        self.assertEqual(
            native_checkout, dulwich_checkout, "Checkout results should be identical"
        )

        if native_checkout:  # Only test if checkout succeeded
            # Verify file content after checkout
            native_content = (self.temp_dir1 / "test.txt").read_text()
            dulwich_content = (self.temp_dir2 / "test.txt").read_text()

            self.assertEqual(
                native_content,
                dulwich_content,
                "File content after checkout should be identical",
            )
            self.assertEqual(
                native_content, "version 1", "Should have first version content"
            )

    def test_merge_conflict_with_actual_changes_identical(self):
        """Test merge conflict detection with actual conflicting changes"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Create base commit
        self._create_identical_file("conflict.txt", "base content")
        self.native_repo.commit_changes("Base commit")
        self.dulwich_repo.commit_changes("Base commit")
        base_commit_native = self.native_repo.get_last_commit()
        base_commit_dulwich = self.dulwich_repo.get_last_commit()

        assert base_commit_native is not None
        assert base_commit_dulwich is not None

        # Create first branch of changes
        (self.temp_dir1 / "conflict.txt").write_text("branch 1 content")
        (self.temp_dir2 / "conflict.txt").write_text("branch 1 content")
        self.native_repo.commit_changes("Branch 1 changes")
        self.dulwich_repo.commit_changes("Branch 1 changes")
        branch1_commit_native = self.native_repo.get_last_commit()
        branch1_commit_dulwich = self.dulwich_repo.get_last_commit()

        assert branch1_commit_native is not None
        assert branch1_commit_dulwich is not None

        # Reset to base and create conflicting changes
        self.native_repo.checkout_commit(base_commit_native.hash)
        self.dulwich_repo.checkout_commit(base_commit_dulwich.hash)

        (self.temp_dir1 / "conflict.txt").write_text("branch 2 content")
        (self.temp_dir2 / "conflict.txt").write_text("branch 2 content")
        self.native_repo.commit_changes("Branch 2 changes")
        self.dulwich_repo.commit_changes("Branch 2 changes")

        # Test conflict detection between conflicting branches
        native_conflicts = self.native_repo.check_merge_conflicts(
            branch1_commit_native.hash
        )
        dulwich_conflicts = self.dulwich_repo.check_merge_conflicts(
            branch1_commit_dulwich.hash
        )

        self.assertEqual(
            native_conflicts,
            dulwich_conflicts,
            "Conflict detection with actual conflicts should be identical",
        )

    def test_complex_workflow_with_multiple_commits_identical(self):
        """Test complex workflow with multiple commits, modifications, and state changes"""
        # Initialize repositories
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        commits_native = []
        commits_dulwich = []

        # Create a series of commits with various file operations
        operations = [
            (
                "Create initial files",
                lambda: [
                    self._create_identical_file("file1.txt", "initial content 1"),
                    self._create_identical_file("dir/file2.txt", "initial content 2"),
                ],
            ),
            (
                "Modify existing files",
                lambda: [
                    (self.temp_dir1 / "file1.txt").write_text("modified content 1"),
                    (self.temp_dir2 / "file1.txt").write_text("modified content 1"),
                ],
            ),
            (
                "Add new files",
                lambda: [
                    self._create_identical_file("file3.txt", "new content 3"),
                    self._create_identical_file(
                        "dir/subdir/file4.txt", "nested content 4"
                    ),
                ],
            ),
            (
                "Delete and recreate",
                lambda: [
                    (self.temp_dir1 / "file1.txt").unlink(),
                    (self.temp_dir2 / "file1.txt").unlink(),
                    self._create_identical_file("file1.txt", "recreated content 1"),
                ],
            ),
            (
                "Mixed operations",
                lambda: [
                    (self.temp_dir1 / "dir/file2.txt").write_text("updated content 2"),
                    (self.temp_dir2 / "dir/file2.txt").write_text("updated content 2"),
                    self._create_identical_file("final.txt", "final content"),
                ],
            ),
        ]

        for i, (description, operation) in enumerate(operations):
            # Perform operation
            operation()

            # Check repository state before commit
            native_changed = set(self.native_repo.get_changed_files())
            dulwich_changed = set(self.dulwich_repo.get_changed_files())
            self.assertEqual(
                native_changed,
                dulwich_changed,
                f"Step {i} ({description}): Changed files should be identical",
            )

            native_has_changes = self.native_repo.has_uncommitted_changes()
            dulwich_has_changes = self.dulwich_repo.has_uncommitted_changes()
            self.assertEqual(
                native_has_changes,
                dulwich_has_changes,
                f"Step {i} ({description}): Uncommitted changes detection should be identical",
            )

            # Commit changes
            commit_msg = f"Commit {i + 1}: {description}"
            native_commit_success = self.native_repo.commit_changes(commit_msg)
            dulwich_commit_success = self.dulwich_repo.commit_changes(commit_msg)

            self.assertEqual(
                native_commit_success,
                dulwich_commit_success,
                f"Step {i} ({description}): Commit success should be identical",
            )
            self.assertTrue(
                native_commit_success, f"Step {i}: Native commit should succeed"
            )

            # Get and verify commits
            native_commit = self.native_repo.get_last_commit()
            dulwich_commit = self.dulwich_repo.get_last_commit()

            self.assertIsNotNone(native_commit, f"Step {i}: Native should have commit")
            self.assertIsNotNone(
                dulwich_commit, f"Step {i}: Dulwich should have commit"
            )

            assert native_commit is not None
            assert dulwich_commit is not None

            self.assertEqual(
                native_commit.message,
                dulwich_commit.message,
                f"Step {i}: Commit messages should be identical",
            )

            commits_native.append(native_commit)
            commits_dulwich.append(dulwich_commit)

            # Verify no uncommitted changes after commit
            native_clean = self.native_repo.has_uncommitted_changes()
            dulwich_clean = self.dulwich_repo.has_uncommitted_changes()
            self.assertEqual(
                native_clean,
                dulwich_clean,
                f"Step {i}: Post-commit clean state should be identical",
            )
            self.assertFalse(native_clean, f"Step {i}: Should be clean after commit")

        # Test commit history
        native_history = self.native_repo.get_commit_history(limit=10)
        dulwich_history = self.dulwich_repo.get_commit_history(limit=10)

        self.assertEqual(
            len(native_history),
            len(dulwich_history),
            "Commit history length should be identical",
        )

        for i, (native_h, dulwich_h) in enumerate(zip(native_history, dulwich_history)):
            self.assertEqual(
                native_h.message,
                dulwich_h.message,
                f"History item {i}: Commit messages should be identical",
            )

        # Test ahead/behind counts between different commits
        if len(commits_native) >= 2:
            native_ahead_behind = self.native_repo.get_ahead_behind_count(
                commits_native[-1].hash, commits_native[0].hash
            )
            dulwich_ahead_behind = self.dulwich_repo.get_ahead_behind_count(
                commits_dulwich[-1].hash, commits_dulwich[0].hash
            )
            self.assertEqual(
                native_ahead_behind,
                dulwich_ahead_behind,
                "Ahead/behind counts should be identical",
            )

    def test_empty_commit_edge_cases_identical(self):
        """Test edge cases with empty commits and repositories"""
        # Test on completely empty repositories
        native_status_empty = self.native_repo.get_repository_status()
        dulwich_status_empty = self.dulwich_repo.get_repository_status()

        self.assertEqual(
            native_status_empty.available,
            dulwich_status_empty.available,
            "Empty repo availability should be identical",
        )

        # Initialize but don't commit anything yet
        self.native_repo.init_repository()
        self.dulwich_repo.init_repository()

        # Both should handle empty state identically
        native_changes_empty = self.native_repo.get_changed_files()
        dulwich_changes_empty = self.dulwich_repo.get_changed_files()
        self.assertEqual(
            set(native_changes_empty),
            set(dulwich_changes_empty),
            "Empty repo changed files should be identical",
        )

        # Test merge conflict detection on repos without any commits
        fake_hash = "1234567890abcdef1234567890abcdef12345678"
        native_conflicts_empty = self.native_repo.check_merge_conflicts(fake_hash)
        dulwich_conflicts_empty = self.dulwich_repo.check_merge_conflicts(fake_hash)

        self.assertEqual(
            native_conflicts_empty,
            dulwich_conflicts_empty,
            "Empty repo conflict detection should be identical",
        )

        # Test with None/empty parameters
        native_conflicts_none = self.native_repo.check_merge_conflicts("")
        dulwich_conflicts_none = self.dulwich_repo.check_merge_conflicts("")

        self.assertEqual(
            native_conflicts_none,
            dulwich_conflicts_none,
            "Empty string conflict detection should be identical",
        )
        self.assertFalse(native_conflicts_none, "Empty string should return False")


if __name__ == "__main__":
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()

    suite.addTests(loader.loadTestsFromTestCase(NativeGitRepositoryTest))
    suite.addTests(loader.loadTestsFromTestCase(DulwichGitRepositoryTest))
    suite.addTests(loader.loadTestsFromTestCase(GitImplementationComparisonTest))

    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)
