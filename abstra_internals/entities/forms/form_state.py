from dataclasses import dataclass
from typing import Dict


class AutoNext:
    pass


@dataclass
class Button:
    label: str


class NextButton(Button):
    def __init__(self):
        super().__init__("i18n_next_action")


class BackButton(Button):
    def __init__(self):
        super().__init__("i18n_back_action")


class State(dict):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    @property
    def _touched(self) -> Dict[str, bool]:
        if "__touched" not in self:
            self["__touched"] = {}
        return self["__touched"]

    @property
    def value(self) -> Dict:
        return self.clean_dict_from_touched(self)

    def clean_dict_from_touched(self, obj: Dict) -> Dict:
        if isinstance(obj, dict):
            return {
                k: self.clean_dict_from_touched(v)
                for k, v in obj.items()
                if k != "__touched"
            }
        elif isinstance(obj, list):
            return [self.clean_dict_from_touched(v) for v in obj]
        else:
            return obj

    def touch_all(self):
        self._touched.update({key: True for key in self.keys()})
        for value in self.values():
            if isinstance(value, list):
                for item in value:
                    if isinstance(item, State):
                        item.touch_all()

    def touched(self, key: str) -> bool:
        return key in self._touched

    def init_keys(self, other: Dict):
        for key, value in other.items():
            # print(f"Warning: key {key} not found in state")

            if key not in self:
                # print(f"Warning: key {key} not found in state")
                self[key] = value

    def merge(self, other: Dict):
        for key, value in other.items():
            self._touched[key] = True
            if isinstance(value, list):
                for i, item in enumerate(value):
                    if i < len(self[key]):
                        self[key][i].merge(item)
                    else:
                        self[key].append(item)
            elif value != self.get(key):
                self[key] = value
