import unittest
from pathlib import Path, PurePosixPath, PureWindowsPath

from abstra_internals.services.file_watcher import FileWatcher


class TestFileWatcherShouldIgnorePath(unittest.TestCase):
    """Test suite for FileWatcher.should_ignore_path method."""

    def setUp(self):
        """Set up a FileWatcher instance for testing."""
        self.watcher = FileWatcher(handlers=[])

    def test_ignore_abstra_directory(self):
        """Test that .abstra/ directory is ignored."""
        self.assertTrue(self.watcher.should_ignore_path(Path("/project/.abstra/cache")))
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.abstra/settings.json"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/deep/path/.abstra/file.txt"))
        )

    def test_ignore_venv_directory(self):
        """Test that .venv directory is ignored."""
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.venv/lib/python"))
        )
        self.assertTrue(self.watcher.should_ignore_path(Path("/project/.venv")))
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/nested/path/.venv/bin/activate"))
        )

    def test_ignore_pycache_directory(self):
        """Test that __pycache__ directory is ignored."""
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/__pycache__/module.pyc"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/src/__pycache__"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/deep/nested/__pycache__/cache.pyc"))
        )

    def test_ignore_git_lock_files(self):
        """Test that specific .git lock files are ignored."""
        # Test index.lock
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/index.lock"))
        )

        # Test HEAD.lock
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/HEAD.lock"))
        )

        # Test config.lock (the original bug case)
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/config.lock"))
        )

    def test_ignore_git_directories(self):
        """Test that specific .git subdirectories are ignored."""
        # Test refs/
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/refs/heads/main"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/refs/tags/v1.0"))
        )

        # Test objects/
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/objects/ab/cdef123"))
        )

        # Test hooks/
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/hooks/pre-commit"))
        )

        # Test logs/
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/logs/HEAD"))
        )

    def test_ignore_git_special_files(self):
        """Test that specific .git files are ignored."""
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/COMMIT_EDITMSG"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/MERGE_HEAD"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/FETCH_HEAD"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/ORIG_HEAD"))
        )

    def test_ignore_any_git_lock_or_tmp_files(self):
        """Test that any .lock or .tmp file in .git directory is ignored."""
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/some-random.lock"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/temp-file.tmp"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(
                Path("/project/.git/refs/heads/branch.lock")
            )
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/objects/pack/temp.tmp"))
        )

    def test_do_not_ignore_regular_files(self):
        """Test that regular files are not ignored."""
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/main.py")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/src/utils.py")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/README.md")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/config.json")))

    def test_do_not_ignore_git_config_without_lock(self):
        """Test that .git/config (without .lock) is not ignored."""
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/.git/config")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/.git/HEAD")))

    def test_windows_paths_with_backslashes(self):
        """Test that Windows paths with backslashes are handled correctly."""
        # Create Windows-style paths using PureWindowsPath
        # These will have backslashes when converted to string
        win_path_1 = PureWindowsPath(r"C:\Users\project\.git\config.lock")
        win_path_2 = PureWindowsPath(
            r"C:\Abstra Seibel Sandbox\teste outro git\.git\config.lock"
        )
        win_path_3 = PureWindowsPath(r"D:\projects\myapp\.venv\lib\site-packages")
        win_path_4 = PureWindowsPath(r"C:\code\__pycache__\module.pyc")

        # These should all be ignored
        self.assertTrue(self.watcher.should_ignore_path(win_path_1))
        self.assertTrue(self.watcher.should_ignore_path(win_path_2))
        self.assertTrue(self.watcher.should_ignore_path(win_path_3))
        self.assertTrue(self.watcher.should_ignore_path(win_path_4))

    def test_windows_paths_with_spaces(self):
        """Test that Windows paths with spaces in directory names are handled correctly."""
        # The original bug case from the user
        win_path = PureWindowsPath(
            r"C:\Abstra Seibel Sandbox\teste outro git\.git\config.lock"
        )
        self.assertTrue(self.watcher.should_ignore_path(win_path))

        # More test cases with spaces
        self.assertTrue(
            self.watcher.should_ignore_path(
                PureWindowsPath(r"C:\Program Files\project\.git\index.lock")
            )
        )
        self.assertTrue(
            self.watcher.should_ignore_path(
                PureWindowsPath(r"D:\My Documents\code\.venv\lib")
            )
        )
        self.assertTrue(
            self.watcher.should_ignore_path(
                PureWindowsPath(r"C:\Users\John Doe\project\__pycache__")
            )
        )

    def test_unix_paths_with_forward_slashes(self):
        """Test that Unix paths with forward slashes work correctly."""
        self.assertTrue(
            self.watcher.should_ignore_path(
                PurePosixPath("/home/user/project/.git/config.lock")
            )
        )
        self.assertTrue(
            self.watcher.should_ignore_path(PurePosixPath("/var/www/app/.venv/bin"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(PurePosixPath("/opt/project/__pycache__"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(
                PurePosixPath("/Users/dev/project/.git/refs/heads/main")
            )
        )

    def test_mixed_case_sensitivity(self):
        """Test path matching with different cases."""
        # These should still match (patterns are case-sensitive)
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/__pycache__/file.pyc"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/config.lock"))
        )

        # These should not match (different case in pattern-sensitive parts)
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/__PYCACHE__")))
        self.assertFalse(
            self.watcher.should_ignore_path(Path("/project/.GIT/config.lock"))
        )

    def test_edge_cases(self):
        """Test edge cases and boundary conditions."""
        # Root level paths
        self.assertTrue(self.watcher.should_ignore_path(Path("/.git/config.lock")))
        self.assertTrue(self.watcher.should_ignore_path(Path("/.venv")))

        # Very deep nested paths
        deep_path = Path("/a/b/c/d/e/f/g/.git/config.lock")
        self.assertTrue(self.watcher.should_ignore_path(deep_path))

        # Paths that contain pattern substring but shouldn't match
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/.gitignore")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/venv_backup")))
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/cache_files")))

    def test_relative_paths(self):
        """Test that relative paths work correctly."""
        self.assertTrue(self.watcher.should_ignore_path(Path(".git/config.lock")))
        self.assertTrue(self.watcher.should_ignore_path(Path(".venv/lib/python")))
        self.assertTrue(
            self.watcher.should_ignore_path(Path("src/__pycache__/module.pyc"))
        )
        self.assertFalse(self.watcher.should_ignore_path(Path("src/main.py")))

    def test_git_subdirectories_ending_with_slash(self):
        """Test patterns that end with slash are matched correctly."""
        # Patterns like ".git/refs/" should match anything under refs
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/refs/heads/main"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/refs/tags/v1.0.0"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/objects/pack/file"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/hooks/pre-commit"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/logs/refs/heads/main"))
        )

    def test_abstra_directory_with_forward_slash(self):
        """Test that .abstra/ pattern (ending with /) matches correctly."""
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.abstra/settings"))
        )
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.abstra/cache/data.json"))
        )

    def test_lock_and_tmp_files_only_in_git(self):
        """Test that .lock and .tmp files are only ignored inside .git directory."""
        # Should be ignored (inside .git)
        self.assertTrue(
            self.watcher.should_ignore_path(Path("/project/.git/custom.lock"))
        )
        self.assertTrue(self.watcher.should_ignore_path(Path("/project/.git/temp.tmp")))

        # Should NOT be ignored (outside .git)
        self.assertFalse(
            self.watcher.should_ignore_path(Path("/project/database.lock"))
        )
        self.assertFalse(self.watcher.should_ignore_path(Path("/project/cache.tmp")))
        self.assertFalse(
            self.watcher.should_ignore_path(Path("/project/data/file.lock"))
        )

    def test_path_normalization_consistency(self):
        """Test that path normalization works consistently across different path representations."""
        # Unix-style path
        posix_path = PurePosixPath("/project/.git/config.lock")
        self.assertTrue(self.watcher.should_ignore_path(posix_path))

        # Windows-style path with backslashes
        win_path = PureWindowsPath(r"C:\project\.git\config.lock")
        self.assertTrue(self.watcher.should_ignore_path(win_path))

        # Windows-style path with forward slashes (also valid on Windows)
        win_path_forward = PureWindowsPath("C:/project/.git/config.lock")
        self.assertTrue(self.watcher.should_ignore_path(win_path_forward))


if __name__ == "__main__":
    unittest.main()
