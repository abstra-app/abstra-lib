from dataclasses import dataclass
from typing import Any, Dict, List, Literal, Union

import flask

from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import editor_usage


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


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_env_vars", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_env_vars():
        return [
            env_var.to_dict() for env_var in main_controller.env_vars_repository.list()
        ]

    @bp.patch("/")
    @editor_usage
    def _change_env_vars():
        if flask.request.json is None:
            flask.abort(400)

        body = PatchClientEnvVarBody.from_dict(flask.request.json)
        for change in body.changes:
            if change.change == "create" or change.change == "update":
                main_controller.env_vars_repository.set(
                    name=change.name, value=change.value
                )
            elif change.change == "delete":
                main_controller.env_vars_repository.unset(name=change.name)

        return {"status": "ok"}

    return bp
