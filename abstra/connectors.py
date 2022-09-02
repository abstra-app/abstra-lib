import requests
from .utils import get_headers

BASE_URL = "https://remote-actions.abstra.cloud"


class Connectors:
    def __init__(self, api_key=None):
        self.api_key = api_key

    def method(self, id):
        return Methods(id, self.api_key)

    def run_method(self, id, params=None):
        method = self.method(id)
        return method.run(params)


class Methods:
    def __init__(self, id, api_key=None):
        self.id = id
        self.api_key = api_key

    def run(self, params=None):
        if params is None:
            params = {}
        res = requests.post(
            f"{BASE_URL}/execute/{self.id}",
            json=params,
            headers=get_headers(self.api_key),
        )
        if res.status_code == 200:
            return res.json()
        else:
            raise Exception(res.text)
