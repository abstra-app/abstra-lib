import flask

from ...usage import usage
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("transitions", __name__)

    @bp.put("/<string:id>")
    @usage
    def _update_transition(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        transition = controller.update_transition(id, data)
        return transition if transition else None

    return bp
