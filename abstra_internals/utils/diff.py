import re
from typing import Any, Dict, List, Optional


def escape_regex(string: str) -> str:
    """Escape special regex characters in a string."""
    return re.escape(string)


class Replacement:
    """Represents a single replacement operation."""

    def __init__(
        self, old_context: str, new_context: str, max_occurrences: Optional[int] = None
    ):
        self.old_context = old_context
        self.new_context = new_context
        self.max_occurrences = max_occurrences


class Match:
    """Represents a match found in the text."""

    def __init__(self, start: int, end: int, replacement: str, priority: int):
        self.start = start
        self.end = end
        self.replacement = replacement
        self.priority = priority


def compute_updated_code_from_replacements(
    old_code: str, replacements: List[Dict[str, Any]]
) -> str:
    """
    Apply multiple text replacements atomically to a code string.

    All pattern matches are identified from the original text first, then
    replacements are applied simultaneously without interfering with each other.
    This prevents cascading effects where one replacement affects another.

    Args:
        old_code (str): The original code string to modify
        replacements (List[Dict[str, Any]]): List of replacement operations, each containing:
            - 'old_context': Exact string to find and replace (must match exactly)
            - 'new_context': String to replace it with
            - 'max_occurrences' (optional): Limit number of replacements (default: unlimited)
                - None or -1: Replace all occurrences
                - 0: Skip replacement (no changes)
                - N > 0: Replace first N occurrences only

    Returns:
        str: The modified code string with all replacements applied atomically

    Example:
        >>> code = "aaabbb\\ncccddd"
        >>> replacements = [
        ...     {"old_context": "aaabbb", "new_context": "cccddd"},
        ...     {"old_context": "cccddd", "new_context": "xxxkkk"}
        ... ]
        >>> result = compute_updated_code_from_replacements(code, replacements)
        >>> print(result)
        cccddd
        xxxkkk

    Note:
        - Replacements are applied atomically based on the original text
        - Earlier replacements in the list have higher priority for overlapping matches
        - Empty old_context will insert new_context before every character
        - Special regex characters in old_context are automatically escaped
    """
    # Collect all matches from the original text first (atomic approach)
    all_matches: List[Match] = []

    # Find all matches for each replacement pattern
    for i, replacement in enumerate(replacements):
        old_context = replacement["old_context"]
        new_context = replacement["new_context"]
        max_occurrences = replacement.get("max_occurrences")

        # Handle max_occurrences conversion and validation
        if isinstance(max_occurrences, str):
            max_occurrences = int(max_occurrences)

        if max_occurrences == 0:
            continue  # Skip when max_occurrences is 0

        # Handle unlimited replacements
        if max_occurrences is None or max_occurrences == -1:
            max_occurrences = float("inf")

        # Find all matches using regex
        escaped_pattern = escape_regex(old_context)
        pattern = re.compile(escaped_pattern)
        count = 0

        for match in pattern.finditer(old_code):
            # Check max_occurrences limit
            if count >= max_occurrences:
                break

            all_matches.append(
                Match(
                    start=match.start(),
                    end=match.end(),
                    replacement=new_context,
                    priority=i,  # Earlier replacements have higher priority
                )
            )

            count += 1

    # Sort matches by position, then by priority (earlier replacement wins for overlaps)
    all_matches.sort(key=lambda m: (m.start, m.priority))

    # Remove overlapping matches (keep the one with higher priority)
    non_overlapping_matches: List[Match] = []
    for match in all_matches:
        has_overlap = any(
            match.start < existing.end and match.end > existing.start
            for existing in non_overlapping_matches
        )
        if not has_overlap:
            non_overlapping_matches.append(match)

    # Apply replacements from right to left to maintain correct positions
    non_overlapping_matches.sort(key=lambda m: m.start, reverse=True)

    result = old_code
    for match in non_overlapping_matches:
        result = result[: match.start] + match.replacement + result[match.end :]

    return result
