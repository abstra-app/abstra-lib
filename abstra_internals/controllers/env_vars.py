from dataclasses import dataclass
from typing import Any, Dict, List, Literal, Union


@dataclass
class CreateEnvVarBody:
    change: Literal["create"]
    name: str
    value: str

    @staticmethod
    def from_dict(data: Dict[str, str]) -> "CreateEnvVarBody":
        return CreateEnvVarBody(change="create", name=data["name"], value=data["value"])


@dataclass
class UpdateEnvVarBody:
    change: Literal["update"]
    name: str
    value: str

    @staticmethod
    def from_dict(data: Dict[str, Any]) -> "UpdateEnvVarBody":
        return UpdateEnvVarBody(change="update", name=data["name"], value=data["value"])


@dataclass
class DeleteEnvVarBody:
    change: Literal["delete"]
    name: str

    @staticmethod
    def from_dict(data: Dict[str, Any]) -> "DeleteEnvVarBody":
        return DeleteEnvVarBody(change="delete", name=data["name"])


EnvVarChange = Union[CreateEnvVarBody, UpdateEnvVarBody, DeleteEnvVarBody]


@dataclass
class PatchClientEnvVarBody:
    changes: List[EnvVarChange]

    @staticmethod
    def from_dict(data: List[Dict[str, Any]]) -> "PatchClientEnvVarBody":
        changes = []
        for item in data:
            change_type = item["change"]
            if change_type == "create":
                changes.append(CreateEnvVarBody.from_dict(item))
            elif change_type == "update":
                changes.append(UpdateEnvVarBody.from_dict(item))
            elif change_type == "delete":
                changes.append(DeleteEnvVarBody.from_dict(item))
        return PatchClientEnvVarBody(changes=changes)
