import abc
import typing
from dataclasses import dataclass
from typing import Any, Optional

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT, SIDECAR_HEADERS


@dataclass
class ColumnDTO:
    id: str
    name: str
    type: str
    table_id: str
    unique: bool
    default: str
    nullable: bool
    primary_key: bool
    protected: bool
    foreign_key: Optional[str]

    @staticmethod
    def from_dict(data: dict) -> "ColumnDTO":
        return ColumnDTO(
            id=data["id"],
            name=data["name"],
            type=data["type"],
            table_id=data["tableId"],
            unique=data["unique"],
            default=data["default"],
            nullable=data["nullable"],
            primary_key=data["primaryKey"],
            protected=data["protected"],
            foreign_key=data["foreignKey"],
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class TableDTO:
    id: str
    name: str
    project_id: str

    @staticmethod
    def from_dict(data: dict) -> "TableDTO":
        return TableDTO(
            id=data["id"],
            name=data["name"],
            project_id=data["projectId"],
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


class TablesApiHttpClient(abc.ABC):
    base_url: str
    execute_url: str

    def __init__(self, base_url: str) -> None:
        self.execute_url = f"{base_url}/tables/execute"
        self.base_url = base_url

    def execute(self, query: str, params: typing.List) -> requests.Response:
        raise NotImplementedError()

    def create_table(self, id: str, name: str) -> TableDTO:
        raise NotImplementedError()

    def create_column(self, table_id: str, name: str, type: str) -> ColumnDTO:
        raise NotImplementedError()

    def insert_row(self, table_id: str, values: dict):
        raise NotImplementedError()

    def update_table(self, table_id: str, name: str) -> TableDTO:
        raise NotImplementedError()

    def update_column(self, column_id: str, table_id: str, changes: dict) -> ColumnDTO:
        raise NotImplementedError()


class ProductionTablesApiHttpClient(TablesApiHttpClient):
    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        return requests.post(
            self.execute_url,
            headers=SIDECAR_HEADERS,
            json=body,
            timeout=REQUEST_TIMEOUT,
        )

    def create_table(self, id: str, name: str) -> TableDTO:
        raise NotImplementedError()

    def create_column(self, table_id: str, name: str, type: str) -> ColumnDTO:
        raise NotImplementedError()

    def insert_row(self, table_id: str, values: dict):
        raise NotImplementedError()

    def update_table(self, table_id: str, name: str) -> TableDTO:
        raise NotImplementedError()

    def update_column(self, column_id: str, table_id: str, changes: dict) -> ColumnDTO:
        raise NotImplementedError()


class LocalTablesApiHttpClient(TablesApiHttpClient):
    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a table query")
        r = requests.request(
            method=method,
            url=f"{self.base_url}/tables{path}",
            headers=headers,
            json=body,
            params=params,
            timeout=REQUEST_TIMEOUT,
        )

        if raise_for_status:
            r.raise_for_status()

        return r

    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a table query")
        return requests.post(
            self.execute_url, headers=headers, json=body, timeout=REQUEST_TIMEOUT
        )

    def create_table(self, id: str, name: str) -> TableDTO:
        r = self._request(
            "POST",
            path="/table",
            body={
                "id": id,
                "name": name,
            },
        )
        table = r.json()["response"]["table"]
        return TableDTO.from_dict(table)

    def create_column(self, table_id: str, name: str, type: str) -> ColumnDTO:
        body = {
            "tableId": table_id,
            "name": name,
            "type": type,
        }
        r = self._request("POST", "/column", body=body)
        column = r.json()["response"]
        return ColumnDTO.from_dict(column)

    def insert_row(self, table_id: str, values: dict):
        body = {
            "tableId": table_id,
            "row": values,
        }
        self._request("POST", "/row", body=body)

    def update_table(self, table_id: str, name: str) -> TableDTO:
        body = {
            "name": name,
        }
        r = self._request("PATCH", f"/table/{table_id}", body=body)
        table = r.json()["response"]
        return TableDTO.from_dict(table)

    def update_column(self, column_id: str, table_id: str, changes: dict) -> ColumnDTO:
        body = {
            "tableId": table_id,
            "changes": changes,
        }
        r = self._request("PATCH", f"column/{column_id}", body=body)
        column = r.json()["response"]
        return ColumnDTO.from_dict(column)
