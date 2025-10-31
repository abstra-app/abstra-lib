import fnmatch
import os
import threading
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from abstra_internals.consts.filepaths import GITIGNORE_FILEPATH
from abstra_internals.repositories.git import create_git_repository
from abstra_internals.settings import Settings
from abstra_internals.utils.fs_cache import get_path_cache


class FileSystemService:
    # Cache for git check-ignore results
    _git_ignore_cache: Dict[Path, bool] = {}
    _git_ignore_cache_lock = threading.Lock()
    _git_repository = None
    _gitignore_mtime: Optional[float] = None

    # Fallback cache for Python .gitignore parsing (when git unavailable)
    _gitignore_cache: Dict[Path, List[str]] = {}
    _gitignore_cache_lock = threading.Lock()

    @staticmethod
    def _get_git_repository():
        """Get or create the git repository instance."""
        if FileSystemService._git_repository is None:
            FileSystemService._git_repository = create_git_repository(
                Settings.root_path
            )
        return FileSystemService._git_repository

    @staticmethod
    def _is_git_available() -> bool:
        """Check if git is available and we're in a git repository."""
        git_repo = FileSystemService._get_git_repository()
        return git_repo.is_git_repository()

    @staticmethod
    def _check_gitignore_modified():
        """Check if .gitignore has been modified since last cache, and clear if needed."""
        gitignore_path = Settings.root_path / GITIGNORE_FILEPATH
        if gitignore_path.exists():
            try:
                current_mtime = gitignore_path.stat().st_mtime
                if FileSystemService._gitignore_mtime is None:
                    FileSystemService._gitignore_mtime = current_mtime
                elif FileSystemService._gitignore_mtime != current_mtime:
                    FileSystemService.clear_gitignore_cache()
                    FileSystemService._gitignore_mtime = current_mtime
            except OSError:
                pass
        elif FileSystemService._gitignore_mtime is not None:
            # .gitignore was deleted
            FileSystemService.clear_gitignore_cache()
            FileSystemService._gitignore_mtime = None

    @staticmethod
    def _check_git_ignore_batch(paths: List[Path]) -> Dict[Path, bool]:
        """
        Check multiple paths at once using git check-ignore --stdin.
        Much more efficient than checking one at a time.
        """
        FileSystemService._check_gitignore_modified()

        if not FileSystemService._is_git_available():
            return {path: False for path in paths}

        results = {}
        uncached_paths = []

        # Check cache first
        with FileSystemService._git_ignore_cache_lock:
            for path in paths:
                if path in FileSystemService._git_ignore_cache:
                    results[path] = FileSystemService._git_ignore_cache[path]
                else:
                    uncached_paths.append(path)

        if not uncached_paths:
            return results

        # Use git repository to check in batch
        git_repo = FileSystemService._get_git_repository()
        batch_results = git_repo.check_ignore_batch(uncached_paths)

        # Update cache
        with FileSystemService._git_ignore_cache_lock:
            for path, is_ignored in batch_results.items():
                FileSystemService._git_ignore_cache[path] = is_ignored
                results[path] = is_ignored

        return results

    @staticmethod
    def _check_git_ignore(path: Path) -> bool:
        """
        Use git check-ignore to determine if a path should be ignored.
        Much faster than parsing .gitignore files manually.
        """
        # Quick cache check
        if path in FileSystemService._git_ignore_cache:
            return FileSystemService._git_ignore_cache[path]

        # Use batch method for single path (still efficient due to caching)
        result = FileSystemService._check_git_ignore_batch([path])
        return result.get(path, False)

    @staticmethod
    def _get_gitignore_patterns(directory: Path) -> Optional[List[str]]:
        """
        Get cached .gitignore patterns for a directory.
        Returns None if no .gitignore file exists.
        """
        # Quick check without lock
        if directory in FileSystemService._gitignore_cache:
            return FileSystemService._gitignore_cache[directory]

        with FileSystemService._gitignore_cache_lock:
            # Double-check after acquiring lock
            if directory in FileSystemService._gitignore_cache:
                return FileSystemService._gitignore_cache[directory]

            ignore_file = directory / GITIGNORE_FILEPATH
            patterns = None

            # Check if .gitignore exists and read it
            try:
                if ignore_file.exists():
                    patterns = ignore_file.read_text().splitlines()
            except (IOError, UnicodeDecodeError):
                pass

            # Cache the result (None if file doesn't exist)
            FileSystemService._gitignore_cache[directory] = patterns if patterns else []
            return FileSystemService._gitignore_cache[directory]

    @staticmethod
    def clear_gitignore_cache():
        """Clear all gitignore-related caches. Use when .gitignore files are modified."""
        with FileSystemService._git_ignore_cache_lock:
            FileSystemService._git_ignore_cache.clear()

        # Also clear the old pattern cache if it exists (for fallback mode)
        if hasattr(FileSystemService, "_gitignore_cache"):
            FileSystemService._gitignore_cache.clear()

        # Clear git repository cache to avoid using stale repository instances
        FileSystemService._git_repository = None

        # Reset mtime tracking
        FileSystemService._gitignore_mtime = None

    @staticmethod
    def untrack_path_from_git(path: Path):
        """Untrack a path from git (git rm --cached)."""
        git_repo = FileSystemService._get_git_repository()
        git_repo.untrack_path(path)
        FileSystemService.clear_gitignore_cache()

    @staticmethod
    def venv_path() -> Optional[Path]:
        str_path = os.getenv("VIRTUAL_ENV") or os.getenv("CONDA_PREFIX")
        if str_path:
            path = Path(str_path).resolve()
            if path.exists() and path.is_dir():
                return path
        return None

    @staticmethod
    def list_files(
        dir: Path,
        *,
        include_dirs: bool = False,
        use_ignore: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
        recursive: bool = True,
    ) -> List[Path]:
        """
        List all files in the given directory, optionally filtering by suffixes
        and applying ignore files.
        Args:
            dir (Path): The directory to list.
            apply_ignore_files (bool): Whether to apply ignore files: .gitignore.
            allowed_suffixes (Optional[List[str]]): List of allowed file suffixes. If None, all files are included.
        """
        return FileSystemService.list_paths(
            dir,
            include_dirs=include_dirs,
            use_ignore=use_ignore,
            allowed_suffixes=allowed_suffixes,
            recursive=recursive,
        )

    @staticmethod
    def list_paths(
        dirpath: Path,
        *,
        include_dirs: bool = True,
        use_ignore: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
        recursive: bool = True,
    ) -> List[Path]:
        """ "
        List all files and directories in the given directory, optionally filtering by suffixes
        and applying ignore files.
        Args:
            dir (Path): The directory to list.
            include_dirs (bool): Whether to include directories in the results.
            apply_ignore_files (bool): Whether to apply ignore files: .gitignore.
            allowed_suffixes (Optional[List[str]]): List of allowed file suffixes. If None, all files are included.
        """
        if not dirpath.exists():
            return []

        if not dirpath.is_dir():
            raise ValueError(f"Provided path {dirpath} is not a directory.")

        # If using git ignore, collect all paths first and check in one batch
        if use_ignore and FileSystemService._is_git_available():
            return FileSystemService._list_paths_with_git(
                dirpath,
                include_dirs=include_dirs,
                allowed_suffixes=allowed_suffixes,
                recursive=recursive,
            )

        # Fallback to old method if git not available
        return FileSystemService._list_paths_recursive(
            dirpath,
            include_dirs=include_dirs,
            use_ignore=use_ignore,
            allowed_suffixes=allowed_suffixes,
            recursive=recursive,
        )

    @staticmethod
    def _list_paths_with_git(
        dirpath: Path,
        *,
        include_dirs: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
        recursive: bool = True,
    ) -> List[Path]:
        """
        Optimized version that collects all paths first, then checks git ignore in one batch.
        """
        all_paths = []
        path_info = {}  # Map path to (is_directory, should_check_suffix)

        # Collect all paths recursively without checking ignore
        def collect_paths(current_dir: Path):
            try:
                with os.scandir(current_dir) as entries:
                    for entry in entries:
                        try:
                            is_directory = entry.is_dir(follow_symlinks=False)
                        except OSError:
                            continue

                        child = Path(entry.path)
                        all_paths.append(child)
                        path_info[child] = (
                            is_directory,
                            not is_directory or include_dirs,
                        )

                        if is_directory and recursive:
                            collect_paths(child)
            except PermissionError:
                pass

        collect_paths(dirpath)

        # Check all paths at once with git
        ignore_results = FileSystemService._check_git_ignore_batch(all_paths)

        # Filter results
        matches = []
        if include_dirs and not dirpath.is_symlink():
            matches.append(dirpath)

        for path in all_paths:
            # Skip ignored
            if ignore_results.get(path, False):
                continue

            is_directory, should_include = path_info[path]

            # Check suffix filter
            if not is_directory and not FileSystemService._suffix_allowed(
                path, allowed_suffixes
            ):
                continue

            # Include based on type
            if should_include:
                matches.append(path)

        return sorted(matches, key=lambda p: p.as_posix())

    @staticmethod
    def _list_paths_recursive(
        dirpath: Path,
        *,
        include_dirs: bool = True,
        use_ignore: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
        recursive: bool = True,
    ) -> List[Path]:
        """Fallback recursive implementation when git is not available."""
        if use_ignore and (FileSystemService.is_ignored(dirpath)):
            return []

        matches: List[Path] = []
        if include_dirs and not dirpath.is_symlink():
            matches.append(dirpath)

        try:
            with os.scandir(dirpath) as entries:
                for entry in entries:
                    try:
                        is_directory = entry.is_dir(follow_symlinks=False)
                    except OSError:
                        continue

                    child = Path(entry.path)

                    # Check if ignored
                    if use_ignore and FileSystemService._is_ignored_with_stat(
                        child, is_directory
                    ):
                        continue

                    # Check if we should include this entry
                    if is_directory or FileSystemService._suffix_allowed(
                        child, allowed_suffixes
                    ):
                        matches.append(child)

                    # Recurse into directories
                    if is_directory and recursive:
                        matches.extend(
                            FileSystemService._list_paths_recursive(
                                child,
                                include_dirs=include_dirs,
                                use_ignore=use_ignore,
                                allowed_suffixes=allowed_suffixes,
                                recursive=True,
                            )
                        )
        except PermissionError:
            pass

        return sorted(matches, key=lambda p: p.as_posix())

    @staticmethod
    def search_in_files(
        root_dir: Path, query: str, glob: str, use_ignore: bool
    ) -> List[Tuple[str, int, str]]:
        """
        Search for a query string in files matching a glob pattern.

        This method searches through files in the project directory that match
        the specified glob pattern and returns lines containing the query string.

        Args:
            query (str): The string to search for in the files.
            glob (str): Glob pattern to filter files (e.g., "*.py", "*.txt").

        Returns:
            List[Tuple[str, int, str]]: List of tuples containing:
                - File path relative to project root
                - Line number where the query was found
                - Line content

        Example:
            ```python
            controller = MainController(repositories)

            # Search for 'def ' in all Python files
            results = controller.search_in_files("def ", "*.py")
            for file_path, line_number, line_content in results:
                print(f"Found in {file_path} at line {line_number}: {line_content}")
            ```

        Note:
            - Uses glob patterns to filter files
            - Returns empty list if no matches found
            - Case-sensitive search
        """
        results: List[Tuple[str, int, str]] = []
        for file_path in root_dir.glob(glob):
            if file_path.is_file() and not FileSystemService.is_ignored(root_dir):
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        for line_number, line in enumerate(f, start=1):
                            if query in line:
                                results.append(
                                    (
                                        file_path.relative_to(
                                            Settings.root_path
                                        ).as_posix(),
                                        line_number,
                                        line.strip(),
                                    )
                                )
                except (IOError, UnicodeDecodeError):
                    continue

        return results

    @staticmethod
    def rm_tree(path: Path):
        path = Path(path)
        if not path.exists():
            return
        for child in path.iterdir():
            if child.is_symlink() or child.is_file():
                child.unlink()
            elif child.is_dir():
                FileSystemService.rm_tree(child)
        path.rmdir()

    @staticmethod
    def _suffix_allowed(
        path: Path, allowed_suffixes: Optional[List[str]] = None
    ) -> bool:
        if allowed_suffixes is None:
            return True
        return any(path.suffix.lower() == suffix.lower() for suffix in allowed_suffixes)

    @staticmethod
    def _is_ignored_with_stat(path: Path, is_directory: bool):
        """
        Optimized version of is_ignored that accepts pre-computed is_directory flag
        to avoid redundant stat calls when using os.scandir().
        Uses git check-ignore when available for best performance.
        """
        # Try using git check-ignore first (much faster)
        # Don't resolve path yet - let git handle it as-is
        if FileSystemService._is_git_available():
            return FileSystemService._check_git_ignore(path)

        # Fallback: resolve path for Python implementation
        path = get_path_cache().get_resolved_path(path)

        # Fallback to Python implementation
        # Use the pre-computed is_directory flag instead of calling path.is_file()
        current_dir = path if is_directory else path.parent

        project_root = Settings.root_path
        while (
            current_dir != current_dir.parent and current_dir != project_root.parent
        ):  # Stop at project root
            # Get cached patterns for this directory
            patterns = FileSystemService._get_gitignore_patterns(current_dir)

            if patterns:
                for pattern in patterns:
                    pattern = pattern.strip()
                    if pattern and not pattern.startswith("#"):
                        if FileSystemService._matches_gitignore_pattern(
                            path, pattern, current_dir
                        ):
                            return True

            current_dir = current_dir.parent

        return False

    @staticmethod
    def is_ignored(path: Path):
        """
        Check if a path should be ignored according to .gitignore rules.
        Uses git check-ignore for performance when available, falls back to Python implementation.
        """
        # Try using git check-ignore first (much faster)
        # Don't resolve path yet - let git handle it as-is
        if FileSystemService._is_git_available():
            return FileSystemService._check_git_ignore(path)

        # Fallback: resolve path for Python implementation
        path = get_path_cache().get_resolved_path(path)

        # Fallback to Python implementation if git is not available
        # Look for ignore file starting from the path's directory up to the root
        # For files that don't exist, we need to check if it would be a file based on the path structure
        # If the path has a suffix or ends with a filename-like component, treat it as a file
        if path.exists():
            current_dir = path.parent if path.is_file() else path
        else:
            # For non-existent paths, assume it's a file if it has a suffix or doesn't end with '/'
            current_dir = (
                path.parent if path.suffix or not str(path).endswith("/") else path
            )

        project_root = Settings.root_path
        while (
            current_dir != current_dir.parent and current_dir != project_root.parent
        ):  # Stop at project root
            # Get cached patterns for this directory
            patterns = FileSystemService._get_gitignore_patterns(current_dir)

            if patterns:
                for pattern in patterns:
                    pattern = pattern.strip()
                    if pattern and not pattern.startswith("#"):
                        if FileSystemService._matches_gitignore_pattern(
                            path, pattern, current_dir
                        ):
                            return True

            current_dir = current_dir.parent

        return False

    @staticmethod
    def _matches_gitignore_pattern(path: Path, pattern: str, ignore_dir: Path) -> bool:
        """
        Check if a path matches a gitignore pattern according to git rules.
        """
        # Handle trailing slash - only matches directories
        is_dir_only_pattern = pattern.endswith("/")
        if is_dir_only_pattern:
            pattern = pattern.rstrip("/")
            # If pattern is for directories only, the path must be a directory
            if path.exists() and not path.is_dir():
                return False
            # For non-existent paths, assume it's a directory if it doesn't have a suffix
            elif not path.exists() and path.suffix:
                return False

        # Get relative path from ignore file directory
        try:
            relative_path = path.relative_to(ignore_dir)
        except ValueError:
            # Path is not under the ignore directory
            return False

        relative_str = relative_path.as_posix()

        # Handle leading slash - pattern is relative to ignore file directory only
        if pattern.startswith("/"):
            pattern = pattern.lstrip("/")
            # For patterns starting with /, only match at the immediate level
            return fnmatch.fnmatch(relative_str, pattern)

        # Handle double asterisk patterns
        if "**" in pattern:
            # Handle special cases for ** patterns
            if pattern.startswith("**/"):
                # **/foo matches foo at any level
                sub_pattern = pattern[3:]  # Remove **/
                if fnmatch.fnmatch(path.name, sub_pattern):
                    return True
                if fnmatch.fnmatch(relative_str, sub_pattern):
                    return True
                # Also try matching at any directory level
                parts = relative_path.parts
                for i in range(len(parts)):
                    sub_path = "/".join(parts[i:])
                    if fnmatch.fnmatch(sub_path, sub_pattern):
                        return True
            elif pattern.endswith("/**"):
                # foo/** matches everything inside foo directory, NOT foo itself
                base_pattern = pattern[:-3]  # Remove /**
                if relative_str.startswith(base_pattern + "/"):
                    return True
            else:
                # General ** handling - a/**/b patterns
                # Split pattern on /** to handle complex cases
                if "/**/" in pattern:
                    # Pattern like a/**/b
                    parts = pattern.split("/**/")
                    if len(parts) == 2:
                        prefix, suffix = parts
                        # Check if path matches prefix/**/suffix pattern
                        # This should match prefix/suffix, prefix/x/suffix, etc.
                        if relative_str == f"{prefix}/{suffix}":
                            return True
                        if fnmatch.fnmatch(relative_str, pattern.replace("**", "*")):
                            return True
                        # Try matching at different levels
                        path_parts = relative_path.parts
                        for i in range(len(path_parts)):
                            sub_path = "/".join(path_parts[i:])
                            test_pattern = pattern.replace("**", "*")
                            if fnmatch.fnmatch(sub_path, test_pattern):
                                return True
                        return False

                # Simple ** replacement
                expanded_pattern = pattern.replace("**", "*")
                if fnmatch.fnmatch(relative_str, expanded_pattern):
                    return True
                # Also try matching the pattern at any directory level
                parts = relative_path.parts
                for i in range(len(parts)):
                    sub_path = "/".join(parts[i:])
                    if fnmatch.fnmatch(sub_path, expanded_pattern):
                        return True
            return False

        # For patterns with slash in middle, treat as relative to ignore file
        if "/" in pattern:
            return fnmatch.fnmatch(relative_str, pattern)

        # For patterns without slash, can match at any level
        # Try matching the filename only
        if fnmatch.fnmatch(path.name, pattern):
            return True

        # Try matching at any directory level
        parts = relative_path.parts
        for i in range(len(parts)):
            sub_path = "/".join(parts[i:])
            if fnmatch.fnmatch(sub_path, pattern):
                return True

        return False
