from dataclasses import dataclass
from datetime import datetime
from io import BufferedReader
from pathlib import Path
from typing import Union

from abstra_internals.widgets.file_utils import download_to_path


def to_datetime(value: Union[str, datetime]) -> datetime:
    if isinstance(value, datetime):
        return value
    return datetime.fromisoformat(value)


@dataclass
class AppointmentSlot:
    """Timeslot with beggining and end datetimes

    Attributes:
        begin (datetime): The start of the timeslot
        end (datetime): The url of the timeslot
    """

    begin: datetime
    end: datetime

    def __init__(self, begin: datetime, end: datetime):
        if begin >= end:
            raise ValueError("begin must be before end")
        self.begin = begin
        self.end = end

    def to_dict(self):
        return {"begin": self.begin.isoformat(), "end": self.end.isoformat()}

    @staticmethod
    def from_tuple(data):
        return AppointmentSlot(to_datetime(data[0]), to_datetime(data[1]))

    @staticmethod
    def from_dict(data):
        return AppointmentSlot(to_datetime(data["begin"]), to_datetime(data["end"]))

    @staticmethod
    def to_slot(data):
        if isinstance(data, AppointmentSlot):
            return data
        if isinstance(data, dict):
            return AppointmentSlot.from_dict(data)
        if isinstance(data, (tuple, list)):
            return AppointmentSlot.from_tuple(data)
        raise ValueError(f"Invalid data type: {type(data)}")

    @staticmethod
    def from_list(data):
        return [AppointmentSlot.to_slot(slot) for slot in data]

    def __eq__(self, value: object) -> bool:
        return (
            isinstance(value, AppointmentSlot)
            and self.begin == value.begin
            and self.end == value.end
        )

    def __getitem__(self, key):
        return getattr(self, key)

    def __setitem__(self, key, value):
        return setattr(self, key, value)

    def __delitem__(self, key):
        delattr(self, key)

    def __iter__(self):
        return iter(self.__dict__)

    def __len__(self):
        return len(self.__dict__)

    def keys(self):
        return self.__dict__.keys()

    def items(self):
        return self.__dict__.items()

    def values(self):
        return self.__dict__.values()


class FileResponse:
    """A file response from the user

    Attributes:
        name (str): The name of the file
        file (BufferedReader): The file object
        content (bytes): The content of the file
        path (pathlib.Path): The Path object pointing to the file
    """

    _path = None

    def __init__(self, url: str):
        self._url = url

    @property
    def name(self) -> str:
        return self.path.name

    @property
    def content(self):
        return self.path.read_bytes()

    @property
    def file(self) -> BufferedReader:
        return self.path.open("rb")

    @property
    def path(self) -> Path:
        if not self._path:
            self._path = download_to_path(self._url)
        return self._path


@dataclass
class PhoneResponse:
    """A phone response from the user

    Attributes:
        masked (str): The masked phone number, eg: +55 (21) 99999-9999
        raw (str): The raw phone number, eg: 5521999999999
        country_code (str): The phone number country code, eg: 55
        national_number (str): The phone number national number, eg: 21999999999
    """

    masked: str
    raw: str
    country_code: str
    national_number: str

    def __getitem__(self, key):
        return getattr(self, key)

    def __setitem__(self, key, value):
        return setattr(self, key, value)

    def __delitem__(self, key):
        delattr(self, key)

    def __iter__(self):
        return iter(self.__dict__)

    def __len__(self):
        return len(self.__dict__)

    def keys(self):
        return self.__dict__.keys()

    def items(self):
        return self.__dict__.items()

    def values(self):
        return self.__dict__.values()
