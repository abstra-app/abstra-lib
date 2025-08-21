import tempfile
import unittest

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorFilesSafeEditRequest,
    AbstraLibApiEditorFilesSafeEditRequestItem,
)
from abstra_internals.utils.crdt import CRDTManager


class TestCRDTManager(unittest.TestCase):
    def setUp(self):
        self.m = CRDTManager()

    # ---------- Helpers ----------
    def _apply(self, ops: AbstraLibApiEditorFilesSafeEditRequest):
        for op in ops:
            self.m.apply_operation(op)

    def _ins(
        self, pos: int, value: str, site_id: str = "siteA"
    ) -> AbstraLibApiEditorFilesSafeEditRequestItem:
        return AbstraLibApiEditorFilesSafeEditRequestItem(
            type="insert", pos=pos, value=value, site_id=site_id
        )

    def _del(
        self, pos: int, length: int = 1, site_id: str = "siteA"
    ) -> AbstraLibApiEditorFilesSafeEditRequestItem:
        return AbstraLibApiEditorFilesSafeEditRequestItem(
            type="delete", pos=pos, length=length, site_id=site_id
        )

    # ---------- Basic behaviors ----------
    def test_insert_at_start(self):
        self._apply([self._ins(0, "Hello")])
        self.assertEqual(self.m.get_content(), "Hello")

    def test_insert_at_end(self):
        self._apply([self._ins(0, "Hi"), self._ins(2, " there")])
        self.assertEqual(self.m.get_content(), "Hi there")

    def test_insert_in_middle(self):
        self._apply([self._ins(0, "Hllo"), self._ins(1, "e")])
        self.assertEqual(self.m.get_content(), "Hello")

    def test_multiple_inserts_sequential(self):
        self._apply(
            [
                self._ins(0, "A"),
                self._ins(1, "B"),
                self._ins(2, "C"),
            ]
        )
        self.assertEqual(self.m.get_content(), "ABC")

    def test_delete_single_default_length(self):
        self._apply([self._ins(0, "ABC"), self._del(1)])  # delete "B"
        self.assertEqual(self.m.get_content(), "AC")

    def test_delete_explicit_length(self):
        self._apply([self._ins(0, "ABCDE"), self._del(1, 3)])  # delete "BCD"
        self.assertEqual(self.m.get_content(), "AE")

    def test_delete_at_start(self):
        self._apply([self._ins(0, "Hello"), self._del(0, 1)])
        self.assertEqual(self.m.get_content(), "ello")

    def test_delete_at_end(self):
        self._apply([self._ins(0, "Hello"), self._del(4, 1)])
        self.assertEqual(self.m.get_content(), "Hell")

    def test_delete_entire_content(self):
        self._apply([self._ins(0, "Hello"), self._del(0, 5)])
        self.assertEqual(self.m.get_content(), "")

    # ---------- Edge cases ----------
    def test_insert_empty_string_is_noop(self):
        self._apply([self._ins(0, ""), self._ins(0, "A")])
        self.assertEqual(self.m.get_content(), "A")

    def test_delete_zero_length_is_noop(self):
        self._apply([self._ins(0, "Hello"), self._del(2, 0)])
        self.assertEqual(self.m.get_content(), "Hello")

    def test_delete_beyond_end_is_truncated(self):
        self._apply([self._ins(0, "Hello"), self._del(3, 99)])  # delete "lo"
        self.assertEqual(self.m.get_content(), "Hel")

    def test_delete_when_pos_equals_len_is_noop(self):
        # Deleting starting exactly at end should do nothing
        self._apply([self._ins(0, "ABC"), self._del(3, 5)])
        self.assertEqual(self.m.get_content(), "ABC")

    def test_delete_with_pos_greater_than_len_is_noop(self):
        self._apply([self._ins(0, "ABC"), self._del(10, 1)])
        self.assertEqual(self.m.get_content(), "ABC")

    def test_insert_with_pos_greater_than_len_inserts_at_that_index(self):
        self._apply([self._ins(10, "X")])
        self.assertEqual(self.m.get_content(), "X")

    def test_unicode_handling(self):
        self._apply([self._ins(0, "Héllo 🌍"), self._del(6, 1)])  # delete globe
        self.assertEqual(self.m.get_content(), "Héllo ")

    # ---------- Interleaved operations ----------
    def test_interleaved_insert_delete_middle(self):
        # Start: ""
        # Insert "abcd" -> "abcd"
        # Delete "bc" (pos=1,len=2) -> "ad"
        # Insert "XY" at pos=1 -> "aXYd"
        self._apply([self._ins(0, "abcd"), self._del(1, 2), self._ins(1, "XY")])
        self.assertEqual(self.m.get_content(), "aXYd")

    def test_interleaved_with_growth_and_shifting_indices(self):
        # Insert "AAAA" -> "AAAA"
        # Insert "B" at pos 2 -> "AABAA"  (correct: 2 As before, 2 As after)
        # Delete pos 1 len 3 -> deletes "ABA" from "AABAA" -> remaining "AA"
        self._apply([self._ins(0, "AAAA"), self._ins(2, "B")])
        self.assertEqual(
            self.m.get_content(), "AABAA"
        )  # ensure intermediate is correct
        self._apply([self._del(1, 3)])
        self.assertEqual(self.m.get_content(), "AA")

    def test_insert_after_delete_shrinks_indices(self):
        # "hello" -> delete "ell" -> "ho" ; then insert "ab" at pos=1 -> "habo"
        self._apply([self._ins(0, "hello"), self._del(1, 3), self._ins(1, "ab")])
        self.assertEqual(self.m.get_content(), "habo")

    def test_consecutive_deletes_covering_entire_doc(self):
        self._apply(
            [
                self._ins(0, "abcdef"),
                self._del(2, 2),  # "abef"
                self._del(0, 10),  # delete everything
            ]
        )
        self.assertEqual(self.m.get_content(), "")

    # ---------- No-op & stability checks ----------
    def test_sequence_of_noops_keeps_content(self):
        self._apply(
            [
                self._ins(0, "XYZ"),
                self._ins(3, ""),  # noop
                self._del(3, 2),  # pos==len -> noop
                self._del(10, 5),  # beyond end -> noop
                self._del(1, 0),  # zero-length -> noop
            ]
        )
        self.assertEqual(self.m.get_content(), "XYZ")

    # ---------- File initialization ----------
    def test_initialization_from_file_pathlib(self):
        import pathlib

        with tempfile.TemporaryDirectory() as td:
            p = pathlib.Path(td) / "doc.txt"
            p.write_text("Seed", encoding="utf-8")
            m2 = CRDTManager(file_path=p)
            self.assertEqual(m2.get_content(), "Seed")

    # ---------- Longer scenario smoke test ----------
    def test_long_scenario(self):
        # Build up a document with several edits, including unicode and boundaries.
        # We stop before the last delete, assert the intermediate string, then
        # delete exactly one of the two consecutive spaces between "fox" and "jumps".
        ops = [
            self._ins(0, "The "),
            self._ins(4, "quick "),
            self._ins(10, "brown "),
            self._ins(16, "🦊 "),
            self._ins(19, "jumps "),
            self._ins(25, "over "),
            self._ins(30, "the "),
            self._ins(34, "lazy "),
            self._ins(39, "dog"),
            self._del(16, 2),  # remove "🦊 " (two characters)
            self._ins(16, "fox  "),
            self._del(0, 4),  # remove "The "
            self._ins(0, "A "),
            # do NOT hardcode a position for the final delete here
        ]
        self._apply(ops)

        # After these ops, we expect exactly one double-space: after "fox"
        intermediate = self.m.get_content()
        self.assertIn("fox  jumps", intermediate)
        self.assertEqual(intermediate, "A quick brown fox  jumps over the lazy dog")

        # Delete one of the consecutive spaces between "fox" and "jumps"
        double_space_pos = intermediate.index("  ")
        self._apply([self._del(double_space_pos, 1)])

        self.assertEqual(
            self.m.get_content(), "A quick brown fox jumps over the lazy dog"
        )

    # ---------- Robustness around positions after edits ----------
    def test_positions_after_previous_inserts(self):
        # Insert "abc", then insert "XYZ" at pos 1 (between 'a' and 'b'),
        # then delete the 'Z' we just inserted using updated position.
        self._apply([self._ins(0, "abc")])
        self._apply([self._ins(1, "XYZ")])  # a X Y Z b c
        self.assertEqual(self.m.get_content(), "aXYZbc")
        self._apply([self._del(3, 1)])  # delete 'Z' (indexing after previous insert)
        self.assertEqual(self.m.get_content(), "aXYbc")

    def test_delete_then_insert_same_pos(self):
        # Start "hello", delete "ell" -> "ho"; insert "ELL" at same pos -> "hELLo"
        self._apply([self._ins(0, "hello"), self._del(1, 3), self._ins(1, "ELL")])
        self.assertEqual(self.m.get_content(), "hELLo")

    # ---------- Apply operation from diff ----------
    def test_apply_operations_from_diff_insert(self):
        self.m.apply_operations_from_diff("Hello")
        self.assertEqual(self.m.get_content(), "Hello")

    def test_apply_operations_from_diff_delete(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("Helo")  # delete 'l'
        self.assertEqual(self.m.get_content(), "Helo")

    def test_apply_operations_from_diff_replace(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("Hollo")  # replace 'e' with 'o'
        self.assertEqual(self.m.get_content(), "Hollo")

    def test_apply_operations_from_diff_multiple_edits(self):
        self.m.apply_operations_from_diff("abcdef")
        self.m.apply_operations_from_diff(
            "aXcYf"
        )  # delete 'b', insert 'X', delete 'd', insert 'Y', delete 'e'
        self.assertEqual(self.m.get_content(), "aXcYf")

    def test_apply_operations_from_diff_empty_to_nonempty(self):
        self.m.apply_operations_from_diff("")
        self.m.apply_operations_from_diff("abc")
        self.assertEqual(self.m.get_content(), "abc")

    def test_apply_operations_from_diff_nonempty_to_empty(self):
        self.m.apply_operations_from_diff("abc")
        self.m.apply_operations_from_diff("")
        self.assertEqual(self.m.get_content(), "")

    def test_apply_operations_from_diff_no_change(self):
        self.m.apply_operations_from_diff("abc")
        self.m.apply_operations_from_diff("abc")
        self.assertEqual(self.m.get_content(), "abc")

    def test_apply_operations_from_diff_insert_at_start(self):
        self.m.apply_operations_from_diff("world")
        self.m.apply_operations_from_diff("Hello world")
        self.assertEqual(self.m.get_content(), "Hello world")

    def test_apply_operations_from_diff_insert_at_end(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("Hello world")
        self.assertEqual(self.m.get_content(), "Hello world")

    def test_apply_operations_from_diff_insert_in_middle(self):
        self.m.apply_operations_from_diff("Hllo")
        self.m.apply_operations_from_diff("Hello")
        self.assertEqual(self.m.get_content(), "Hello")

    def test_apply_operations_from_diff_delete_at_start(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("ello")
        self.assertEqual(self.m.get_content(), "ello")

    def test_apply_operations_from_diff_delete_at_end(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("Hell")
        self.assertEqual(self.m.get_content(), "Hell")

    def test_apply_operations_from_diff_delete_in_middle(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("Helo")
        self.assertEqual(self.m.get_content(), "Helo")

    def test_apply_operations_from_diff_replace_entire_content(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("World")
        self.assertEqual(self.m.get_content(), "World")

    def test_apply_operations_from_diff_insert_empty_string(self):
        self.m.apply_operations_from_diff("")
        self.m.apply_operations_from_diff("")
        self.assertEqual(self.m.get_content(), "")

    def test_apply_operations_from_diff_delete_to_empty(self):
        self.m.apply_operations_from_diff("A")
        self.m.apply_operations_from_diff("")
        self.assertEqual(self.m.get_content(), "")

    def test_apply_operations_from_diff_longer_scenario(self):
        # Build up a document with several edits, including unicode and boundaries.
        self.m.apply_operations_from_diff("")
        self.m.apply_operations_from_diff("The quick brown 🦊 jumps over the lazy dog")
        self.m.apply_operations_from_diff(
            "The quick brown fox  jumps over the lazy dog"
        )
        self.m.apply_operations_from_diff("A quick brown fox  jumps over the lazy dog")
        self.m.apply_operations_from_diff("A quick brown fox jumps over the lazy dog")
        self.assertEqual(
            self.m.get_content(), "A quick brown fox jumps over the lazy dog"
        )

    def test_apply_operations_from_diff_edge_case_delete_beyond_end(self):
        self.m.apply_operations_from_diff("Hello")
        # Try to delete more than exists by diffing to a shorter string
        self.m.apply_operations_from_diff("He")
        self.assertEqual(self.m.get_content(), "He")

    def test_apply_operations_from_diff_edge_case_insert_beyond_end(self):
        # Insert at a position beyond current length (should append)
        self.m.apply_operations_from_diff("")
        self.m.apply_operations_from_diff("X")
        self.assertEqual(self.m.get_content(), "X")

    def test_apply_operations_from_diff_replace_with_empty(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff("")
        self.assertEqual(self.m.get_content(), "")

    def test_apply_operations_from_diff_empty_to_empty(self):
        self.m.apply_operations_from_diff("")
        self.m.apply_operations_from_diff("")
        self.assertEqual(self.m.get_content(), "")

    def test_apply_operations_from_diff_none_content(self):
        self.m.apply_operations_from_diff("Hello")
        self.m.apply_operations_from_diff(None)
        self.assertEqual(self.m.get_content(), "Hello")

    def test_apply_operations_from_diff_multiple_replaces(self):
        self.m.apply_operations_from_diff("abcdef")
        self.m.apply_operations_from_diff("abXYef")
        self.assertEqual(self.m.get_content(), "abXYef")

    def test_apply_operations_from_diff_unicode_replace(self):
        self.m.apply_operations_from_diff("café")
        self.m.apply_operations_from_diff("cafe")
        self.assertEqual(self.m.get_content(), "cafe")

    def test_apply_operations_from_diff_emoji_to_text(self):
        self.m.apply_operations_from_diff("I ❤️ Python")
        self.m.apply_operations_from_diff("I love Python")
        self.assertEqual(self.m.get_content(), "I love Python")

    def test_apply_operations_from_diff_text_to_emoji(self):
        self.m.apply_operations_from_diff("I love Python")
        self.m.apply_operations_from_diff("I ❤️ Python")
        self.assertEqual(self.m.get_content(), "I ❤️ Python")

    def test_apply_operations_from_diff_replace_middle_with_longer(self):
        self.m.apply_operations_from_diff("abcdefgh")
        self.m.apply_operations_from_diff("abc12345h")
        self.assertEqual(self.m.get_content(), "abc12345h")

    def test_apply_operations_from_diff_replace_middle_with_shorter(self):
        self.m.apply_operations_from_diff("abcdefgh")
        self.m.apply_operations_from_diff("abcxh")
        self.assertEqual(self.m.get_content(), "abcxh")

    def test_apply_operations_from_diff_multiple_non_adjacent_replaces(self):
        self.m.apply_operations_from_diff("abcdef")
        self.m.apply_operations_from_diff("abXYeZ")
        self.assertEqual(self.m.get_content(), "abXYeZ")

    def test_apply_operations_from_diff_whitespace_changes(self):
        self.m.apply_operations_from_diff("Hello   world")
        self.m.apply_operations_from_diff("Hello world")
        self.assertEqual(self.m.get_content(), "Hello world")

    def test_apply_operations_from_diff_tabs_vs_spaces(self):
        self.m.apply_operations_from_diff("Hello\tworld")
        self.m.apply_operations_from_diff("Hello world")
        self.assertEqual(self.m.get_content(), "Hello world")

    def test_apply_operations_from_diff_full_replace_large_text(self):
        text1 = "A" * 1000
        text2 = "B" * 1000
        self.m.apply_operations_from_diff(text1)
        self.m.apply_operations_from_diff(text2)
        self.assertEqual(self.m.get_content(), text2)

    def test_apply_operations_from_diff_partial_overlap_large_text(self):
        text1 = "A" * 500 + "B" * 500
        text2 = "A" * 500 + "C" * 500
        self.m.apply_operations_from_diff(text1)
        self.m.apply_operations_from_diff(text2)
        self.assertEqual(self.m.get_content(), text2)

    def test_apply_operations_from_diff_remove_middle_section(self):
        self.m.apply_operations_from_diff("The quick brown fox jumps over the lazy dog")
        self.m.apply_operations_from_diff("The quick fox jumps over the lazy dog")
        self.assertEqual(self.m.get_content(), "The quick fox jumps over the lazy dog")

    def test_apply_operations_from_diff_insert_multiple_sections(self):
        self.m.apply_operations_from_diff("abcd")
        self.m.apply_operations_from_diff("aXYbZcd")
        self.assertEqual(self.m.get_content(), "aXYbZcd")

    def test_apply_operations_from_diff_replace_with_same_length(self):
        self.m.apply_operations_from_diff("12345")
        self.m.apply_operations_from_diff("abcde")
        self.assertEqual(self.m.get_content(), "abcde")

    def test_apply_operations_from_diff_replace_with_different_length(self):
        self.m.apply_operations_from_diff("12345")
        self.m.apply_operations_from_diff("abcdefg")
        self.assertEqual(self.m.get_content(), "abcdefg")
