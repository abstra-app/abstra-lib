from unittest import TestCase

from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.server.controller.kanban import KanbanController
from tests.fixtures import clear_dir, init_dir


class TestKanbanController(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.repository = LocalStageRunRepository()
        self.controller = KanbanController(
            stage_run_repository=self.repository,
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

    def tearDown(self) -> None:
        clear_dir(self.root)
        del self.controller

    def test_ancestors_logs(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        logs = self.controller.get_ancestor_logs(child.id)
        self.assertEqual(len(logs), 2)
        self.assertEqual(logs[0][0].id, parent.id)
        self.assertEqual(logs[0][1], [])
        self.assertEqual(logs[1][0].id, child.id)
        self.assertEqual(logs[1][1], [])
