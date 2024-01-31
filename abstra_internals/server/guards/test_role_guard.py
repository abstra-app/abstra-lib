from unittest import TestCase
from flask import Flask, Blueprint
from ...repositories.members import LocalMembersRepository
from ...server.guards.role_guard import RoleGuardFactory
from ...jwt_auth import USER_AUTH_HEADER_KEY, UserClaims


class TestRequirementsApi(TestCase):
    def test_app(self):
        ##Autorization: Bearer <test_email>
        def test_header(email: str):
            return {USER_AUTH_HEADER_KEY: f"Bearer {email}"}

        def test_auth_decoder(email: str):
            email = email.split(" ")[1]
            return UserClaims(claims={"email": email})

        repo = LocalMembersRepository({"tester@abstra.app": ["workflow_viewer"]})
        guard = RoleGuardFactory(repo, test_auth_decoder)

        app = Flask(__name__)
        bp = Blueprint("dummy", __name__)

        @bp.route("/")
        @guard.requires("workflow_viewer")
        def main():
            return {"message": "OK"}

        app.register_blueprint(bp, url_prefix="/")

        client = app.test_client()
        response = client.get("/", headers=test_header("tester@abstra.app"))

        self.assertEqual(response.status, "200 OK")

        client = app.test_client()
        response = client.get("/", headers=test_header("not-a-tester@abstra.app"))

        self.assertEqual(response.status, "403 FORBIDDEN")
