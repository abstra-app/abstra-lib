from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_007 import (
    Migration007,
)


class TestMigration07(TestCase):
    def test_adds_item_name_to_iterators(self):
        m = Migration007(
            {
                "version": "6.0",
                "iterators": [
                    {
                        "id": "b35faa65-5910-4cd4-b56c-c2bee99b9263",
                        "title": "iter",
                        "variable_name": "mylist",
                        "workflow_position": [-256, -32],
                        "transitions": [],
                    }
                ],
            }
        )
        m.apply()
        self.assertEqual(
            m.data,
            {
                "version": "7.0",
                "iterators": [
                    {
                        "id": "b35faa65-5910-4cd4-b56c-c2bee99b9263",
                        "title": "iter",
                        "variable_name": "mylist",
                        "workflow_position": [-256, -32],
                        "transitions": [],
                        "item_name": "item",
                    }
                ],
            },
        )

    def test_adds_only_to_iterators(self):
        m = Migration007(
            {
                "version": "6.0",
                "conditions": [{"title": "it must be mantained"}],
                "iterators": [
                    {
                        "id": "b35faa65-5910-4cd4-b56c-c2bee99b9263",
                        "title": "iter",
                        "variable_name": "mylist",
                        "workflow_position": [-256, -32],
                        "transitions": [],
                        "item_name": "item",
                    }
                ],
            }
        )
        m.apply()
        self.assertEqual(
            m.data,
            {
                "version": "7.0",
                "conditions": [{"title": "it must be mantained"}],
                "iterators": [
                    {
                        "id": "b35faa65-5910-4cd4-b56c-c2bee99b9263",
                        "title": "iter",
                        "variable_name": "mylist",
                        "workflow_position": [-256, -32],
                        "transitions": [],
                        "item_name": "item",
                    }
                ],
            },
        )

    def test_it_should_not_break_with_no_iterators(self):
        m = Migration007({"version": "6.0"})
        m.apply()
        self.assertEqual(m.data, {"version": "7.0"})
