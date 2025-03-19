import flask

from abstra_internals.controllers.main import ExecutionFilter, MainController
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("executions", __name__)

    @bp.get("/")
    @editor_usage
    def _get_executions():
        filter = ExecutionFilter.from_dict(flask.request.args)
        executions = controller.get_executions(filter)
        return executions.to_dict()

    @bp.get("/stages")
    @editor_usage
    def _get_stages():
        stages = controller.get_stages()
        return [stage.as_dict for stage in stages]

    @bp.get("/<execution_id>/tasks")
    @editor_usage
    def _get_execution_tasks(execution_id):
        tasks = controller.get_execution_tasks(execution_id)
        return tasks.dump()

    return bp
