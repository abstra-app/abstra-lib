import flask
from ..api import API
from .utils import send_from_dist
from ..session import StaticSession
from ..runtimes import run_job, run_hook
from ..usage import usage


def get_editor_bp(api: API):
    bp = flask.Blueprint("editor", __name__)

    @bp.route("/api/workspace", methods=["GET"])
    @usage(api.root_path)
    def get_workspace():
        return api.get_workspace().editor_dto

    @bp.route("/api/workspace", methods=["PUT"])
    @usage(api.root_path)
    def update_workspace():
        workspace = api.update_workspace(flask.request.json)
        return workspace.editor_dto

    @bp.route("/api/workspace/root-path", methods=["GET"])
    @usage(api.root_path)
    def get_workspace_root_path():
        return api.root_path

    @bp.route("/api/workspace/open-file", methods=["POST"])
    @usage(api.root_path)
    def open_file():
        file_path = flask.request.json["path"]
        api.open_file(file_path, create_if_not_exists=True)
        return {"success": True}

    @bp.route("/api/workspace/check-file", methods=["GET"])
    @usage(api.root_path)
    def check_file():
        file_path = flask.request.args["path"]
        return {"exists": api.check_file(file_path)}

    @bp.route("/api/workspace/deploy", methods=["POST"])
    @usage(api.root_path)
    def deploy():
        api.deploy()
        return {"success": True}

    @bp.route("/api/forms/", methods=["GET"])
    @usage(api.root_path)
    def get_forms():
        return [f.editor_dto for f in api.get_forms()]

    @bp.route("/api/forms/<path:path>", methods=["GET"])
    @usage(api.root_path)
    def get_form(path: str):
        form = api.get_form(path)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["DELETE"])
    @usage(api.root_path)
    def delete_form(path: str):
        api.delete_form(path)
        return {"success": True}

    @bp.route("/api/dashes/<path:path>", methods=["GET"])
    @usage(api.root_path)
    def get_dash(path: str):
        dash = api.get_dash(path)
        if not dash:
            flask.abort(404)
        return dash.editor_dto

    @bp.route("/api/forms/", methods=["POST"])
    @usage(api.root_path)
    def create_form():
        form = api.create_form()
        return form.editor_dto

    @bp.route("/api/forms/<path:path>", methods=["PUT"])
    @usage(api.root_path)
    def update_form(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = api.update_form(path, data)
        return form.editor_dto if form else None

    @bp.route("/api/dashes/", methods=["GET"])
    @usage(api.root_path)
    def get_dashes():
        return [f.editor_dto for f in api.get_dashes()]

    @bp.route("/api/dashes/", methods=["POST"])
    @usage(api.root_path)
    def create_dash():
        dash = api.create_dash()
        return dash.editor_dto

    @bp.route("/api/dashes/<path:path>", methods=["PUT"])
    @usage(api.root_path)
    def update_dash(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        dash = api.update_dash(path, data)
        return dash.editor_dto if dash else None

    @bp.route("/api/dashes/<path:path>", methods=["DELETE"])
    @usage(api.root_path)
    def delete_dash(path: str):
        api.delete_dash(path)
        return {"success": True}

    @bp.route("/<path:filename>", methods=["GET"])
    @usage(api.root_path)
    def spa(filename: str):
        return send_from_dist(filename, "editor.html")

    @bp.route("/", methods=["GET"])
    @usage(api.root_path)
    def spa_index():
        return send_from_dist("editor.html", "editor.html")

    @bp.route("/api/hooks/<path:path>", methods=["GET"])
    @usage(api.root_path)
    def get_hook(path: str):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/api/hooks/", methods=["GET"])
    @usage(api.root_path)
    def get_hooks():
        return [f.editor_dto for f in api.get_hooks()]

    @bp.route("/api/hooks/", methods=["POST"])
    @usage(api.root_path)
    def create_hook():
        hook = api.create_hook()
        return hook.editor_dto

    @bp.route("/api/hooks/<path:path>", methods=["PUT"])
    @usage(api.root_path)
    def update_hook(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        hook = api.update_hook(path, data)
        return hook.editor_dto if hook else None

    @bp.route("/api/hooks/<path:path>", methods=["DELETE"])
    @usage(api.root_path)
    def delete_hook(path: str):
        api.delete_hook(path)
        return {"success": True}

    @bp.route("/api/hooks/<path:path>/test")
    @usage(api.root_path)
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
    @usage(api.root_path)
    def get_job(identifier: str):
        job = api.get_job(identifier)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.route("/api/jobs/", methods=["GET"])
    @usage(api.root_path)
    def get_jobs():
        return [f.editor_dto for f in api.get_jobs()]

    @bp.route("/api/jobs/", methods=["POST"])
    @usage(api.root_path)
    def create_job():
        job = api.create_job()
        return job.editor_dto

    @bp.route("/api/jobs/<path:identifier>", methods=["PUT"])
    @usage(api.root_path)
    def update_job(identifier: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = api.update_job(identifier, data)
        return job.editor_dto if job else None

    @bp.route("/api/jobs/<path:identifier>", methods=["DELETE"])
    @usage(api.root_path)
    def delete_job(identifier: str):
        api.delete_job(identifier)
        return {"success": True}

    @bp.route("/api/jobs/<path:identifier>/test", methods=["POST"])
    @usage(api.root_path)
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

    @bp.route("/api/tables/<path:name>", methods=["GET"])
    @usage(api.root_path)
    def _get_table(name: str):
        return api.db.get_table(name).editor_dto

    @bp.route("/api/tables", methods=["GET"])
    @usage(api.root_path)
    def _get_tables():
        return [t.editor_dto for t in api.db.get_tables()]

    @bp.route("/api/tables", methods=["POST"])
    @usage(api.root_path)
    def _create_table():
        return api.db.create_table().editor_dto

    @bp.route("/api/tables/<path:name>", methods=["PUT"])
    @usage(api.root_path)
    def _update_table(name: str):
        changes = flask.request.json
        updated_table = api.db.update_table(name, changes)
        return updated_table.editor_dto if updated_table else None

    @bp.route("/api/tables/<path:name>", methods=["DELETE"])
    @usage(api.root_path)
    def _delete_table(name: str):
        api.db.delete_table(name)
        return {"success": True}

    @bp.route("/api/tables/<path:name>/duplicate", methods=["POST"])
    @usage(api.root_path)
    def _duplicate_table(name: str):
        new_table = api.db.duplicate_table(name)
        return new_table.editor_dto

    @bp.route("/api/workspace/db-types", methods=["GET"])
    @usage(api.root_path)
    def _db_types():
        return api.db.db_types()

    @bp.route("/api/tables/<path:table_name>/rows", methods=["POST"])
    @usage(api.root_path)
    def _row_action(table_name: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        if data.get("action") == "select":
            return api.db.select(
                table_name, where=data.get("where"), params=data.get("params")
            )

        if data.get("action") == "update":
            return api.db.update(
                table_name,
                where=data.get("where"),
                set=data.get("set"),
                params=data.get("params"),
            )

        if data.get("action") == "insert":
            return api.db.insert(table_name, values=data.get("values"))

        if data.get("action") == "delete":
            return api.db.delete(
                table_name, where=data.get("where"), params=data.get("params")
            )

    @bp.route("/api/tables/<path:table_name>/columns", methods=["GET"])
    @usage(api.root_path)
    def _get_columns(table_name: str):
        return api.db.get_columns(table_name)

    @bp.route(
        "/api/tables/<path:table_name>/columns/<path:column_name>", methods=["GET"]
    )
    @usage(api.root_path)
    def _get_column(table_name: str, column_name: str):
        column = api.db.get_column(table_name, column_name)
        return column.editor_dto if column else None

    @bp.route(
        "/api/tables/<path:table_name>/columns/<path:column_name>", methods=["PUT"]
    )
    @usage(api.root_path)
    def _update_column(table_name: str, column_name: str):
        new_column = flask.request.json
        updated_column = api.db.update_column(table_name, column_name, new_column)
        return updated_column.editor_dto

    @bp.route(
        "/api/tables/<path:table_name>/columns/<path:column_name>", methods=["DELETE"]
    )
    @usage(api.root_path)
    def _delete_column(table_name: str, column_name: str):
        api.db.delete_column(table_name, column_name)
        return {"success": True}

    @bp.route("/api/tables/<path:table_name>/columns", methods=["POST"])
    @usage(api.root_path)
    def _create_column(table_name: str):
        return api.db.create_column(table_name).editor_dto

    @bp.route("/api/login", methods=["GET"])
    @usage(api.root_path)
    def _get_login():
        return api.get_login()

    @bp.route("/api/login", methods=["POST"])
    @usage(api.root_path)
    def _create_login():
        data = flask.request.json
        if not data:
            flask.abort(400)

        return api.create_login(data["token"])

    @bp.route("/api/login", methods=["DELETE"])
    @usage(api.root_path)
    def _delete_login():
        return api.delete_login()

    @bp.route("/api/ai/message", methods=["POST"])
    @usage(api.root_path)
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = api.send_ai_message(body["messages"], body["runtime"])

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    return bp
