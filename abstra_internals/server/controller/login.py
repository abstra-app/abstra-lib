import flask

from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_login", __name__)

    @bp.get("/")
    @editor_usage
    def _get_login():
        return controller.get_login()

    @bp.post("/")
    @editor_usage
    def _create_login():
        data = flask.request.json
        if not data:
            flask.abort(400)

        return controller.create_login(data["token"])

    @bp.delete("/")
    @editor_usage
    def _delete_login():
        return controller.delete_login()

    @bp.get("/info")
    def _get_project_info():
        return controller.get_project_info()

    return bp
