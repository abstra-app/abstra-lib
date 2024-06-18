from __future__ import annotations

from dataclasses import dataclass
from typing import List, Literal, Optional, Tuple, Union, get_args

CONDITION_COMPARATORS_TYPE = Literal["is", "contains"]

SINGLE_CONDITION_OPERATORS_TYPE = Literal["NOT"]
SINGLE_CONDITION_OPERATORS: Tuple[SINGLE_CONDITION_OPERATORS_TYPE, ...] = get_args(
    SINGLE_CONDITION_OPERATORS_TYPE
)

MULTIPLE_CONDITIONS_OPERATORS_TYPE = Literal["AND", "OR"]
MULTIPLE_CONDITIONS_OPERATORS: Tuple[MULTIPLE_CONDITIONS_OPERATORS_TYPE, ...] = (
    get_args(MULTIPLE_CONDITIONS_OPERATORS_TYPE)
)


@dataclass
class FilterCondition:
    @staticmethod
    def from_dict(data: dict) -> Optional[FilterCondition]:
        if "key" in data and "comparator" in data and "value" in data:
            if data["key"] == "":
                return None
            return Condition(
                key=data["key"], comparator=data["comparator"], value=data["value"]
            )
        if "operator" in data:
            if data["operator"] in SINGLE_CONDITION_OPERATORS:
                return LogicalGroupSingleCondition(
                    operator=data["operator"],
                    condition=FilterCondition.from_dict(data["condition"]),
                )
            if data["operator"] in MULTIPLE_CONDITIONS_OPERATORS:
                return LogicalGroupMultipleConditions(
                    operator=data["operator"],
                    conditions=[
                        FilterCondition.from_dict(condition)
                        for condition in data["conditions"]
                    ],
                )

        return None

    def to_dict(self) -> dict:
        if isinstance(self, Condition):
            return {
                "key": self.key,
                "comparator": self.comparator,
                "value": self.value,
            }
        if isinstance(self, LogicalGroupSingleCondition):
            return {
                "operator": self.operator,
                "condition": self.condition.to_dict() if self.condition else None,
            }
        if isinstance(self, LogicalGroupMultipleConditions):
            return {
                "operator": self.operator,
                "conditions": [
                    condition.to_dict() if condition else None
                    for condition in (self.conditions or [])
                ],
            }

        return {}


@dataclass
class Condition(FilterCondition):
    key: str
    comparator: CONDITION_COMPARATORS_TYPE
    value: str


@dataclass
class LogicalGroupSingleCondition(FilterCondition):
    operator: SINGLE_CONDITION_OPERATORS_TYPE
    condition: Optional[FilterCondition]


@dataclass
class LogicalGroupMultipleConditions(FilterCondition):
    operator: MULTIPLE_CONDITIONS_OPERATORS_TYPE
    conditions: Optional[List[Optional[FilterCondition]]]


LogicalGroup = Union[LogicalGroupSingleCondition, LogicalGroupMultipleConditions]


def evaluate_condition(condition: Condition, data: dict):
    if condition.key == "":
        return True

    if condition.key not in data:
        return False

    if condition.comparator == "is":
        return data[condition.key] == condition.value

    if condition.comparator == "contains":
        if not isinstance(data[condition.key], str):
            return False
        return condition.value in data[condition.key]

    return False


def evaluate_logical_group(group: LogicalGroup, data: dict):
    if group.operator == "AND":
        if group.conditions is None or len(group.conditions) == 0:
            return True
        return all(
            evaluate_filter_condition(condition, data) for condition in group.conditions
        )
    if group.operator == "OR":
        if group.conditions is None or len(group.conditions) == 0:
            return True
        return any(
            evaluate_filter_condition(condition, data) for condition in group.conditions
        )
    if group.operator == "NOT":
        if group.condition is None:
            return True
        return not evaluate_filter_condition(group.condition, data)

    return False


def evaluate_filter_condition(filter_condition: Optional[FilterCondition], data: dict):
    if isinstance(filter_condition, Condition):
        return evaluate_condition(filter_condition, data)
    if isinstance(
        filter_condition, (LogicalGroupSingleCondition, LogicalGroupMultipleConditions)
    ):
        return evaluate_logical_group(filter_condition, data)
    if filter_condition is None:
        return True

    return False
