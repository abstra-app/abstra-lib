import flask

from abstra_internals.server.controller import (
    access_control as access_control_controller,
)
from abstra_internals.server.controller import ai as ai_controller
from abstra_internals.server.controller import assets as assets_controller
from abstra_internals.server.controller import debugger as debugger_controller
from abstra_internals.server.controller import env_vars as envvars_controller
from abstra_internals.server.controller import forms as forms_controller
from abstra_internals.server.controller import hooks as hooks_controller
from abstra_internals.server.controller import jobs as jobs_controller
from abstra_internals.server.controller import kanban as kanban_controller
from abstra_internals.server.controller import linters as linters_controller
from abstra_internals.server.controller import login as login_controller
from abstra_internals.server.controller import pysa as pysa_controller
from abstra_internals.server.controller import requirements as requirements_controller
from abstra_internals.server.controller import roles as roles_controller
from abstra_internals.server.controller import scripts as scripts_controller
from abstra_internals.server.controller import stage_runs as stage_runs_controller
from abstra_internals.server.controller import stdio as stdio_controller
from abstra_internals.server.controller import workflows as workflows_controller
from abstra_internals.server.controller import workspace as workspace_controller
from abstra_internals.server.controller.main import MainController
from abstra_internals.server.utils import send_from_dist
from abstra_internals.usage import usage


def __get_api_bp(controller: MainController):
    bp = flask.Blueprint("editor_api", __name__)

    kanban_bp = kanban_controller.get_editor_bp(controller)
    bp.register_blueprint(kanban_bp, url_prefix="/kanban")

    stage_run_bp = stage_runs_controller.get_editor_bp(controller)
    bp.register_blueprint(stage_run_bp, url_prefix="/stage_runs")

    workspace_bp = workspace_controller.get_editor_bp(controller)
    bp.register_blueprint(workspace_bp, url_prefix="/workspace")

    forms_bp = forms_controller.get_editor_bp(controller)
    bp.register_blueprint(forms_bp, url_prefix="/forms")

    hooks_bp = hooks_controller.get_editor_bp(controller)
    bp.register_blueprint(hooks_bp, url_prefix="/hooks")

    jobs_bp = jobs_controller.get_editor_bp(controller)
    bp.register_blueprint(jobs_bp, url_prefix="/jobs")

    scripts_bp = scripts_controller.get_editor_bp(controller)
    bp.register_blueprint(scripts_bp, url_prefix="/scripts")

    workflows_bp = workflows_controller.get_editor_bp(controller)
    bp.register_blueprint(workflows_bp, url_prefix="/workflows")

    requirements_bp = requirements_controller.get_editor_bp(controller)
    bp.register_blueprint(requirements_bp, url_prefix="/requirements")

    debugger_bp = debugger_controller.get_editor_bp(controller)
    bp.register_blueprint(debugger_bp, url_prefix="/debugger")

    login_bp = login_controller.get_editor_bp(controller)
    bp.register_blueprint(login_bp, url_prefix="/login")

    linters_bp = linters_controller.get_editor_bp()
    bp.register_blueprint(linters_bp, url_prefix="/linters")

    ai_bp = ai_controller.get_editor_bp(controller)
    bp.register_blueprint(ai_bp, url_prefix="/ai")

    assets_bp = assets_controller.get_editor_bp(controller)
    bp.register_blueprint(assets_bp, url_prefix="/assets")

    envvars_bp = envvars_controller.get_editor_bp(controller)
    bp.register_blueprint(envvars_bp, url_prefix="/env-vars")

    pysa_bp = pysa_controller.get_editor_bp()
    bp.register_blueprint(pysa_bp, url_prefix="/pysa")

    roles_bp = roles_controller.get_editor_bp(controller)
    bp.register_blueprint(roles_bp, url_prefix="/roles")

    access_control_bp = access_control_controller.get_editor_bp(controller)
    bp.register_blueprint(access_control_bp, url_prefix="/access-control")

    stdio_bp = stdio_controller.get_editor_bp(controller)
    bp.register_blueprint(stdio_bp, url_prefix="/stdio")

    return bp


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor", __name__)

    api_bp = __get_api_bp(controller)
    bp.register_blueprint(api_bp, url_prefix="/api")

    @bp.get("/")
    @usage
    def _spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.get("/<path:filename>")
    def _spa(filename: str):
        return send_from_dist(filename, "editor.html")

    return bp
