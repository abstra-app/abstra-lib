import abc
import typing
from dataclasses import dataclass
from typing import Optional

from abstra_internals.cloud_api.http_client import AbstraHTTPResponse, HTTPClient
from abstra_internals.environment import REQUEST_TIMEOUT


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


class TablesRepository(abc.ABC):
    client: "HTTPClient"

    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    def execute(self, query: str, params: typing.List) -> AbstraHTTPResponse:
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


class ProductionTablesRepository(TablesRepository):
    def execute(self, query: str, params: typing.List) -> AbstraHTTPResponse:
        body = {"query": query, "params": params}
        return self.client.post(
            "/tables/execute",
            json=body,
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


class LocalTablesRepository(TablesRepository):
    def execute(self, query: str, params: typing.List) -> AbstraHTTPResponse:
        body = {"query": query, "params": params}

        return self.client.post("/tables/execute", json=body, timeout=REQUEST_TIMEOUT)

    def create_table(self, id: str, name: str) -> TableDTO:
        r = self.client.post(
            "/table",
            json={
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
        r = self.client.post("/tables/column", json=body)
        column = r.json()["response"]
        return ColumnDTO.from_dict(column)

    def insert_row(self, table_id: str, values: dict):
        body = {
            "tableId": table_id,
            "row": values,
        }
        self.client.post("/tables/row", json=body)

    def update_table(self, table_id: str, name: str) -> TableDTO:
        body = {
            "name": name,
        }
        r = self.client.patch(f"/tables/table/{table_id}", json=body)
        table = r.json()["response"]
        return TableDTO.from_dict(table)

    def update_column(self, column_id: str, table_id: str, changes: dict) -> ColumnDTO:
        body = {
            "tableId": table_id,
            "changes": changes,
        }
        r = self.client.patch(f"/tables/column/{column_id}", json=body)
        column = r.json()["response"]
        return ColumnDTO.from_dict(column)
