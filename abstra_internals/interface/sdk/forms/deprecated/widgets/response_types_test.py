from datetime import datetime
from unittest import TestCase

from .response_types import AppointmentSlot


class TestAppointSlot(TestCase):
    def test_from_dict_of_str(self):
        data = {"begin": "2021-01-01T00:00:00", "end": "2021-01-01T01:00:00"}
        slot = AppointmentSlot.from_dict(data)
        self.assertEqual(slot.begin, datetime.fromisoformat(data["begin"]))
        self.assertEqual(slot.end, datetime.fromisoformat(data["end"]))

    def test_from_dict_of_datetime(self):
        data = {
            "begin": datetime(2021, 1, 1, 0, 0, 0),
            "end": datetime(2021, 1, 1, 1, 0, 0),
        }
        slot = AppointmentSlot.from_dict(data)
        self.assertEqual(slot.begin, data["begin"])
        self.assertEqual(slot.end, data["end"])

    def test_from_tuple_of_str(self):
        data = ("2021-01-01T00:00:00", "2021-01-01T01:00:00")
        slot = AppointmentSlot.from_tuple(data)
        self.assertEqual(slot.begin, datetime.fromisoformat(data[0]))
        self.assertEqual(slot.end, datetime.fromisoformat(data[1]))

    def test_from_tuple_of_datetime(self):
        data = (datetime(2021, 1, 1, 0, 0, 0), datetime(2021, 1, 1, 1, 0, 0))
        slot = AppointmentSlot.from_tuple(data)
        self.assertEqual(slot.begin, data[0])
        self.assertEqual(slot.end, data[1])

    def test_from_list(self):
        data = [
            {"begin": "2021-01-01T00:00:00", "end": "2021-01-01T01:00:00"},
            ("2021-01-01T02:00:00", "2021-01-01T03:00:00"),
            (datetime(2021, 1, 1, 3, 0, 0), datetime(2021, 1, 1, 4, 0, 0)),
            ("2021-01-01T02:00:00", datetime(2021, 1, 1, 3, 0, 0)),
            ["2021-01-01T02:00:00", datetime(2021, 1, 1, 3, 0, 0)],
            {"begin": datetime(2021, 1, 1, 4, 0, 0), "end": "2021-01-01T05:00:00"},
        ]
        slots = AppointmentSlot.from_list(data)
        self.assertEqual(len(slots), len(data))
        self.assertEqual(slots[0].begin, datetime.fromisoformat(data[0]["begin"]))
        self.assertEqual(slots[0].end, datetime.fromisoformat(data[0]["end"]))
        self.assertEqual(slots[1].begin, datetime.fromisoformat(data[1][0]))
        self.assertEqual(slots[1].end, datetime.fromisoformat(data[1][1]))
        self.assertEqual(slots[2].begin, data[2][0])
        self.assertEqual(slots[2].end, data[2][1])
        self.assertEqual(slots[3].begin, datetime.fromisoformat(data[3][0]))
        self.assertEqual(slots[3].end, data[3][1])
        self.assertEqual(slots[4].begin, datetime.fromisoformat(data[4][0]))
        self.assertEqual(slots[4].end, data[4][1])
        self.assertEqual(slots[5].begin, data[5]["begin"])
        self.assertEqual(slots[5].end, datetime.fromisoformat(data[5]["end"]))
