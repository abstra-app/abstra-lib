from unittest import TestCase

from flask import Blueprint, Flask

from tests.fixtures import clear_dir, init_dir

from ...jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from ...repositories.project.project import (
    AccessSettings,
    FormStage,
    NotificationTrigger,
    ProjectRepository,
)
from ...repositories.users import LocalUsersRepository
from .role_guard import (
    Guard,
    IdArgSelector,
    PathArgSelector,
    StageIdSelector,
)


class TestRequirementsApi(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_app(self):
        ##Autorization: Bearer <test_email>
        def test_header(email: str):
            return {USER_AUTH_HEADER_KEY: f"Bearer {email}"}

        def test_auth_decoder(email: str):
            email = email.split(" ")[1]
            return UserClaims(claims={"email": email})

        repo = LocalUsersRepository({"tester@abstra.app": ["workflow_viewer"]})
        guard = Guard(repo, test_auth_decoder)

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

    def test_app_protected_by(self):
        ##Autorization: Bearer <test_email>
        def test_header(email: str):
            return {USER_AUTH_HEADER_KEY: f"Bearer {email}"}

        def test_auth_decoder(email: str):
            email = email.split(" ")[1]
            return UserClaims(claims={"email": email})

        JOB_EXECUTOR = "job_executor"
        WORKFLOW_VIEWER = "workflow_viewer"
        ADMIN = "admin"

        TESTER_EMAIL = "tester@abstra.app"
        ADMIN_EMAIL = "admin@abstra.app"
        USER_EMAIL = "user@abstra.app"

        NOT_A_USER_EMAIL = "external@evil.corp"

        repo = LocalUsersRepository(
            {
                TESTER_EMAIL: [WORKFLOW_VIEWER],
                ADMIN_EMAIL: [ADMIN, JOB_EXECUTOR, WORKFLOW_VIEWER],
                USER_EMAIL: [],
            }
        )

        project = ProjectRepository.load()

        public_form = FormStage(
            id="public_form_id",
            path="public_form",
            title="public_form",
            file="public_form.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
            access_control=AccessSettings(is_public=True, required_roles=[]),
        )

        public_form = FormStage(
            id="public_form_id",
            path="public_form",
            title="public_form",
            file="public_form.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
            access_control=AccessSettings(is_public=True, required_roles=[]),
        )

        protected_form = FormStage(
            id="protected_form_id",
            path="protected_form",
            title="protected_form",
            file="protected_form.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
            access_control=AccessSettings(is_public=False, required_roles=[]),
        )

        private_form = FormStage(
            id="private_form_id",
            path="private_form",
            title="private_form",
            file="private_form.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
            access_control=AccessSettings(is_public=False, required_roles=[ADMIN]),
        )

        project.forms.append(public_form)
        project.forms.append(protected_form)
        project.forms.append(private_form)

        project.kanban.access_control = AccessSettings(
            is_public=False, required_roles=[WORKFLOW_VIEWER]
        )

        ProjectRepository.save(project)

        guard = Guard(repo, test_auth_decoder)

        app = Flask(__name__)
        bp = Blueprint("dummy", __name__)

        @bp.route("/kanban")
        @guard.by(StageIdSelector("kanban"))
        def kanban():
            return {"message": "OK"}

        @bp.route("/protected_form_id")
        @guard.by(StageIdSelector("protected_form_id"))
        def protected_form_route():
            return {"message": "OK"}

        @bp.route("/_pages/<string:path>")
        @guard.by(PathArgSelector("path"))
        def path_stage(path: str):
            return {"message": "OK", "path": path}

        @bp.route("/stage/<path:id>/start")
        @guard.by(IdArgSelector("id"))
        def id_stage(id: str):
            return {"message": "OK", "id": id}

        app.register_blueprint(bp, url_prefix="/")

        ## Logged in users
        test_matrix = [
            {
                "email": TESTER_EMAIL,
                "test_routes": {
                    "/kanban": "200 OK",
                    "/protected_form_id": "200 OK",
                    "/_pages/public_form": "200 OK",
                    "/_pages/protected_form": "200 OK",
                    "/_pages/private_form": "403 FORBIDDEN",
                    "/stage/public_form_id/start": "200 OK",
                    "/stage/protected_form_id/start": "200 OK",
                    "/stage/private_form_id/start": "403 FORBIDDEN",
                },
            },
            {
                "email": ADMIN_EMAIL,
                "test_routes": {
                    "/kanban": "200 OK",
                    "/protected_form_id": "200 OK",
                    "/_pages/public_form": "200 OK",
                    "/_pages/protected_form": "200 OK",
                    "/_pages/private_form": "200 OK",
                    "/stage/public_form_id/start": "200 OK",
                    "/stage/protected_form_id/start": "200 OK",
                    "/stage/private_form_id/start": "200 OK",
                },
            },
            {
                "email": USER_EMAIL,
                "test_routes": {
                    "/kanban": "403 FORBIDDEN",
                    "/protected_form_id": "200 OK",
                    "/_pages/public_form": "200 OK",
                    "/_pages/protected_form": "200 OK",
                    "/_pages/private_form": "403 FORBIDDEN",
                    "/stage/public_form_id/start": "200 OK",
                    "/stage/protected_form_id/start": "200 OK",
                    "/stage/private_form_id/start": "403 FORBIDDEN",
                },
            },
            {
                "email": NOT_A_USER_EMAIL,
                "test_routes": {
                    "/kanban": "403 FORBIDDEN",
                    "/protected_form_id": "403 FORBIDDEN",
                    "/_pages/public_form": "200 OK",
                    "/_pages/protected_form": "403 FORBIDDEN",
                    "/_pages/private_form": "403 FORBIDDEN",
                    "/stage/public_form_id/start": "200 OK",
                    "/stage/protected_form_id/start": "403 FORBIDDEN",
                    "/stage/private_form_id/start": "403 FORBIDDEN",
                },
            },
        ]

        client = app.test_client()
        for case in test_matrix:
            for route, status in case["test_routes"].items():
                response = client.get(route, headers=test_header(case["email"]))
                self.assertEqual(
                    response.status, status, f"Failed for {route} with {case['email']}"
                )

        ## Logged off user
        test_matrix = {
            "/kanban": "401 UNAUTHORIZED",
            "/protected_form_id": "401 UNAUTHORIZED",
            "/_pages/public_form": "200 OK",
            "/_pages/protected_form": "401 UNAUTHORIZED",
            "/_pages/private_form": "401 UNAUTHORIZED",
            "/stage/public_form_id/start": "200 OK",
            "/stage/protected_form_id/start": "401 UNAUTHORIZED",
            "/stage/private_form_id/start": "401 UNAUTHORIZED",
        }

        for route, status in test_matrix.items():
            response = client.get(route, headers={})
            self.assertEqual(response.status, status, f"Failed for {route}")
