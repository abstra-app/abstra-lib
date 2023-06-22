import flask
from ..api import API
from .utils import send_from_dist
from ..session import StaticSession
from ..runtimes import run_job, run_hook


def get_editor_bp(api: API):
    bp = flask.Blueprint("editor", __name__)

    @bp.route("/api/workspace", methods=["GET"])
    def get_workspace():
        return api.get_workspace().editor_dto

    @bp.route("/api/workspace", methods=["PUT"])
    def update_workspace():
        workspace = api.update_workspace(flask.request.json)
        return workspace.editor_dto

    @bp.route("/api/workspace/root-path", methods=["GET"])
    def get_workspace_root_path():
        return api.root_path

    @bp.route("/api/workspace/open-file", methods=["POST"])
    def open_file():
        file_path = flask.request.json["path"]
        api.open_file(file_path, create_if_not_exists=True)
        return {"success": True}

    @bp.route("/api/workspace/check-file", methods=["GET"])
    def check_file():
        file_path = flask.request.args["path"]
        return {"exists": api.check_file(file_path)}

    @bp.route("/api/forms/", methods=["GET"])
    def get_forms():
        return [f.editor_dto for f in api.get_forms()]

    @bp.route("/api/forms/<path:path>", methods=["GET"])
    def get_form(path: str):
        form = api.get_form(path)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["DELETE"])
    def delete_form(path: str):
        api.delete_form(path)
        return {"success": True}

    @bp.route("/api/dashes/<path:path>", methods=["GET"])
    def get_dash(path: str):
        dash = api.get_dash(path)
        if not dash:
            flask.abort(404)
        return dash.editor_dto

    @bp.route("/api/forms/", methods=["POST"])
    def create_form():
        form = api.create_form()
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["PUT"])
    def update_form(path: str):
        form = api.update_form(path, flask.request.json)
        return form.editor_dto

    @bp.route("/api/dashes/", methods=["GET"])
    def get_dashes():
        return [f.editor_dto for f in api.get_dashes()]

    @bp.route("/api/dashes/", methods=["POST"])
    def create_dash():
        dash = api.create_dash()
        return dash.editor_dto

    @bp.route("/api/dashes/<path:path>", methods=["PUT"])
    def update_dash(path: str):
        dash = api.update_dash(path, flask.request.json)
        return dash.editor_dto

    @bp.route("/api/dashes/<path:path>", methods=["DELETE"])
    def delete_dash(path: str):
        api.delete_dash(path)
        return {"success": True}

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        return send_from_dist(filename, "editor.html")

    @bp.route("/", methods=["GET"])
    def spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.route("/api/hooks/<path:path>", methods=["GET"])
    def get_hook(path: str):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/api/hooks/", methods=["GET"])
    def get_hooks():
        return [f.editor_dto for f in api.get_hooks()]

    @bp.route("/api/hooks/", methods=["POST"])
    def create_hook():
        hook = api.create_hook()
        return hook.editor_dto

    @bp.route("/api/hooks/<path:path>", methods=["PUT"])
    def update_hook(path: str):
        hook = api.update_hook(path, flask.request.json)
        return hook.editor_dto

    @bp.route("/api/hooks/<path:path>", methods=["DELETE"])
    def delete_hook(path: str):
        api.delete_hook(path)
        return {"success": True}

    @bp.route("/api/hooks/<path:path>/test")
    def test_hook(path: str):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)

        code = api.read_text_file(hook.file)
        session = StaticSession()
        session.context["request"] = (
            flask.request.get_data(as_text=True),
            flask.request.args,
            flask.request.headers,
        )

        run_hook(code, session)
        body, status, headers = session.context.get("response", ({}, 200, {}))
        return {
            "body": body,
            "status": status,
            "headers": headers,
            "stdout": "".join(session.stdout),
            "stderr": "".join(session.stderr),
        }

    @bp.route("/api/jobs/<path:identifier>", methods=["GET"])
    def get_job(identifier: str):
        job = api.get_job(identifier)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.route("/api/jobs/", methods=["GET"])
    def get_jobs():
        return [f.editor_dto for f in api.get_jobs()]

    @bp.route("/api/jobs/", methods=["POST"])
    def create_job():
        job = api.create_job()
        return job.editor_dto

    @bp.route("/api/jobs/<path:identifier>", methods=["PUT"])
    def update_job(identifier: str):
        job = api.update_job(identifier, flask.request.json)
        return job.editor_dto

    @bp.route("/api/jobs/<path:identifier>", methods=["DELETE"])
    def delete_job(identifier: str):
        api.delete_job(identifier)
        return {"success": True}

    @bp.route("/api/jobs/<path:identifier>/test", methods=["POST"])
    def test_job(identifier: str):
        job = api.get_job(identifier)
        if not job:
            flask.abort(404)

        code = api.read_text_file(job.file)
        session = StaticSession()
        run_job(code, session)
        return {
            "stdout": "".join(session.stdout),
            "stderr": "".join(session.stderr),
        }

    return bp
