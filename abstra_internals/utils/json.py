from dataclasses import is_dataclass
from datetime import date, datetime
from uuid import UUID
from ..interface.sdk.forms.page_response import PageResponse
from ..interface.sdk.forms.step import StepsResponse
from ..widgets.response_types import FileResponse, PhoneResponse


def to_json_serializable(data):
    if isinstance(data, FileResponse):
        return data.url
    elif isinstance(data, PhoneResponse):
        return data.masked
    elif isinstance(data, PageResponse):
        return to_json_serializable(data.data)
    elif isinstance(data, StepsResponse):
        return to_json_serializable(data.acc)
    elif is_dataclass(data):
        return {k: to_json_serializable(v) for k, v in data.__dict__.items()}
    elif isinstance(data, (datetime, date)):
        return data.isoformat()
    elif isinstance(data, UUID):
        return str(data)
    elif isinstance(data, (set, list, tuple)):
        return [to_json_serializable(d) for d in data]
    elif isinstance(data, dict):
        return {k: to_json_serializable(v) for k, v in data.items()}
    return data
