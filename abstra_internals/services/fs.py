import fnmatch
import os
from pathlib import Path
from typing import List, Optional, Tuple

from abstra_internals.consts.filepaths import GITIGNORE_FILEPATH
from abstra_internals.settings import Settings


class FileSystemService:
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

        if use_ignore and (FileSystemService.is_ignored(dirpath)):
            return []

        matches: List[Path] = []
        if include_dirs and not dirpath.is_symlink():
            matches.append(dirpath)

        for child in dirpath.iterdir():
            if use_ignore and (FileSystemService.is_ignored(child)):
                continue
            if child.is_dir() or FileSystemService._suffix_allowed(
                child, allowed_suffixes
            ):
                matches.append(child)
            if child.is_dir() and recursive:
                matches.extend(
                    FileSystemService.list_paths(
                        child,
                        include_dirs=include_dirs,
                        use_ignore=use_ignore,
                        allowed_suffixes=allowed_suffixes,
                        recursive=True,
                    )
                )
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
    def is_ignored(path: Path):
        path = path.resolve()

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
            ignore_file = current_dir / GITIGNORE_FILEPATH
            if ignore_file.exists():
                try:
                    patterns = ignore_file.read_text().splitlines()
                    for pattern in patterns:
                        pattern = pattern.strip()
                        if pattern and not pattern.startswith("#"):
                            if FileSystemService._matches_gitignore_pattern(
                                path, pattern, current_dir
                            ):
                                return True
                except (IOError, UnicodeDecodeError):
                    continue
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
