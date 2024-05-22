from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_005 import (
    Migration005,
)


class TestMigration05(TestCase):
    def test_remove_title_from_conditions(self):
        m = Migration005(
            {
                "version": "4.0",
                "conditions": [{"title": "it should not be here anymore"}],
            }
        )
        m.apply()
        self.assertEqual(m.data, {"version": "5.0", "conditions": [{}]})

    def test_remove_title_from_iterators(self):
        m = Migration005(
            {
                "version": "4.0",
                "iterators": [{"title": "it should not be here anymore"}],
            }
        )
        m.apply()
        self.assertEqual(m.data, {"version": "5.0", "iterators": [{}]})

    def test_it_should_not_break_with_no_conditions_and_iterators(self):
        m = Migration005({"version": "4.0"})
        m.apply()
        self.assertEqual(m.data, {"version": "5.0"})
