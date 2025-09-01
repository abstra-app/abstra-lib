import pytest

from .diff import compute_updated_code_from_replacements


class TestAtomicReplacements:
    """Test suite for atomic code replacements."""

    def test_user_example_atomic_behavior(self):
        """Test the specific example provided by the user."""
        code = "aaabbb\ncccddd"
        replacements = [
            {"old_context": "aaabbb", "new_context": "cccddd"},
            {"old_context": "cccddd", "new_context": "xxxkkk"},
        ]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "cccddd\nxxxkkk"

    def test_no_cascading_effects(self):
        """Test that replacements don't cascade into each other."""
        code = "old text"
        replacements = [
            {"old_context": "old", "new_context": "new old"},
            {"old_context": "old", "new_context": "final"},
        ]
        result = compute_updated_code_from_replacements(code, replacements)
        # First replacement has priority
        assert result == "new old text"

    def test_overlapping_patterns_priority(self):
        """Test that earlier replacements have priority for overlapping patterns."""
        code = "line1\nline2\r\nline3"
        replacements = [
            {"old_context": "\n", "new_context": " | "},  # Higher priority
            {"old_context": "\r\n", "new_context": " || "},
        ]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "line1 | line2 || line3"

    def test_max_occurrences_zero(self):
        """Test that max_occurrences=0 prevents any replacements."""
        code = "test test test"
        replacements = [
            {"old_context": "test", "new_context": "replaced", "max_occurrences": 0}
        ]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "test test test"

    def test_max_occurrences_limit(self):
        """Test that max_occurrences limits the number of replacements."""
        code = "var x = 1; var y = 2; var z = 3;"
        replacements = [
            {"old_context": "var", "new_context": "let", "max_occurrences": 2}
        ]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "let x = 1; let y = 2; var z = 3;"

    def test_special_regex_characters(self):
        """Test that special regex characters are properly escaped."""
        code = "result = a + b * c;"
        replacements = [{"old_context": "a + b * c", "new_context": "(a + b) * c"}]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "result = (a + b) * c;"

    def test_empty_patterns(self):
        """Test handling of empty patterns."""
        # Empty old_context inserts everywhere
        code = "abc"
        replacements = [{"old_context": "", "new_context": "x"}]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "xaxbxcx"

        # Empty new_context deletes
        code = "remove this word"
        replacements = [{"old_context": "this ", "new_context": ""}]
        result = compute_updated_code_from_replacements(code, replacements)
        assert result == "remove word"


if __name__ == "__main__":
    pytest.main([__file__])
