import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.server.routes import access_control as ac_router
from abstra_internals.server.routes import agents as agents_router
from abstra_internals.server.routes import ai as ai_router
from abstra_internals.server.routes import assets as assets_router
from abstra_internals.server.routes import codebase as codebase_router
from abstra_internals.server.routes import env_vars as envvars_router
from abstra_internals.server.routes import executions as executions_router
from abstra_internals.server.routes import forms as forms_router
from abstra_internals.server.routes import hooks as hooks_router
from abstra_internals.server.routes import jobs as jobs_router
from abstra_internals.server.routes import linters as linters_router
from abstra_internals.server.routes import login as login_router
from abstra_internals.server.routes import logs as logs_router
from abstra_internals.server.routes import pysa as pysa_router
from abstra_internals.server.routes import requirements as requirements_router
from abstra_internals.server.routes import resources as resources_router
from abstra_internals.server.routes import roles as roles_router
from abstra_internals.server.routes import scripts as scripts_router
from abstra_internals.server.routes import stdio as stdio_router
from abstra_internals.server.routes import tables as tables_router
from abstra_internals.server.routes import tasks as tasks_router
from abstra_internals.server.routes import web_editor as web_editor_router
from abstra_internals.server.routes import workflows as workflows_router
from abstra_internals.server.routes import workspace as workspace_router
from abstra_internals.server.routes.services.roles import role_client_editor_bp
from abstra_internals.server.utils import send_from_dist
from abstra_internals.usage import editor_usage


def __get_api_bp(controller: MainController):
    bp = flask.Blueprint("editor_api", __name__)

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

    resources_bp = resources_router.get_editor_bp(controller)
    bp.register_blueprint(resources_bp, url_prefix="/resources")

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

    role_agents_bp = role_client_editor_bp(controller)
    bp.register_blueprint(role_agents_bp, url_prefix="/services/roles/client")

    tables_bp = tables_router.get_editor_bp(controller)
    bp.register_blueprint(tables_bp, url_prefix="/tables")

    agents_bp = agents_router.get_editor_bp(controller)
    bp.register_blueprint(agents_bp, url_prefix="/agents")

    web_editor_bp = web_editor_router.get_web_editor_bp(controller)
    bp.register_blueprint(web_editor_bp, url_prefix="/web-editor")

    guard = web_editor_router.get_editor_api_guard(controller)
    bp.before_request(guard)

    return bp


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor", __name__)

    api_bp = __get_api_bp(controller)
    bp.register_blueprint(api_bp, url_prefix="/api")

    editor_auth_bp = web_editor_router.get_web_editor_auth_bp(controller)
    bp.register_blueprint(editor_auth_bp, url_prefix="/auth")

    @bp.get("/")
    @editor_usage
    def _spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.get("/<path:filename>")
    def _spa(filename: str):
        return send_from_dist(filename, "editor.html")

    return bp
