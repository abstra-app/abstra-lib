class ReadOnlyProxyDict:
    def __init__(self, data_getter):
        self.data_getter = data_getter

    @property
    def data(self) -> dict:
        return self.data_getter()

    def __len__(self) -> int:
        return self.data.__len__()

    def __getitem__(self, key):
        return self.data.__getitem__(key)

    def __iter__(self):
        return self.data.__iter__()

    def __contains__(self, key):
        return self.data.__contains__(key)

    def __str__(self) -> str:
        return self.data.__str__()

    def __repr__(self) -> str:
        return self.data.__repr__()

    def get(self, key, default=None):
        return self.data.get(key, default)

    def copy(self):
        return self.data.copy()

    def keys(self):
        return self.data.keys()

    def values(self):
        return self.data.values()

    def items(self):
        return self.data.items()

    def has_key(self, key):
        return key in self.data
