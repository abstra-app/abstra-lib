from abstra_internals.controllers.kanban import KanbanController
from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from tests.fixtures import BaseTest


class TestKanbanController(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.kanban_controller = KanbanController(
            stage_run_repository=self.repositories.stage_run,
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

    def test_ancestors_logs(self):
        parent = self.repositories.stage_run.create_initial("parent", {"a": 1, "b": 2})
        child = self.repositories.stage_run.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        logs = self.kanban_controller.get_ancestor_logs(child.id)
        self.assertEqual(len(logs), 2)
        self.assertEqual(logs[0][0].id, parent.id)
        self.assertEqual(logs[0][1], [])
        self.assertEqual(logs[1][0].id, child.id)
        self.assertEqual(logs[1][1], [])
