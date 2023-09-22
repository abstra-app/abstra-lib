import flask
from ...execution.execution import RequestData
from ..api import API
from ...usage import usage
from ...settings import Settings
from .utils import send_from_dist
from ...execution.hook_execution import HookExecution
from ...execution.job_execution import JobExecution


def get_editor_bp(api: API):
    bp = flask.Blueprint("editor", __name__)

    @bp.route("/", methods=["GET"])
    @usage
    def _spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.route("/api/assets/<path:path>", methods=["GET"])
    def _asset(path):
        return flask.send_from_directory(directory=Settings.root_path, path=path)

    @bp.route("/api/workspace", methods=["GET"])
    @usage
    def _get_workspace():
        return api.get_workspace().editor_dto

    @bp.route("/api/workspace", methods=["PUT"])
    @usage
    def _update_workspace():
        if not flask.request.json:
            flask.abort(400)
        workspace = api.update_workspace(flask.request.json)
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
        api.open_file(file_path, create_if_not_exists=True)
        return {"success": True}

    @bp.route("/api/workspace/check-file", methods=["GET"])
    @usage
    def _check_file():
        file_path = flask.request.args["path"]
        return {"exists": api.check_file(file_path)}

    @bp.route("/api/workspace/deploy", methods=["POST"])
    @usage
    def _deploy():
        api.deploy()
        return {"success": True}

    @bp.route("/api/forms/", methods=["GET"])
    @usage
    def _get_forms():
        return [f.editor_dto for f in api.get_forms()]

    @bp.route("/api/forms/<path:path>", methods=["GET"])
    @usage
    def _get_form(path: str):
        form = api.get_form(path)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["DELETE"])
    @usage
    def _delete_form(path: str):
        api.delete_form(path)
        return {"success": True}

    @bp.route("/api/forms/", methods=["POST"])
    @usage
    def _create_form():
        form = api.create_form()
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["PUT"])
    @usage
    def _update_form(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = api.update_runtime(path, data)
        return form.editor_dto if form else None

    @bp.route("/api/dashes/<path:path>", methods=["GET"])
    @usage
    def _get_dash(path: str):
        dash = api.get_dash(path)
        if not dash:
            flask.abort(404)
        return dash.editor_dto

    @bp.route("/api/dashes/", methods=["GET"])
    @usage
    def _get_dashes():
        return [f.editor_dto for f in api.get_dashes()]

    @bp.route("/api/dashes/", methods=["POST"])
    @usage
    def _create_dash():
        dash = api.create_dash()
        return dash.editor_dto

    @bp.route("/api/dashes/<path:path>", methods=["PUT"])
    @usage
    def _update_dash(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        dash = api.update_runtime(path, data)
        return dash.editor_dto if dash else None

    @bp.route("/api/dashes/<path:path>", methods=["DELETE"])
    @usage
    def _delete_dash(path: str):
        api.delete_dash(path)
        return {"success": True}

    @bp.route("/api/hooks/<path:path>", methods=["GET"])
    @usage
    def _get_hook(path: str):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/api/hooks/", methods=["GET"])
    @usage
    def _get_hooks():
        return [f.editor_dto for f in api.get_hooks()]

    @bp.route("/api/hooks/", methods=["POST"])
    @usage
    def _create_hook():
        hook = api.create_hook()
        return hook.editor_dto

    @bp.route("/api/hooks/<path:path>", methods=["PUT"])
    @usage
    def _update_hook(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        hook = api.update_runtime(path, data)
        return hook.editor_dto if hook else None

    @bp.route("/api/hooks/<path:path>", methods=["DELETE"])
    @usage
    def _delete_hook(path: str):
        api.delete_hook(path)
        return {"success": True}

    @bp.route(
        "/api/hooks/<path:path>/test", methods=["POST", "GET", "PUT", "DELETE", "PATCH"]
    )
    @usage
    def _test_hook(path: str):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)

        execution = HookExecution(hook)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )
        execution.run(request_data)
        body, status, headers = execution.get_response()

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
        job = api.get_job(identifier)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.route("/api/jobs/", methods=["GET"])
    @usage
    def _get_jobs():
        return [f.editor_dto for f in api.get_jobs()]

    @bp.route("/api/jobs/", methods=["POST"])
    @usage
    def _create_job():
        job = api.create_job()
        return job.editor_dto

    @bp.route("/api/jobs/<path:identifier>", methods=["PUT"])
    @usage
    def _update_runtime(identifier: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = api.update_runtime(identifier, data)
        return job.editor_dto if job else None

    @bp.route("/api/jobs/<path:identifier>", methods=["DELETE"])
    @usage
    def _delete_job(identifier: str):
        api.delete_job(identifier)
        return {"success": True}

    @bp.route("/api/jobs/<path:identifier>/test", methods=["POST"])
    @usage
    def _test_job(identifier: str):
        job = api.get_job(identifier)
        if not job:
            flask.abort(404)

        execution = JobExecution(job)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )
        execution.run(request_data)

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    @bp.route("/api/stage_runs", methods=["GET"])
    @usage
    def _get_stage_runs():
        return api.get_stage_runs()

    @bp.route("/api/workflow-editor/initial-data", methods=["GET"])
    @usage
    def _workflow_initial_data():
        try:
            return api.workflow_initial_data()
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/move", methods=["POST"])
    @usage
    def _workflow_move():
        try:
            payload = flask.request.json
            api.workflow_move(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/add-nodes", methods=["POST"])
    @usage
    def _workflow_add_nodes():
        try:
            payload = flask.request.json
            api.workflow_add_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/duplicate-nodes", methods=["POST"])
    @usage
    def _workflow_duplicate_nodes():
        try:
            payload = flask.request.json
            api.workflow_duplicate_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/delete", methods=["POST"])
    @usage
    def _workflow_delete():
        try:
            payload = flask.request.json
            api.workflow_delete(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/workflow-editor/add-transition", methods=["POST"])
    @usage
    def _workflow_add_transition():
        try:
            payload = flask.request.json
            api.workflow_add_transition(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.route("/api/login", methods=["GET"])
    @usage
    def _get_login():
        return api.get_login()

    @bp.route("/api/login", methods=["POST"])
    @usage
    def _create_login():
        data = flask.request.json
        if not data:
            flask.abort(400)

        return api.create_login(data["token"])

    @bp.route("/api/login", methods=["DELETE"])
    @usage
    def _delete_login():
        return api.delete_login()

    @bp.route("/api/ai/message", methods=["POST"])
    @usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = api.send_ai_message(body["messages"], body["runtime"])

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.route("/<path:filename>", methods=["GET"])
    @usage
    def _spa(filename: str):
        return send_from_dist(filename, "editor.html")

    return bp
