from unittest import TestCase
import unittest


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

    def tearDown(self) -> None:
        clear_dir(self.root)
        LocalStageRunRepository().clear()

    @unittest.skip("Removed for now")
    def test_alphabetical_order(self):
        kanban_controller = KanbanController(LocalStageRunRepository, ProjectRepository)

        data = {
            "foo": "bar",
            "baz": "qux",
        }
        stage_run = LocalStageRunRepository.create_initial(stage="1", data=data)

        self.assertEqual(
            kanban_controller.stage_run_content(stage_run),
            [
                StageCardContentItem(key="baz", value="qux"),
                StageCardContentItem(key="foo", value="bar"),
            ],
        )

    @unittest.skip("Removed for now")
    def test_preference_for_listed_keys(self):
        project = ProjectRepository.load()
        project.visualization.items.append(
            VisualizationItem(
                name="foo",
                type="text",
            )
        )
        ProjectRepository.save(project)

        kanban_controller = KanbanController(LocalStageRunRepository, ProjectRepository)

        data = {
            "foo": "bar",
            "baz": "qux",
        }
        stage_run = LocalStageRunRepository.create_initial(stage="1", data=data)

        self.assertEqual(
            kanban_controller.stage_run_content(stage_run),
            [
                StageCardContentItem(key="foo", value="bar", type="text"),
                StageCardContentItem(key="baz", value="qux"),
            ],
        )
