import flask
from ...repositories import requirements_repository
from ...usage import usage


def get_editor_bp():
    bp = flask.Blueprint("editor_requirements", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_requirements():
        return requirements_repository.load().to_dict()

    @bp.post("/")
    @usage
    def _create_requirement():
        data = flask.request.json

        if not data:
            flask.abort(400)

        name = data["name"]
        version = data.get("version")

        requirements = requirements_repository.load()
        requirements.add(name, version)
        requirements_repository.save(requirements)
        return requirements.to_dict()

    @bp.delete("/<name>")
    @usage
    def _delete_requirement(name: str):
        requirements = requirements_repository.load()
        requirements.delete(name)
        requirements_repository.save(requirements)
        return requirements.to_dict()

    # 1s pooling in this route
    @bp.get("/recommendations")
    def _get_requirements_recommendation():
        return [r.to_dict() for r in requirements_repository.get_recommendation()]

    return bp
