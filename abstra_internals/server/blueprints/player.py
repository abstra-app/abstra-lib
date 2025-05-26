from pathlib import Path

import flask
import flask_sock

from abstra_internals.constants import get_public_dir
from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.execution.execution_client_hook import (
    HookClient,
    Response,
)
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution_context import (
    FormContext,
    HookContext,
    JobContext,
    extract_flask_request,
)
from abstra_internals.environment import (
    BUILD_ID,
    EDITOR_MODE,
    IS_PRODUCTION,
    OIDC_AUTHORITY,
    OIDC_CLIENT_ID,
    SHOW_WATERMARK,
    SIDECAR_SHARED_TOKEN,
)
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.cache.control import Cache
from abstra_internals.server.guards.role_guard import (
    Guard,
    PathArgSelector,
    QueryArgSelector,
)
from abstra_internals.server.routes import access_control as ac_router
from abstra_internals.server.routes import auth as auth_router
from abstra_internals.server.routes import workflows as workflows_router
from abstra_internals.server.routes.services.roles import (
    role_agent_player_bp,
    role_client_player_bp,
)
from abstra_internals.server.utils import send_from_dist
from abstra_internals.settings import Settings
from abstra_internals.usage import player_usage
from abstra_internals.utils import check_is_url
from abstra_internals.utils.file import get_tmp_upload_dir, path2module, upload_file


def get_player_bp(controller: MainController):
    guard = Guard(
        controller.users_repository,
        project_repository=controller.repositories.project,
        enabled=IS_PRODUCTION,
    )
    cache = Cache(enabled=IS_PRODUCTION)

    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

    auth_bp = auth_router.get_player_bp(controller)
    bp.register_blueprint(auth_bp, url_prefix="/_auth")

    workflow_bp = workflows_router.get_player_bp(controller)
    bp.register_blueprint(workflow_bp, url_prefix="/_workflows")

    access_control_bp = ac_router.get_player_bp(controller)
    bp.register_blueprint(access_control_bp, url_prefix="/_access-control")

    @bp.route("/_healthcheck")
    def _healthcheck():
        return "ok"

    @bp.get("/_workspace")
    def _get_workspace():
        auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        return guard.filtered_workspace(auth).as_dict

    @bp.get("/_pages/<string:path>")
    @guard.by(PathArgSelector("path"))
    @player_usage
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

    role_agents_bp = role_agent_player_bp(controller)
    bp.register_blueprint(role_agents_bp, url_prefix="/_tasks/agent")

    role_clients_bp = role_client_player_bp(controller)
    bp.register_blueprint(role_clients_bp, url_prefix="/_tasks/client")

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
                "editor_mode": EDITOR_MODE,
            }
        )

    @sock.route("/_socket")
    @guard.socket_by(QueryArgSelector("id"))
    def _websocket(ws: flask_sock.Server):
        context = FormContext(request=extract_flask_request(flask.request))

        try:
            id = flask.request.args.get("id")
            if id is None:
                return

            form = controller.get_form(id)
            if not form:
                return

            client = FormClient(
                context=context,
                production_mode=True,
                ws=ws,
            )

            ExecutionController(
                repositories=controller.repositories,
                stage=form,
                client=client,
                context=context,
            ).run()
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            ws.close(message="Done")

    @bp.put("/_files")
    @player_usage
    def _upload_file():
        files = flask.request.files
        if len(files) == 0:
            flask.abort(400)

        return [upload_file(file) for file in files.values()]

    @bp.get("/_files/<path:path>")
    def _get_file(path):
        return flask.send_from_directory(get_tmp_upload_dir(), path)

    @bp.get("/_public/<path:path>")
    def _get_public_file(path):
        return flask.send_from_directory(get_public_dir(), path)

    @bp.get("/_assets/favicon.ico")
    @cache.assets()
    def _favicon():
        favicon_path = controller.get_workspace().favicon_url
        if not favicon_path:
            return _logo()

        if check_is_url(favicon_path):
            return flask.redirect(favicon_path)

        return send_from_dist(favicon_path, dist_folder=Settings.root_path)

    @bp.get("/_assets/logo")
    @cache.assets()
    def _logo():
        logo_path = controller.get_workspace().logo_url
        if not logo_path:
            return flask.abort(404)

        if check_is_url(logo_path):
            return flask.redirect(logo_path)

        return send_from_dist(logo_path, dist_folder=Settings.root_path)

    @bp.get("/_assets/background")
    @cache.assets()
    def _background():
        background_path = controller.get_workspace().theme

        if not background_path:
            return flask.abort(404)

        if check_is_url(background_path):
            return flask.redirect(background_path)

        return send_from_dist(background_path, dist_folder=Settings.root_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = controller.get_hook_by_path(path)

        if not hook:
            flask.abort(404)

        if not hook.file:
            flask.abort(500)

        context = HookContext(
            request=extract_flask_request(flask.request),
            response=Response(
                status=200,
                body="",
                headers={},
            ),
        )

        client = HookClient(context)

        ExecutionController(
            repositories=controller.repositories,
            stage=hook,
            client=client,
            context=context,
        ).run()

        if not context.response or not client.context.response:
            flask.abort(500)

        return flask.Response(
            status=context.response.status,
            response=client.context.response.body,
            headers=context.response.headers,
        )

    @bp.route("/_hooks", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def root_hook_runner():
        return hook_runner("")

    @bp.get("/_jobs")
    def list_jobs():
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        # The scheduler needs all the jobs, including disabled ones, to schedule them.
        # The scheduler will always send the request to the lib to run the jobs, and the lib will check if the job is enabled or not.
        jobs = controller.get_jobs(include_disabled_jobs=True)

        # used by sidecar - DO NOT CHANGE CONTRACT
        return [{"id": job.id, "schedule": job.schedule} for job in jobs]

    @bp.post("/_jobs/<path:id>")
    def job_runner(id):
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        controller.repositories.producer.enqueue(job.id, context=JobContext())

        return {"status": "running"}

    @bp.get("/")
    @cache.statics()
    def index():
        res = send_from_dist("player.html", "player.html")
        return res

    @bp.get("/<path:filename>")
    @cache.statics()
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    setup_hook = Path("__setup__.py")
    if setup_hook.exists():
        module = __import__(path2module(setup_hook))
        if hasattr(module, "setup"):
            module.setup(bp)
        else:
            print(f"Could not find setup function in {setup_hook}")

    return bp
