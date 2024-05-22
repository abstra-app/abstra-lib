from unittest import TestCase

from abstra_internals.utils.email import is_valid_email


class IsValidEmailTest(TestCase):
    def test_when_valid(self):
        self.assertTrue(is_valid_email("test@test.com"))
        self.assertTrue(is_valid_email("test+foo@test.com"))

    def test_when_no_at(self):
        self.assertFalse(is_valid_email("testtest.com"))

    def test_when_no_dot(self):
        self.assertFalse(is_valid_email("test@testcom"))

    def test_when_no_username(self):
        self.assertFalse(is_valid_email("@test.com"))

    def test_when_empty(self):
        self.assertFalse(is_valid_email(""))

    def test_when_none(self):
        self.assertFalse(is_valid_email(None))

    def test_when_not_string(self):
        self.assertFalse(is_valid_email(123))

    def test_when_spaced(self):
        self.assertFalse(is_valid_email("test @test.com"))
        self.assertFalse(is_valid_email("test@ test.com"))
        self.assertFalse(is_valid_email("test@test .com"))
        self.assertFalse(is_valid_email("test@test. com"))

    def test_when_double_at(self):
        self.assertFalse(is_valid_email("test@@test.com"))

    def test_when_double_dot(self):
        self.assertFalse(is_valid_email("test@test..com"))

    def test_when_special_chars(self):
        self.assertFalse(is_valid_email("test@!test.com"))
        self.assertFalse(is_valid_email("test@#test.com"))
        self.assertFalse(is_valid_email("test@$test.com"))
        self.assertFalse(is_valid_email("test@%test.com"))
        self.assertFalse(is_valid_email("test@^test.com"))
        self.assertFalse(is_valid_email("test@&test.com"))
        self.assertFalse(is_valid_email("test@*test.com"))
        self.assertFalse(is_valid_email("test@()test.com"))
