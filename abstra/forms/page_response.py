class PageResponse(dict):
    def __init__(self, data, action):
        self.action = action
        self.data = data

    def __getitem__(self, key):
        return self.data[key]

    def __setitem__(self, key, value):
        self.data[key] = value

    def __delitem__(self, key):
        del self.data[key]

    def __iter__(self):
        return iter(self.data)

    def __len__(self):
        return len(self.data)

    def __contains__(self, key):
        return key in self.data

    def __str__(self):
        return str(self.data)

    def __repr__(self):
        return repr(self.data)

    def __cmp__(self, cmp_dict):
        return self.__cmp__(self.data, cmp_dict)

    def keys(self):
        return self.data.keys()

    def values(self):
        return self.data.values()

    def items(self):
        return self.data.items()

    def clear(self):
        return self.data.clear()

    def copy(self):
        return PageResponse(self.data.copy(), self.action)

    def has_key(self, key):
        return key in self.data

    def update(self, *args, **kwargs):
        return self.data.update(*args, **kwargs)

    def pop(self, *args):
        return self.data.pop(*args)
