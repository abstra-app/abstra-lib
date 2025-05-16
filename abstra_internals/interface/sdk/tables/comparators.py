from typing import Any, List, Tuple

from abstra_internals.interface.sdk.tables.utils import quoted_identifier


class Comparator:
    """Base class for SQL comparison operators.

    All comparison operators inherit from this base class and implement
    the exp method to generate SQL expressions.
    """

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for the comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list of values
                for the parameterized query.
        """
        raise NotImplementedError()


class is_null(Comparator):
    """Comparator for SQL 'IS NULL' operator.

    Checks if a column value is NULL.
    """

    def __init__(self):
        """Initialize the NULL comparator."""
        pass

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for NULL comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and an empty list
                since no values are needed for IS NULL.
        """
        return f"{quoted_identifier(column_name)} IS NULL", []


class is_eq(Comparator):
    """Comparator for SQL equality operator (`=`).

    Checks if a column value equals a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the equality comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for equality comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)}=${idx}", [self.value]


class is_neq(Comparator):
    """Comparator for SQL inequality operator (`<>`).

    Checks if a column value is not equal to a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the inequality comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for inequality comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)} <> ${idx}", [self.value]


class is_gt(Comparator):
    """Comparator for SQL greater than operator (`>`).

    Checks if a column value is greater than a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the greater than comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for greater than comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)} > ${idx}", [self.value]


class is_gte(Comparator):
    """Comparator for SQL greater than or equal operator (`>=`).

    Checks if a column value is greater than or equal to a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the greater than or equal comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for greater than or equal comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)} >= ${idx}", [self.value]


class is_lt(Comparator):
    """Comparator for SQL less than operator (`<`).

    Checks if a column value is less than a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the less than comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for less than comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)} < ${idx}", [self.value]


class is_lte(Comparator):
    """Comparator for SQL less than or equal operator (`<=`).

    Checks if a column value is less than or equal to a specified value.
    """

    def __init__(self, value: Any):
        """Initialize the less than or equal comparator.

        Args:
            value (Any): The value to compare against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for less than or equal comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the value to compare against.
        """
        return f"{quoted_identifier(column_name)} <= ${idx}", [self.value]


class is_in(Comparator):
    """Comparator for SQL IN operator.

    Checks if a column value is in a specified list of values.
    """

    def __init__(self, value: List[Any]):
        """Initialize the IN comparator.

        Args:
            value (List[Any]): The list of values to check against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for IN comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the values to check against.
        """
        placeholders = ", ".join([f"${idx + i}" for i in range(len(self.value))])
        return f"{quoted_identifier(column_name)} IN ({placeholders})", self.value


class is_not_in(Comparator):
    """Comparator for SQL NOT IN operator.

    Checks if a column value is not in a specified list of values.
    """

    def __init__(self, value: List[Any]):
        """Initialize the NOT IN comparator.

        Args:
            value (List[Any]): The list of values to check against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for NOT IN comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the values to check against.
        """
        placeholders = ", ".join([f"${idx + i}" for i in range(len(self.value))])
        return f"{quoted_identifier(column_name)} NOT IN ({placeholders})", self.value


class is_like(Comparator):
    """Comparator for SQL LIKE operator.

    Checks if a column value matches a pattern (case-sensitive).
    """

    def __init__(self, value: str):
        """Initialize the LIKE comparator.

        Args:
            value (str): The pattern to match against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for LIKE comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the pattern to match against.
        """
        return f"{quoted_identifier(column_name)} LIKE ${idx}", [self.value]


class is_not_like(Comparator):
    """Comparator for SQL NOT LIKE operator.

    Checks if a column value does not match a pattern (case-sensitive).
    """

    def __init__(self, value: str):
        """Initialize the NOT LIKE comparator.

        Args:
            value (str): The pattern to match against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for NOT LIKE comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the pattern to match against.
        """
        return f"{quoted_identifier(column_name)} NOT LIKE ${idx}", [self.value]


class is_between(Comparator):
    """Comparator for SQL BETWEEN operator.

    Checks if a column value is between two specified values (inclusive).
    """

    def __init__(self, value1: Any, value2: Any):
        """Initialize the BETWEEN comparator.

        Args:
            value1 (Any): The lower bound value.
            value2 (Any): The upper bound value.
        """
        self.value1 = value1
        self.value2 = value2

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for BETWEEN comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the lower and upper bound values.
        """
        return f"{quoted_identifier(column_name)} BETWEEN ${idx} AND ${idx + 1}", [
            self.value1,
            self.value2,
        ]


class is_not_null(Comparator):
    """Comparator for SQL IS NOT NULL operator.

    Checks if a column value is not NULL.
    """

    def __init__(self):
        """Initialize the NOT NULL comparator."""
        pass

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for NOT NULL comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and an empty list
                since no values are needed for IS NOT NULL.
        """
        return f"{quoted_identifier(column_name)} IS NOT NULL", []


class is_ilike(Comparator):
    """Comparator for SQL ILIKE operator.

    Checks if a column value matches a pattern (case-insensitive).
    """

    def __init__(self, value: str):
        """Initialize the ILIKE comparator.

        Args:
            value (str): The pattern to match against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for ILIKE comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the pattern to match against.
        """
        return f"{quoted_identifier(column_name)} ILIKE ${idx}", [self.value]


class is_not_ilike(Comparator):
    """Comparator for SQL NOT ILIKE operator.

    Checks if a column value does not match a pattern (case-insensitive).
    """

    def __init__(self, value: str):
        """Initialize the NOT ILIKE comparator.

        Args:
            value (str): The pattern to match against.
        """
        self.value = value

    def exp(self, column_name: str, idx: int) -> Tuple[str, list]:
        """Generate SQL expression for NOT ILIKE comparison.

        Args:
            column_name (str): The database column name to apply the comparison to.
            idx (int): The parameter index for parameterized queries.

        Returns:
            Tuple[str, list]: A tuple containing the SQL expression string and a list
                containing the pattern to match against.
        """
        return f"{quoted_identifier(column_name)} NOT ILIKE ${idx}", [self.value]
