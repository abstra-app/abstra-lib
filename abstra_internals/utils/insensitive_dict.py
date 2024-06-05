class CaseInsensitiveDict(dict):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def og_key(self, key):
        for k in super().keys():
            if k.lower() == key.lower():
                return k

    def __setitem__(self, key, value):
        if self.og_key(key):
            super().__setitem__(self.og_key(key), value)
        else:
            super().__setitem__(key, value)

    def __getitem__(self, key):
        return super().__getitem__(self.og_key(key))

    def __delitem__(self, key):
        return super().__delitem__(self.og_key(key))

    def __contains__(self, key):
        return self.og_key(key) is not None

    def get(self, key, default=None):
        return super().get(self.og_key(key), default)
