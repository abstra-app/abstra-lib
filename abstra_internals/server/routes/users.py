import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.usage import player_usage


def get_player_bp(main_controller: MainController):
    bp = flask.Blueprint("playerUsers", __name__)

    @bp.post("/sign-up")
    @player_usage
    def _signup_user():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        if auth is None:
            flask.abort(401)

        claims = UserClaims.from_jwt(auth.split(" ")[1])
        if claims is None or claims.email is None:
            flask.abort(401)

        success = main_controller.users_repository.insert_user(claims.email)

        return {"success": success}

    return bp
