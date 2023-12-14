from json import dump
from pathlib import Path
from unittest import TestCase, skip

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller.visualizations import VisualizationsController
from abstra_internals.repositories.project.project import (
    ProjectRepository,
    VisualizationSettings,
    VisualizationItem,
)


class TestVisualization(TestCase):
    def setUp(self):
        self.controller = VisualizationsController()
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_loads_correctly_from_empty_json(self):
        project = ProjectRepository.load()
        self.assertEqual(project.visualization, VisualizationSettings.create())

    def test_loads_correctly_from_json_content(self):
        visualizations = [{"name": "foo", "type": "text"}]
        VisualizationsController().put_visualizations(visualizations)

        project = ProjectRepository.load()
        self.assertEqual(
            project.visualization.items[0], VisualizationItem(name="foo", type="text")
        )

    def test_generates_correct_dict(self):
        ProjectRepository.load()

        self.controller.put_visualizations([{"name": "foo", "type": "text"}])

        received = self.controller.get_visualizations()
        self.assertEqual(
            received,
            [{"name": "foo", "type": "text"}],
        )
