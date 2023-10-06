import flask

from ..controller import MainController
from ...utils import endcode_fake_jwt, is_valid_email
from ...utils.environment import IS_PREVIEW, AUTHN_URL


def get_fake_auth_proviver_bp(controller: MainController):
    bp = flask.Blueprint("fake-provider", __name__)
    emails = {}

    @bp.route("/authenticate", methods=["POST"])
    def _authenticate():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        if not email or not is_valid_email(email):
            return flask.abort(400)

        emails[email] = True
        return {"ok": True}

    @bp.route("/verify", methods=["POST"])
    def _verify():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        token = data.get("token")
        if not email or not token:
            return flask.abort(400)

        if token == "000000":
            # for testing purposes
            return flask.abort(404)

        verified = emails.pop(email, False)
        if not verified:
            return flask.abort(404)

        jwt = endcode_fake_jwt(email)
        return {"jwt": jwt}

    return bp


def get_auth_bp(controller: MainController):
    bp = flask.Blueprint("auth", __name__)

    if not IS_PREVIEW and AUTHN_URL:
        provider = "abstra"
        authority = AUTHN_URL
    else:
        provider = "local"
        authority = f"/_auth"
        auth_provider_bp = get_fake_auth_proviver_bp(controller)
        bp.register_blueprint(auth_provider_bp)

    @bp.route("/config", methods=["GET"])
    def _get_config():
        return {"authority": authority, "provider": provider}

    return bp
