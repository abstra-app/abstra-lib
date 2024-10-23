from typing import List, Union

from abstra_internals.entities.forms.page_response import PageResponse


class StepsResponse:
    responses: List[PageResponse]

    @property
    def as_dict(self):
        return self.acc

    def __init__(self):
        self.responses = []
        self.acc = {}

    def __getitem__(self, key: Union[int, str]):
        if isinstance(key, int):
            return self.responses[key]
        if isinstance(key, str):
            return self.acc[key]
        raise IndexError("Step not found")

    def get(self, key: str, default=None):
        return self.acc.get(key, default)

    def append(self, res: PageResponse):
        self.responses.append(res)
        self.__update_acc()

    def __update_acc(self):
        self.acc = {}
        for res in self.responses:
            if isinstance(res, PageResponse):
                self.acc.update(res)
            elif isinstance(res, dict):
                self.acc.update(res)

    def pop(self) -> PageResponse:
        step_response = self.responses.pop()
        self.__update_acc()
        return step_response
