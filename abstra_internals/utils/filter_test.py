import unittest

from abstra_internals.utils.filter import (
    Condition,
    FilterCondition,
    LogicalGroupMultipleConditions,
    LogicalGroupSingleCondition,
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
        group = LogicalGroupMultipleConditions(
            operator="AND",
            conditions=[
                Condition("key1", "is", "value1"),
                Condition("key2", "is", "value2"),
            ],
        )
        self.assertTrue(
            evaluate_logical_group(group, {"key1": "value1", "key2": "value2"})
        )
        self.assertFalse(
            evaluate_logical_group(group, {"key1": "value1", "key2": "not_value_2"})
        )

    def test_or_group(self):
        group = LogicalGroupMultipleConditions(
            operator="OR",
            conditions=[
                Condition("key1", "is", "value1"),
                Condition("key2", "is", "value2"),
            ],
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
        group = LogicalGroupSingleCondition(
            operator="NOT", condition=Condition("key", "is", "value")
        )
        self.assertFalse(evaluate_logical_group(group, {"key": "value"}))
        self.assertTrue(evaluate_logical_group(group, {"key": "not_value"}))

    def test_group_with_no_conditions(self):
        empty_AND_group = LogicalGroupMultipleConditions(operator="AND", conditions=[])
        empty_OR_group = LogicalGroupMultipleConditions(operator="OR", conditions=[])
        empty_NOT_group = LogicalGroupSingleCondition(operator="NOT", condition=None)

        self.assertTrue(evaluate_logical_group(empty_AND_group, {}))
        self.assertTrue(evaluate_logical_group(empty_OR_group, {}))
        self.assertTrue(evaluate_logical_group(empty_NOT_group, {}))


class TestEvaluateFilterCondition(unittest.TestCase):
    def test_nested_condition(self):
        group = LogicalGroupMultipleConditions(
            operator="AND",
            conditions=[
                LogicalGroupMultipleConditions(
                    operator="OR",
                    conditions=[
                        Condition("key1", "is", "value1"),
                        LogicalGroupSingleCondition(
                            operator="NOT", condition=Condition("key2", "is", "value2")
                        ),
                    ],
                ),
                LogicalGroupMultipleConditions(
                    operator="OR",
                    conditions=[
                        Condition("key2", "is", "value2"),
                        Condition("key3", "is", "value3"),
                    ],
                ),
            ],
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
        group = LogicalGroupMultipleConditions(operator="AND", conditions=[None])
        self.assertTrue(evaluate_logical_group(group, {}))
        group = LogicalGroupMultipleConditions(operator="OR", conditions=[None])
        self.assertTrue(evaluate_logical_group(group, {}))
        group = LogicalGroupSingleCondition(operator="NOT", condition=None)
        self.assertTrue(evaluate_logical_group(group, {}))


class TestFilterCondition(unittest.TestCase):
    def test_from_dict_condition(self):
        data = {"key": "key", "comparator": "is", "value": "value"}
        condition = FilterCondition.from_dict(data)
        self.assertIsInstance(condition, Condition)
        self.assertEqual(condition, Condition("key", "is", "value"))

    def test_from_dict_complex_logic_group(self):
        data = {
            "operator": "AND",
            "conditions": [
                {
                    "operator": "NOT",
                    "condition": {"key": "key1", "comparator": "is", "value": "value1"},
                },
                {
                    "operator": "OR",
                    "conditions": [
                        {"key": "key2", "comparator": "is", "value": "value2"}
                    ],
                },
            ],
        }
        group = FilterCondition.from_dict(data)
        self.assertIsInstance(group, LogicalGroupMultipleConditions)
        self.assertEqual(
            group,
            LogicalGroupMultipleConditions(
                operator="AND",
                conditions=[
                    LogicalGroupSingleCondition(
                        operator="NOT", condition=Condition("key1", "is", "value1")
                    ),
                    LogicalGroupMultipleConditions(
                        operator="OR", conditions=[Condition("key2", "is", "value2")]
                    ),
                ],
            ),
        )

    def test_from_dict_invalid_data(self):
        data = {"invalid": "data"}
        self.assertIsNone(FilterCondition.from_dict(data))

        another_data = {"key": "key", "comparator": "is"}
        self.assertIsNone(FilterCondition.from_dict(another_data))

    def test_to_dict_condition(self):
        condition = Condition("key", "is", "value")
        self.assertEqual(
            condition.to_dict(), {"key": "key", "comparator": "is", "value": "value"}
        )

    def test_to_dict_complex_logic_group(self):
        group = LogicalGroupMultipleConditions(
            operator="AND",
            conditions=[
                LogicalGroupSingleCondition(
                    operator="NOT", condition=Condition("key1", "is", "value1")
                ),
                LogicalGroupMultipleConditions(
                    operator="OR", conditions=[Condition("key2", "is", "value2")]
                ),
            ],
        )
        self.assertEqual(
            group.to_dict(),
            {
                "operator": "AND",
                "conditions": [
                    {
                        "operator": "NOT",
                        "condition": {
                            "key": "key1",
                            "comparator": "is",
                            "value": "value1",
                        },
                    },
                    {
                        "operator": "OR",
                        "conditions": [
                            {"key": "key2", "comparator": "is", "value": "value2"}
                        ],
                    },
                ],
            },
        )
