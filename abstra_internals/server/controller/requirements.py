import flask

from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_requirements", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_requirements():
        return controller.requirements_repository.load().to_dict()

    @bp.post("/")
    @usage
    def _create_requirement():
        data = flask.request.json

        if not data:
            flask.abort(400)

        name = data["name"]
        version = data.get("version")

        requirements = controller.requirements_repository.load()
        requirements.add(name, version)
        controller.requirements_repository.save(requirements)
        return requirements.to_dict()

    @bp.delete("/<name>")
    @usage
    def _delete_requirement(name: str):
        requirements = controller.requirements_repository.load()
        requirements.delete(name)
        controller.requirements_repository.save(requirements)
        return requirements.to_dict()

    # 1s pooling in this route
    @bp.get("/recommendations")
    def _get_requirements_recommendation():
        return [
            r.to_dict() for r in controller.requirements_repository.get_recommendation()
        ]

    return bp
