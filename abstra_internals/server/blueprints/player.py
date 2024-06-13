import flask
import flask_sock

from abstra_internals.controllers.execution import (
    STAGE_RUN_ID_PARAM_KEY,
    ExecutionController,
)
from abstra_internals.controllers.execution_client import FormClient, HookClient
from abstra_internals.controllers.workflow import workflow_engine
from abstra_internals.entities.execution import RequestContext
from abstra_internals.environment import (
    BUILD_ID,
    OIDC_AUTHORITY,
    OIDC_CLIENT_ID,
    SHOW_WATERMARK,
    SIDECAR_SHARED_TOKEN,
)
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories import users_repository
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller import (
    access_control as access_control_controller,
)
from abstra_internals.server.controller import auth as auth_controller
from abstra_internals.server.controller import kanban as kanban_controller
from abstra_internals.server.controller import stage_runs as stage_runs_controller
from abstra_internals.server.controller import users as user_controller
from abstra_internals.server.controller import (
    visualizations as visualizations_controller,
)
from abstra_internals.server.controller.main import MainController
from abstra_internals.server.guards.role_guard import (
    Guard,
    PathArgSelector,
    QueryArgSelector,
)
from abstra_internals.server.utils import send_from_dist
from abstra_internals.settings import Settings
from abstra_internals.utils import check_is_url
from abstra_internals.utils.dict import filter_non_string_values


def get_player_bp(controller: MainController):
    guard = Guard(users_repository)

    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

    auth_bp = auth_controller.get_player_bp()
    bp.register_blueprint(auth_bp, url_prefix="/_auth")

    user_bp = user_controller.get_player_bp()
    bp.register_blueprint(user_bp, url_prefix="/_user")

    kanban_bp = kanban_controller.get_player_bp()
    bp.register_blueprint(kanban_bp, url_prefix="/_kanban")

    stage_run_bp = stage_runs_controller.get_player_bp()
    bp.register_blueprint(stage_run_bp, url_prefix="/_stage-runs")

    access_control_bp = access_control_controller.get_player_bp()
    bp.register_blueprint(access_control_bp, url_prefix="/_access-control")

    visuvisualizations_bp = visualizations_controller.get_player_bp()
    bp.register_blueprint(visuvisualizations_bp, url_prefix="/_visualizations")

    @bp.get("/_workspace")
    def _get_workspace():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        return guard.filtered_workspace(auth).as_dict

    @bp.get("/_pages/<string:path>")
    @guard.by(PathArgSelector("path"))
    def _get_page(path):
        form = controller.get_form_by_path(path)
        if not form:
            flask.abort(404)

        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        return {
            form.type_name: {
                **form.browser_runner_dto,
                "workspace": guard.filtered_workspace(auth).as_dict,
            }
        }

    @bp.get("/_version")
    def _get_version():
        return BUILD_ID

    @bp.get("/_settings")
    def _get_settings():
        return flask.jsonify(
            {
                "show_watermark": SHOW_WATERMARK,
                "oidc_authority": OIDC_AUTHORITY(),
                "oidc_client_id": OIDC_CLIENT_ID(),
            }
        )

    @sock.route("/_socket")
    @guard.socket_by(QueryArgSelector("id"))
    def _websocket(ws: flask_sock.Server):
        request_context = RequestContext(
            query_params=flask.request.args,
            body=flask.request.get_data(as_text=True),
            headers=filter_non_string_values(flask.request.headers),
            method=flask.request.method,
        )

        try:
            form_client = FormClient(
                ws=ws, request_context=request_context, production_mode=True
            )
            id = flask.request.args.get("id")
            if id is None:
                return
            form = controller.get_form(id)
            if not form:
                return

            execution_controller = ExecutionController(
                stage=form,
                client=form_client,
                request=request_context,
                target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
                stage_run_repository=controller.stage_run_repository,
                execution_repository=controller.execution_repository,
                project_repository=ProjectRepository,
            )

            execution_dto = execution_controller.run()

            if not execution_dto:
                return

            workflow_engine.handle_pthread_execution_end()
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            ws.close(message="Done")

    @bp.put("/_files")
    def _upload_file():
        files = flask.request.files
        filename = flask.request.form.get("filename")
        if filename is None:
            flask.abort(400)

        if len(files) == 0:
            flask.abort(400)

        paths = []
        for file in files.values():
            paths.append(controller.save_file(file, filename))
        return paths

    @bp.get("/_files/<path:path>")
    def _get_file(path):
        return flask.send_file(controller.get_file(path))

    @bp.get("/_assets/logo")
    def _logo():
        logo_path = controller.get_workspace().logo_url
        if not logo_path:
            return flask.abort(404)

        if check_is_url(logo_path):
            return flask.redirect(logo_path)

        return send_from_dist(logo_path, dist_folder=Settings.root_path)

    @bp.get("/favicon.ico")
    def _favicon():
        return _logo()

    @bp.get("/_assets/background")
    def _background():
        background_path = controller.get_workspace().theme

        if not background_path:
            return flask.abort(404)

        return send_from_dist(background_path, dist_folder=Settings.root_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = controller.get_hook_by_path(path)

        if not hook:
            flask.abort(404)

        if not hook.file:
            flask.abort(500)

        request_context = RequestContext(
            query_params=flask.request.args,
            body=flask.request.get_data(as_text=True),
            headers=filter_non_string_values(flask.request.headers),
            method=flask.request.method,
        )

        client = HookClient(request_context)

        execution_controller = ExecutionController(
            stage=hook,
            request=request_context,
            target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
            stage_run_repository=controller.stage_run_repository,
            execution_repository=controller.execution_repository,
            project_repository=ProjectRepository,
            client=client,
        )

        execution_dto = execution_controller.run()

        if not execution_dto:
            return flask.Response(
                status=423,
                response="This thread is already running.",
            )

        workflow_engine.handle_pthread_execution_end()

        return flask.Response(
            status=client.response["status"],
            response=client.response["body"],
            headers=client.response["headers"],
        )

    @bp.get("/_jobs")
    def list_jobs():
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        jobs = controller.get_jobs()

        # used by sidecar - DO NOT CHANGE CONTRACT
        return [{"id": job.id, "schedule": job.schedule} for job in jobs]

    @bp.post("/_jobs/<path:id>")
    def job_runner(id):
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        if not job.file:
            flask.abort(500)

        workflow_engine.run_job(job)
        return {"status": "running"}

    @bp.get("/")
    def index():
        res = send_from_dist("player.html", "player.html")
        return res

    @bp.get("/<path:filename>")
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    return bp
