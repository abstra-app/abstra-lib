import os

import flask
import flask_sock

from abstra_internals.contracts_generated import AbstraLibApiEditorFilesRenameRequest
from abstra_internals.controllers.codebase import CodebaseController
from abstra_internals.controllers.codebase_events import CodebaseEventController
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.factory import Repositories


def get_editor_bp(repos: Repositories):
    bp = flask.Blueprint("editor_files", __name__)
    controller = CodebaseController(repos)
    sock = flask_sock.Sock(bp)

    def _wait_inactivity(ws: flask_sock.Server):
        keep_alive_interval = 30
        while True:
            try:
                msg = ws.receive(timeout=keep_alive_interval + 10)
                if msg is None:
                    break
            except Exception:
                break

    @sock.route("/events")
    def _websocket(ws: flask_sock.Server):
        try:
            ws.thread.name = "CodebaseEventsWebSocket"
            CodebaseEventController.register(ws)
            _wait_inactivity(ws)
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            CodebaseEventController.unregister(ws)

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
