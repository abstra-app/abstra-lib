import requests
from ..utils import get_headers

BASE_URL = "https://tables.abstra.cloud"


class Tables:
    def __init__(self, api_key=None):
        self.api_key = api_key

    def statement(self, id):
        return Statements(id, self.api_key)

    def run_statement(self, id, params=None):
        statement = self.statement(id)
        return statement.run(params)


class Statements:
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
        if res.ok:
            return res.json()
        else:
            raise Exception(res.text)
