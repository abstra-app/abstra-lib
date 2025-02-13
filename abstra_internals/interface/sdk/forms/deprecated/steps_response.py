from typing import List, Union

from abstra_internals.interface.sdk.forms.deprecated.page_response import PageResponse

# TODO: should be in interface layer


class StepsResponse:
    responses: List[Union[PageResponse, dict, None]]

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

    def append(self, res: Union[PageResponse, dict, None]):
        self.responses.append(res)
        self.__update_acc()

    def __update_acc(self):
        self.acc = {}
        for res in self.responses:
            if isinstance(res, PageResponse):
                self.acc.update(res)
            elif isinstance(res, dict):
                self.acc.update(res)

    def pop(self) -> Union[PageResponse, dict, None]:
        step_response = self.responses.pop()
        self.__update_acc()
        return step_response
