import flask

from ...usage import usage
from ...repositories import roles_repository
from ...contracts_generated import (
    CloudApiCliRoleCreateRequest,
    CloudApiCliRoleUpdateRequest,
)


def get_editor_bp():
    bp = flask.Blueprint("roles", __name__)

    @bp.get("/")
    @usage
    def _get_project_roles():
        return roles_repository.get_roles()

    @bp.post("/")
    @usage
    def _create_role():
        data = flask.request.json
        if data is None:
            flask.abort(400)
        req = CloudApiCliRoleCreateRequest.from_dict(data)
        roles_repository.create_role(req)
        return {"success": True}

    @bp.patch("/<role_id>")
    @usage
    def _update_role(role_id):
        data = flask.request.json
        if data is None:
            flask.abort(400)
        req = CloudApiCliRoleUpdateRequest.from_dict(data)
        roles_repository.update_role(role_id, req)
        return {"success": True}

    return bp
