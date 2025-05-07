from dataclasses import dataclass
from typing import List, Optional

from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.tasks import TaskDTO


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
    columns: List[ColumnDTO]

    @staticmethod
    def from_dict(data: dict) -> "TableDTO":
        return TableDTO(
            id=data["id"],
            name=data["name"],
            project_id=data["projectId"],
            columns=[ColumnDTO.from_dict(column) for column in data["columns"]],
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


class ListTasksItem(TaskDTO):
    target_stage_title: str
    target_stage_type: str
    source_stage_title: Optional[str]
    source_stage_type: Optional[str]


class TablesController:
    def __init__(
        self,
        repositories: Repositories,
    ) -> None:
        self.repos = repositories

    def create_table(self, id: str, name: str):
        return self.repos.tables.create_table(id, name)

    def create_column(self, table_id: str, name: str, type: str):
        return self.repos.tables.create_column(table_id, name, type)

    def insert_row(self, table_id: str, row: dict):
        return self.repos.tables.insert_row(table_id, row)

    def update_table(self, table_id: str, name: str):
        return self.repos.tables.update_table(table_id, name)

    def update_column(self, column_id: str, table_id: str, changes: dict):
        return self.repos.tables.update_column(column_id, table_id, changes)
