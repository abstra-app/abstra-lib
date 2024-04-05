from typing import List

import flask

from ...contracts_generated import CommonUserRoles
from ...jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from ...repositories import users_repository
from ...repositories.project.project import ProjectRepository
from ...repositories.users import UsersRepository
from ...usage import usage


class UserController:
    def __init__(
        self,
        users_repository: UsersRepository,
    ) -> None:
        self.users_repository = users_repository

    def roles(self, claims: UserClaims):
        return self.users_repository.get_user_roles(claims.email)

    def sign_up(self, claims: UserClaims) -> bool:
        policy = self.get_sign_up_policy()
        if not policy.allow(claims.email):
            return False

        if self.users_repository.get_user(claims.email) is not None:
            return True

        return self.users_repository.insert_user(claims.email, [])

    def list_users(self):
        return self.users_repository.list_users()

    def insert_user(self, email: str, roles: CommonUserRoles):
        self.users_repository.insert_user(email, roles)

    def delete_user(self, email: str):
        self.users_repository.delete_user(email)

    def update_user(self, email: str, roles: CommonUserRoles):
        self.users_repository.update_user(email, roles)

    def update_sign_up_policy(self, email_patterns: List[str]):
        project = ProjectRepository.load()
        project.signup_policy.update({"email_patterns": email_patterns})
        ProjectRepository.save(project)

    def get_sign_up_policy(self):
        project = ProjectRepository.load()
        return project.signup_policy


def get_editor_bp():
    controller = UserController(users_repository)
    bp = flask.Blueprint("users", __name__)

    @bp.get("/")
    @usage
    def _list_users():
        return controller.list_users()

    @bp.post("/")
    @usage
    def _insert_user():
        data = flask.request.json
        if data is None or "email" not in data:
            flask.abort(400)

        email = data["email"]
        roles = data.get("roles", [])
        controller.insert_user(email, roles)
        return {"success": True}

    @bp.patch("/<email>")
    @usage
    def _update_user(email):
        data = flask.request.json
        if data is None or "roles" not in data:
            flask.abort(400)
        roles = data.get("roles", [])
        controller.update_user(email, roles)
        return {"success": True}

    @bp.delete("/<email>")
    @usage
    def _delete_user(email):
        controller.delete_user(email)
        return {"success": True}

    @bp.put("/signup-policy")
    @usage
    def _update_sign_up_policy():
        data = flask.request.json
        if data is None or "email_patterns" not in data:
            flask.abort(400)

        email_patterns = data.get("email_patterns", [])
        controller.update_sign_up_policy(email_patterns)
        return {"success": True}

    @bp.get("/signup-policy")
    @usage
    def _get_sign_up_policy():
        return controller.get_sign_up_policy().as_dict

    return bp


def get_player_bp():
    controller = UserController(users_repository)
    bp = flask.Blueprint("playerUsers", __name__)

    @bp.get("/my-roles")
    def _get_user_roles():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        if auth is None:
            return []

        claims = UserClaims.from_jwt(auth.split(" ")[1])
        if claims is None or claims.email is None:
            return []

        return controller.roles(claims)

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
