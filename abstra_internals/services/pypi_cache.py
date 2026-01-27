import json
import time
from pathlib import Path
from typing import Dict, Optional

import requests

from abstra_internals.consts.filepaths import DOT_ABSTRA_DIR
from abstra_internals.settings import Settings

PYPI_CACHE_FILENAME = "pypi_cache.json"
CACHE_TTL_SECONDS = 60 * 60 * 24 * 7  # 7 days


class CacheEntry:
    """Represents a single cache entry for a package verification result."""

    def __init__(self, exists: bool, timestamp: float):
        self.exists = exists
        self.timestamp = timestamp

    def is_valid(self) -> bool:
        """Check if this cache entry is still valid based on TTL."""
        return (time.time() - self.timestamp) < CACHE_TTL_SECONDS

    def to_dict(self) -> dict:
        return {"exists": self.exists, "timestamp": self.timestamp}

    @classmethod
    def from_dict(cls, data: dict) -> Optional["CacheEntry"]:
        """
        Create a CacheEntry from a dictionary.
        Returns None if the data is invalid or corrupted.
        """
        if not isinstance(data, dict):
            return None

        if "exists" not in data or "timestamp" not in data:
            return None

        if not isinstance(data["exists"], bool):
            return None

        if not isinstance(data["timestamp"], (int, float)):
            return None

        return cls(exists=data["exists"], timestamp=data["timestamp"])


class PyPIVerificationCache:
    """
    Cache for PyPI package verification results.
    Stores whether a package exists on PyPI to avoid repeated network calls.
    """

    _cache: Optional[Dict[str, CacheEntry]] = None

    @classmethod
    def _get_cache_path(cls) -> Path:
        return Settings.root_path / DOT_ABSTRA_DIR / PYPI_CACHE_FILENAME

    @classmethod
    def _normalize_package_name(cls, package_name: str) -> str:
        return package_name.lower().replace("_", "-")

    @classmethod
    def _delete_cache_file(cls) -> None:
        """Delete the cache file if it exists."""
        try:
            cache_path = cls._get_cache_path()
            if cache_path.exists():
                cache_path.unlink()
        except IOError:
            pass

    @classmethod
    def _load_cache(cls) -> Dict[str, CacheEntry]:
        if cls._cache is not None:
            return cls._cache

        cache_path = cls._get_cache_path()
        loaded_cache: Dict[str, CacheEntry] = {}

        if cache_path.exists():
            try:
                content = cache_path.read_text(encoding="utf-8")
                raw_data = json.loads(content)

                if not isinstance(raw_data, dict):
                    # File is corrupted, delete it
                    cls._delete_cache_file()
                    cls._cache = loaded_cache
                    return loaded_cache

                for package_name, entry_data in raw_data.items():
                    entry = CacheEntry.from_dict(entry_data)
                    if entry is not None:
                        loaded_cache[package_name] = entry
                    # If entry is None (corrupted), we simply skip it

            except (json.JSONDecodeError, IOError):
                # File is corrupted or unreadable, delete it
                cls._delete_cache_file()

        cls._cache = loaded_cache
        return loaded_cache

    @classmethod
    def _save_cache(cls) -> None:
        if cls._cache is None:
            return

        cache_path = cls._get_cache_path()
        cache_path.parent.mkdir(parents=True, exist_ok=True)

        serializable_cache = {
            name: entry.to_dict() for name, entry in cls._cache.items()
        }

        try:
            cache_path.write_text(
                json.dumps(serializable_cache, indent=2), encoding="utf-8"
            )
        except IOError:
            pass

    @classmethod
    def get_cached_result(cls, package_name: str) -> Optional[bool]:
        """
        Get cached verification result for a package.
        Returns True if package exists, False if not, None if not cached or expired.
        """
        cache = cls._load_cache()
        normalized_name = cls._normalize_package_name(package_name)

        entry = cache.get(normalized_name)
        if entry is not None and entry.is_valid():
            return entry.exists

        return None

    @classmethod
    def set_cached_result(cls, package_name: str, exists: bool) -> None:
        """Store verification result in cache."""
        cache = cls._load_cache()
        normalized_name = cls._normalize_package_name(package_name)

        cache[normalized_name] = CacheEntry(exists=exists, timestamp=time.time())
        cls._cache = cache
        cls._save_cache()

    @classmethod
    def clear_cache(cls) -> None:
        """Clear all cached results."""
        cls._cache = {}
        cache_path = cls._get_cache_path()
        if cache_path.exists():
            cache_path.unlink()

    @classmethod
    def verify_package_exists(cls, package_name: str) -> bool:
        """
        Verify if a package exists on PyPI.
        Uses cache to avoid repeated network calls.
        """
        cached_result = cls.get_cached_result(package_name)
        if cached_result is not None:
            return cached_result

        exists = cls._query_pypi(package_name)
        cls.set_cached_result(package_name, exists)
        return exists

    @classmethod
    def _query_pypi(cls, package_name: str) -> bool:
        """Query PyPI API to check if package exists."""
        normalized_name = cls._normalize_package_name(package_name)
        url = f"https://pypi.org/pypi/{normalized_name}/json"

        try:
            response = requests.get(url, timeout=5)
            return response.status_code == 200
        except requests.RequestException:
            # On network error, assume package exists to avoid false positives
            return True
