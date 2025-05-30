import ast
from pathlib import Path
from typing import Dict, Tuple


class ASTCache:
    _cache: Dict[str, Tuple[ast.Module, float]] = {}

    @classmethod
    def __update(cls, path: Path, cache_key: str, last_modified_time: float):
        content = path.read_text(encoding="utf-8")
        ast_tree = ast.parse(content)

        cls._cache[cache_key] = (ast_tree, last_modified_time)

        return ast_tree

    @classmethod
    def clear(cls):
        """
        Clear the internal cache.

        This method resets the internal cache to an empty state.
        It is intended for use **only in tests** to ensure a clean
        environment between test runs.

        Warning:
            This should not be called in production code, as it may
            lead to unexpected behavior or performance issues.
        """
        cls._cache = {}

    @classmethod
    def get(cls, path: Path):
        cache_key = path.absolute().as_posix()
        last_modified_time = path.stat().st_mtime

        if cache_key not in cls._cache:
            return cls.__update(path, cache_key, last_modified_time)

        ast_tree, last_modified_time = cls._cache[cache_key]
        if last_modified_time != path.stat().st_mtime:
            return cls.__update(path, cache_key, last_modified_time)
        return ast_tree
