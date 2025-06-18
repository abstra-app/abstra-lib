import os
import re
from pathlib import Path
from typing import List, Optional

from abstra_internals.consts.filepaths import (
    ABSTRA_IGNORE_FILEPATH,
    DOT_ABSTRA_DIR,
    GIT_DIR_PATH,
)

SKIPPED_DIRNAMES = {"__pycache__", "venv", ".venv"}


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
        use_ignore: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
    ) -> List[Path]:
        """
        List all files in the given directory, optionally filtering by suffixes
        and applying ignore files.
        Args:
            dir (Path): The directory to list.
            apply_ignore_files (bool): Whether to apply ignore files: .gitignore and .abstraignore.
            allowed_suffixes (Optional[List[str]]): List of allowed file suffixes. If None, all files are included.
        """
        return FileSystemService.list_paths(
            dir,
            include_dirs=False,
            use_ignore=use_ignore,
            allowed_suffixes=allowed_suffixes,
        )

    @staticmethod
    def list_paths(
        dirpath: Path,
        *,
        include_dirs: bool = True,
        use_ignore: bool = True,
        allowed_suffixes: Optional[List[str]] = None,
    ) -> List[Path]:
        """ "
        List all files and directories in the given directory, optionally filtering by suffixes
        and applying ignore files.
        Args:
            dir (Path): The directory to list.
            include_dirs (bool): Whether to include directories in the results.
            apply_ignore_files (bool): Whether to apply ignore files: .gitignore and .abstraignore.
            allowed_suffixes (Optional[List[str]]): List of allowed file suffixes. If None, all files are included.
        """
        if not dirpath.exists():
            return []

        if not dirpath.is_dir():
            raise ValueError(f"Provided path {dirpath} is not a directory.")

        ignored_patterns = [
            *FileSystemService.load_ignore_patterns(dirpath),
            *FileSystemService.load_ignore_patterns(Path.cwd()),
        ]

        if use_ignore and FileSystemService.is_ignored(ignored_patterns, dirpath):
            return []

        if dirpath.name in SKIPPED_DIRNAMES:
            return []

        if dirpath == FileSystemService.venv_path():
            return []

        matches: List[Path] = []
        if include_dirs and not dirpath.is_symlink():
            matches.append(dirpath)

        for child in dirpath.iterdir():
            if (
                child.is_file()
                and FileSystemService._suffix_allowed(child, allowed_suffixes)
                and not FileSystemService.is_ignored(
                    ignored_patterns, child.relative_to(dirpath)
                )
            ):
                matches.append(child)
            elif child.is_dir():
                if FileSystemService.is_ignored(
                    ignored_patterns, child.relative_to(dirpath)
                ):
                    continue
                matches.extend(
                    FileSystemService.list_paths(
                        child,
                        include_dirs=include_dirs,
                        use_ignore=use_ignore,
                        allowed_suffixes=allowed_suffixes,
                    )
                )
        return matches

    @staticmethod
    def rm_tree(path: Path):
        path = Path(path)
        if not path.exists():
            return
        for child in FileSystemService.list_paths(path):
            if child.is_file():
                child.unlink()
            else:
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
    def is_ignored(ignored_paths: List[re.Pattern], path: Path):
        for ignored_path in ignored_paths:
            if ignored_path.search(path.as_posix()):
                return True
        return False

    @staticmethod
    def load_ignore_patterns(root_dir: Path) -> List[re.Pattern]:
        git_ignore_path = root_dir.joinpath(".gitignore")
        abstra_ignore_path = root_dir.joinpath(ABSTRA_IGNORE_FILEPATH)
        git_path = root_dir.joinpath(GIT_DIR_PATH)
        abstra_path = root_dir.joinpath(DOT_ABSTRA_DIR)

        ignored: List[str] = [
            abstra_ignore_path.name,
            git_ignore_path.name,
            abstra_path.name,
            git_path.name,
        ]

        try:
            if abstra_ignore_path.exists():
                with open(abstra_ignore_path, "r", encoding="utf-8") as f:
                    ignored.extend(f.read().splitlines())
            elif git_ignore_path.exists():
                with open(git_ignore_path, "r", encoding="utf-8") as f:
                    ignored.extend(f.read().splitlines())
        except (IOError, UnicodeDecodeError) as e:
            print(f"Warning: Could not read ignore file: {e}")
            return []

        return [
            FileSystemService._make_ignore_regex(p)
            for p in ignored
            if p and not p.startswith("#") and not p.startswith("!")
        ]

    @staticmethod
    def _make_ignore_regex(path: str) -> re.Pattern:
        posix_path = path.replace("\\", "/")
        ignore_regex = r"^" + re.escape(posix_path).replace(r"\*", ".*").replace(
            r"\?", "."
        )
        if not posix_path.endswith("/"):
            ignore_regex += r"(/|$)"
        return re.compile(ignore_regex)
