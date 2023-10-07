import flask
from ...execution.execution import RequestData
from ..controller import MainController
from ...usage import usage
from ...settings import Settings
from .utils import send_from_dist
from ...execution.hook_execution import HookExecution
from ...execution.job_execution import JobExecution
from ...execution.script_execution import ScriptExecution
from ...repositories.json.classes import AbstraJSONRepository


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor", __name__)

    @bp.route("/", methods=["GET"])
    @usage
    def _spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.route("/api/assets/<path:path>", methods=["GET"])
    def _asset(path):
        return send_from_dist(path, dist_folder=Settings.root_path)

    @bp.route("/api/workspace", methods=["GET"])
    @usage
    def _get_workspace():
        return controller.get_workspace().editor_dto

    @bp.route("/api/workspace", methods=["PUT"])
    @usage
    def _update_workspace():
        if not flask.request.json:
            flask.abort(400)
        workspace = controller.update_workspace(flask.request.json)
        return workspace.editor_dto

    @bp.route("/api/workspace/root-path", methods=["GET"])
    @usage
    def _get_workspace_root_path():
        return str(Settings.root_path.absolute())

    @bp.route("/api/workspace/open-file", methods=["POST"])
    @usage
    def _open_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        controller.open_file(file_path, create_if_not_exists=True)
        return {"success": True}

    @bp.route("/api/workspace/check-file", methods=["GET"])
    @usage
    def _check_file():
        file_path = flask.request.args["path"]
        return {"exists": controller.check_file(file_path)}

    @bp.route("/api/workspace/deploy", methods=["POST"])
    @usage
    def _deploy():
        controller.deploy()
        return {"success": True}

    @bp.route("/api/forms/", methods=["GET"])
    @usage
    def _get_forms():
        return [f.editor_dto for f in controller.get_forms()]

    @bp.route("/api/forms/<path:path>", methods=["GET"])
    @usage
    def _get_form(path: str):
        form = controller.get_form(path)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["DELETE"])
    @usage
    def _delete_form(path: str):
        controller.delete_form(path)
        return {"success": True}

    @bp.route("/api/forms/", methods=["POST"])
    @usage
    def _create_form():
        form = controller.create_form()
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["PUT"])
    @usage
    def _update_form(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = controller.update_runtime(path, data)
        return form.editor_dto if form else None

    @bp.route("/api/dashes/<path:path>", methods=["GET"])
    @usage
    def _get_dash(path: str):
        dash = controller.get_dash(path)
        if not dash:
            flask.abort(404)
        return dash.editor_dto

    @bp.route("/api/dashes/", methods=["GET"])
    @usage
    def _get_dashes():
        return [f.editor_dto for f in controller.get_dashes()]

    @bp.route("/api/dashes/", methods=["POST"])
    @usage
    def _create_dash():
        dash = controller.create_dash()
        return dash.editor_dto

    @bp.route("/api/dashes/<path:path>", methods=["PUT"])
    @usage
    def _update_dash(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        dash = controller.update_runtime(path, data)
        return dash.editor_dto if dash else None

    @bp.route("/api/dashes/<path:path>", methods=["DELETE"])
    @usage
    def _delete_dash(path: str):
        controller.delete_dash(path)
        return {"success": True}

    @bp.route("/api/hooks/<path:path>", methods=["GET"])
    @usage
    def _get_hook(path: str):
        hook = controller.get_hook(path)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/api/hooks/", methods=["GET"])
    @usage
    def _get_hooks():
        return [f.editor_dto for f in controller.get_hooks()]

    @bp.route("/api/hooks/", methods=["POST"])
    @usage
    def _create_hook():
        hook = controller.create_hook()
        return hook.editor_dto

    @bp.route("/api/hooks/<path:path>", methods=["PUT"])
    @usage
    def _update_hook(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        hook = controller.update_runtime(path, data)
        return hook.editor_dto if hook else None

    @bp.route("/api/hooks/<path:path>", methods=["DELETE"])
    @usage
    def _delete_hook(path: str):
        controller.delete_hook(path)
        return {"success": True}

    @bp.route(
        "/api/hooks/<path:path>/test", methods=["POST", "GET", "PUT", "DELETE", "PATCH"]
    )
    @usage
    def _test_hook(path: str):
        hook = controller.get_hook(path)
        if not hook:
            flask.abort(404)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        abstra_json = AbstraJSONRepository.load()
        is_initial = abstra_json.is_initial(hook.path)
        execution = HookExecution(hook, is_initial, request_data)

        execution.run_sync()

        body, status, headers = execution.get_response()

        controller.run_waiting_scripts(execution.stage_run)

        return {
            "body": body,
            "status": status,
            "headers": headers,
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    @bp.route("/api/jobs/<path:identifier>", methods=["GET"])
    @usage
    def _get_job(identifier: str):
        job = controller.get_job(identifier)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.route("/api/jobs/", methods=["GET"])
    @usage
    def _get_jobs():
        return [f.editor_dto for f in controller.get_jobs()]

    @bp.route("/api/jobs/", methods=["POST"])
    @usage
    def _create_job():
        job = controller.create_job()
        return job.editor_dto

    @bp.route("/api/jobs/<path:identifier>", methods=["PUT"])
    @usage
    def _update_runtime(identifier: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = controller.update_runtime(identifier, data)
        return job.editor_dto if job else None

    @bp.route("/api/jobs/<path:identifier>", methods=["DELETE"])
    @usage
    def _delete_job(identifier: str):
        controller.delete_job(identifier)
        return {"success": True}

    @bp.route("/api/jobs/<path:identifier>/test", methods=["POST"])
    @usage
    def _test_job(identifier: str):
        job = controller.get_job(identifier)
        if not job:
            flask.abort(404)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        abstra_json = AbstraJSONRepository.load()
        is_initial = abstra_json.is_initial(job.path)
        execution = JobExecution(job, is_initial, request_data)

        execution.run_sync()

        controller.run_waiting_scripts(execution.stage_run)

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    @bp.route("/api/scripts/<path:identifier>", methods=["GET"])
    @usage
    def _get_script(identifier: str):
        script = controller.get_script(identifier)
        if not script:
            flask.abort(404)
        return script.editor_dto

    @bp.route("/api/scripts/", methods=["GET"])
    @usage
    def _get_scripts():
        return [f.editor_dto for f in controller.get_scripts()]

    @bp.route("/api/scripts/", methods=["POST"])
    @usage
    def _create_script():
        script = controller.create_script()
        return script.editor_dto

    @bp.route("/api/scripts/<path:identifier>", methods=["PUT"])
    @usage
    def _update_script(identifier: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        script = controller.update_runtime(identifier, data)
        return script.editor_dto if script else None

    @bp.route("/api/scripts/<path:identifier>", methods=["DELETE"])
    @usage
    def _delete_script(identifier: str):
        controller.delete_script(identifier)
        return {"success": True}

    @bp.route("/api/scripts/<path:path>/test", methods=["POST"])
    @usage
    def _test_script(path: str):
        script = controller.get_script(path)

        if not script:
            flask.abort(404)

        return controller.run_initial_script(script)

    @bp.route("/api/stage_runs", methods=["GET"])
    @usage
    def _get_stage_runs():
        return controller.get_stage_runs()

    @bp.route("/api/workflow-editor/initial-data", methods=["GET"])
    @usage
    def _workflow_initial_data():
        try:
            return controller.workflow_initial_data()
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/move", methods=["POST"])
    @usage
    def _workflow_move():
        try:
            payload = flask.request.json
            controller.workflow_move(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/add-nodes", methods=["POST"])
    @usage
    def _workflow_add_nodes():
        try:
            payload = flask.request.json
            controller.workflow_add_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/duplicate-nodes", methods=["POST"])
    @usage
    def _workflow_duplicate_nodes():
        try:
            payload = flask.request.json
            controller.workflow_duplicate_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/delete", methods=["POST"])
    @usage
    def _workflow_delete():
        try:
            payload = flask.request.json
            controller.workflow_delete(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/add-transition", methods=["POST"])
    @usage
    def _workflow_add_transition():
        try:
            payload = flask.request.json
            controller.workflow_add_transition(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/login", methods=["GET"])
    @usage
    def _get_login():
        return controller.get_login()

    @bp.route("/api/login", methods=["POST"])
    @usage
    def _create_login():
        data = flask.request.json
        if not data:
            flask.abort(400)

        return controller.create_login(data["token"])

    @bp.route("/api/login", methods=["DELETE"])
    @usage
    def _delete_login():
        return controller.delete_login()

    @bp.route("/api/project-info", methods=["GET"])
    def _get_project_info():
        return controller.get_project_info()

    @bp.route("/api/ai/message", methods=["POST"])
    @usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = controller.send_ai_message(body["messages"], body["runtime"])

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.route("/<path:filename>", methods=["GET"])
    @usage
    def _spa(filename: str):
        return send_from_dist(filename, "editor.html")

    return bp
