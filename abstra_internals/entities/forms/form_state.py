from typing import Dict


class State(dict):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __getitem__(self, key):
        return self.get(key, None)

    def update_values(self, other: Dict):
        for key, value in other.items():
            self[key] = value
