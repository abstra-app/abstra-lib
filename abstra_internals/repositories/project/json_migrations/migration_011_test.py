from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_011 import (
    Migration011,
)


class TestMigration07(TestCase):
    def test_adds_language_to_english(self):
        m = Migration011(
            {
                "version": "10.0",
            }
        )
        m.apply()
        self.assertEqual(
            m.data,
            {
                "version": "11.0",
                "language": "en",
            },
        )
