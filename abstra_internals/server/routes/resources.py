import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.services.resources import ResourcesRepository


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_resources", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _get_resources():
        mems, cpu = ResourcesRepository.get_all_usage()
        return dict(mems=mems, cpu=cpu)

    return bp
