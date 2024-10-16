import flask

from abstra_internals.controllers.auth import AuthController
from abstra_internals.controllers.main import MainController
from abstra_internals.usage import send_player_usage
from abstra_internals.utils.email import is_valid_email


def get_player_bp(main_controller: MainController):
    bp = flask.Blueprint("auth", __name__)
    controller = AuthController(
        kv_repository=main_controller.kv_repository,
        jwt_repository=main_controller.jwt_repository,
        email_repository=main_controller.email_repository,
    )

    @bp.post("/authenticate")
    def _authenticate():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        if not email or not is_valid_email(email):
            return flask.abort(400)

        ok = controller.authenticate(email)
        if not ok:
            return flask.abort(400)

        send_player_usage(event="_authenticate", payload={"email": email})
        return {"ok": True}

    @bp.post("/verify")
    def _verify():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        code = data.get("token")
        if not email or not code:
            return flask.abort(400)

        status, jwt = controller.verify(email, code)
        if not jwt:
            return flask.abort(status)

        send_player_usage(event="_verify", payload={"email": email})
        return {"jwt": jwt}

    @bp.post("/oidc-verify")
    def _oidc_verify():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        access_token = data.get("access_token")
        if not access_token:
            return flask.abort(400)

        jwt, email = controller.oidc_verify(access_token)
        if not jwt:
            return flask.abort(404)

        send_player_usage(event="_oidc_verify", payload={"email": email})
        return {"jwt": jwt}

    return bp
