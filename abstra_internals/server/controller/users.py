import flask

from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.server.controller.main import MainController


class UserController:
    def __init__(
        self,
        users_repository: UsersRepository,
    ) -> None:
        self.users_repository = users_repository

    def sign_up(self, claims: UserClaims) -> bool:
        return self.users_repository.insert_user(claims.email)


def get_player_bp(main_controller: MainController):
    controller = UserController(main_controller.users_repository)
    bp = flask.Blueprint("playerUsers", __name__)

    @bp.post("/sign-up")
    def _signup_user():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        if auth is None:
            flask.abort(401)

        claims = UserClaims.from_jwt(auth.split(" ")[1])
        if claims is None or claims.email is None:
            flask.abort(401)

        return {"success": controller.sign_up(claims)}

    return bp
