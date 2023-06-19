from collections import UserDict
from .debug_utils import CloseDTO, Frames


def get_connection():
    raise NotImplementedError("Must run inside server")


def send(data, frames: Frames = None):
    return get_connection().send(data, frames)


def receive(path: str = ""):
    return get_connection().receive(path)


def close(dto: CloseDTO):
    return get_connection().close(dto)


# this is a class to wrap all read methods of dicts to call get_url_params instead
class UrlParams(UserDict):
    @property
    def params(self):
        conn = get_connection()
        return conn.url_params if conn else {}

    def __getitem__(self, key):
        return self.params.__getitem__(key)

    def __iter__(self):
        return self.params.__iter__()

    def __len__(self) -> int:
        return self.params.__len__()

    def __contains__(self, key):
        return self.params.__contains__(key)

    def __str__(self) -> str:
        return self.params.__str__()

    def __repr__(self) -> str:
        return self.params.__repr__()

    def keys(self):
        return self.params.keys()

    def values(self):
        return self.params.values()

    def items(self):
        return self.params.items()

    def has_key(self, key):
        return key in self.params


url_params = UrlParams()
