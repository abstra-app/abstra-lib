from __future__ import annotations

from dataclasses import dataclass
from typing import List, Literal, Optional


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
        if "AND" in data:
            return LogicalGroup(
                AND=[FilterCondition.from_dict(condition) for condition in data["AND"]]
            )
        if "OR" in data:
            return LogicalGroup(
                OR=[FilterCondition.from_dict(condition) for condition in data["OR"]]
            )
        if "NOT" in data:
            return LogicalGroup(NOT=FilterCondition.from_dict(data["NOT"]))

        return None


@dataclass
class Condition(FilterCondition):
    key: str
    comparator: Literal["is", "contains"]
    value: str


@dataclass
class LogicalGroup(FilterCondition):
    AND: Optional[List[Optional[FilterCondition]]] = None
    OR: Optional[List[Optional[FilterCondition]]] = None
    NOT: Optional[FilterCondition] = None


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
    if group.AND is not None:
        if len(group.AND) == 0:
            return True
        return all(
            evaluate_filter_condition(condition, data) for condition in group.AND
        )
    if group.OR is not None:
        if len(group.OR) == 0:
            return True
        return any(evaluate_filter_condition(condition, data) for condition in group.OR)
    if group.NOT is not None:
        return not evaluate_filter_condition(group.NOT, data)

    return False


def evaluate_filter_condition(filter_condition: Optional[FilterCondition], data: dict):
    if isinstance(filter_condition, Condition):
        return evaluate_condition(filter_condition, data)
    if isinstance(filter_condition, LogicalGroup):
        return evaluate_logical_group(filter_condition, data)
    if filter_condition is None:
        return True

    return False
