from unittest import TestCase

from abstra_internals.interface.sdk.tables.comparators import (
    is_between,
    is_eq,
    is_gt,
    is_gte,
    is_in,
    is_like,
    is_lt,
    is_lte,
    is_neq,
    is_not_in,
    is_not_like,
    is_not_null,
    is_null,
)


class TestComparators(TestCase):
    def test_is_eq(self):
        self.assertEqual(is_eq(1).exp("column", 1), ('"column"=$1', [1]))

    def test_is_neq(self):
        self.assertEqual(is_neq(1).exp("column", 1), ('"column" <> $1', [1]))

    def test_is_gt(self):
        self.assertEqual(is_gt(1).exp("column", 1), ('"column" > $1', [1]))

    def test_is_between(self):
        self.assertEqual(
            is_between(1, 2).exp("column", 1), ('"column" BETWEEN $1 AND $2', [1, 2])
        )

    def test_is_gte(self):
        self.assertEqual(is_gte(1).exp("column", 1), ('"column" >= $1', [1]))

    def test_is_in(self):
        self.assertEqual(
            is_in([1, 2]).exp("column", 1), ('"column" IN ($1, $2)', [1, 2])
        )

    def test_is_lt(self):
        self.assertEqual(is_lt(1).exp("column", 1), ('"column" < $1', [1]))

    def test_is_like(self):
        self.assertEqual(is_like("a").exp("column", 1), ('"column" LIKE $1', ["a"]))

    def test_is_lte(self):
        self.assertEqual(is_lte(1).exp("column", 1), ('"column" <= $1', [1]))

    def test_is_not_in(self):
        self.assertEqual(
            is_not_in([1, 2]).exp("column", 1), ('"column" NOT IN ($1, $2)', [1, 2])
        )

    def test_is_not_like(self):
        self.assertEqual(
            is_not_like("a").exp("column", 1), ('"column" NOT LIKE $1', ["a"])
        )

    def test_is_null(self):
        self.assertEqual(is_null().exp("column", 1), ('"column" IS NULL', []))

    def test_is_not_null(self):
        self.assertEqual(is_not_null().exp("column", 1), ('"column" IS NOT NULL', []))
