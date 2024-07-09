from typing import Tuple

from abstra_internals.interface.sdk.tables.utils import quoted_identifier


class Comparator:
    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        raise NotImplementedError()


class is_null(Comparator):
    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} IS NULL", []


class is_eq(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)}=${idx}", [self.value]


class is_neq(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} <> ${idx}", [self.value]


class is_gt(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} > ${idx}", [self.value]


class is_gte(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} >= ${idx}", [self.value]


class is_lt(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} < ${idx}", [self.value]


class is_lte(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} <= ${idx}", [self.value]


class is_in(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        placeholders = ", ".join([f"${idx+i}" for i in range(len(self.value))])
        return f"{quoted_identifier(column_name)} IN ({placeholders})", self.value


class is_not_in(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        placeholders = ", ".join([f"${idx+i}" for i in range(len(self.value))])
        return f"{quoted_identifier(column_name)} NOT IN ({placeholders})", self.value


class is_like(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} LIKE ${idx}", [self.value]


class is_not_like(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} NOT LIKE ${idx}", [self.value]


class is_between(Comparator):
    def __init__(self, value1, value2):
        self.value1 = value1
        self.value2 = value2

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} BETWEEN ${idx} AND ${idx+1}", [
            self.value1,
            self.value2,
        ]


class is_not_null(Comparator):
    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} IS NOT NULL", []


class is_ilike(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} ILIKE ${idx}", [self.value]


class is_not_ilike(Comparator):
    def __init__(self, value):
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        return f"{quoted_identifier(column_name)} NOT ILIKE ${idx}", [self.value]
