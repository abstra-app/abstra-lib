from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
import flask

from ...repositories.members import MembersRepository, members_repository_factory


class UserController:
    def __init__(
        self,
        members_repository: MembersRepository,
    ) -> None:
        self.members_repository = members_repository

    def roles(self, claims: UserClaims):
        return self.members_repository.get_member_roles(claims.email)


def get_player_bp():
    members_repository = members_repository_factory()

    controller = UserController(members_repository)
    bp = flask.Blueprint("users", __name__)

    @bp.get("/my-roles")
    def _get_user_roles():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        if auth is None:
            return []

        claims = UserClaims.from_jwt(auth.split(" ")[1])
        if claims is None or claims.email is None:
            return []

        return controller.roles(claims)

    return bp
