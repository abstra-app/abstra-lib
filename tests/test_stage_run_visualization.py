from unittest import TestCase

from .fixtures import init_dir, clear_dir

from abstra_internals.repositories.stage_run import LocalStageRunRepository

from abstra_internals.repositories.project.project import (
    ProjectRepository,
    VisualizationItem,
)

from abstra_internals.server.controller.kanban import (
    StageCardContentItem,
    KanbanController,
)


class TestStageRunVisualization(TestCase):
    def setUp(self):
        self.root = init_dir()
        self.repository = LocalStageRunRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_alphabetical_order(self):
        kanban_controller = KanbanController(self.repository, ProjectRepository)

        data = {
            "foo": "bar",
            "baz": "qux",
        }
        stage_run = self.repository.create_initial(stage="1", data=data)

        self.assertEqual(
            kanban_controller.stage_run_content(stage_run),
            [
                StageCardContentItem(key="baz", value="qux"),
                StageCardContentItem(key="foo", value="bar"),
            ],
        )

    def test_preference_for_listed_keys(self):
        project = ProjectRepository.load()
        project.visualization.items.append(
            VisualizationItem(
                name="foo",
                type="text",
            )
        )
        ProjectRepository.save(project)

        kanban_controller = KanbanController(self.repository, ProjectRepository)

        data = {
            "foo": "bar",
            "baz": "qux",
        }
        stage_run = self.repository.create_initial(stage="1", data=data)

        self.assertEqual(
            kanban_controller.stage_run_content(stage_run),
            [
                StageCardContentItem(key="foo", value="bar", type="text"),
                StageCardContentItem(key="baz", value="qux"),
            ],
        )
