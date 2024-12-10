import copy
import json
from pathlib import Path
from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_012 import (
    Migration012,
)


class TestMigration12(TestCase):
    def test_base_json(self):
        base_abstra_json = Path(__file__).parent / "json_tests" / "base.json"
        json_data = json.loads(base_abstra_json.read_text())
        expected_result = copy.deepcopy(json_data)
        m = Migration012(json_data)
        m.set_as_test()
        m.apply()
        del expected_result["conditions"]
        del expected_result["iterators"]
        del expected_result["kanban"]
        expected_result["version"] = "12.0"
        self.assertEqual(
            m.data,
            expected_result,
        )

    def test_simple_json(self):
        simple_abstra_json = Path(__file__).parent / "json_tests" / "simple.json"
        json_data = json.loads(simple_abstra_json.read_text())
        expected_result = copy.deepcopy(json_data)
        m = Migration012(json_data)
        m.set_as_test()
        m.apply()
        del expected_result["conditions"]
        del expected_result["iterators"]
        del expected_result["kanban"]
        for transition in expected_result["forms"][0]["transitions"]:
            transition["type"] = "task"
            transition["task_type"] = "success"
            del transition["condition_value"]
        expected_result["version"] = "12.0"
        self.assertEqual(
            m.data,
            expected_result,
        )
