import flask
from ...repositories import env_vars_repository
from ...usage import usage
from ...contracts_generated import AbstraLibApiEditorEnvVarsModel


def get_editor_bp():
    bp = flask.Blueprint("editor_env_vars", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_env_vars():
        return [env_var.to_dict() for env_var in env_vars_repository.list()]

    @bp.post("/")
    @usage
    def _set_env_var():
        if flask.request.json is None:
            flask.abort(400)
        env_var = env_vars_repository.set(
            AbstraLibApiEditorEnvVarsModel.from_dict(flask.request.json)
        )
        return env_var.to_dict()

    @bp.delete("/<key>")
    @usage
    def _unset_env_var(key: str):
        env_var = env_vars_repository.unset(
            AbstraLibApiEditorEnvVarsModel(key=key, value="")
        )
        return env_var.to_dict()

    return bp
