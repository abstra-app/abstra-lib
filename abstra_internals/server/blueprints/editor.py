import flask

from abstra_internals.cloud_api import save_editor_auth_token_to_file
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import PROJECT_ID
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.routes import access_control as ac_router
from abstra_internals.server.routes import ai as ai_router
from abstra_internals.server.routes import assets as assets_router
from abstra_internals.server.routes import codebase as codebase_router
from abstra_internals.server.routes import env_vars as envvars_router
from abstra_internals.server.routes import executions as executions_router
from abstra_internals.server.routes import forms as forms_router
from abstra_internals.server.routes import git as git_router
from abstra_internals.server.routes import hooks as hooks_router
from abstra_internals.server.routes import jobs as jobs_router
from abstra_internals.server.routes import linters as linters_router
from abstra_internals.server.routes import login as login_router
from abstra_internals.server.routes import logs as logs_router
from abstra_internals.server.routes import mcp as mcp_router
from abstra_internals.server.routes import modules as modules_router
from abstra_internals.server.routes import pysa as pysa_router
from abstra_internals.server.routes import requirements as requirements_router
from abstra_internals.server.routes import roles as roles_router
from abstra_internals.server.routes import scripts as scripts_router
from abstra_internals.server.routes import stdio as stdio_router
from abstra_internals.server.routes import tables as tables_router
from abstra_internals.server.routes import tasks as tasks_router
from abstra_internals.server.routes import web_editor as web_editor_router
from abstra_internals.server.routes import workflows as workflows_router
from abstra_internals.server.routes import workspace as workspace_router
from abstra_internals.server.utils import send_from_dist
from abstra_internals.services.jwt import decode_jwt
from abstra_internals.usage import editor_usage


def _get_api_bp(controller: MainController):
    bp = flask.Blueprint("editor_api", __name__)

    mcp_bp = mcp_router.get_editor_bp(controller)
    bp.register_blueprint(mcp_bp, url_prefix="/mcp")

    workspace_bp = workspace_router.get_editor_bp(controller)
    bp.register_blueprint(workspace_bp, url_prefix="/workspace")

    forms_bp = forms_router.get_editor_bp(controller)
    bp.register_blueprint(forms_bp, url_prefix="/forms")

    hooks_bp = hooks_router.get_editor_bp(controller)
    bp.register_blueprint(hooks_bp, url_prefix="/hooks")

    files_bp = codebase_router.get_editor_bp(controller.repositories)
    bp.register_blueprint(files_bp, url_prefix="/codebase")

    jobs_bp = jobs_router.get_editor_bp(controller)
    bp.register_blueprint(jobs_bp, url_prefix="/jobs")

    scripts_bp = scripts_router.get_editor_bp(controller)
    bp.register_blueprint(scripts_bp, url_prefix="/scripts")

    executions_bp = executions_router.get_editor_bp(controller)
    bp.register_blueprint(executions_bp, url_prefix="/executions")

    logs_bp = logs_router.get_editor_bp(controller)
    bp.register_blueprint(logs_bp, url_prefix="/logs")

    workflows_bp = workflows_router.get_editor_bp(controller)
    bp.register_blueprint(workflows_bp, url_prefix="/workflows")

    requirements_bp = requirements_router.get_editor_bp(controller)
    bp.register_blueprint(requirements_bp, url_prefix="/requirements")

    login_bp = login_router.get_editor_bp(controller)
    bp.register_blueprint(login_bp, url_prefix="/login")

    linters_bp = linters_router.get_editor_bp(controller)
    bp.register_blueprint(linters_bp, url_prefix="/linters")

    ai_bp = ai_router.get_editor_bp(controller)
    bp.register_blueprint(ai_bp, url_prefix="/ai")

    assets_bp = assets_router.get_editor_bp(controller)
    bp.register_blueprint(assets_bp, url_prefix="/assets")

    envvars_bp = envvars_router.get_editor_bp(controller)
    bp.register_blueprint(envvars_bp, url_prefix="/env-vars")

    pysa_bp = pysa_router.get_editor_bp()
    bp.register_blueprint(pysa_bp, url_prefix="/pysa")

    roles_bp = roles_router.get_editor_bp(controller)
    bp.register_blueprint(roles_bp, url_prefix="/roles")

    access_control_bp = ac_router.get_editor_bp(controller)
    bp.register_blueprint(access_control_bp, url_prefix="/access-control")

    stdio_bp = stdio_router.get_editor_bp(controller)
    bp.register_blueprint(stdio_bp, url_prefix="/stdio")

    tasks_bp = tasks_router.get_editor_bp(controller)
    bp.register_blueprint(tasks_bp, url_prefix="/tasks")

    tables_bp = tables_router.get_editor_bp(controller)
    bp.register_blueprint(tables_bp, url_prefix="/tables")

    web_editor_bp = web_editor_router.get_web_editor_bp(controller)
    bp.register_blueprint(web_editor_bp, url_prefix="/web-editor")

    git_bp = git_router.get_editor_bp(controller)
    bp.register_blueprint(git_bp, url_prefix="/git")

    modules_bp = modules_router.get_editor_bp(controller)
    bp.register_blueprint(modules_bp, url_prefix="/modules")

    return bp


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor", __name__)

    api_bp = _get_api_bp(controller)
    bp.register_blueprint(api_bp, url_prefix="/api")

    @bp.get("/")
    @editor_usage
    def _spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.get("/<path:filename>")
    def _spa(filename: str):
        return send_from_dist(filename, "editor.html")

    return bp


def get_editor_auth_bp():
    bp = flask.Blueprint("editor_auth", __name__)

    @bp.get("/set-cookie")
    def _set_cookie():
        token = flask.request.args.get("token")

        if not token:
            AbstraLogger.capture_message(
                "Editor auth token not provided in request",
            )
            return flask.make_response({"ok": False, "error": "No token provided"}, 401)

        if not decode_jwt(token, aud=f"web-editor-{PROJECT_ID}"):
            AbstraLogger.capture_message(
                "Editor auth token is invalid",
            )
            return flask.make_response({"ok": False, "error": "Invalid token"}, 401)

        response = flask.make_response({"ok": True})

        response.headers["Location"] = "/_editor/"
        response.status_code = 302

        save_editor_auth_token_to_file(token)

        response.set_cookie(
            "editor_auth",
            token,
            max_age=60 * 60 * 24 * 7,  # Expires in 7 day (in seconds)
            httponly=True,  # Makes it inaccessible to JavaScript
            secure=True,  # Ensures it's sent over HTTPS
            samesite="Lax",  # Protects against CSRF
        )
        return response

    return bp
