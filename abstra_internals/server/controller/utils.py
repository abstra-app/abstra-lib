import flask

from ...usage import usage

from ...utils.format import normalize_path


def get_editor_bp():
    bp = flask.Blueprint("editor_utils", __name__)

    @bp.post("/normalize_path")
    @usage
    def _normalize_path():
        data = flask.request.json
        if not data:
            flask.abort(400)

        path = data["path"]
        if not path:
            flask.abort(400)

        return normalize_path(path)

    return bp
