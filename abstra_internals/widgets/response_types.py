from dataclasses import dataclass
from io import BufferedReader
from tempfile import _TemporaryFileWrapper
from typing import Union

from abstra_internals.widgets.file_utils import download_file


class FileResponse:
    """A file response from the user

    Attributes:
        file (file): The file object
        url (str): The url of the file
        content (bytes): The content of the file
    """

    __file = None

    def __init__(self, url):
        self.url = url
        self.name = url.split("/")[-1]

    @property
    def content(self):
        with open(self.file.name, "rb") as f:
            return f.read()

    @property
    def file(self) -> Union[BufferedReader, _TemporaryFileWrapper]:
        if not self.__file:
            self.__file = download_file(self.url)
        return self.__file


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
