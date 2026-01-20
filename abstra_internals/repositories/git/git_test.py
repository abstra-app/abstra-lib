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

    def create_file_with_size(self, filename: str, size_bytes: int) -> Path:
        """Helper to create a file with a specific size"""
        file_path = self.temp_dir / filename
        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, "wb") as f:
            f.write(b"x" * size_bytes)
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

    # Large files detection tests

    def test_get_large_files_detects_large_file(self):
        """Test that large files are detected correctly"""
        self.repo.init_repository()
        self.create_file_with_size("large_file.pdf", 6 * 1024 * 1024)

        large_files = self.repo.get_large_files()

        self.assertEqual(len(large_files), 1)
        self.assertEqual(large_files[0].path, "large_file.pdf")
        self.assertGreater(large_files[0].size_bytes, 5 * 1024 * 1024)
        self.assertIn("MB", large_files[0].size_human)

    def test_get_large_files_ignores_small_files(self):
        """Test that small files are not flagged as large"""
        self.repo.init_repository()
        self.create_file_with_size("small_file.txt", 1024)

        large_files = self.repo.get_large_files()

        self.assertEqual(len(large_files), 0)

    def test_get_large_files_custom_threshold(self):
        """Test that custom size threshold works"""
        self.repo.init_repository()
        self.create_file_with_size("medium_file.bin", 2 * 1024 * 1024)

        # With default 5MB threshold, should not be detected
        large_files_default = self.repo.get_large_files()
        self.assertEqual(len(large_files_default), 0)

        # With 1MB threshold, should be detected
        large_files_custom = self.repo.get_large_files(max_size_bytes=1 * 1024 * 1024)
        self.assertEqual(len(large_files_custom), 1)
        self.assertEqual(large_files_custom[0].path, "medium_file.bin")

    def test_get_large_files_multiple_files(self):
        """Test detection of multiple large files"""
        self.repo.init_repository()
        self.create_file_with_size("doc1.pdf", 6 * 1024 * 1024)
        self.create_file_with_size("doc2.pdf", 7 * 1024 * 1024)
        self.create_file_with_size("small.txt", 1024)

        large_files = self.repo.get_large_files()

        self.assertEqual(len(large_files), 2)
        paths = {f.path for f in large_files}
        self.assertIn("doc1.pdf", paths)
        self.assertIn("doc2.pdf", paths)

    def test_get_large_files_only_uncommitted(self):
        """Test that only uncommitted files are checked"""
        self.repo.init_repository()

        # Create a large file and commit it
        self.create_file_with_size("committed_large.bin", 6 * 1024 * 1024)
        self.repo.commit_changes("Add large file")

        # Should not detect the committed large file
        large_files = self.repo.get_large_files()
        self.assertEqual(len(large_files), 0)

        # Create a new large file (uncommitted)
        self.create_file_with_size("new_large.bin", 6 * 1024 * 1024)

        # Now should detect only the new file
        large_files = self.repo.get_large_files()
        self.assertEqual(len(large_files), 1)
        self.assertEqual(large_files[0].path, "new_large.bin")

    # Path decoding tests

    def test_decode_simple_path(self):
        """Test that simple paths are returned unchanged"""
        result = self.repo._decode_git_path("simple.txt")
        self.assertEqual(result, "simple.txt")

    def test_decode_path_with_spaces(self):
        """Test decoding of paths with spaces (quoted by git)"""
        result = self.repo._decode_git_path('"path with spaces.txt"')
        self.assertEqual(result, "path with spaces.txt")

    def test_decode_path_with_octal_utf8(self):
        """Test decoding of UTF-8 characters encoded as octal escapes"""
        # 'é' in UTF-8 is 0xC3 0xA9 (bytes), which is \303\251 in octal
        result = self.repo._decode_git_path('"caf\\303\\251.txt"')
        self.assertEqual(result, "café.txt")

    def test_decode_empty_path(self):
        """Test that empty paths are handled correctly"""
        result = self.repo._decode_git_path("")
        self.assertEqual(result, "")

    # File size formatting tests

    def test_format_bytes(self):
        """Test formatting of small sizes in bytes"""
        result = self.repo._format_file_size(500)
        self.assertEqual(result, "500 B")

    def test_format_kilobytes(self):
        """Test formatting of kilobyte sizes"""
        result = self.repo._format_file_size(2048)
        self.assertEqual(result, "2.0 KB")

    def test_format_megabytes(self):
        """Test formatting of megabyte sizes"""
        result = self.repo._format_file_size(5 * 1024 * 1024)
        self.assertEqual(result, "5.0 MB")

    def test_format_gigabytes(self):
        """Test formatting of gigabyte sizes"""
        result = self.repo._format_file_size(2 * 1024 * 1024 * 1024)
        self.assertEqual(result, "2.0 GB")

    # Gitignore tests

    def test_add_to_gitignore_creates_file(self):
        """Test that .gitignore is created if it doesn't exist"""
        self.repo.init_repository()
        gitignore_path = self.temp_dir / ".gitignore"

        success, error = self.repo.add_to_gitignore(["large_file.pdf"])

        self.assertTrue(success)
        self.assertIsNone(error)
        self.assertTrue(gitignore_path.exists())
        content = gitignore_path.read_text(encoding="utf-8")
        self.assertIn("large_file.pdf", content)

    def test_add_to_gitignore_appends_to_existing(self):
        """Test that patterns are appended to existing .gitignore"""
        self.repo.init_repository()
        gitignore_path = self.temp_dir / ".gitignore"
        gitignore_path.write_text("*.log\n", encoding="utf-8")

        success, _ = self.repo.add_to_gitignore(["large_file.pdf"])

        self.assertTrue(success)
        content = gitignore_path.read_text(encoding="utf-8")
        self.assertIn("*.log", content)
        self.assertIn("large_file.pdf", content)

    def test_add_to_gitignore_skips_duplicates(self):
        """Test that duplicate patterns are not added"""
        self.repo.init_repository()
        gitignore_path = self.temp_dir / ".gitignore"
        gitignore_path.write_text("large_file.pdf\n", encoding="utf-8")

        success, _ = self.repo.add_to_gitignore(["large_file.pdf"])

        self.assertTrue(success)
        content = gitignore_path.read_text(encoding="utf-8")
        self.assertEqual(content.count("large_file.pdf"), 1)

    def test_add_to_gitignore_multiple_paths(self):
        """Test adding multiple paths at once"""
        self.repo.init_repository()
        success, error = self.repo.add_to_gitignore(
            ["file1.pdf", "file2.xlsx", "file3.bin"]
        )

        self.assertTrue(success)
        gitignore_path = self.temp_dir / ".gitignore"
        content = gitignore_path.read_text(encoding="utf-8")
        self.assertIn("file1.pdf", content)
        self.assertIn("file2.xlsx", content)
        self.assertIn("file3.bin", content)

    def test_add_to_gitignore_empty_list(self):
        """Test that empty list returns success without changes"""
        self.repo.init_repository()
        success, error = self.repo.add_to_gitignore([])

        self.assertTrue(success)
        self.assertIsNone(error)

    # Integration test

    def test_detect_and_gitignore_workflow(self):
        """Test the full workflow: detect large files and add them to .gitignore"""
        self.repo.init_repository()
        self.create_file_with_size("big_spreadsheet.xlsx", 6 * 1024 * 1024)
        self.create_file_with_size("small_code.py", 1024)

        # Detect large files
        large_files = self.repo.get_large_files()
        self.assertEqual(len(large_files), 1)
        self.assertEqual(large_files[0].path, "big_spreadsheet.xlsx")

        # Add to gitignore
        paths = [f.path for f in large_files]
        success, _ = self.repo.add_to_gitignore(paths)
        self.assertTrue(success)

        # Verify the file is now ignored
        success, stdout, _ = self.repo._run_git_command(
            ["check-ignore", "big_spreadsheet.xlsx"]
        )
        self.assertTrue(success)
        self.assertIn("big_spreadsheet.xlsx", stdout)

    def test_files_with_spaces_in_name(self):
        """Test handling of large files with spaces in their names"""
        self.repo.init_repository()
        file_with_spaces = self.temp_dir / "My Large Document.pdf"
        with open(file_with_spaces, "wb") as f:
            f.write(b"x" * (6 * 1024 * 1024))

        # Detect large files
        large_files = self.repo.get_large_files()
        self.assertEqual(len(large_files), 1)
        self.assertEqual(large_files[0].path, "My Large Document.pdf")

        # Add to gitignore
        success, _ = self.repo.add_to_gitignore([large_files[0].path])
        self.assertTrue(success)

        # Verify gitignore content
        gitignore_path = self.temp_dir / ".gitignore"
        content = gitignore_path.read_text(encoding="utf-8")
        self.assertIn("My Large Document.pdf", content)


if __name__ == "__main__":
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()

    suite.addTests(loader.loadTestsFromTestCase(NativeGitRepositoryTest))

    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)
