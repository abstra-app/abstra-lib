import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_requirements", __name__)

    @bp.get("/")
    @usage
    def _get_requirements():
        return controller.get_requirements()

    @bp.post("/")
    @usage
    def _create_requirement():
        data = flask.request.json

        if not data:
            flask.abort(400)

        return controller.create_requirement(data["name"], data.get("version"))

    @bp.delete("/<name>")
    @usage
    def _delete_requirement(name: str):
        return controller.delete_requirement(name)

    @bp.get("/recommendations")
    @usage
    def _get_requirements_recommendation():
        return controller.get_requirements_recommendations()

    return bp
