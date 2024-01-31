import flask

from ...repositories.project.project import (
    VisualizationSettings,
    ProjectRepository,
    VisualizationItem,
)


class VisualizationsController:
    def get_visualizations(self):
        project = ProjectRepository.load()
        return [
            dict(
                name=v.name,
                type=v.type,
            )
            for v in project.visualization.items
        ]

    def put_visualizations(self, visualizations: list):
        project = ProjectRepository.load()
        project.visualization = VisualizationSettings(
            items=[
                VisualizationItem(
                    name=v["name"],
                    type=v["type"],
                )
                for v in visualizations
            ]
        )
        ProjectRepository.save(project)
        return project.visualization.items


def get_editor_bp():
    controller = VisualizationsController()
    bp = flask.Blueprint("visualizations_runs", __name__)

    @bp.get("/")
    def _get_visualizations():
        return controller.get_visualizations()

    @bp.put("/")
    def _put_visualizations():
        visualizations = flask.request.json
        if visualizations is None:
            flask.abort(400)
        return controller.put_visualizations(visualizations)

    return bp


def get_player_bp():
    controller = VisualizationsController()
    bp = flask.Blueprint("player_visualizations_runs", __name__)

    @bp.get("/")
    def _get_visualizations():
        return controller.get_visualizations()

    return bp
