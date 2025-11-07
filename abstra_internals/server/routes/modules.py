import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.interface.cli.components import install
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_modules", __name__)

    @bp.get("/")
    @editor_usage
    def _get_modules():
        installed_modules = controller.get_modules()
        return [{"name": m, "label": m} for m in installed_modules]

    @bp.post("/download")
    @editor_usage
    def _download_package():
        try:
            request_json = flask.request.json
            if request_json is None:
                flask.abort(400, description="Invalid JSON")

            github_url = request_json.get("github_url")
            if not github_url:
                flask.abort(400, description="github_url is required")

            install(github_url=github_url)
            return {"success": True}
        except Exception as e:
            flask.abort(500, description=str(e))

    return bp
