import flask

from abstra_internals.server.controller.main import MainController
from abstra_internals.utils.email import is_valid_email


def get_player_bp(main_controller: MainController):
    bp = flask.Blueprint("auth", __name__)

    @bp.post("/authenticate")
    def _authenticate():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        if not email or not is_valid_email(email):
            return flask.abort(400)

        ok = main_controller.authn_repository.authenticate(email)
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

        status, jwt = main_controller.authn_repository.verify(email, token)
        if not jwt:
            return flask.abort(status)

        return {"jwt": jwt}

    @bp.post("/oidc-verify")
    def _oidc_access():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        access_token = data.get("access_token")
        if not access_token:
            return flask.abort(400)

        jwt = main_controller.authn_repository.oidc_access(access_token)
        if not jwt:
            return flask.abort(404)

        return {"jwt": jwt}

    return bp
