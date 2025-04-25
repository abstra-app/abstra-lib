import typing
from datetime import date, datetime, timezone
from uuid import UUID

from dateutil import parser

from abstra_internals.utils import serialize as json_serialize


@typing.runtime_checkable
class WithAsDict(typing.Protocol):
    @property
    def as_dict(self) -> dict: ...


def escape_ref(ref: str):
    return ref.replace('"', '""')


def quoted_identifier(ref: str):
    return f'"{escape_ref(ref)}"'


def serialize(value: typing.Any):
    if isinstance(value, WithAsDict):
        return serialize(value.as_dict)
    if isinstance(value, (datetime, date)):
        return convert_date(value)
    if isinstance(value, (dict, list, tuple)):
        return json_serialize(value)
    if isinstance(value, set):
        return json_serialize(list(value))
    if isinstance(value, UUID):
        return str(value)
    if isinstance(value, str) and is_datetime_parsable(value):
        return convert_date(value)

    return value


def has_timezone(value: typing.Union[datetime, date, str]) -> bool:
    if isinstance(value, datetime):
        return value.tzinfo is not None
    elif isinstance(value, date):
        return False
    return False


def is_datetime_parsable(value: str) -> bool:
    try:
        parser.parse(value)
        return True
    except ValueError:
        return False


def convert_date(value: typing.Union[datetime, date, str]) -> str:
    if isinstance(value, datetime):
        if has_timezone(value):
            return value.astimezone(timezone.utc).isoformat()
        else:
            return value.isoformat()
    elif isinstance(value, date):
        return value.isoformat()
    elif isinstance(value, str):
        parsed_value = parser.parse(value)
        if has_timezone(parsed_value):
            return parsed_value.astimezone(timezone.utc).isoformat()
        else:
            return parsed_value.isoformat()
