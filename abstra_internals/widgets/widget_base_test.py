import unittest

from abstra_internals.widgets.library.NumberInput import NumberInput
from abstra_internals.widgets.library.TextInput import TextInput


class InputTest(unittest.TestCase):
    def test_none_to_empty_value_is_not_a_change(self):
        some_input = TextInput(key="some_key", label="Some Label")

        # Initial value of some_input.value is None
        some_input.value = None

        # Setting value to empty string should not be considered a change
        some_input.set_value("", set_errors=True)

        errors = some_input.errors
        self.assertIsInstance(errors, list)
        self.assertEqual(len(errors or []), 0)

    def test_set_value_set_errors_with_real_changes(self):
        some_input = TextInput(key="some_key", label="Some Label")
        some_input.value = None

        # Setting value to "test" should be considered a change
        some_input.set_value("test", set_errors=True)

        # Setting value to empty string so it triggers the required validator
        some_input.set_value("", set_errors=True)

        errors = some_input.errors
        self.assertIsInstance(errors, list)
        self.assertEqual(len(errors or []), 1)
        self.assertEqual(errors[0], "i18n_error_required_field")

    def test_compare_two_widgets_with_same_properties(self):
        widget1 = TextInput(key="some_key", label="Some Label")
        widget2 = TextInput(key="some_key", label="Some Label")

        self.assertTrue(widget1.is_equal_to(widget2))

    def test_compare_two_widgets_with_different_properties(self):
        widget1 = TextInput(key="some_key", label="Some Label")
        widget2 = TextInput(key="some_key", label="Some Other Label")

        self.assertFalse(widget1.is_equal_to(widget2))

    def test_compare_two_widgets_with_different_types(self):
        widget1 = TextInput(key="some_key", label="Some Label")
        widget2 = NumberInput(key="some_key", label="Some Label")

        self.assertFalse(widget1.is_equal_to(widget2))
