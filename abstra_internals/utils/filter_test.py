import unittest

from abstra_internals.utils.filter import (
    Condition,
    FilterCondition,
    LogicalGroup,
    evaluate_condition,
    evaluate_logical_group,
)


class TestEvaluateCondition(unittest.TestCase):
    def test_is_comparator(self):
        self.assertTrue(
            evaluate_condition(Condition("key", "is", "value"), {"key": "value"})
        )
        self.assertFalse(
            evaluate_condition(Condition("key", "is", "value"), {"key": "not_value"})
        )

    def test_contains_comparator_with_string(self):
        self.assertTrue(
            evaluate_condition(
                Condition("key", "contains", "value"), {"key": "This is a value"}
            )
        )
        self.assertFalse(
            evaluate_condition(
                Condition("key", "contains", "value"),
                {"key": "This does not contain the word."},
            )
        )

    def test_contains_comparator_with_not_string(self):
        self.assertFalse(
            evaluate_condition(Condition("key", "contains", "value"), {"key": 123})
        )

    def test_condition_with_missing_key(self):
        self.assertFalse(
            evaluate_condition(Condition("key", "is", "value"), {"other_key": "value"})
        )


class TestEvaluateLogicalGroup(unittest.TestCase):
    def test_and_group(self):
        group = LogicalGroup(
            AND=[Condition("key1", "is", "value1"), Condition("key2", "is", "value2")]
        )
        self.assertTrue(
            evaluate_logical_group(group, {"key1": "value1", "key2": "value2"})
        )
        self.assertFalse(
            evaluate_logical_group(group, {"key1": "value1", "key2": "not_value_2"})
        )

    def test_or_group(self):
        group = LogicalGroup(
            OR=[Condition("key1", "is", "value1"), Condition("key2", "is", "value2")]
        )
        self.assertTrue(
            evaluate_logical_group(group, {"key1": "value1", "key2": "value2"})
        )
        self.assertTrue(
            evaluate_logical_group(group, {"key1": "value1", "key2": "not_value_2"})
        )
        self.assertFalse(
            evaluate_logical_group(
                group, {"key1": "not_value_1", "key2": "not_value_2"}
            )
        )

    def test_not_group(self):
        group = LogicalGroup(NOT=Condition("key", "is", "value"))
        self.assertFalse(evaluate_logical_group(group, {"key": "value"}))
        self.assertTrue(evaluate_logical_group(group, {"key": "not_value"}))

    def test_group_with_no_conditions(self):
        empty_AND_group = LogicalGroup(AND=[])
        empty_OR_group = LogicalGroup(OR=[])

        self.assertTrue(evaluate_logical_group(empty_AND_group, {}))
        self.assertTrue(evaluate_logical_group(empty_OR_group, {}))

    def test_invalid_group(self):
        group = LogicalGroup()
        self.assertFalse(evaluate_logical_group(group, {"key": "value"}))


class TestEvaluateFilterCondition(unittest.TestCase):
    def test_nested_condition(self):
        group = LogicalGroup(
            AND=[
                LogicalGroup(
                    OR=[
                        Condition("key1", "is", "value1"),
                        LogicalGroup(NOT=Condition("key2", "is", "value2")),
                    ]
                ),
                LogicalGroup(
                    OR=[
                        Condition("key2", "is", "value2"),
                        Condition("key3", "is", "value3"),
                    ]
                ),
            ]
        )
        self.assertTrue(
            evaluate_logical_group(
                group, {"key1": "value1", "key2": "not_value_2", "key3": "value3"}
            )
        )
        self.assertTrue(
            evaluate_logical_group(
                group, {"key1": "value1", "key2": "value2", "key3": "value3"}
            )
        )
        self.assertFalse(
            evaluate_logical_group(
                group, {"key1": "not_value_1", "key2": "value2", "key3": "value3"}
            )
        )

    def test_none_is_evaluated_as_true_except_for_not(self):
        group = LogicalGroup(AND=[None])
        self.assertTrue(evaluate_logical_group(group, {}))
        group = LogicalGroup(OR=[None])
        self.assertTrue(evaluate_logical_group(group, {}))
        group = LogicalGroup(NOT=None)
        self.assertFalse(evaluate_logical_group(group, {}))


class TestFilterCondition(unittest.TestCase):
    def test_from_dict_condition(self):
        data = {"key": "key", "comparator": "is", "value": "value"}
        condition = FilterCondition.from_dict(data)
        self.assertIsInstance(condition, Condition)
        self.assertEqual(condition, Condition("key", "is", "value"))

    def test_from_dict_complex_logic_group(self):
        data = {
            "AND": [
                {"NOT": {"key": "key1", "comparator": "is", "value": "value1"}},
                {"OR": [{"key": "key2", "comparator": "is", "value": "value2"}]},
            ]
        }
        group = FilterCondition.from_dict(data)
        self.assertIsInstance(group, LogicalGroup)
        self.assertEqual(
            group,
            LogicalGroup(
                AND=[
                    LogicalGroup(NOT=Condition("key1", "is", "value1")),
                    LogicalGroup(OR=[Condition("key2", "is", "value2")]),
                ]
            ),
        )

    def test_from_dict_invalid_data(self):
        data = {"invalid": "data"}
        self.assertIsNone(FilterCondition.from_dict(data))

        another_data = {"key": "key", "comparator": "is"}
        self.assertIsNone(FilterCondition.from_dict(another_data))
