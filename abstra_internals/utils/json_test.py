from dataclasses import dataclass
from datetime import date, datetime
from unittest import TestCase
from uuid import UUID

from abstra_internals.entities.forms.page_response import PageResponse
from abstra_internals.interface.sdk.forms.step import StepsResponse
from abstra_internals.utils.json import to_json_serializable
from abstra_internals.widgets.response_types import FileResponse, PhoneResponse


class TestToJsonSerializable(TestCase):
    def test_int(self):
        self.assertEqual(to_json_serializable(1), 1)

    def test_float(self):
        self.assertEqual(to_json_serializable(1.0), 1.0)

    def test_none(self):
        self.assertEqual(to_json_serializable(None), None)

    def test_string(self):
        self.assertEqual(to_json_serializable("test"), "test")

    def test_list(self):
        self.assertEqual(to_json_serializable([1, 2, 3]), [1, 2, 3])

    def test_tuple(self):
        self.assertEqual(to_json_serializable((1, 2, 3)), [1, 2, 3])

    def test_set(self):
        self.assertEqual(to_json_serializable({1, 2, 3}), [1, 2, 3])

    def test_dict(self):
        self.assertEqual(to_json_serializable({"a": 1, "b": 2}), {"a": 1, "b": 2})

    def test_page_response(self):
        self.assertEqual(
            to_json_serializable(PageResponse(data={"foo": "bar"}, action="baz")),
            {"foo": "bar"},
        )

    def test_page_response_complex(self):
        self.assertEqual(
            to_json_serializable(
                PageResponse(
                    data={
                        "datetime": datetime(2021, 1, 1, 12, 0, 0),
                        "uuid": UUID("123e4567-e89b-12d3-a456-426614174000"),
                    },
                    action="foo",
                )
            ),
            {
                "datetime": "2021-01-01T12:00:00",
                "uuid": "123e4567-e89b-12d3-a456-426614174000",
            },
        )

    def test_steps_response(self):
        steps_response = StepsResponse()
        steps_response.append(PageResponse(data={"a": 1, "b": 2}, action="baz"))
        steps_response.append(PageResponse(data={"b": 3, "c": 4}, action="foo"))
        self.assertEqual(to_json_serializable(steps_response), {"a": 1, "b": 3, "c": 4})

    def test_dataclass(self):
        @dataclass
        class Foo:
            a: int
            b: str

        self.assertEqual(to_json_serializable(Foo(1, "bar")), {"a": 1, "b": "bar"})

    def test_datetime(self):
        now = datetime(2021, 1, 1, 12, 0, 0)
        self.assertEqual(to_json_serializable(now), "2021-01-01T12:00:00")

    def test_date(self):
        now = date(2021, 1, 1)
        self.assertEqual(to_json_serializable(now), "2021-01-01")

    def test_uuid(self):
        uuid = UUID("123e4567-e89b-12d3-a456-426614174000")
        self.assertEqual(
            to_json_serializable(uuid), "123e4567-e89b-12d3-a456-426614174000"
        )

    def test_file_response(self):
        file_response = FileResponse("foo.txt")
        self.assertEqual(to_json_serializable(file_response), "foo.txt")

    def test_phone_response(self):
        phone_response = PhoneResponse(
            country_code="55",
            masked="+55 (21) 9999-9999",
            national_number="21999999999",
            raw="5521999999999",
        )
        self.assertEqual(to_json_serializable(phone_response), "+55 (21) 9999-9999")
