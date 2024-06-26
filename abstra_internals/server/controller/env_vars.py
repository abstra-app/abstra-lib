import flask

from abstra_internals.contracts_generated import AbstraLibApiEditorEnvVarsModel
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_env_vars", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_env_vars():
        return [
            env_var.to_dict() for env_var in main_controller.env_vars_repository.list()
        ]

    @bp.post("/")
    @usage
    def _set_env_var():
        if flask.request.json is None:
            flask.abort(400)
        env_var = main_controller.env_vars_repository.set(
            AbstraLibApiEditorEnvVarsModel.from_dict(flask.request.json)
        )
        return env_var.to_dict()

    @bp.delete("/<key>")
    @usage
    def _unset_env_var(key: str):
        env_var = main_controller.env_vars_repository.unset(
            AbstraLibApiEditorEnvVarsModel(key=key, value="")
        )
        return env_var.to_dict()

    return bp
