import flask


from ...utils import is_valid_email
from ...repositories import authn_repository


def get_player_bp():
    bp = flask.Blueprint("auth", __name__)

    @bp.post("/authenticate")
    def _authenticate():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        if not email or not is_valid_email(email):
            return flask.abort(400)

        ok = authn_repository.authenticate(email)
        if not ok:
            return flask.abort(400)

        return {"ok": True}

    @bp.post("/verify")
    def _verify():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        token = data.get("token")
        if not email or not token:
            return flask.abort(400)

        jwt = authn_repository.verify(email, token)
        if not jwt:
            return flask.abort(404)

        return {"jwt": jwt}

    return bp
