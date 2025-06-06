import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.tables import TablesController


def get_editor_bp(main_controller: MainController) -> flask.Blueprint:
    controller = TablesController(repositories=main_controller.repositories)
    bp = flask.Blueprint("tables", __name__)

    @bp.post("/table")
    def _create_table():
        if flask.request.json is None:
            flask.abort(400)
        name = flask.request.json.get("name")
        id = flask.request.json.get("id")
        if not name or not id:
            flask.abort(400)
        created_table = controller.create_table(id, name)
        return created_table.to_dict()

    @bp.post("/column")
    def _create_column():
        if flask.request.json is None:
            flask.abort(400)
        table_id = flask.request.json.get("tableId")
        name = flask.request.json.get("name")
        type = flask.request.json.get("type")
        if not table_id or not name or not type:
            flask.abort(400)
        created_column = controller.create_column(table_id, name, type)
        return created_column.to_dict()

    @bp.post("/row")
    def _insert_row():
        if flask.request.json is None:
            flask.abort(400)
        table_id = flask.request.json.get("tableId")
        row = flask.request.json.get("row")
        if not table_id or not row:
            flask.abort(400)
        controller.insert_row(table_id, row)

        return {"status": "ok"}

    @bp.patch("/table/<table_id>")
    def _update_table(table_id):
        if flask.request.json is None:
            flask.abort(400)
        name = flask.request.json.get("name")
        if not name:
            flask.abort(400)
        updated_table = controller.update_table(table_id, name)
        return updated_table.to_dict()

    @bp.patch("/column/<column_id>")
    def _update_column(column_id):
        if flask.request.json is None:
            flask.abort(400)
        table_id = flask.request.json.get("tableId")
        changes = flask.request.json.get("changes")
        if not table_id:
            flask.abort(400)
        updated_column = controller.update_column(column_id, table_id, changes)
        return updated_column.to_dict()

    @bp.post("/run_sql")
    def _run_sql():
        if flask.request.json is None:
            flask.abort(400)
        sql = flask.request.json.get("sql")
        params = flask.request.json.get("params", [])
        if not sql:
            flask.abort(400)
        result = controller.run_sql(sql, params)
        return result.json()

    return bp
