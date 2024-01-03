from unittest import TestCase
from .format import normalize_path


class NormalizePathTest(TestCase):
    def test_uppercase_letters(self):
        self.assertEqual(normalize_path("HelLo"), "hello")

    def test_accented_letters(self):
        self.assertEqual(normalize_path("áéíóúãõ"), "aeiouao")

    def test_only_alphanumeric(self):
        self.assertEqual(normalize_path("hello 23 !@#$world%¨&*()_+"), "hello-23-world")

    def test_join_with_hyphen(self):
        self.assertEqual(normalize_path("he!!o wo$$rld"), "he-o-wo-rld")

    def test_works_with_slashes(self):
        self.assertEqual(normalize_path("hello/world"), "hello/world")
        self.assertEqual(normalize_path("he!!o / wor!d"), "he-o/wor-d")
        self.assertEqual(normalize_path("hello!/@world"), "hello/world")

    def test_consecutive_slashes(self):
        self.assertEqual(normalize_path("hello//world"), "hello/world")
        self.assertEqual(normalize_path("hello///world"), "hello/world")

    def test_works_with_multiple_slashes(self):
        self.assertEqual(
            normalize_path("domain1/domain2/domain3"), "domain1/domain2/domain3"
        )
