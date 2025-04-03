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

    return bp
