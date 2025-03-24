import os

import flask

from abstra_internals.contracts_generated import AbstraLibApiEditorFilesRenameRequest
from abstra_internals.controllers.codebase import CodebaseController
from abstra_internals.repositories.factory import Repositories


def get_editor_bp(repos: Repositories):
    bp = flask.Blueprint("editor_files", __name__)
    controller = CodebaseController(repos)

    @bp.get("/files")
    def _list_files():
        path = flask.request.args.get("path")
        files = controller.list_files(path)
        return [f.to_dict() for f in files]

    @bp.get("/files/<path:path>")
    def _get_file(path):
        return controller.get_file(path)

    @bp.put("/files/<path:path>")
    def _edit_file(path):
        data = flask.request.get_data()
        return controller.edit_file(path, data).to_dict()

    @bp.post("/files/<path:path>")
    def _create_file(path):
        content = flask.request.get_data()
        return controller.create_file(path, content).to_dict()

    @bp.delete("/files/<path:path>")
    def _delete_file(path: str):
        parts = list(os.path.split(path))
        return controller.delete_file(parts).to_dict()

    @bp.patch("/files")
    def _rename_file():
        json = flask.request.json
        if json is None:
            flask.abort(400)
        req = AbstraLibApiEditorFilesRenameRequest.from_dict(json)
        return controller.rename_file(req.path_parts, req.new_path_parts).to_dict()

    @bp.post("/dir/<path:path>")
    def _mkdir(path):
        path_parts = list(os.path.split(path))
        return controller.mkdir(path_parts).to_dict()

    @bp.get("/settings")
    def _get_settings():
        return controller.settings().to_dict()

    return bp
