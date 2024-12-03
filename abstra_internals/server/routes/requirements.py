import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.services.requirements import Requirement, RequirementsRepository
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_requirements", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_requirements():
        return RequirementsRepository.load().to_dict()

    @bp.post("/")
    @editor_usage
    def _create_requirement():
        data = flask.request.json

        if not data:
            flask.abort(400)

        name = data["name"]
        version = data.get("version")

        requirements = RequirementsRepository.load()
        requirements.add(name, version)
        RequirementsRepository.save(requirements)
        return requirements.to_dict()

    @bp.post("/install")
    def _install_requirements():
        requirements = RequirementsRepository.load()
        streamer = requirements.install()
        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.post("/<name>/uninstall")
    def _uninstall_requirement(name: str):
        req = Requirement(name=name)
        streamer = req.uninstall()
        if streamer is None:
            flask.abort(403)
        reqs = RequirementsRepository.load()
        reqs.delete(name)
        RequirementsRepository.save(reqs)
        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.delete("/<name>")
    @editor_usage
    def _delete_requirement(name: str):
        requirements = RequirementsRepository.load()
        requirements.delete(name)
        RequirementsRepository.save(requirements)
        return requirements.to_dict()

    # 1s pooling in this route
    @bp.get("/recommendations")
    def _get_requirements_recommendation():
        return [r.to_dict() for r in RequirementsRepository.get_recommendation()]

    return bp
