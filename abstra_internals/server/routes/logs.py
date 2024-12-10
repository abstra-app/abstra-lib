import flask

from abstra_internals.controllers.main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("logs", __name__)

    @bp.get("/<id>")
    def _get_logs(id: str):
        logs = controller.get_logs(id)
        return [log.to_dto() for log in logs]

    return bp
