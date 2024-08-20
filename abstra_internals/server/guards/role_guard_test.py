from typing import Optional
from unittest import TestCase

from flask import Blueprint, Flask

from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.repositories.project.project import (
    AccessSettings,
    FormStage,
    NotificationTrigger,
    ProjectRepository,
    WorkflowTransition,
)
from abstra_internals.repositories.users import TestUsersRepository
from abstra_internals.server.guards.role_guard import (
    Guard,
    IdArgSelector,
    PathArgSelector,
    StageIdSelector,
)
from tests.fixtures import clear_dir, init_dir


class TestRequirementsApi(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

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

        repo = TestUsersRepository(
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

        guard = Guard(repo, enabled=True, auth_decoder=test_auth_decoder)

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

    def test_sidebar(self):
        ##Autorization: Bearer <test_email>
        def test_auth(email: Optional[str]):
            if email is None:
                return None
            return f"Bearer {email}"

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

        repo = TestUsersRepository(
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

        public_pependent_form = FormStage(
            id="public_pependent_form",
            path="public_pependent_form",
            title="public_pependent_form",
            file="public_pependent_form.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
            access_control=AccessSettings(is_public=True, required_roles=[]),
        )

        public_form.workflow_transitions.append(
            WorkflowTransition(
                id="1",
                target_type="target_type",
                target_id="public_pependent_form",
                type="form:finished",
            )
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
        project.forms.append(public_pependent_form)
        project.forms.append(protected_form)
        project.forms.append(private_form)

        project.kanban.access_control = AccessSettings(
            is_public=False, required_roles=[WORKFLOW_VIEWER]
        )

        ProjectRepository.save(project)

        guard = Guard(repo, enabled=True, auth_decoder=test_auth_decoder)

        ## Logged in users
        test_matrix = [
            {
                "email": TESTER_EMAIL,
                "accessible_stages_ids": [
                    "home",
                    "kanban",
                    "public_form_id",
                    "protected_form_id",
                ],
            },
            {
                "email": ADMIN_EMAIL,
                "accessible_stages_ids": [
                    "home",
                    "kanban",
                    "public_form_id",
                    "protected_form_id",
                    "private_form_id",
                ],
            },
            {
                "email": USER_EMAIL,
                "accessible_stages_ids": [
                    "home",
                    "public_form_id",
                    "protected_form_id",
                ],
            },
            {
                "email": NOT_A_USER_EMAIL,
                "accessible_stages_ids": [],
            },
            {
                "email": None,  ##Logged off user
                "accessible_stages_ids": [],
            },
        ]

        for case in test_matrix:
            auth = test_auth(case["email"])
            workspace = guard.filtered_workspace(auth)
            response = [stage.id for stage in workspace.sidebar.items]
            expected = case["accessible_stages_ids"]

            self.assertEqual(response, expected, f"Failed for {case['email']}")
