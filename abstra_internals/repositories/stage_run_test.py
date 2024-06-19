import unittest

from abstra_internals.repositories.stage_run import GetStageRunByQueryFilter
from abstra_internals.utils.filter import FilterCondition


class TestGetStageRunByQueryFilter(unittest.TestCase):
    def test_to_dict(self):
        filter = GetStageRunByQueryFilter(
            stage="stage_id",
            assignee=None,
            parent_id=None,
            status=["waiting"],
            data=None,
            search=None,
            advanced_data_filter=FilterCondition.from_dict(
                {
                    "operator": "AND",
                    "conditions": [
                        {"key": "key1", "comparator": "is", "value": "value1"},
                        {"key": "key2", "comparator": "is", "value": "value2"},
                    ],
                }
            ),
        )
        self.assertEqual(
            filter.to_dict(),
            {
                "stage": "stage_id",
                "status": ["waiting"],
                "advanced_data_filter": '{"operator": "AND", "conditions": [{"key": "key1", "comparator": "is", "value": "value1"}, {"key": "key2", "comparator": "is", "value": "value2"}]}',
            },
        )
